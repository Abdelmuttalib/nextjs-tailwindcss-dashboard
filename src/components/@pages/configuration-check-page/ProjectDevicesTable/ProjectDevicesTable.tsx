import { TFunction } from 'next-i18next';
import React, { FC } from 'react';
import { withTranslation } from 'react-i18next';
import useSWR from 'swr';

import { fetchAPI } from '@/lib/api';

import ProjectDevicesTableRow from '@/components/@pages/configuration-check-page/ProjectDevicesTable/ProjectDevicesTableRow';

import { TProjectDevice } from '@/pages/configuration-check/[unionId]';

const ProjectDevicesTable: FC<{
  t: TFunction;
  projectDevices: TProjectDevice[];
}> = ({ t, projectDevices }) => {
  const fetcher = (url: string) =>
    fetchAPI
      .post(url, { unionId: projectDevices[0].unionId })
      .then((res) => res.data);

  const { data } = useSWR('/device-configurations', fetcher, {
    initialData: projectDevices,
    fallbackData: projectDevices,
  });

  return (
    <div>
      <div className='-mx-4 overflow-x-auto px-4 pb-10 sm:-mx-8 sm:px-8'>
        <div className='inline-block min-w-full overflow-hidden rounded-lg shadow'>
          <table className='min-w-full'>
            <thead className='bg-gray-50 dark:bg-gray-800/60'>
              <tr className='border-b-2 border-gray-200 text-left text-gray-600 dark:border-gray-800 dark:text-gray-200'>
                <th className='label-sm whitespace-nowrap px-5 py-4'>
                  <span>{t('pages.dashboard.log_query.device_id')}</span>
                </th>
                <th className='label-sm whitespace-nowrap px-5 py-4'>
                  <span>
                    {t('pages.dashboard.configuration_check.device_info')}
                  </span>
                </th>
                <th className='label-sm whitespace-nowrap px-5 py-4'>
                  <span>
                    {t('pages.dashboard.forward_flow_query.device_type')}
                  </span>
                </th>
                <th className='label-sm whitespace-nowrap px-5 py-4'>
                  <span>
                    {t('pages.dashboard.configuration_check.actions')}
                  </span>
                </th>
                {/* <th className='label-sm whitespace-nowrap px-5 py-4'>
                  <span className='sr-only'>view</span>
                </th> */}
              </tr>
            </thead>
            <tbody>
              {/* loading */}
              {/* {isLoading &&
                  !fetchedFilteredLogs &&
                  [1, 2, 3, 4, 5, 6].map((n) => (
                    <LogQueryTableRowLoader key={n} />
                  ))} */}
              {/* all logs  */}
              {data &&
                data.length > 0 &&
                data.map((device: TProjectDevice) => (
                  <ProjectDevicesTableRow key={device._id} device={device} />
                ))}
              {/* {data && data.logs.length === 0 && !fetchedFilteredLogs && (
                <LogQueryTableRowPlaceholder />
              )} */}

              {/* filtered logs with no result  */}
              {/* {filteredLogs &&
                  fetchedFilteredLogs &&
                  filteredLogs.length === 0 && <LogQueryTableRowPlaceholder />} */}

              {/* filtered logs with result data */}
              {/* {filteredLogs &&
                  filteredLogs.length > 0 &&
                  fetchedFilteredLogs &&
                  filteredLogs.map((filteredLog: LogT) => (
                    <LogQueryTableRow
                      key={filteredLog._id}
                      log={filteredLog}
                      viewLogDetails={viewLogDetails}
                    />
                  ))} */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(ProjectDevicesTable);
