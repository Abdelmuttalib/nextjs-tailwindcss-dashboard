import { TFunction } from 'next-i18next';
import { FC } from 'react';
import { withTranslation } from 'react-i18next';

import ProjectTableRow from '@/components/@pages/server-status-overview-page/ProjectsTable/ProjectTableRow';
import ProjectTableRowPlaceholder from '@/components/@pages/server-status-overview-page/ProjectsTable/ProjectTableRowPlaceholder';
import { ProjectT } from '@/components/@pages/server-status-overview-page/types';

interface ProjectsTableProps {
  projectsData: ProjectT[];
  showDevicesDetailsButton?: boolean;
  t: TFunction;
}

const ProjectsTable: FC<ProjectsTableProps> = ({
  projectsData,
  showDevicesDetailsButton = false,
  t,
}) => {
  return (
    <div className='w-full rounded-md'>
      <div>
        <div className='-mx-4 overflow-x-auto px-4 pb-10 sm:-mx-8 sm:px-8'>
          <div className='inline-block min-w-full overflow-hidden rounded-lg shadow'>
            <table className='min-w-full'>
              <thead className='bg-gray-50 dark:bg-gray-800/60'>
                <tr className='border-b-2 border-gray-200 text-left text-gray-600 dark:border-gray-800 dark:text-gray-200'>
                  <th className='label-sm whitespace-nowrap px-5 py-4'>
                    <span>
                      {t(
                        'pages.dashboard.server_status_overview.data.project_name'
                      )}
                    </span>
                  </th>
                  <th className='label-sm whitespace-nowrap px-5 py-4'>
                    <span>
                      {t(
                        'pages.dashboard.server_status_overview.data.project_id'
                      )}
                    </span>
                  </th>
                  <th className='label-sm w-full whitespace-nowrap px-5 py-4'>
                    <span className='max-w-xs'>
                      {t(
                        'pages.dashboard.server_status_overview.data.project_info'
                      )}
                    </span>
                  </th>
                  <th className='label-sm whitespace-nowrap px-5 py-4'>
                    <span>
                      {t('pages.dashboard.server_status_overview.data.devices')}
                    </span>
                  </th>
                  <th className='label-sm whitespace-nowrap px-5 py-4'>
                    <span>
                      {t(
                        'pages.dashboard.server_status_overview.data.statistic_server_address'
                      )}
                    </span>
                  </th>
                  <th className='label-sm whitespace-nowrap px-5 py-4'>
                    <span>{t('pages.dashboard.log_query.date')}</span>
                  </th>
                  {showDevicesDetailsButton && (
                    <th className='label-sm whitespace-nowrap px-5 py-4'>
                      <span>{t('pages.dashboard.devices.view_devices')}</span>
                    </th>
                  )}
                </tr>
              </thead>
              <tbody>
                {/* projects data rendering  */}
                {projectsData &&
                  projectsData.length > 0 &&
                  projectsData.map((project) => (
                    <ProjectTableRow
                      key={project._id}
                      showDevicesDetailsButton={showDevicesDetailsButton}
                      {...project}
                    />
                  ))}
                {projectsData && projectsData.length === 0 && (
                  <ProjectTableRowPlaceholder />
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(ProjectsTable);
