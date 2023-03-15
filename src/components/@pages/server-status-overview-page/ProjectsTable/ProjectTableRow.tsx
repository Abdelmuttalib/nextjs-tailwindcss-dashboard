import { useRouter } from 'next/router';
import { TFunction, withTranslation } from 'next-i18next';
import React, { FC, useEffect, useState } from 'react';

import { formatDate } from '@/lib/date';

import { ProjectT } from '@/components/@pages/server-status-overview-page/types';
import { SkeletonLoader } from '@/components/loaders';
import { Button } from '@/components/ui/button';

interface ProjectTableRowProps extends ProjectT {
  showDevicesDetailsButton?: boolean;
  t: TFunction;
}

const ProjectTableRow: FC<ProjectTableRowProps> = ({
  _id,
  projectName,
  projectId,
  projectInfo,
  deviceInfos,
  statisticServerAddr,
  createDate,
  showDevicesDetailsButton = false,
  t,
}) => {
  const { push, locale } = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <tr
      key={_id}
      className='body-md whitespace-nowrap border-b border-gray-200 bg-white text-gray-800 dark:border-gray-800/50 dark:bg-gray-800/40 dark:text-gray-200'
    >
      <td className='px-5 py-5'>
        <p>{projectName ?? '-'}</p>
      </td>
      <td className='px-5 py-5'>
        <p>{projectId ?? '-'}</p>
      </td>
      <td className='px-5 py-5'>
        <p>{projectInfo ?? '-'}</p>
      </td>
      <td className='px-5 py-5'>
        <p>{deviceInfos.length ?? '-'}</p>
      </td>
      <td className='px-5 py-5'>
        <p>{statisticServerAddr ?? '-'}</p>
      </td>
      <td className='px-5 py-5 text-gray-600 dark:text-gray-400'>
        {isMounted ? (
          <p>{formatDate(createDate)}</p>
        ) : (
          <SkeletonLoader className='h-6 w-40' />
        )}
      </td>

      {showDevicesDetailsButton && (
        <td className='px-5 py-5'>
          <Button
            size='sm'
            onClick={() => {
              push(`devices/${_id}`, undefined, { locale });
            }}
          >
            {t('pages.dashboard.devices.view_devices')}
          </Button>
        </td>
      )}
    </tr>
  );
};

export default withTranslation()(ProjectTableRow);
