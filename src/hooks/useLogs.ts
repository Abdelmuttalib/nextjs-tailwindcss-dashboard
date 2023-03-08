import { useState } from 'react';
import useSWR from 'swr';

import { fetchAPI } from '@/lib/api';

import { LogsResponseT, LogT } from '@/components/@pages/log-query-page/types';

const useLogs = (selectedLogType: string) => {
  const fetcher = (url: string, logType: string, pageNumber: number) =>
    fetchAPI
      .post(url, {
        type: logType,
        page: pageNumber,
      })
      .then((res) => res.data);

  const [page, setPage] = useState<number>(1);
  const { data, isLoading, error, mutate } = useSWR<LogsResponseT>(
    ['/logs-types', selectedLogType, page],
    ([url, selectedLogType, page]: (string | number)[]) =>
      fetcher(url as string, selectedLogType as string, page as number)
  );

  const getFilteredLogsByDate = (startDate: string, endDate: string) => {
    const data = {
      startDate: startDate,
      endDate: endDate,
      type: selectedLogType,
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
    data,
    page,
    setPage,
    isLoading,
    error,
    mutate,
    getFilteredLogsByDate,
    downloadFilteredLogs,
  };
};

export default useLogs;
