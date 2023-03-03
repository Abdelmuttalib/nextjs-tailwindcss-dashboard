import useSWR from 'swr';

import { fetchAPI } from '@/lib/api';

import { LogT } from '@/components/@pages/log-query-page/types';

const useLogs = (initialLogsData: LogT[], selectedLogType: string) => {
  const fetcher = (url: string, logType: string) =>
    fetchAPI
      .post(url, {
        type: logType,
      })
      .then((res) => res.data);

  const {
    data: logs,
    isLoading,
    error,
    mutate,
  } = useSWR<LogT[]>(
    ['/logs-types', selectedLogType],
    ([url, selectedLogType]: string[]) => fetcher(url, selectedLogType),
    {
      fallbackData: initialLogsData,
    }
  );

  const getFilteredLogsByDate = (
    startDate: string,
    endDate: string,
    logs: LogT[]
  ) => {
    const data = {
      startDate: startDate,
      endDate: endDate,
      logs: logs,
    };

    return fetchAPI.post('/logsfilter-date', data);
  };

  const downloadFilteredLogs = (logs: LogT[]) => {
    const data = {
      logs: logs,
    };

    fetchAPI.post('/logs-download', data).then((res) => {
      const blob = new Blob([res.data], { type: 'text/csv' });
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'logs.csv';
      link.click();
    });
  };

  return {
    logs,
    isLoading,
    error,
    mutate,
    getFilteredLogsByDate,
    downloadFilteredLogs,
  };
};

export default useLogs;
