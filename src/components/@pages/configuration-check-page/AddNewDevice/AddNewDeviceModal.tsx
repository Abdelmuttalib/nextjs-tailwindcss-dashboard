import { Dialog, Transition } from '@headlessui/react';
import { PlusIcon } from '@heroicons/react/20/solid';
import { TFunction } from 'next-i18next';
import { FC, Fragment, useState } from 'react';
import { withTranslation } from 'react-i18next';

import AddNewDeviceForm from '@/components/@pages/configuration-check-page/AddNewDevice/AddNewDeviceForm';
import { ProjectT } from '@/components/@pages/server-status-overview-page/types';
import { Button } from '@/components/ui/button';

const AddNewDeviceModal: FC<{
  t: TFunction;
  defaultUnionId: ProjectT['unionId'];
  defaultProjectName: ProjectT['projectName'];
  defaultProjectInfo: ProjectT['projectInfo'];
}> = ({ t, defaultUnionId, defaultProjectName, defaultProjectInfo }) => {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <Button
        className='inline-flex w-fit gap-1'
        type='button'
        onClick={openModal}
      >
        <PlusIcon className='w-6' />
        {t('pages.dashboard.configuration_check.add_new_device')}
      </Button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25 dark:bg-opacity-80' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='w-full max-w-xl transform overflow-hidden rounded-2xl bg-white py-8 px-4 text-left align-middle shadow-xl transition-all dark:bg-gray-900 lg:py-7 lg:px-9'>
                  <Dialog.Title
                    as='h3'
                    className='h4 mb-3 text-lg font-medium leading-6 text-gray-900 dark:text-gray-200'
                  >
                    {t('pages.dashboard.configuration_check.add_new_device')}
                  </Dialog.Title>
                  <AddNewDeviceForm
                    defaultUnionId={defaultUnionId}
                    defaultProjectName={defaultProjectName}
                    defaultProjectInfo={defaultProjectInfo}
                    closeModal={closeModal}
                  />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default withTranslation()(AddNewDeviceModal);
