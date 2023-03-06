import { Dialog, Transition } from '@headlessui/react';
import { CalendarDaysIcon } from '@heroicons/react/24/outline';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { TFunction } from 'next-i18next';
import { FC, Fragment } from 'react';
import { withTranslation } from 'react-i18next';

import { formatDate } from '@/lib/date';

import { getStatusTypeColor } from '@/components/@pages/log-query-page/log-status-types';
import Badge from '@/components/ui/badge';
import { IconButton } from '@/components/ui/icon-button';

import { LogT } from './types';

interface LogQueryDetailsDialogProps {
  logData: LogT;
  isOpen: boolean;
  closeModal: (isOpen: boolean) => void;
  t: TFunction;
}

const LogQueryDetailsDialog: FC<LogQueryDetailsDialogProps> = ({
  logData,
  isOpen,
  closeModal,
  t,
}) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as='div'
        className='relative z-10'
        onClose={() => closeModal(isOpen)}
      >
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
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='duration-200 ease-in'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Dialog.Panel className='absolute right-0 left-0 bottom-0 h-[70%] w-full overflow-y-scroll rounded-t-md bg-white py-2.5 shadow-xl dark:bg-gray-900 sm:left-auto sm:top-0 sm:right-0 sm:min-h-screen sm:max-w-sm sm:rounded-md md:max-w-md lg:max-w-lg'>
                <div className='w-full px-5 text-left lg:mb-3 lg:px-6'>
                  <Dialog.Title
                    as='div'
                    className='flex items-center gap-3 text-lg font-medium leading-6 text-gray-900 dark:text-gray-200'
                  >
                    <div>
                      <h5 className='h5 sm:hidden'>
                        {t('pages.dashboard.log_query.log_query_details')}
                      </h5>
                      <h4 className='h4 hidden sm:block lg:hidden'>
                        {t('pages.dashboard.log_query.log_query_details')}
                      </h4>
                      <h3 className='h3 hidden lg:block'>
                        {t('pages.dashboard.log_query.log_query_details')}
                      </h3>
                    </div>
                    <Badge color={getStatusTypeColor(logData.type) ?? 'gray'}>
                      {logData.type.toLocaleLowerCase()}
                    </Badge>
                  </Dialog.Title>
                  <IconButton
                    className='absolute top-4 right-2 focus:border-2 focus:border-gray-800'
                    variant='outline'
                    size='sm'
                    onClick={() => closeModal(isOpen)}
                  >
                    <XMarkIcon className='w-6' aria-hidden='true' />
                  </IconButton>
                </div>

                {/* data */}
                <div>
                  <div className='mb-6 px-5 lg:px-6'>
                    <div className='flex flex-col gap-4 md:gap-5'>
                      <div className='flex items-center gap-1 text-gray-500'>
                        <CalendarDaysIcon className='w-7 text-gray-500' />
                        <p className='label-md inline-block'>
                          {formatDate(logData.date)}
                        </p>
                      </div>
                      <hr className='dark:border-t dark:border-gray-800' />

                      <div className='label-md md:label-lg flex flex-col gap-1'>
                        <p className='md:label-lg inline-block dark:text-gray-200'>
                          {t('pages.dashboard.log_query.project_id')}
                        </p>
                        <p className='body-sm md:body-md ml-1 inline-block text-gray-500'>
                          {logData.projectId ?? '-'}
                        </p>
                      </div>

                      <div className='label-md md:label-lg flex flex-col gap-1'>
                        <p className='md:label-lg inline-block dark:text-gray-200'>
                          {t('pages.dashboard.log_query.device_id')}:
                        </p>
                        <p className='inline-block text-gray-500'>
                          {logData.deviceId ?? '-'}
                        </p>
                      </div>
                      <div className='label-md md:label-lg flex flex-col gap-1'>
                        <p className='md:label-lg inline-block dark:text-gray-200'>
                          {t('pages.dashboard.log_query.info')}:
                        </p>{' '}
                        <p className='body-sm md:body-md inline-block text-gray-500'>
                          {logData.info ?? '-'}
                        </p>
                      </div>

                      <div className='label-md flex flex-col gap-1'>
                        <p className='md:label-lg inline-block dark:text-gray-200'>
                          {t('pages.dashboard.log_query.description')}:
                        </p>
                        <p className='body-sm md:body-md inline-block text-gray-500'>
                          {logData.description ?? '-'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default withTranslation()(LogQueryDetailsDialog);
