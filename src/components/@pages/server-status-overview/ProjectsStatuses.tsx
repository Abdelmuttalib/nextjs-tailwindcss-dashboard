import { TFunction } from 'next-i18next';
import { withTranslation } from 'react-i18next';

export type ProjectStatusT = {
  _id: string;
  createDate: string;
  deviceInfos: string;
  mongouri: string;
  projectId: string;
  projectInfo: string;
  projectName: string;
  statisticServerAddr: string;
  unionId: string;
  __v: number;
};

const ProjectsStatuses = ({
  data,
  t,
}: {
  data: ProjectStatusT[];
  t: TFunction;
}) => {
  return (
    <div className='mt-5 grid max-w-7xl grid-cols-1 gap-5 lg:grid-cols-2'>
      {data &&
        data.map &&
        data.map((project: ProjectStatusT) => (
          <div key={project._id}>
            <div className='flex w-full flex-col rounded shadow'>
              <div className='flex h-12 items-center justify-between rounded-t bg-primary-200 px-4 py-2'>
                <div>
                  <div className='flex w-full items-center gap-1 truncate rounded-t'>
                    <h3 className='text-lg font-semibold'>
                      {t(
                        'pages.dashboard.server_status_overview.data.project_name'
                      )}
                      :
                    </h3>
                    <p className='body-md font-medium'>{project.projectName}</p>
                  </div>
                </div>

                {/* <icon-eos-icons:project-outlined className="w-6 h-6" /> */}
              </div>
              <div className='px-4 py-2 pb-4'>
                <div className='flex items-center gap-1'>
                  <p className='label-md'>
                    {t(
                      'pages.dashboard.server_status_overview.data.project_id'
                    )}
                    :
                  </p>
                  <p className='body-md'>{project.projectId}</p>
                </div>
                <div className='flex items-center gap-1'>
                  <p className='label-md'>
                    {t(
                      'pages.dashboard.server_status_overview.data.project_info'
                    )}
                    :
                  </p>
                  <p className='body-md'>{project.projectInfo}</p>
                </div>
                <div className='flex items-center gap-1'>
                  <p className='label-md'>
                    {t('pages.dashboard.server_status_overview.data.devices')}:
                  </p>
                  <p className='body-md'>{project.deviceInfos.length}</p>
                </div>
                <div className='flex items-center gap-1'>
                  <p className='label-md'>
                    {t(
                      'pages.dashboard.server_status_overview.data.statistic_server_address'
                    )}
                    :
                  </p>
                  <p className='body-md'>{project.statisticServerAddr}</p>
                </div>
                <div className='flex items-center gap-1'>
                  <p className='label-md'>
                    {t(
                      'pages.dashboard.server_status_overview.data.created_date'
                    )}
                    :
                  </p>
                  <p className='body-md'>
                    {new Date(project.createDate).toLocaleDateString('en-us', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                      hour: 'numeric',
                      minute: 'numeric',
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default withTranslation()(ProjectsStatuses);
