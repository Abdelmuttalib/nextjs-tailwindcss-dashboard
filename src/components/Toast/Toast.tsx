import {
  ArrowPathIcon,
  XCircleIcon,
  XMarkIcon,
} from '@heroicons/react/20/solid';
import { useEffect } from 'react';

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

  return (
    <div className='animate-fade-in-up relative mx-auto mt-2 flex h-16 w-11/12 items-center justify-between rounded-lg border bg-white py-4 pl-4 pr-2 text-sm shadow md:w-full'>
      {type === 'error' && (
        <div className='block w-fit rounded-full bg-red-500/20 p-1.5'>
          <XMarkIcon className='h-5 w-5 text-red-600' />
        </div>
      )}
      {/* Sync Icon Label  */}
      {type === 'sync' && (
        <div className='block w-fit rounded-full bg-blue-600/20 p-2'>
          <ArrowPathIcon className='h-5 w-5 text-blue-500' />
        </div>
      )}
      <p className='body-sm mx-2 w-full truncate'>{description}</p>
      <button
        className='outline-transparent focus:outline-transparent'
        onClick={() => removeToast(id)}
        aria-label='Close'
      >
        <XCircleIcon className='w-6 text-primary-400' />
      </button>
    </div>
  );
};

export default Toast;
