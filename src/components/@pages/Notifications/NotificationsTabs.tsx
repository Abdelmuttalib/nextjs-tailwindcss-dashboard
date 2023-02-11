import { Tab } from '@headlessui/react';
import { TFunction } from 'next-i18next';
import React from 'react';
import { withTranslation } from 'react-i18next';

import cn from '@/lib/cn';
import useNotifications from '@/hooks/useNotification';

import NotificationItem from '@/components/@pages/Notifications/NotificationItem';

const NotificationsTabs = ({ t }: { t: TFunction }) => {
  const { notifications } = useNotifications();
  const notificationsData = {
    All: notifications,
    Errors: notifications?.filter(
      (notification) => notification.notificationType === 'error'
    ),
    Sync: notifications?.filter(
      (notification) => notification.notificationType === 'sync'
    ),
  };

  return (
    <div className='w-full'>
      <Tab.Group>
        <Tab.List className='flex px-5 lg:px-6 bg-gray-100/60'>
          {Object.keys(notificationsData).map((notificationLabel) => (
            <Tab
              v-for='notificationLabel in Object.keys(notificationsData)'
              key={notificationLabel}
              as='button'
              className={({ selected }) =>
                cn(
                  'px-4 py-2 sm:py-3 text-sm sm:label-sm border-b-2 border-transparent leading-5',
                  'focus:outline-none focus:bg-gray-200',
                  selected
                    ? 'border-black font-medium'
                    : 'font-medium text-gray-500'
                )
              }
            >
              {t(`notifications.${notificationLabel.toLocaleLowerCase()}`)}
              {/* {notificationLabel} */}
            </Tab>
          ))}
        </Tab.List>

        <Tab.Panels>
          <div>
            {Object.values(notificationsData).map((notifications, idx) => (
              <Tab.Panel key={idx} className='bg-white py-3 focus:outline-none'>
                <ul>
                  {notifications?.map((notification) => (
                    <NotificationItem
                      key={notification._id}
                      {...notification}
                    />
                  ))}
                </ul>
              </Tab.Panel>
            ))}
          </div>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default withTranslation()(NotificationsTabs);
