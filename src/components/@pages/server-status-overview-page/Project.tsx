import { TFunction, withTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';

import { formatDate } from '@/lib/date';

import { SkeletonLoader } from '@/components/loaders';

import { ProjectT } from './types';

type ProjectProps = {
  project: ProjectT;
  t: TFunction;
};

const Project = ({ project, t }: ProjectProps) => {
  const {
    _id,
    projectId,
    projectName,
    projectInfo,
    deviceInfos,
    statisticServerAddr,
    createDate,
  } = project;

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div key={_id}>
      <div className='flex w-full flex-col rounded shadow dark:bg-gray-800/40'>
        <div className='flex h-12 items-center justify-between rounded-t bg-primary-200 px-4 py-2 dark:bg-gray-800/60'>
          <div>
            <div className='flex w-full items-center gap-1 truncate rounded-t'>
              <h3 className='text-lg font-semibold'>
                {t('pages.dashboard.server_status_overview.data.project_name')}:
              </h3>
              <p className='body-md font-medium'>{projectName}</p>
            </div>
          </div>

          {/* <icon-eos-icons:project-outlined className="w-6 h-6" /> */}
        </div>
        <div className='px-4 py-2 pb-4'>
          <div className='flex items-center gap-1'>
            <p className='label-md'>
              {t('pages.dashboard.server_status_overview.data.project_id')}:
            </p>
            <p className='body-md'>{projectId}</p>
          </div>
          <div className='flex items-center gap-1'>
            <p className='label-md'>
              {t('pages.dashboard.server_status_overview.data.project_info')}:
            </p>
            <p className='body-md'>{projectInfo}</p>
          </div>
          <div className='flex items-center gap-1'>
            <p className='label-md'>
              {t('pages.dashboard.server_status_overview.data.devices')}:
            </p>
            <p className='body-md'>{deviceInfos.length}</p>
          </div>
          <div className='flex items-center gap-1'>
            <p className='label-md'>
              {t(
                'pages.dashboard.server_status_overview.data.statistic_server_address'
              )}
              :
            </p>
            <p className='body-md'>{statisticServerAddr}</p>
          </div>
          <div className='flex items-center gap-1'>
            <p className='label-md'>
              {t('pages.dashboard.server_status_overview.data.created_date')}:
            </p>
            <div className='body-md'>
              {isMounted ? (
                formatDate(createDate)
              ) : (
                <SkeletonLoader className='h-6 w-20' />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(Project);
