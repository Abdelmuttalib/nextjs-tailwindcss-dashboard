import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { withTranslation } from 'react-i18next';

import { baseApiUrl } from '@/lib/api';

import DeviceAlgorithmDetailsDialog, {
  AlgorithmDetailsT,
} from '@/components/@pages/devices-page/DevicesAlgorithmsTable/DeviceAlgorithmDetailsDialog';
import { Button } from '@/components/ui/button';

interface InitializedDeviceAlgorithmsT {
  [key: string]: number | string;
}
interface UninitializedDeviceAlgorithmsT {
  [key: string]: string;
}

interface DevicesAlgorithmsTableProps {
  data: InitializedDeviceAlgorithmsT[] | UninitializedDeviceAlgorithmsT[];
}
const DevicesAlgorithmsTable = ({ data }: DevicesAlgorithmsTableProps) => {
  const [algorithmData, setAlgorithmData] = useState<AlgorithmDetailsT[]>();
  const [projectUnionId, setProjectUnionId] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const closeModal = () => {
    setAlgorithmData([]);
    setIsOpen(false);
  };

  useEffect(() => {
    if (data && data[6] && data[6]['unionId'])
      setProjectUnionId(data[6]['unionId'] as string);
  }, [data]);

  const getDevicesInAlgorithmAndProject = async (algorithmType: string) => {
    setIsOpen(true);
    const body = JSON.stringify({
      algorithm: algorithmType,
      projectUnionId: projectUnionId,
    });

    try {
      const res = await axios.post(`${baseApiUrl}/devices-algorithm`, body, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = res.data;
      setAlgorithmData(data);
    } catch (error) {
      throw new Error(error as string);
    }
  };
  return (
    <div className=''>
      {algorithmData && (
        <DeviceAlgorithmDetailsDialog
          algorithmData={algorithmData}
          isOpen={isOpen}
          closeModal={closeModal}
        />
      )}
      <div className='-mx-4 overflow-x-auto px-4 pb-10 sm:-mx-8 sm:px-8'>
        <div className='inline-block min-w-full overflow-hidden rounded-lg shadow'>
          <table className='min-w-full'>
            <thead className='bg-gray-50 dark:bg-gray-800/60'>
              <tr className='border-b-2 border-gray-200 text-left text-gray-600 dark:border-gray-800 dark:text-gray-200'>
                {data &&
                  data.map(
                    (
                      object:
                        | InitializedDeviceAlgorithmsT
                        | UninitializedDeviceAlgorithmsT
                    ) => {
                      const objectKeys = Object.keys(object);
                      return objectKeys.map((objectKey) => (
                        <th
                          key={objectKey}
                          className='label-sm whitespace-nowrap px-5 py-4'
                        >
                          <Button
                            type='button'
                            size='sm'
                            className='rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-700 focus:border-gray-600 focus:bg-gray-200/50 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-800/50'
                            onClick={() => {
                              if (objectKey === 'Status') {
                                return;
                              }
                              getDevicesInAlgorithmAndProject(objectKey);
                            }}
                          >
                            {objectKey}
                          </Button>
                        </th>
                      ));
                    }
                  )}
                {/* <th className='label-sm whitespace-nowrap px-5 py-4'>
                  <span>{t('pages.dashboard.log_query.info')}</span>
                </th>
                <th className='label-sm whitespace-nowrap px-5 py-4'>
                  <span>{t('pages.dashboard.log_query.type')}</span>
                </th>
                <th className='label-sm whitespace-nowrap px-5 py-4'>
                  <span>{t('pages.dashboard.log_query.date')}</span>
                </th>

                <th className='label-sm whitespace-nowrap px-5 py-4'>
                  <span>
                    {t('pages.dashboard.log_query.log_query_details')}
                  </span>
                </th> */}
              </tr>
            </thead>
            <tbody>
              <tr className='body-md whitespace-nowrap border-b border-gray-200 bg-white text-gray-900 dark:border-gray-800 dark:bg-gray-800/40  dark:text-gray-200'>
                {data &&
                  data.map(
                    (
                      object:
                        | InitializedDeviceAlgorithmsT
                        | UninitializedDeviceAlgorithmsT
                    ) => {
                      const objectKeys = Object.keys(object);
                      return objectKeys.map((objectKey) => (
                        <td
                          key={objectKey}
                          className='whitespace-nowrap px-7 py-4'
                        >
                          <p className='body-md'>{object[objectKey]}</p>
                        </td>
                      ));
                    }
                  )}
              </tr>

              {/* loading */}
              {/* {isLoading &&
                !fetchedFilteredLogs &&
                [...Array(6)].map((n) => <LogQueryTableRowLoader key={n} />)} */}
              {/* all logs  */}
              {/* {logs &&
                logs.length > 0 &&
                !fetchedFilteredLogs &&
                logs.map((log) => (
                  <LogQueryTableRow
                    key={log._id}
                    log={log}
                    viewLogDetails={viewLogDetails}
                  />
                ))} */}
              {/* {logs && logs.length === 0 && !fetchedFilteredLogs && (
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

export default withTranslation()(DevicesAlgorithmsTable);
