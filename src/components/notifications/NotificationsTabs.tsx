import { Tab } from '@headlessui/react';
import { TFunction } from 'next-i18next';
import React from 'react';
import { withTranslation } from 'react-i18next';

import cn from '@/lib/cn';

import NotificationItem from '@/components/notifications/NotificationItem';

function randomDate(start: Date, end: Date) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

// Function to generate fake notifications data
function generateFakeNotifications(count: number) {
  const types = ['error', 'sync', 'warning'];
  const notifications = [];

  for (let i = 1; i <= count; i++) {
    const id = `${i}`;
    const type = types[Math.floor(Math.random() * types.length)];
    const date = randomDate(new Date(2023, 0, 1), new Date());
    const isRead = Math.random() < 0.5; // Randomly set isRead to true or false
    const description = `This is notification ${i}`;

    notifications.push({
      id,
      type,
      date,
      isRead,
      description,
    });
  }

  return notifications;
}

const NotificationsTabs = ({ t }: { t: TFunction }) => {
  // Generate 10 fake notifications
  const fakeNotifications = generateFakeNotifications(8);
  const notificationsData = {
    All: fakeNotifications,
    Errors: fakeNotifications?.filter(
      (notification) => notification.type === 'error'
    ),
    Sync: fakeNotifications?.filter(
      (notification) => notification.type === 'sync'
    ),
    Warning: fakeNotifications?.filter(
      (notification) => notification.type === 'warning'
    ),
  };

  return (
    <div className='w-full'>
      <Tab.Group>
        <Tab.List className='flex bg-gray-100/60 px-5 dark:bg-gray-800/30 lg:px-6'>
          {Object.keys(notificationsData).map((notificationLabel) => (
            <Tab
              v-for='notificationLabel in Object.keys(notificationsData)'
              key={notificationLabel}
              as='button'
              className={({ selected }) =>
                cn(
                  'sm:label-sm border-b-2 border-transparent px-4 py-2 text-sm leading-5 sm:py-3',
                  'focus:bg-gray-200 focus:outline-none dark:focus:bg-gray-800',
                  selected
                    ? 'border-black font-medium dark:border-primary-400'
                    : 'font-medium text-gray-500'
                )
              }
            >
              {t(`notifications.${notificationLabel.toLocaleLowerCase()}`)}
            </Tab>
          ))}
        </Tab.List>

        <Tab.Panels>
          <div>
            {Object.values(notificationsData).map((notifications, idx) => (
              <Tab.Panel
                key={idx}
                className='bg-white py-3 focus:outline-none dark:bg-gray-900'
              >
                <ul className='w-full'>
                  {notifications?.map((notification) => (
                    <NotificationItem
                      key={notification.id}
                      notification={notification}
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
