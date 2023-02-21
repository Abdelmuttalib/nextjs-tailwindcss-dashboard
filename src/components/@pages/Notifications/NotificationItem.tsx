import { ArrowPathIcon, XMarkIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { TFunction } from 'next-i18next';
import React from 'react';
import { withTranslation } from 'react-i18next';

import cn from '@/lib/cn';
import { formatDate } from '@/lib/date';
import { NotificationT } from '@/hooks/useNotification';

const NotificationItem = ({
  notification,
  t,
}: {
  notification: NotificationT;
  t: TFunction;
}) => {
  return (
    <li
      key={notification._id}
      className={cn(
        'relative flex w-full gap-4 border-l-4 border-b border-l-transparent bg-white px-3 py-2 hover:bg-primary-100/20 focus:bg-primary-100/30 dark:border-gray-800/50 dark:border-l-transparent dark:bg-gray-900 dark:hover:bg-gray-800/50 sm:py-4',
        {
          'bg-primary-100/40 dark:bg-gray-800/40':
            notification.read === 'false',
        }
      )}
    >
      {/* not read notification indicator  */}
      {notification.read === 'false' && (
        <div className='absolute top-2 right-3 h-2.5 w-2.5 rounded-full bg-primary dark:bg-primary-400'></div>
      )}
      <div className='h-fit w-fit'>
        {/* Error Icon Label  */}
        {notification.notificationType === 'error' && (
          <div className='block w-fit rounded-full bg-red-500/20 p-1.5 dark:bg-red-400/20'>
            <XMarkIcon className='h-7 w-7 text-red-600' />
          </div>
        )}
        {/* Sync Icon Label  */}
        {notification.notificationType === 'sync' && (
          <div className='block w-fit rounded-full bg-blue-600/20 p-2 dark:bg-blue-500/20'>
            <ArrowPathIcon className='h-6 w-6 text-blue-500' />
          </div>
        )}
      </div>
      <div className='w-full'>
        <h4 className='body-sm font-medium dark:text-gray-200'>
          {notification.description}
        </h4>

        <div className='mt-1.5 flex w-full justify-between'>
          <p className='text-sm font-medium text-gray-400 dark:text-gray-500'>
            {formatDate(notification.date)}
          </p>

          {notification.notificationType === 'error' && (
            <Link
              href={`/notifications/${notification._id}`}
              className='label-sm ml-auto font-medium text-primary-600 hover:text-primary-700 focus:text-primary-500 dark:text-primary-400'
            >
              {t('notifications.view_notification')}
            </Link>
          )}
        </div>
      </div>
    </li>
  );
};

export default withTranslation()(NotificationItem);
