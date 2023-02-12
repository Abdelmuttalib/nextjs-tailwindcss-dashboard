import { TFunction, withTranslation } from 'next-i18next';
import React from 'react';

import { formatDate } from '@/lib/date';

import NotificationDetailsDialog from '@/components/@pages/Notifications/NotificationDetailsDialog';
import Badge from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

import { NotificationDetailsT } from '@/pages/notifications/[id]';

const logStatusTypes: {
  [key in NotificationDetailsT['type']]: { label: string; color: string };
} = {
  INFO: { label: 'INFO', color: 'gray' },
  WARNING: { label: 'WARNING', color: 'yellow' },
  DEBUG: { label: 'DEBUG', color: 'blue' },
  ERROR: { label: 'ERROR', color: 'red' },
  CRITICAL: { label: 'CRITICAL', color: 'red' },
};

const NotificationsDetailsTable = ({
  data,
  t,
}: {
  data: NotificationDetailsT[];
  t: TFunction;
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] =
    React.useState<NotificationDetailsT>();
  const closeModal = () => setIsOpen(false);
  return (
    <div>
      {selectedItem && (
        <NotificationDetailsDialog
          notificationDetails={selectedItem as NotificationDetailsT}
          isOpen={isOpen}
          closeModal={closeModal}
        />
      )}
      <div className='-mx-4 overflow-x-auto px-4 py-4 sm:-mx-8 sm:px-8'>
        <div className='inline-block min-w-full overflow-hidden rounded-lg shadow'>
          <table className='min-w-full'>
            <thead className='bg-gray-50'>
              <tr className='border-b-2 border-gray-200 text-left text-gray-600'>
                <th className='label-sm whitespace-nowrap px-5 py-4'>
                  <span>{t('notifications.description')}</span>
                </th>
                <th className='label-sm whitespace-nowrap px-5 py-4'>
                  <span>{t('pages.dashboard.log_query.type')}</span>
                </th>
                <th className='label-sm whitespace-nowrap px-5 py-4'>
                  <span>{t('pages.dashboard.log_query.date')}</span>
                </th>
                <th className='label-sm whitespace-nowrap px-5 py-4'>
                  <span>{t('notifications.view_details')}</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {/* all logs  */}
              {data &&
                data.length > 0 &&
                data.map((notificationDetails: NotificationDetailsT, idx) => (
                  <tr
                    key={idx}
                    className='body-sm truncate whitespace-nowrap border-b border-gray-200 bg-white text-gray-900'
                  >
                    <td className='max-w-lg px-5 py-5'>
                      <p className='truncate'>
                        {notificationDetails.description ?? '-'}
                      </p>
                    </td>
                    <td className='px-5 py-5'>
                      <Badge
                        color={
                          logStatusTypes[
                            notificationDetails.type
                          ].color.toLocaleLowerCase() ?? 'gray'
                        }
                      >
                        {notificationDetails.type.toLocaleLowerCase()}
                      </Badge>
                    </td>
                    <td className='px-5 py-5'>
                      <p className='text-gray-600'>
                        {formatDate(notificationDetails.date)}
                      </p>
                    </td>
                    <td className='px-5 py-5'>
                      <Button
                        size='sm'
                        onClick={() => {
                          setSelectedItem(notificationDetails);
                          setIsOpen(true);
                        }}
                      >
                        {t('notifications.view_details')}
                      </Button>
                    </td>
                  </tr>
                ))}

              {/* filtered logs  */}
            </tbody>
          </table>
          {/* Pagination */}
          {/* <div className='px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between'>
              <span className='body-small'> Showing 1 to 4 of 50 Entries</span>
              <div className='inline-flex mt-2 xs:mt-0 space-x-1'>
                <Button size='small' type='outline'>
                  Previous
                </Button>
                <Button size='small' type='outline'>
                  Next
                </Button>
              </div>
            </div> */}
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(NotificationsDetailsTable);
