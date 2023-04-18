import { TrashIcon } from '@heroicons/react/24/solid';
import { TFunction } from 'next-i18next';
import React, { FC } from 'react';
import { withTranslation } from 'react-i18next';
import { toast } from 'sonner';
import { useSWRConfig } from 'swr';

import { fetchAPI } from '@/lib/api';

import { Button } from '@/components/ui/button';

import { TProjectDevice } from '@/pages/configuration-check/[unionId]';

const ProjectDevicesTableRow: FC<{ t: TFunction; device: TProjectDevice }> = ({
  t,
  device,
}) => {
  const { mutate } = useSWRConfig();

  const onDeleteDevice = () => {
    fetchAPI
      .post('/device-configurations/delete', {
        unionId: device.unionId,
        deviceId: device.deviceId,
      })
      .then(() => {
        toast.success('Device deleted successfully');
        mutate('/device-configurations');
      })
      .catch((error) => {
        if (error.response.data.message) {
          toast.error(error.response.data.message);
        } else {
          toast.error('Something went wrong');
        }
      });
  };

  return (
    <tr
      key={device._id}
      className='body-md whitespace-nowrap border-b border-gray-200 bg-white text-gray-900 dark:border-gray-800/50 dark:bg-gray-800/40 dark:text-gray-200'
    >
      <td className='px-5 py-5'>
        <p>{device.deviceId ?? '-'}</p>
      </td>
      <td className='px-5 py-5'>
        <p>{device.deviceInfo ?? '-'}</p>
      </td>
      <td className='px-5 py-5'>
        <p>{device.deviceType ?? '-'}</p>
      </td>
      <td className='px-5 py-4'>
        <Button
          size='sm'
          variant='destructive-outline'
          className='inline-flex gap-1 capitalize'
          onClick={onDeleteDevice}
        >
          <TrashIcon className='w-5' />
          {t('pages.dashboard.configuration_check.delete_device')}
        </Button>
      </td>
      {/* <td className='px-5 py-5 text-gray-700'>
        <ChevronRightIcon className='w-6' />
      </td> */}
    </tr>
  );
};

export default withTranslation()(ProjectDevicesTableRow);
