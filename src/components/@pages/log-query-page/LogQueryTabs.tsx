import { Tab } from '@headlessui/react';
import React from 'react';

import cn from '@/lib/cn';

const LogQueryTabs = ({
  logsTypes,
  setSelectedTab,
}: {
  logsTypes: string[];
  setSelectedTab: (tab: string) => void;
}) => {
  return (
    <div className='w-full overflow-auto rounded'>
      <Tab.Group>
        <Tab.List className='flex bg-gray-100'>
          {logsTypes.map((logType) => (
            <Tab
              key={logType}
              as='button'
              onClick={() => {
                setSelectedTab(logType);
              }}
              className={({ selected }) =>
                cn(
                  'px-4 sm:px-5 py-3 sm:py-4 text-sm sm:label-small border-t-4 border-transparent leading-5',
                  'focus:outline-none focus:bg-gray-200 whitespace-nowrap',
                  selected
                    ? 'border-black font-medium bg-gray-200'
                    : 'font-medium text-gray-500 bg-gray-100'
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
