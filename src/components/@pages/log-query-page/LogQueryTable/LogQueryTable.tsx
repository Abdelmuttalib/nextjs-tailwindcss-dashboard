import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from '@heroicons/react/20/solid';
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
  // logsData: LogsResponseT;
  t: TFunction;
}

const LogQueryTable: FC<LogQueryTableProps> = ({ logTypes, t }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectedLogType, setSelectedLogType] = useState<string>(logTypes[0]);

  const {
    data,
    page,
    setPage,
    isLoading,
    getFilteredLogsByDate,
    downloadFilteredLogs,
  } = useLogs(selectedLogType);
  const [filteredLogs, setFilteredLogs] = useState<LogT[]>([]);
  const [fetchedFilteredLogs, setFetchedFilteredLogs] = useState(false);

  const [logQueryDialogOpen, setLogQueryDialogOpen] = useState(false);
  const [selectedLog, setSelectedLog] = useState<LogT>();

  useEffect(() => {
    if (page !== 1) setPage(1);
    if (filteredLogs && fetchedFilteredLogs) {
      setFilteredLogs([]);
      setFetchedFilteredLogs(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedLogType]);

  const onFilterLogsByDate = () => {
    getFilteredLogsByDate(startDate, endDate).then((res) => {
      const filteredLogs = res.data.logs;
      setFilteredLogs(filteredLogs);
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

      <div className='mb-6 flex max-w-xl flex-col gap-2'>
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
                  [1, 2, 3, 4, 5, 6].map((n) => (
                    <LogQueryTableRowLoader key={n} />
                  ))}
                {/* all logs  */}
                {data &&
                  data.logs &&
                  data.logs.length > 0 &&
                  !fetchedFilteredLogs &&
                  data.logs.map((log) => (
                    <LogQueryTableRow
                      key={log._id}
                      log={log}
                      viewLogDetails={viewLogDetails}
                    />
                  ))}
                {data && data.logs.length === 0 && !fetchedFilteredLogs && (
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
            {data && data.logs && !fetchedFilteredLogs && (
              <div className='flex flex-col items-start gap-2 border-t border-gray-200 bg-gray-50/20 px-5 py-8 dark:border-gray-800 dark:bg-gray-800/40 sm:items-center'>
                <p className='label-sm lg:label-md text-gray-700 dark:text-gray-300'>
                  {t('pages.dashboard.log_query.showing_page')}
                  <span className='text-primary dark:text-primary-400'>
                    {' '}
                    {page}
                  </span>{' '}
                  {t('pages.dashboard.log_query.of')}{' '}
                  <span className='text-primary dark:text-primary-400'>
                    {data?.totalPages}{' '}
                    {data?.totalPages && (data?.totalPages as number) > 1
                      ? t('pages.dashboard.log_query.pages')
                      : t('pages.dashboard.log_query.page')}{' '}
                    {data?.totalPages && data?.totalPages === '' && 0}
                  </span>
                </p>
                <div className='xs:mt-0 mt-2 grid grid-cols-2 sm:w-full sm:max-w-xs'>
                  <Button
                    size='sm'
                    variant='primary'
                    onClick={() =>
                      data?.totalPages &&
                      page > 1 &&
                      setPage((currentPage) => currentPage - 1)
                    }
                    disabled={page === 1}
                    className='rounded-r-none focus:border-primary-700'
                  >
                    <ChevronLeftIcon className='mr-2 inline w-5' />
                    {t('pages.dashboard.log_query.previous')}
                  </Button>

                  <Button
                    size='sm'
                    variant='primary'
                    onClick={() =>
                      data?.totalPages &&
                      page < (data?.totalPages as number) &&
                      setPage((currentPage) => currentPage + 1)
                    }
                    disabled={page === data?.totalPages}
                    className='rounded-l-none focus:border-primary-700'
                  >
                    {t('pages.dashboard.log_query.next')}
                    <ChevronRightIcon className='ml-2 inline w-5' />
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(LogQueryTable);
