import { Tab } from '@headlessui/react';
import React from 'react';

import cn from '@/lib/cn';

const TabsExample = () => {
  return (
    <div className='w-full overflow-auto rounded rounded-b-none'>
      <Tab.Group>
        <Tab.List className='flex bg-gray-100 dark:bg-gray-800/50'>
          {['All', 'Recent', 'Updated'].map((logType) => (
            <Tab
              key={logType}
              as='button'
              className={({ selected }) =>
                cn(
                  'lg:body-sm border-t-4 border-transparent px-4 py-3 leading-5 sm:px-5',
                  'whitespace-nowrap hover:bg-gray-200 focus:bg-gray-200 focus:outline-none dark:hover:bg-gray-800/80 dark:focus:bg-gray-800',
                  selected
                    ? 'border-black bg-gray-200 font-medium dark:border-primary-400 dark:bg-gray-800'
                    : 'bg-gray-100 font-medium text-gray-500 dark:bg-gray-800/50'
                )
              }
            >
              {logType}
            </Tab>
          ))}
        </Tab.List>
      </Tab.Group>
    </div>
  );
};

export default TabsExample;
