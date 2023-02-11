import { ArrowPathIcon, XMarkIcon } from '@heroicons/react/24/solid';
import React from 'react';

import cn from '@/lib/cn';
import { formatDate } from '@/lib/date';
import { NotificationT } from '@/hooks/useNotification';

const NotificationItem = ({
  _id,
  read,
  notificationType,
  description,
  date,
}: NotificationT) => {
  return (
    <li
      key={_id}
      className={cn(
        'relative flex gap-4 bg-white hover:bg-primary-100/10 focus:bg-primary-100/30 px-5 py-2 sm:py-4 focus-within:bg-black',
        { 'bg-primary-100/30': !read }
      )}
    >
      {/* not read notification indicator  */}
      {!read && (
        <div className='w-2.5 h-2.5 rounded-full bg-primary absolute top-2 right-3'></div>
      )}
      <div className='w-fit h-fit'>
        {/* Error Icon Label  */}
        {notificationType === 'error' && (
          <div className='bg-red-500/20 p-1.5 w-fit rounded-full block'>
            <XMarkIcon className='w-7 h-7 text-red-600' />
          </div>
        )}
        {/* Sync Icon Label  */}
        {notificationType === 'sync' && (
          <div className='bg-blue-600/20 p-1.5 w-fit rounded-full block'>
            <ArrowPathIcon className='w-7 h-7 text-blue-500' />
          </div>
        )}
      </div>
      <div>
        <h4 className='body-sm font-medium'>{description}</h4>

        <p className='text-sm text-gray-400 font-medium'>{formatDate(date)}</p>
      </div>
    </li>
  );
};

export default NotificationItem;
