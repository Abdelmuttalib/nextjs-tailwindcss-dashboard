import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { TFunction } from 'next-i18next';
import { Fragment } from 'react';
import { withTranslation } from 'react-i18next';

import { formatDate } from '@/lib/date';

import Badge from '@/components/ui/badge';
import { IconButton } from '@/components/ui/icon-button';

export interface AlgorithmDetailsT {
  _id: string;
  projectName: string;
  projectUnionId: string;
  status: boolean;
  algorithm: string;
  deviceId: string;
  pid: string;
  lastOffline: string;
  __v: number;
}

const DeviceAlgorithmDetailsDialog = ({
  algorithmData,
  isOpen,
  closeModal,
  t,
}: {
  algorithmData: AlgorithmDetailsT[];
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
              <Dialog.Panel className='absolute right-0 left-0 bottom-0 h-[70%] w-full overflow-y-scroll rounded-t-md bg-white py-2.5 shadow-xl dark:bg-gray-900 sm:h-[80%] lg:min-h-screen lg:max-w-7xl lg:rounded-md xl:left-auto xl:top-0 xl:right-0'>
                <div className='w-full px-5 text-left lg:mb-3 lg:px-6'>
                  <Dialog.Title
                    as='div'
                    className='flex items-center gap-3 text-lg font-medium leading-6 text-gray-900 dark:text-gray-200'
                  >
                    <h5 className='h5 sm:hidden'>
                      {t('pages.dashboard.devices.device_algorithm')}
                    </h5>
                    <h4 className='h4 hidden sm:block lg:hidden'>
                      {t('pages.dashboard.devices.device_algorithm')}
                    </h4>
                    <h3 className='h3 hidden lg:block'>
                      {t('pages.dashboard.devices.device_algorithm')}
                    </h3>
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
                <div className='-mx-4 w-full overflow-x-auto px-8 py-4 sm:px-10'>
                  <div className='inline-block min-w-full overflow-hidden rounded-lg shadow'>
                    <table className='min-w-full'>
                      <thead className='bg-gray-50 dark:bg-gray-800/50'>
                        <tr className='border-b-2 border-gray-200 text-left text-gray-600 dark:border-gray-800 dark:text-gray-200'>
                          <th className='label-sm whitespace-nowrap px-5 py-4'>
                            <span>
                              {t('pages.dashboard.devices.project_name')}
                            </span>
                          </th>
                          <th className='label-sm whitespace-nowrap px-5 py-4'>
                            <span>
                              {t('pages.dashboard.devices.algorithm')}
                            </span>
                          </th>
                          <th className='label-sm whitespace-nowrap px-5 py-4'>
                            <span>
                              {t('pages.dashboard.devices.device_id')}
                            </span>
                          </th>
                          <th className='label-sm whitespace-nowrap px-5 py-4'>
                            <span>{t('pages.dashboard.devices.status')}</span>
                          </th>
                          <th className='label-sm whitespace-nowrap px-5 py-4'>
                            <span>
                              {t('pages.dashboard.devices.last_offline')}
                            </span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {algorithmData &&
                          algorithmData.map((data: AlgorithmDetailsT) => (
                            <tr
                              key={data?._id}
                              className='body-md whitespace-nowrap border-b border-gray-200 bg-white text-gray-900 dark:border-gray-800/50 dark:bg-gray-800/40 dark:text-gray-200'
                            >
                              <td className='px-5 py-5'>
                                <p className='body-md'>
                                  {data?.projectName ?? '-'}
                                </p>
                              </td>
                              <td className='px-5 py-5'>
                                <p className='body-md'>
                                  {data?.algorithm ?? '-'}
                                </p>
                              </td>
                              <td className='px-5 py-5'>
                                <p className='body-md'>
                                  {data?.deviceId ?? '-'}
                                </p>
                              </td>

                              <td className='px-5 py-5'>
                                <Badge color={data.status ? 'green' : 'red'}>
                                  {data.status
                                    ? t('pages.dashboard.source_query.online')
                                    : t('pages.dashboard.source_query.offline')}
                                </Badge>
                              </td>
                              <td className='px-5 py-5'>
                                <p className='body-md'>
                                  {data.lastOffline
                                    ? formatDate(data.lastOffline)
                                    : '-'}
                                </p>
                              </td>
                            </tr>
                          ))}
                        {algorithmData && algorithmData.length === 0 && (
                          <tr className='body-md whitespace-nowrap border-b border-gray-200 bg-white text-gray-900 dark:border-gray-800/50 dark:bg-gray-800/40 dark:text-gray-200'>
                            <td className='px-5 py-5'>
                              <p>-</p>
                            </td>
                            <td className='px-5 py-5'>
                              <p>-</p>
                            </td>
                            <td className='px-5 py-5'>
                              <p>-</p>
                            </td>

                            <td className='px-5 py-5'>-</td>
                            <td className='px-5 py-5'>
                              <p>-</p>
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
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

export default withTranslation()(DeviceAlgorithmDetailsDialog);

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
