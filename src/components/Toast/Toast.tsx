import {
  ArrowPathIcon,
  DevicePhoneMobileIcon,
  XMarkIcon,
} from '@heroicons/react/20/solid';
import { useEffect } from 'react';

import cn from '@/lib/cn';
import useToast, { ToastT } from '@/hooks/useToast';

type Props = {
  id: number;
  description: ToastT['description'];
  type: ToastT['type'];
};

const Toast = ({ id, description, type }: Props) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(id);
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  });

  const typeToLowerCase = type.toLowerCase();

  return (
    <div
      className={cn(
        'relative mx-auto mt-2 flex h-20 w-11/12 animate-fade-in-up items-center justify-between truncate rounded-lg border-2 bg-gradient-to-br from-white  py-4 pl-4 pr-2 text-sm shadow-xl dark:border-gray-700 dark:from-gray-800',
        {
          'to-red-50 shadow-red/10 dark:to-gray-900':
            typeToLowerCase === 'error',
          'to-blue-50 shadow-blue-500/10 dark:to-gray-900':
            typeToLowerCase === 'sync',
          'to-teal-50 shadow-teal-500/10 dark:to-gray-900':
            typeToLowerCase === 'device',
        }
      )}
    >
      {typeToLowerCase === 'error' && (
        <div className='block w-fit rounded-full bg-red-500/20 p-1.5'>
          <XMarkIcon className='h-6 w-6 text-red-600' />
        </div>
      )}
      {/* Sync Icon Label  */}
      {typeToLowerCase === 'sync' && (
        <div className='block w-fit rounded-full bg-blue-600/20 p-2'>
          <ArrowPathIcon className='h-6 w-6 text-blue-500' />
        </div>
      )}
      {typeToLowerCase === 'device' && (
        <div className='block w-fit rounded-full bg-teal-600/20 p-2'>
          <DevicePhoneMobileIcon className='h-6 text-teal-500' />
        </div>
      )}
      <p className='body-sm sm:body-md mx-2 w-full truncate'>{description}</p>
      <button
        className='rounded-full p-1.5 text-gray-700 outline-transparent hover:bg-gray-100 focus:outline-transparent dark:text-gray-500 dark:hover:bg-gray-700'
        onClick={() => removeToast(id)}
        aria-label='Close'
      >
        <XMarkIcon className='w-6' />
      </button>
    </div>
  );
};

export default Toast;
