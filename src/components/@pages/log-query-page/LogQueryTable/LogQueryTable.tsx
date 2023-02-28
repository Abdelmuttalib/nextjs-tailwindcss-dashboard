import { XMarkIcon } from '@heroicons/react/20/solid';
import {
  AdjustmentsHorizontalIcon,
  ArrowDownTrayIcon,
} from '@heroicons/react/24/solid';
import { TFunction } from 'next-i18next';
import { FC, useEffect, useState } from 'react';
import { withTranslation } from 'react-i18next';

import useLogs from '@/hooks/useLogs';

import LogQueryTableRowPlaceholder from '@/components/@pages/log-query-page/LogQueryTable/LogQueryTableRowPlaceholder';
import { LogT } from '@/components/@pages/log-query-page/types';
import { Button } from '@/components/ui/button';

import LogQueryTableRow, { LogQueryTableRowLoader } from './LogQueryTableRow';
import LogQueryDetailsDialog from '../LogQueryDetailsDialog';
import LogQueryTabs from '../LogQueryTabs';

interface LogQueryTableProps {
  logTypes: string[];
  logsData: LogT[];
  t: TFunction;
}

const LogQueryTable: FC<LogQueryTableProps> = ({ logTypes, logsData, t }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectedLogType, setSelectedLogType] = useState<string>(logTypes[0]);

  const {
    logs,
    isLoading,
    mutate,
    getFilteredLogsByDate,
    downloadFilteredLogs,
  } = useLogs(logsData, selectedLogType);

  const [filteredLogs, setFilteredLogs] = useState<LogT[]>([]);
  const [fetchedFilteredLogs, setFetchedFilteredLogs] = useState(false);

  const [logQueryDialogOpen, setLogQueryDialogOpen] = useState(false);
  const [selectedLog, setSelectedLog] = useState<LogT>();

  useEffect(() => {
    mutate();
    if (filteredLogs && fetchedFilteredLogs) {
      setFilteredLogs([]);
      setFetchedFilteredLogs(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedLogType]);

  const onFilterLogsByDate = () => {
    getFilteredLogsByDate(startDate, endDate, logs as LogT[]).then((res) => {
      setFilteredLogs(res.data);
      setFetchedFilteredLogs(true);
    });
  };

  const downloadLogs = () => {
    downloadFilteredLogs(filteredLogs);
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
      <div className='mb-4 flex max-w-xl flex-col gap-2'>
        <h5 className='h5'>{t('pages.dashboard.log_query.filter_by_date')}</h5>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onFilterLogsByDate();
          }}
          className='flex flex-col gap-3'
        >
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
              type='reset'
              size='sm'
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
            <Button
              type='submit'
              className='mt-2 inline-flex h-fit w-full flex-none gap-1 self-end sm:mt-0 sm:mb-1 sm:w-fit md:px-16'
              disabled={!startDate || !endDate}
              onClick={() => onFilterLogsByDate()}
            >
              <AdjustmentsHorizontalIcon className='w-6' />
              {t('pages.dashboard.log_query.filter')}
            </Button>
            <Button
              type='button'
              className='mt-2 inline-flex h-fit w-full flex-none gap-1 self-end sm:mt-0 sm:mb-1 sm:w-fit'
              disabled={!fetchedFilteredLogs || filteredLogs.length === 0}
              onClick={() => downloadLogs()}
            >
              <ArrowDownTrayIcon className='w-6' />
              {t('pages.dashboard.log_query.download_results')}
            </Button>
          </div>
        </form>
      </div>
      <div>
        <LogQueryTabs
          logTypes={logTypes}
          setSelectedLogType={setSelectedLogType}
        />
        <div className='-mx-4 overflow-x-auto px-4 pb-10 sm:-mx-8 sm:px-8'>
          <div className='inline-block min-w-full overflow-hidden rounded-lg shadow'>
            <table className='min-w-full'>
              <thead className='bg-gray-50 dark:bg-gray-800/60'>
                <tr className='border-b-2 border-gray-200 text-left text-gray-600 dark:border-gray-800 dark:text-gray-200'>
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
                {/* loading */}
                {isLoading &&
                  !fetchedFilteredLogs &&
                  [...Array(6)].map((n) => <LogQueryTableRowLoader key={n} />)}
                {/* all logs  */}
                {logs &&
                  logs.length > 0 &&
                  !fetchedFilteredLogs &&
                  logs.map((log) => (
                    <LogQueryTableRow
                      key={log._id}
                      log={log}
                      viewLogDetails={viewLogDetails}
                    />
                  ))}
                {logs && logs.length === 0 && !fetchedFilteredLogs && (
                  <LogQueryTableRowPlaceholder />
                )}

                {/* filtered logs with no result  */}
                {filteredLogs &&
                  fetchedFilteredLogs &&
                  filteredLogs.length === 0 && <LogQueryTableRowPlaceholder />}

                {/* filtered logs with result data */}
                {filteredLogs &&
                  filteredLogs.length > 0 &&
                  fetchedFilteredLogs &&
                  filteredLogs.map((filteredLog: LogT) => (
                    <LogQueryTableRow
                      key={filteredLog._id}
                      log={filteredLog}
                      viewLogDetails={viewLogDetails}
                    />
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
