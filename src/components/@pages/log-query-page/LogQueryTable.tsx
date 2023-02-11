// import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outlines';
import { XMarkIcon } from '@heroicons/react/20/solid';
import {
  AdjustmentsHorizontalIcon,
  ArrowDownTrayIcon,
} from '@heroicons/react/24/solid';
import axios from 'axios';
import { TFunction } from 'next-i18next';
import React, { useEffect } from 'react';
import { withTranslation } from 'react-i18next';
import useSWR from 'swr';

import { baseApiUrl } from '@/lib/api';

import LogQueryDetailsDialog from '@/components/@pages/log-query-page/LogQueryDetailsDialog';
import LogQueryTabs from '@/components/@pages/log-query-page/LogQueryTabs';
import Badge from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export type LogT = {
  _id: string;
  date: string;
  projectId: string;
  deviceId: string;
  type: 'INFO' | 'WARNING' | 'DEBUG' | 'ERROR' | 'CRITICAL';
  info: string;
  description: string;
  __v: number;
};

const logStatusTypes: {
  [key in LogT['type']]: { label: string; color: string };
} = {
  INFO: { label: 'INFO', color: 'gray' },
  WARNING: { label: 'WARNING', color: 'yellow' },
  DEBUG: { label: 'DEBUG', color: 'blue' },
  ERROR: { label: 'ERROR', color: 'red' },
  CRITICAL: { label: 'CRITICAL', color: 'red' },
};

