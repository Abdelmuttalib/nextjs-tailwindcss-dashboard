import { Dialog, Transition } from '@headlessui/react';
import { CalendarDaysIcon } from '@heroicons/react/24/outline';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { TFunction } from 'next-i18next';
import { FC, Fragment, useState } from 'react';
import { withTranslation } from 'react-i18next';

import cn from '@/lib/cn';

import { Meeting } from '@/components/TableExample';
import {
  DialogContent,
  DialogPortal,
  DialogRoot,
  DialogTitle,
} from '@/components/ui/animated-dialog';
import Badge from '@/components/ui/badge';
import { IconButton } from '@/components/ui/icon-button';

interface Props {
  t: TFunction;
  isOpen: boolean;
  closeModal: (isOpen: boolean) => void;
  meeting: Meeting;
}

const DialogExample: FC<Props> = ({ t, isOpen, closeModal, meeting }) => {
  const { id, title, date, time, organizer, attendees, status } = meeting;
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
              enterFrom='opacity-0 -translate-y-1 sm:-translate-y-0 sm:-translate-x-1'
              enterTo='opacity-100 translate-y-0 sm:translate-x-0'
              leave='duration-200 ease-in'
              leaveFrom='opacity-100 translate-y-0 sm:translate-x-0'
              leaveTo='opacity-0 -translate-y-1 sm:-translate-y-0 sm:-translate-x-1'
            >
              <Dialog.Panel className='absolute right-0 left-0 bottom-0 h-[70%] w-full overflow-y-scroll rounded-t-md bg-white py-2.5 shadow-xl dark:bg-gray-900 sm:left-auto sm:top-0 sm:right-0 sm:min-h-screen sm:max-w-sm sm:rounded-md md:max-w-md lg:max-w-lg'>
                <div className='w-full px-5 text-left lg:mb-3 lg:px-6'>
                  <Dialog.Title
                    as='div'
                    className='flex items-center gap-3 text-lg font-medium leading-6 text-gray-900 dark:text-gray-200'
                  >
                    <div>
                      <h5 className='h5 sm:hidden'>
                        {t('components.headings.meeting_details')}
                      </h5>
                      <h4 className='h4 hidden sm:block lg:hidden'>
                        {t('components.headings.meeting_details')}
                      </h4>
                      <h3 className='h3 hidden lg:block'>
                        {t('components.headings.meeting_details')}
                      </h3>
                    </div>
                    <Badge color='green'>{status}</Badge>
                  </Dialog.Title>
                  <IconButton
                    className='absolute top-2 right-2 focus:border-2 focus:border-gray-800'
                    variant='outline'
                    size='xs'
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
                          {date} at {time}
                        </p>
                      </div>
                      <hr className='dark:border-t dark:border-gray-800' />
                      <div className='label-md flex flex-col gap-1'>
                        <p className=' inline-block dark:text-gray-200'>
                          {t('pages.dashboard.home.table.meeting_id')}
                        </p>
                        <p className='body-sm md:body-md ml-1 inline-block text-gray-500'>
                          {id}
                        </p>
                      </div>
                      <div className='label-md flex flex-col gap-2'>
                        <p className=' inline-block dark:text-gray-200'>
                          {t('pages.dashboard.home.table.meeting_title')}
                        </p>
                        <p className='inline-block text-gray-500'>{title}</p>
                      </div>
                      <div className='label-md flex flex-col gap-1'>
                        <p className='inline-block dark:text-gray-200'>
                          {t('pages.dashboard.home.table.organizer')}:
                        </p>{' '}
                        <p className='body-sm md:body-md inline-block text-gray-500'>
                          {organizer}
                        </p>
                      </div>
                      <div className='label-md flex flex-col gap-1'>
                        <p className='inline-block dark:text-gray-200'>
                          {t('pages.dashboard.home.table.attendees')}:
                        </p>{' '}
                        <p className='body-sm md:body-md inline-block text-gray-500'>
                          {attendees}
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

export default withTranslation()(DialogExample);

export function D({ meeting }: { meeting: Meeting }) {
  const [open, setOpen] = useState(false);
  const { id, title, date, time, organizer, attendees, status } = meeting;
  return (
    <>
      <DialogRoot open={open} onClose={() => setOpen(false)}>
        <DialogPortal>
          <DialogContent className={cn('bg-white')} fullScreen>
            <DialogTitle as='h3'>
              <h3>Meeting Details</h3>
            </DialogTitle>
            <Badge color='green'>{status}</Badge>
            <p className='body-sm inline text-gray-600'>dialog description</p>

            <div className='mt-2'>
              <div>
                <div className='mb-6 px-5 lg:px-6'>
                  <div className='flex flex-col gap-4 md:gap-5'>
                    <div className='flex items-center gap-1 text-gray-500'>
                      <CalendarDaysIcon className='w-7 text-gray-500' />
                      <p className='label-md inline-block'>
                        {date} at {time}
                      </p>
                    </div>
                    <hr className='dark:border-t dark:border-gray-800' />
                    <div className='label-md flex flex-col gap-1'>
                      <p className=' inline-block dark:text-gray-200'>
                        Meeting ID
                      </p>
                      <p className='body-sm md:body-md ml-1 inline-block text-gray-500'>
                        {id}
                      </p>
                    </div>
                    <div className='label-md flex flex-col gap-2'>
                      <p className=' inline-block dark:text-gray-200'>
                        Meeting Title
                      </p>
                      <p className='inline-block text-gray-500'>{title}</p>
                    </div>
                    <div className='label-md flex flex-col gap-1'>
                      <p className='inline-block dark:text-gray-200'>
                        Organizer:
                      </p>{' '}
                      <p className='body-sm md:body-md inline-block text-gray-500'>
                        {organizer}
                      </p>
                    </div>
                    <div className='label-md flex flex-col gap-1'>
                      <p className='inline-block dark:text-gray-200'>
                        Attendees:
                      </p>{' '}
                      <p className='body-sm md:body-md inline-block text-gray-500'>
                        {attendees}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </DialogPortal>
      </DialogRoot>
    </>
  );
}
