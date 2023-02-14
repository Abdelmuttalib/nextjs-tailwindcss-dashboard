import { TFunction, withTranslation } from 'next-i18next';
import React from 'react';

import { formatDate } from '@/lib/date';

import { LogT } from '@/components/@pages/log-query-page/LogQueryTable/LogQueryTable';
import Badge from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const logStatusTypes: {
  [key in LogT['type']]: { label: string; color: string };
} = {
  INFO: { label: 'INFO', color: 'gray' },
  WARNING: { label: 'WARNING', color: 'yellow' },
  DEBUG: { label: 'DEBUG', color: 'blue' },
  ERROR: { label: 'ERROR', color: 'red' },
  CRITICAL: { label: 'CRITICAL', color: 'red' },
};

const LogQueryTableRow = ({
  log,
  viewLogDetails,
  t,
}: {
  log: LogT;
  viewLogDetails: (log: LogT) => void;
  t: TFunction;
}) => {
  return (
    <tr
      key={log._id}
      className='body-medium whitespace-nowrap border-b border-gray-200 bg-white text-gray-900 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-200'
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
          <p className='max-w-sm truncate'>{log.description ?? '-'}</p>
        </div>
      </td>
      <td className='px-5 py-5'>
        <Badge
          color={logStatusTypes[log.type].color.toLocaleLowerCase() ?? 'gray'}
        >
          {log.type.toLocaleLowerCase()}
        </Badge>
      </td>
      <td className='px-5 py-5'>
        <p className='text-gray-600 dark:text-gray-500'>
          {formatDate(log.date)}
        </p>
      </td>
      <td className='px-5 py-4'>
        <Button size='sm' onClick={() => viewLogDetails(log)}>
          {t('pages.dashboard.log_query.view_log_details')}
        </Button>
      </td>
    </tr>
  );
};

export default withTranslation()(LogQueryTableRow);
