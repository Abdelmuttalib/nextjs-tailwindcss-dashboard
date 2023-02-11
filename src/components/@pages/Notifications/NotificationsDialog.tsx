import { Dialog, Transition } from '@headlessui/react';
import {
  BellIcon,
  CheckCircleIcon,
  XMarkIcon,
} from '@heroicons/react/20/solid';
import { TFunction, withTranslation } from 'next-i18next';
import React, { Fragment } from 'react';

import useNotifications from '@/hooks/useNotification';

import { Button } from '@/components/ui/button';

import NotificationsTabs from './NotificationsTabs';

const NotificationsDialog = ({ t }: { t: TFunction }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const { newNotificationsExist, markAllAsRead } = useNotifications();

  const toggleModal = () => setIsOpen((prevValue) => !prevValue);

  return (
    <>
      <div>
        <Button
          className='relative'
          variant='outline'
          size='sm'
          onClick={toggleModal}
        >
          {/* <icon-heroicons:bell-20-solid className="w-6" aria-hidden="true" /> */}
          {newNotificationsExist && (
            <span className='absolute top-4 right-4 inline-flex items-center justify-center w-3 h-3 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full'></span>
          )}
          <BellIcon className='w-6' aria-hidden='true' />
        </Button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={toggleModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-screen w-full items-center justify-center'>
              <Transition.Child
                as={Fragment}
                enter='duration-300 ease-out'
                enterFrom='opacity-0'
                enterTo='opacity-100'
                leave='duration-200 ease-in'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
              >
                <Dialog.Panel className='absolute right-0 left-0 bottom-0 w-full sm:max-w-sm md:max-w-md lg:max-w-lg sm:left-auto sm:top-0 sm:right-0 overflow-y-scroll h-[70%] pt-2.5 sm:min-h-screen rounded-t-md sm:rounded-md bg-white shadow-xl'>
                  <div className='px-5 lg:px-6 w-full text-left lg:mb-3'>
                    <Dialog.Title
                      as='div'
                      className='text-lg font-medium leading-6 text-gray-900'
                    >
                      <h5 className='h5 sm:hidden'>
                        {t('notifications.notifications')}
                      </h5>
                      <h4 className='h4 hidden sm:block lg:hidden'>
                        {t('notifications.notifications')}
                      </h4>
                      <h3 className='h3 hidden lg:block'>
                        {' '}
                        {t('notifications.notifications')}
                      </h3>
                    </Dialog.Title>
                    <Button
                      className='absolute top-2 right-2 focus:border-2 focus:border-gray-800'
                      variant='outline'
                      size='sm'
                      onClick={toggleModal}
                    >
                      <XMarkIcon className='w-6' aria-hidden='true' />
                    </Button>
                  </div>
                  <div className='mt-2'>
                    <NotificationsTabs />
                  </div>
                  <div className='w-full py-2 px-4 border-t bg-white shadow-lg sticky bottom-0'>
                    <Button
                      className='w-full inline-flex gap-1'
                      onClick={markAllAsRead}
                    >
                      <CheckCircleIcon className='w-5' />{' '}
                      {t('notifications.mark_all_as_read')}
                    </Button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default withTranslation()(NotificationsDialog);
