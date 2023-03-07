import { TFunction } from 'next-i18next';
import React, { useEffect, useState } from 'react';
import { withTranslation } from 'react-i18next';

import DeviceAlgorithmDetailsDialog from '@/components/@pages/devices-page/DevicesAlgorithmsTable/DeviceAlgorithmDetailsDialog';
import { Button } from '@/components/ui/button';

import {
  AlgorithmT,
  DeviceAlgorithmsT,
  InitializedDeviceAlgorithmsT,
  UninitializedDeviceAlgorithmsT,
} from './types';

type DevicesAlgorithmsTableProps = {
  data: DeviceAlgorithmsT[];
  t: TFunction;
};

const DevicesAlgorithmsTable = ({ data, t }: DevicesAlgorithmsTableProps) => {
  const [algorithmType, setAlgorithmType] = useState<AlgorithmT>('safety');
  const [projectUnionId, setProjectUnionId] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (data && data[0] && data[0]['unionId']) {
      setProjectUnionId(data[0]['unionId'] as string);
    }
  }, [data]);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <DeviceAlgorithmDetailsDialog
        algorithmType={algorithmType}
        projectUnionId={projectUnionId}
        isOpen={isOpen}
        closeModal={closeModal}
      />
      {data && data[0] && data[0].unionId && (
        <div className='mb-10 flex flex-col gap-2'>
          {!data[0].status && (
            <p className='label-sm'>
              {t('pages.dashboard.devices.status')}: Algorithm not initialized
            </p>
          )}
          <p className='label-sm'>unionId: {data[0].unionId}</p>
        </div>
      )}
      <div className='grid-rows-7 grid w-full max-w-lg grid-cols-3 sm:grid-cols-2'>
        {data && data[0] && data[0].status && (
          <div className='col-span-2 w-full rounded-l-lg bg-gray-50 dark:bg-gray-800/50 sm:col-span-1'>
            <h3 className='label-md h-10 w-full bg-gray-50 pt-1 text-center text-gray-800 dark:bg-gray-900 dark:text-gray-200'>
              {t('pages.dashboard.devices.algorithm')}
            </h3>

            {data &&
              data[1] &&
              data[1].counts &&
              data[1].counts.map(
                (
                  object:
                    | InitializedDeviceAlgorithmsT
                    | UninitializedDeviceAlgorithmsT
                ) => {
                  const objectKeys = Object.keys(object);
                  return objectKeys.map((objectKey) => (
                    <div
                      key={objectKey}
                      className='label-sm whitespace-nowrap px-1.5 py-3 sm:px-5'
                    >
                      <Button
                        type='button'
                        size='sm'
                        className='w-full rounded-lg bg-gray-100 py-3 text-gray-600 hover:bg-gray-200 hover:text-gray-700 focus:border-gray-600 focus:bg-gray-200/50 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-800/50'
                        onClick={() => {
                          if (objectKey === 'Status') {
                            return;
                          }
                          setIsOpen(true);
                          setAlgorithmType(objectKey as AlgorithmT);
                        }}
                      >
                        {objectKey}
                      </Button>
                    </div>
                  ));
                }
              )}
          </div>
        )}
        {data && data[0] && data[0].status && (
          <div className='grid-rows-7 col-span-1 grid max-w-xs rounded-r-lg bg-gray-50 dark:bg-gray-800/40'>
            <h3 className='label-md h-10 w-full bg-gray-50 pt-1 text-center text-gray-800 dark:bg-gray-900 dark:text-gray-200'>
              {t('pages.dashboard.devices.active_devices')}
            </h3>
            {data &&
              data[1] &&
              data[1].counts &&
              data[1].counts.map(
                (
                  object:
                    | InitializedDeviceAlgorithmsT
                    | UninitializedDeviceAlgorithmsT
                ) => {
                  const objectKeys = Object.keys(object);
                  return objectKeys.map((objectKey) => (
                    <div key={objectKey} className='whitespace-nowrap py-4'>
                      <p className='body-md text-center'>{object[objectKey]}</p>
                    </div>
                  ));
                }
              )}
          </div>
        )}
      </div>
    </div>
  );
};

export default withTranslation()(DevicesAlgorithmsTable);
