import {
  ArrowPathIcon,
  DevicePhoneMobileIcon,
  XMarkIcon,
} from '@heroicons/react/20/solid';

import cn from '@/lib/cn';

export type ToastT = {
  type: 'error' | 'sync' | 'device' | 'Device';
  description: string;
};

const Toast = ({ description, type }: ToastT) => {
  const typeToLowerCase = type.toLowerCase();

  return (
    <div
      className={cn(
        'inline-flex h-20 w-full min-w-[22.5rem] items-center justify-between truncate rounded-lg border-2 bg-gradient-to-br from-white py-4 pl-4 pr-2 text-sm shadow-xl dark:border-gray-700/70 dark:from-gray-900/90 sm:w-96 sm:min-w-[22.5rem]',
        {
          'to-red-50 shadow-red/10 dark:to-gray-900':
            typeToLowerCase === 'error',
          'to-blue-100 shadow-blue-500/10 dark:to-gray-900':
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
        <div className='block w-fit rounded-full bg-teal-500/20 p-2'>
          <DevicePhoneMobileIcon className='h-6 text-teal-500' />
        </div>
      )}
      <p className='body-md mx-2 w-full truncate text-gray-900 dark:text-gray-200'>
        {description}
      </p>
      {/* <button
        className='rounded-full p-1.5 text-gray-700 outline-transparent hover:bg-gray-100 focus:outline-transparent dark:text-gray-500 dark:hover:bg-gray-700'
        onClick={() => removeToast(id)}
        aria-label='Close'
      >
        <XMarkIcon className='w-6' />
      </button> */}
    </div>
  );
};

export default Toast;
