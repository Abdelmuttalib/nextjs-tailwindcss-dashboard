import React from 'react';

import { SkeletonLoader } from '@/components/loaders';

const LogQueryTableRowLoader = () => {
  return (
    <tr className='body-md whitespace-nowrap border-b border-gray-200 bg-white text-gray-900 dark:border-gray-800/50 dark:bg-gray-800/40 dark:text-gray-200'>
      <td className='px-5 py-5'>
        <div>
          <SkeletonLoader className='h-7 w-full' />
        </div>
      </td>
      <td className='px-5 py-5'>
        <div>
          <SkeletonLoader className='h-7 w-full' />
        </div>
      </td>
      <td className='max-w-[150px] px-5 py-5'>
        <div className='flex flex-col gap-1 truncate'>
          <div className='truncate'>
            <SkeletonLoader className='h-6 w-full' />
          </div>
          <div className='max-w-sm truncate'>
            <SkeletonLoader className='h-6 w-full' />
          </div>
        </div>
      </td>
      <td className='px-5 py-5'>
        <SkeletonLoader className='h-7 w-20 rounded-full' />
      </td>
      <td className='px-5 py-5'>
        <div className='text-gray-600'>
          <SkeletonLoader className='h-7 w-16' />
        </div>
      </td>
      <td className='px-5 py-4'>
        <SkeletonLoader className='h-8 w-36 rounded-full' />
      </td>
    </tr>
  );
};

export default LogQueryTableRowLoader;
