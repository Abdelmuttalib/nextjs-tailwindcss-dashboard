import { Dialog, Transition } from '@headlessui/react';
import { CalendarDaysIcon } from '@heroicons/react/24/outline';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { TFunction } from 'next-i18next';
import { Fragment } from 'react';
import { withTranslation } from 'react-i18next';

import Badge from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

type LogT = {
  _id: string;
  date: string;
  projectId: string;
  deviceId: string;
  type: 'INFO' | 'WARNING' | 'DEBUG' | 'ERROR' | 'CRITICAL';
  info: string;
  description: string;
  __v: number;
};

const logStatusTypes: {
  [key in LogT['type']]: { label: string; color: string };
} = {
  INFO: { label: 'INFO', color: 'gray' },
  WARNING: { label: 'WARNING', color: 'yellow' },
  DEBUG: { label: 'DEBUG', color: 'blue' },
  ERROR: { label: 'ERROR', color: 'red' },
  CRITICAL: { label: 'CRITICAL', color: 'red' },
};

const LogQueryDetailsDialog = ({
  logData,
  isOpen,
  closeModal,
  t,
}: {
  logData: LogT;
  isOpen: boolean;
  closeModal: (isOpen: boolean) => void;
  t: TFunction;
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
              <Dialog.Panel className='absolute right-0 left-0 bottom-0 w-full sm:max-w-sm md:max-w-md lg:max-w-lg sm:left-auto sm:top-0 sm:right-0 overflow-y-scroll h-[70%] py-2.5 sm:min-h-screen rounded-t-md sm:rounded-md bg-white shadow-xl'>
                <div className='px-5 lg:px-6 w-full text-left lg:mb-3'>
                  <Dialog.Title
                    as='div'
                    className='text-lg font-medium leading-6 text-gray-900 flex items-center gap-3'
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
                    <Badge
                      color={
                        logStatusTypes[
                          logData.type
                        ].color.toLocaleLowerCase() ?? 'gray'
                      }
                    >
                      {logData.type.toLocaleLowerCase()}
                    </Badge>
                  </Dialog.Title>
                  <Button
                    className='absolute top-4 right-2 focus:border-2 focus:border-gray-800'
                    variant='outline'
                    size='sm'
                    onClick={() => closeModal(isOpen)}
                  >
                    <XMarkIcon className='w-6' aria-hidden='true' />
                  </Button>
                </div>

                {/* data */}
                <div>
                  <div className='mb-6 px-5 lg:px-6'>
                    <div className='flex flex-col gap-4 md:gap-5'>
                      <div className='flex text-gray-500 items-center gap-1'>
                        <CalendarDaysIcon className='w-7 text-gray-500' />
                        <p className='label-md inline-block'>
                          {new Date(logData.date).toLocaleDateString('en-us', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                            hour: 'numeric',
                            minute: 'numeric',
                          })}
                        </p>
                      </div>
                      <hr />

                      <div className='flex flex-col gap-1 label-md md:label-lg'>
                        <p className='inline-block md:label-lg'>
                          {t('pages.dashboard.log_query.project_id')}
                        </p>
                        <p className='ml-1 body-sm md:body-md text-gray-500 inline-block'>
                          {logData.projectId ?? '-'}
                        </p>
                      </div>

                      <div className='flex flex-col gap-1 label-md md:label-lg'>
                        <p className='inline-block md:label-lg'>
                          {t('pages.dashboard.log_query.device_id')}:
                        </p>
                        <p className='text-gray-500 inline-block'>
                          {logData.deviceId ?? '-'}
                        </p>
                      </div>
                      <div className='flex flex-col gap-1 label-md md:label-lg'>
                        <p className='inline-block md:label-lg'>
                          {t('pages.dashboard.log_query.info')}:
                        </p>{' '}
                        <p className='body-sm md:body-md inline-block text-gray-500'>
                          {logData.info ?? '-'}
                        </p>
                      </div>

                      <div className='flex flex-col gap-1 label-md'>
                        <p className='inline-block md:label-lg'>
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

// <Transition.Root appear show={isOpen} as='template'>
//       <Dialog
//         as='div'
//         className='relative z-10'
//         onClose={() => closeModal(isOpen)}
//       >
//         <Transition.Child
//           as='template'
//           enter='duration-300 ease-out'
//           enter-from='opacity-0'
//           enter-to='opacity-100'
//           leave='duration-200 ease-in'
//           leave-from='opacity-100'
//           leave-to='opacity-0'
//         >
//           <div className='fixed inset-0 bg-gray-900 bg-opacity-40' />
//         </Transition.Child>

//         <div className='fixed inset-0 overflow-y-auto'>
//           <div className='flex min-h-full items-center justify-center'>
//             <Transition.Child
//               as='template'
//               enter='duration-300 ease-out'
//               enter-from='opacity-0 -translate-y-1 sm:-translate-y-0 sm:-translate-x-1'
//               enter-to='opacity-100 translate-y-0 sm:translate-x-0'
//               leave='duration-200 ease-in'
//               leave-from='opacity-100 translate-y-0 sm:translate-x-0'
//               leave-to='opacity-0 -translate-y-1 sm:-translate-y-0 sm:-translate-x-1'
//             >
//               <Dialog.Panel className='absolute right-0 left-0 bottom-0 w-full sm:max-w-sm md:max-w-md lg:max-w-xl sm:left-auto sm:top-0 sm:right-0 overflow-y-scroll h-[70%] py-2.5 lg:py-4 sm:min-h-screen rounded-t-md sm:rounded-md bg-white shadow-xl'>
//                 <div className='px-5 lg:px-6 w-full text-left lg:mb-3'>
//                   <Dialog.Title as='div'>
//                     <h5 className='h5 sm:hidden'>
//                       {t('pages.dashboard.log_query.log_query_details')}
//                     </h5>
//                     <h4 className='h4 hidden sm:block lg:hidden'>
//                       {t('pages.dashboard.log_query.log_query_details')}
//                     </h4>
//                     <h3 className='h3 hidden lg:block'>
//                       {t('pages.dashboard.log_query.log_query_details')}
//                     </h3>
//                   </Dialog.Title>
//                   <Button
//                     className='absolute top-4 right-2 focus:border-2 focus:border-gray-800'
//                     variant='outline'
//                     size='sm'
//                     onClick={() => closeModal(isOpen)}
//                   >
//                     x
//                   </Button>
//                 </div>

//                 {/* Tabs  */}
//                 <div className='mt-6 mb-6 px-5 lg:px-6'>
//                   <div className='flex flex-col gap-4'>
//                     <div className='flex'>
//                       <p className='label-md md:label-lg inline-block'>
//                         {t('pages.dashboard.log_query.date')}:
//                         <p className='body-md inline-block text-gray-600'>
//                           {new Date(logData.date).toLocaleDateString()}
//                         </p>
//                       </p>
//                     </div>
//                     <div className='flex'>
//                       <p className='label-md md:label-lg inline-block'>
//                         {t('pages.dashboard.log_query.project_id')}:
//                         <p className='body-md inline-block text-gray-600'>
//                           {logData.projectId ?? '-'}
//                         </p>
//                       </p>
//                     </div>
//                     <div className='flex'>
//                       <p className='label-md md:label-lg inline-block'>
//                         {t('pages.dashboard.log_query.device_id')}:
//                         <p className='body-md inline-block text-gray-600'>
//                           {logData.deviceId ?? '-'}
//                         </p>
//                       </p>
//                     </div>
//                     <div className='flex'>
//                       <p className='label-md md:label-large inline-block'>
//                         {t('pages.dashboard.log_query.type')}:
//                         <Badge color='gray'>
//                           {/* {logTypesData[logData.type].label.toLocaleLowerCase()} */}
//                           {logData.type}
//                         </Badge>
//                       </p>
//                     </div>
//                     <div className='flex'>
//                       <p className='label-md md:label-lg inline-block'>
//                         {t('pages.dashboard.log_query.info')}:
//                         <p className='body-md inline-block text-gray-600'>
//                           {logData.info ?? '-'}
//                         </p>
//                       </p>
//                     </div>
//                     <div className='flex'>
//                       <p className='label-md md:label-lg inline-block'>
//                         {t('pages.dashboard.log_query.description')}:
//                         <p className='body-md inline-block text-gray-600'>
//                           {logData.description ?? '-'}
//                         </p>
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </Dialog.Panel>
//             </Transition.Child>
//           </div>
//         </div>
//       </Dialog>
//     </Transition.Root>
