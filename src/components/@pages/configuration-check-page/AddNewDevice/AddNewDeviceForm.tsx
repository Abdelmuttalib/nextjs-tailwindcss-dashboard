import { zodResolver } from '@hookform/resolvers/zod';
import { TFunction } from 'next-i18next';
import React, { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { withTranslation } from 'react-i18next';
import { toast } from 'sonner';
import { useSWRConfig } from 'swr';
import { z } from 'zod';

import { fetchAPI } from '@/lib/api';

import { ProjectT } from '@/components/@pages/server-status-overview-page/types';
import { Button } from '@/components/ui/button';

const addNewDeviceFormSchema = z.object({
  projectName: z.string().nonempty('Kindly enter a project name'),
  projectInfo: z.string().nonempty('Kindly enter project information'),
  deviceInfo: z.string().nonempty('Kindly enter device information'),
  deviceType: z.string().nonempty('Kindly enter device type'),
  unionId: z.string().nonempty('Kindly enter a union ID'),
});

type TAddNewDeviceFormFields = z.infer<typeof addNewDeviceFormSchema>;

const AddNewDeviceForm: FC<{
  t: TFunction;
  defaultUnionId: ProjectT['unionId'];
  defaultProjectName: ProjectT['projectName'];
  defaultProjectInfo: ProjectT['projectInfo'];
  closeModal: () => void;
}> = ({
  t,
  defaultUnionId,
  defaultProjectName,
  defaultProjectInfo,
  closeModal,
}) => {
  const { mutate } = useSWRConfig();
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<TAddNewDeviceFormFields>({
    resolver: zodResolver(addNewDeviceFormSchema),
    defaultValues: {
      unionId: defaultUnionId,
      projectName: defaultProjectName,
      projectInfo: defaultProjectInfo,
    },
  });

  const onAddNewDevice: SubmitHandler<TAddNewDeviceFormFields> = (data) => {
    fetchAPI
      .post('/device-configurations/add', data)
      .then(() => {
        toast.success('Device added successfully');
        mutate('/device-configurations');
        closeModal();
      })
      .catch((error) => {
        if (error.response.data.message) {
          toast.error(error.response.data.message);
        } else {
          toast.error('An error occurred, kindly try again');
        }
      });
  };

  return (
    <form
      onSubmit={handleSubmit(onAddNewDevice)}
      className='flex flex-col gap-3'
    >
      <div>
        <label htmlFor='projectName'>
          {t('pages.dashboard.configuration_check.project_name')}
          <input
            id='projectName'
            type='text'
            placeholder='Enter project name'
            className='input-2'
            {...register('projectName', { required: true })}
            disabled
          />
          {errors.projectName && (
            <span className='text-sm text-red-500'>
              {errors.projectName.message}
            </span>
          )}
        </label>
      </div>
      <div>
        <label htmlFor='projectInfo'>
          {t('pages.dashboard.configuration_check.project_info')}
          <input
            id='projectInfo'
            type='text'
            placeholder='Enter project info'
            className='input-2'
            {...register('projectInfo', { required: true })}
            disabled
          />
          {errors.projectInfo && (
            <span className='text-sm text-red-500'>
              {errors.projectInfo.message}
            </span>
          )}
        </label>
      </div>
      <div>
        <label htmlFor='unionId' className='body-sm'>
          Union ID
          <input
            id='unionId'
            type='text'
            placeholder='Enter union ID'
            className='input-2'
            {...register('unionId', { required: true })}
            disabled
          />
          {errors.unionId && (
            <span className='text-sm text-red-500'>
              {errors.unionId.message}
            </span>
          )}
        </label>
      </div>
      <div>
        <label htmlFor='deviceInfo'>
          {t('pages.dashboard.configuration_check.device_info')}
          <input
            id='deviceInfo'
            type='text'
            placeholder='Enter device info'
            className='input-2'
            {...register('deviceInfo', { required: true })}
          />
          {errors.deviceInfo && (
            <span className='text-sm text-red-500'>
              {errors.deviceInfo.message}
            </span>
          )}
        </label>
      </div>

      <div>
        <label htmlFor='deviceType'>
          {t('pages.dashboard.configuration_check.device_info')}
          <input
            id='deviceType'
            type='text'
            placeholder='Enter device type'
            className='input-2'
            {...register('deviceType', { required: true })}
          />
          {errors.deviceType && (
            <span className='text-sm text-red-500'>
              {errors.deviceType.message}
            </span>
          )}
        </label>
      </div>

      <div className='mt-4 flex justify-end space-x-2'>
        <Button type='button' variant='outline' onClick={closeModal}>
          {t('pages.dashboard.configuration_check.cancel')}
        </Button>
        <Button
          type='submit'
          disabled={Object.values(errors).some((error) => error) || !isDirty}
        >
          {t('pages.dashboard.configuration_check.add_new_device')}
        </Button>
      </div>
    </form>
  );
};

export default withTranslation()(AddNewDeviceForm);
