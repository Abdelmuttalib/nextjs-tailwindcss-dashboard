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
        'relative flex w-full gap-4 border-b bg-white px-5 py-2 hover:bg-primary-100/10 focus:bg-primary-100/30 sm:py-4',
        { 'bg-primary-100/30': !notification.read }
      )}
    >
      {/* not read notification indicator  */}
      {!notification.read && (
        <div className='absolute top-2 right-3 h-2.5 w-2.5 rounded-full bg-primary'></div>
      )}
      <div className='h-fit w-fit'>
        {/* Error Icon Label  */}
        {notification.notificationType === 'error' && (
          <div className='block w-fit rounded-full bg-red-500/20 p-1.5'>
            <XMarkIcon className='h-7 w-7 text-red-600' />
          </div>
        )}
        {/* Sync Icon Label  */}
        {notification.notificationType === 'sync' && (
          <div className='block w-fit rounded-full bg-blue-600/20 p-2'>
            <ArrowPathIcon className='h-6 w-6 text-blue-500' />
          </div>
        )}
      </div>
      <div className='w-full'>
        <h4 className='body-sm font-medium'>{notification.description}</h4>

        <div className='mt-1 flex w-full justify-between'>
          <p className='text-sm font-medium text-gray-400'>
            {formatDate(notification.date)}
          </p>

          {notification.notificationType === 'error' && (
            <Link
              href={`/notifications/${notification._id}`}
              className='label-sm ml-auto font-medium text-primary-600 hover:text-primary-700 focus:text-primary-500'
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
