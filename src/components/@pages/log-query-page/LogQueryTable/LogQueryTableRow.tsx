import { TFunction, withTranslation } from 'next-i18next';
import React, { FC, useEffect, useState } from 'react';

import { formatDate } from '@/lib/date';

import { getStatusTypeColor } from '@/components/@pages/log-query-page/log-status-types';
import { SkeletonLoader } from '@/components/loaders';
import Badge from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

import { LogT } from '../types';

interface LogQueryTableRowProps {
  log: LogT;
  viewLogDetails: (log: LogT) => void;
  t: TFunction;
}

const LogQueryTableRow: FC<LogQueryTableRowProps> = ({
  log,
  viewLogDetails,
  t,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <tr
      key={log._id}
      className='body-md whitespace-nowrap border-b border-gray-200 bg-white text-gray-900 dark:border-gray-800/50 dark:bg-gray-800/40 dark:text-gray-200'
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
        <Badge color={getStatusTypeColor(log.type) ?? 'gray'}>
          {log.type.toLocaleLowerCase()}
        </Badge>
      </td>
      <td className='px-5 py-5'>
        {isMounted ? (
          <p className='text-gray-600 dark:text-gray-500'>
            {formatDate(log.date)}
          </p>
        ) : (
          <SkeletonLoader className='h-7 w-16' />
        )}
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

export const LogQueryTableRowLoader = () => {
  return (
    <tr className='body-md whitespace-nowrap border-b border-gray-200 bg-white text-gray-900 dark:border-gray-800/50 dark:bg-gray-800/40 dark:text-gray-200'>
      <td className='px-5 py-5'>
        <div>
          <SkeletonLoader className='h-7 w-full' />
        </div>
      </td>
      <td className='px-5 py-5'>
        <div>
          <SkeletonLoader className='h-7 w-full' />
        </div>
      </td>
      <td className='max-w-[150px] px-5 py-5'>
        <div className='flex flex-col gap-1 truncate'>
          <div className='truncate'>
            <SkeletonLoader className='h-6 w-full' />
          </div>
          <div className='max-w-sm truncate'>
            <SkeletonLoader className='h-6 w-full' />
          </div>
        </div>
      </td>
      <td className='px-5 py-5'>
        <SkeletonLoader className='h-7 w-20 rounded-full' />
      </td>
      <td className='px-5 py-5'>
        <div className='text-gray-600'>
          <SkeletonLoader className='h-7 w-16' />
        </div>
      </td>
      <td className='px-5 py-4'>
        <SkeletonLoader className='h-8 w-36 rounded-full' />
      </td>
    </tr>
  );
};