const LogQueryTable = ({
  logsTypes,
  t,
}: {
  logsTypes: string[];
  t: TFunction;
}) => {
  const [startDate, setStartDate] = React.useState('');
  const [endDate, setEndDate] = React.useState('');
  const [selectedTab, setSelectedTab] = React.useState<string>(logsTypes[0]);

  const data = JSON.stringify({
    type: selectedTab,
  });

  const fetcher = () =>
    axios
      .post(`${baseApiUrl}/logs-types`, data, {
        headers: headers,
      })
      .then((response) => {
        return response.data;
      })
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      .catch(() => {});
  const { data: logs, mutate } = useSWR(`${baseApiUrl}/logs`, fetcher);
  // const isLoading = !error && !logs;

  const [filteredLogs, setFilteredLogs] = React.useState([]);
  const [fetchedFilteredLogs, setFetchedFilteredLogs] = React.useState(false);

  const [logQueryDialogOpen, setLogQueryDialogOpen] = React.useState(false);
  const [selectedLog, setSelectedLog] = React.useState<LogT>();

  useEffect(() => {
    mutate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTab]);

  const headers = {
    'Content-Type': 'application/json',
    'Referrer-Policy': 'unsafe-url',
    'Allow-Control-Allow-Origin': '*',
  };

  const getFilteredLogsByDate = () => {
    const data = {
      startDate: startDate,
      endDate: endDate,
      logs: logs,
    };

    const headers = {
      'Content-Type': 'application/json',
      'Referrer-Policy': 'unsafe-url',
      'Allow-Control-Allow-Origin': '*',
    };

    axios
      .post(`${baseApiUrl}/logsfilter-date`, data, {
        headers: headers,
      })
      .then((response) => {
        setFilteredLogs(response.data);
        setFetchedFilteredLogs(true);
      })
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      .catch(() => {});
  };

  const downloadLogs = () => {
    try {
      const data = JSON.stringify({
        logs: filteredLogs,
      });
      const config = {
        method: 'post',
        url: `${baseApiUrl}/logs-download`,
        headers: {
          'Content-Type': 'application/json',
        },
        data,
      };
      axios(config).then((res) => {
        const blob = new Blob([res.data], { type: 'text/csv' });
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'logs.csv';
        link.click();
      });
    } catch (error) {
      /* empty */
    }
  };

  function closeModal() {
    setLogQueryDialogOpen(false);
  }

  function openModal() {
    setLogQueryDialogOpen(true);
  }

  const viewLogDetails = (log: LogT) => {
    setSelectedLog(log);
    openModal();
  };

  const clearFilters = () => {
    setStartDate('');
    setEndDate('');
    setFilteredLogs([]);
    setFetchedFilteredLogs(false);
  };

  return (
    <div className='w-full rounded-md'>
      {selectedLog && (
        <LogQueryDetailsDialog
          isOpen={logQueryDialogOpen}
          closeModal={closeModal}
          logData={selectedLog}
        />
      )}

      <div className='mb-4 flex max-w-md flex-col gap-2'>
        <h5 className='h5'>{t('pages.dashboard.log_query.filter_by_date')}</h5>
        <div className='flex flex-col gap-3'>
          <div className='flex flex-col items-center gap-3 sm:flex-row'>
            <div className='w-full'>
              <label htmlFor='startDate' className='label-sm'>
                {t('pages.dashboard.log_query.start_date')}
              </label>
              <input
                id='startDate'
                name='startDate'
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className='input w-full'
                placeholder={`${t('pages.dashboard.source_query.inquire')}`}
                type='date'
              />
            </div>
            <div className='w-full'>
              <label htmlFor='endDate' className='label-sm'>
                {t('pages.dashboard.log_query.end_date')}
              </label>
              <input
                id='endDate'
                name='endDate'
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className='input w-full'
                placeholder={`${t('pages.dashboard.source_query.inquire')}`}
                type='date'
              />
            </div>
            <Button
              variant='secondary'
              className='mt-2 inline-flex h-fit w-full flex-none gap-1 self-end border-2 border-gray-200 sm:mt-0 sm:mb-1 sm:w-fit'
              disabled={!startDate && !endDate}
              onClick={() => clearFilters()}
            >
              <XMarkIcon className='w-6' />
              {t('pages.dashboard.log_query.clear_filters')}
            </Button>
          </div>

          <div className='flex flex-col gap-3 sm:flex-row'>
            {' '}
            <Button
              className='mt-2 inline-flex h-fit w-full flex-none gap-1 self-end sm:mt-0 sm:mb-1 sm:w-fit md:px-16'
              disabled={!startDate || !endDate}
              onClick={() => getFilteredLogsByDate()}
            >
              <AdjustmentsHorizontalIcon className='w-6' />
              {t('pages.dashboard.log_query.filter')}
            </Button>
            <Button
              className='mt-2 inline-flex h-fit w-full flex-none gap-1 self-end sm:mt-0 sm:mb-1 sm:w-fit'
              disabled={!fetchedFilteredLogs || filteredLogs.length === 0}
              onClick={() => downloadLogs()}
            >
              <ArrowDownTrayIcon className='w-6' />
              {t('pages.dashboard.log_query.download_results')}
            </Button>
          </div>
        </div>
      </div>
      <div className=''>
        <div className='-mx-4 overflow-x-auto px-4 py-4 sm:-mx-8 sm:px-8'>
          <LogQueryTabs logsTypes={logsTypes} setSelectedTab={setSelectedTab} />

          <div className='inline-block min-w-full overflow-hidden rounded-lg shadow'>
            <table className='min-w-full'>
              <thead className='bg-gray-50'>
                <tr className='border-b-2 border-gray-200 text-left text-gray-600'>
                  <th className='label-sm whitespace-nowrap px-5 py-4'>
                    <span>{t('pages.dashboard.log_query.project_id')}</span>
                  </th>
                  <th className='label-sm whitespace-nowrap px-5 py-4'>
                    <span>{t('pages.dashboard.log_query.device_id')}</span>
                  </th>
                  <th className='label-sm whitespace-nowrap px-5 py-4'>
                    <span>{t('pages.dashboard.log_query.info')}</span>
                  </th>
                  <th className='label-sm whitespace-nowrap px-5 py-4'>
                    <span>{t('pages.dashboard.log_query.type')}</span>
                  </th>
                  <th className='label-sm whitespace-nowrap px-5 py-4'>
                    <span>{t('pages.dashboard.log_query.date')}</span>
                  </th>

                  <th className='label-sm whitespace-nowrap px-5 py-4'>
                    <span>
                      {t('pages.dashboard.log_query.log_query_details')}
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* all logs  */}
                {logs &&
                  logs.length > 0 &&
                  !fetchedFilteredLogs &&
                  logs.map((log: LogT) => (
                    <tr
                      v-for='log in logs'
                      key={log._id}
                      className='body-medium whitespace-nowrap border-b border-gray-200 bg-white text-gray-900'
                    >
                      <td className='px-5 py-5'>
                        <p>{log.projectId ?? '-'}</p>
                      </td>
                      <td className='px-5 py-5'>
                        <p>{log.deviceId ?? '-'}</p>
                      </td>
                      <td className='max-w-[150px] px-5 py-5'>
                        <div className='flex flex-col gap-1 truncate'>
                          <p className='truncate'>{log.info ?? '-'}</p>
                          <p className='max-w-sm truncate'>
                            {log.description ?? '-'}
                          </p>
                        </div>
                      </td>
                      <td className='px-5 py-5'>
                        <Badge
                          color={
                            logStatusTypes[
                              log.type
                            ].color.toLocaleLowerCase() ?? 'gray'
                          }
                        >
                          {log.type.toLocaleLowerCase()}
                        </Badge>
                      </td>
                      <td className='px-5 py-5'>
                        <p className='text-gray-600'>
                          {new Date(log.date).toLocaleDateString()}
                        </p>
                      </td>
                      <td className='px-5 py-4'>
                        <Button size='sm' onClick={() => viewLogDetails(log)}>
                          {t('pages.dashboard.log_query.view_log_details')}
                        </Button>
                      </td>
                    </tr>
                  ))}

                {/* filtered logs  */}
                {filteredLogs &&
                  fetchedFilteredLogs &&
                  filteredLogs.length === 0 && (
                    <tr className='body-medium whitespace-nowrap border-b border-gray-200 bg-white text-gray-900'>
                      <td className='px-16 py-10'>
                        <span className='label-md italic text-gray-500'>
                          {t('pages.dashboard.log_query.no_logs_found')}
                        </span>
                      </td>
                      <td className='px-5 py-10'></td>
                      <td className='max-w-[150px] px-5 py-10'></td>
                      <td className='px-5 py-10'></td>
                      <td className='px-5 py-10'></td>
                      <td></td>
                    </tr>
                  )}

                {filteredLogs &&
                  filteredLogs.length > 0 &&
                  fetchedFilteredLogs &&
                  filteredLogs.map((filteredLog: LogT) => (
                    <tr
                      v-for='filteredLog in filteredLogs'
                      key={filteredLog._id}
                      className='body-medium whitespace-nowrap border-b border-gray-200 bg-white text-gray-900'
                    >
                      <td className='px-5 py-5'>
                        <p>{filteredLog.projectId ?? '-'}</p>
                      </td>
                      <td className='px-5 py-5'>
                        <p>{filteredLog.deviceId ?? '-'}</p>
                      </td>
                      <td className='max-w-[150px] px-5 py-5'>
                        <div className='flex flex-col gap-1 truncate'>
                          <p className='truncate'>{filteredLog.info ?? '-'}</p>
                          <p className='max-w-sm truncate'>
                            {filteredLog.description ?? '-'}
                          </p>
                        </div>
                      </td>
                      <td className='px-5 py-5'>
                        <Badge
                          color={
                            logStatusTypes[
                              filteredLog.type
                            ].color.toLocaleLowerCase() ?? 'gray'
                          }
                        >
                          {filteredLog.type.toLocaleLowerCase()}
                        </Badge>
                      </td>
                      <td className='px-5 py-5'>
                        <p className='text-gray-600'>
                          {new Date(filteredLog.date).toLocaleDateString()}
                        </p>
                      </td>
                      <td className='px-5 py-5'>
                        <Button
                          size='sm'
                          onClick={() => viewLogDetails(filteredLog)}
                        >
                          {t('pages.dashboard.log_query.view_log_details')}
                        </Button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            {/* Pagination */}
            {/* <div className='px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between'>
              <span className='body-small'> Showing 1 to 4 of 50 Entries</span>
              <div className='inline-flex mt-2 xs:mt-0 space-x-1'>
                <Button size='small' type='outline'>
                  Previous
                </Button>
                <Button size='small' type='outline'>
                  Next
                </Button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(LogQueryTable);
