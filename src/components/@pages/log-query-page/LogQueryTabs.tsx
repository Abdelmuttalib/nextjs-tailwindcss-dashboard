import { Tab } from '@headlessui/react';
import React from 'react';

import cn from '@/lib/cn';

const LogQueryTabs = ({
  logTypes,
  setSelectedLogType,
}: {
  logTypes: string[];
  setSelectedLogType: (tab: string) => void;
}) => {
  return (
    <div className='w-full overflow-auto rounded'>
      <Tab.Group>
        <Tab.List className='flex bg-gray-100 dark:bg-gray-800/10'>
          {logTypes.map((logType) => (
            <Tab
              key={logType}
              as='button'
              onClick={() => {
                setSelectedLogType(logType);
              }}
              className={({ selected }) =>
                cn(
                  'sm:label-small border-t-4 border-transparent px-4 py-3 text-sm leading-5 sm:px-5 sm:py-4',
                  'whitespace-nowrap focus:bg-gray-200 focus:outline-none dark:hover:dark:bg-gray-800/50',
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

export default LogQueryTabs;
