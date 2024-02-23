import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import { ArrowPathIcon, XMarkIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { withTranslation } from 'react-i18next';

import cn from '@/lib/cn';
import { formatDate } from '@/lib/date';

import Typography from '@/components/ui/typography';

export interface Notification {
  id: string;
  type: string;
  description: string;
  isRead: boolean;
  date: Date;
}

const NotificationItem = ({ notification }: { notification: Notification }) => {
  const { id, isRead, date, type, description } = notification;
  return (
    <li
      key={id}
      className={cn(
        'relative flex w-full gap-4 border-b border-border/50 px-5 py-3 hover:bg-primary-100/20 dark:hover:bg-layer/70 focus:bg-primary-100/30 sm:py-4',
        {
          'bg-primary-50 dark:bg-background/80': !isRead,
        }
      )}
    >
      {/* not read notification indicator  */}
      {!isRead && (
        <div className='absolute top-2 right-3 h-2.5 w-2.5 rounded-full bg-primary dark:bg-primary-400'></div>
      )}
      <div className='h-fit w-fit'>
        {/* Error Icon Label  */}
        {type === 'error' && (
          <div className='block w-fit rounded-full bg-red-500/20 p-1.5 dark:bg-red-400/20'>
            <XMarkIcon className='h-7 w-7 text-red-600' />
          </div>
        )}
        {/* Sync Icon Label  */}
        {type === 'sync' && (
          <div className='block w-fit rounded-full bg-blue-600/20 p-2 dark:bg-blue-500/20'>
            <ArrowPathIcon className='h-6 w-6 text-blue-500' />
          </div>
        )}
        {type === 'warning' && (
          <div className='block w-fit rounded-full bg-yellow-600/20 p-2 dark:bg-yellow-500/10'>
            <ExclamationTriangleIcon className='h-6 w-6 text-amber-700 dark:text-amber-500' />
          </div>
        )}
      </div>
      <div className='w-full'>
        <Typography as='p' variant='base/medium' className='text-foreground'>
          {description}
        </Typography>

        <div className='mt-1.5 flex w-full'>
          <Typography
            as='p'
            variant='sm/medium'
            className='text-foreground-lighter'
          >
            {formatDate(date)}
          </Typography>
        </div>
      </div>
    </li>
  );
};

export default withTranslation()(NotificationItem);
