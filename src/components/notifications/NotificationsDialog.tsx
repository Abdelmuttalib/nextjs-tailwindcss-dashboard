import { BellIcon } from '@heroicons/react/20/solid';
import { withTranslation } from 'next-i18next';
import React, { Fragment, useState } from 'react';

import CustomDialog from '@/components/ui/animated-dialog';
import { IconButton } from '@/components/ui/icon-button';

import NotificationsTabs from './NotificationsTabs';

const NotificationsDialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen((prevValue) => !prevValue);

  return (
    <>
      <CustomDialog
        open={isOpen}
        onClose={toggleModal}
        title='Notifications'
        // className='px-0'
        fullScreen
        triggerButton={
          <IconButton
            className='relative'
            variant='ghost'
            onClick={toggleModal}
          >
            <span className='absolute top-4 right-4 inline-flex h-3 w-3 translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-red-600 text-xs font-bold leading-none text-white dark:bg-red-500'>
              9
            </span>
            <BellIcon
              className='w-5 text-foreground-light'
              aria-hidden='true'
            />
          </IconButton>
        }
      >
        <div className='-mx-6 py-2'>
          <NotificationsTabs />
        </div>
      </CustomDialog>
    </>
  );
};

export default withTranslation()(NotificationsDialog);

{
  /* <IconButton className='relative' variant='ghost' onClick={toggleModal}>
        <span className='absolute top-4 right-4 inline-flex h-4 w-4 translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-red-600 text-xs font-bold leading-none text-white dark:bg-red-500'>
          9+
        </span>
        <BellIcon className='w-6 text-foreground-light' aria-hidden='true' />
      </IconButton>

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
            <div className='fixed inset-0 bg-black bg-opacity-25 dark:bg-opacity-70' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-screen w-full items-center justify-center'>
              <Transition.Child
                as={Fragment}
                enter='duration-300 ease-out'
                enterFrom='opacity-0 -translate-y-1 sm:-translate-y-0 sm:-translate-x-1'
                enterTo='opacity-100 translate-y-0 sm:translate-x-0'
                leave='duration-200 ease-in'
                leaveFrom='opacity-100 translate-y-0 sm:translate-x-0'
                leaveTo='opacity-0 -translate-y-1 sm:-translate-y-0 sm:-translate-x-1'
              >
                <Dialog.Panel className='absolute right-0 left-0 bottom-0 h-[70%] w-full overflow-y-scroll rounded-t-md bg-white pt-2.5 shadow-xl dark:bg-gray-900 dark:text-gray-200 sm:left-auto sm:top-0 sm:right-0 sm:min-h-screen sm:max-w-sm sm:rounded-md md:max-w-md lg:max-w-lg'>
                  <div className='w-full px-5 text-left lg:mb-3 lg:px-6'>
                    <Dialog.Title
                      as='div'
                      className='text-lg font-medium leading-6 text-gray-900 dark:text-gray-200'
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

                    <IconButton
                      className='absolute top-2 right-2 focus:border-2 focus:border-gray-800'
                      variant='outline'
                      size='sm'
                      onClick={toggleModal}
                    >
                      <XMarkIcon className='w-6' aria-hidden='true' />
                    </IconButton>
                  </div>
                  <div>
                    <NotificationsTabs />
                  </div>
                  <Button
                    type='button'
                    className='w-full'
                    iconLeft={<CheckCircleIcon className='w-5' />}
                    variant='secondary'
                  >
                    {t('notifications.mark_all_as_read')}
                  </Button>
                  <div className='absolute bottom-0 w-full border-t bg-white py-2 px-4 shadow-lg'>
                    <Button
                      type='button'
                      className='inline-flex w-full gap-1'
                      iconLeft={<CheckCircleIcon className='w-5' />}
                      variant='link'
                    >
                      {t('notifications.mark_all_as_read')}
                    </Button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition> */
}
