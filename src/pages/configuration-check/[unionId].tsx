import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';

import AddNewDeviceModal from '@/components/@pages/configuration-check-page/AddNewDevice/AddNewDeviceModal';
import ProjectDevicesTable from '@/components/@pages/configuration-check-page/ProjectDevicesTable/ProjectDevicesTable';
import { ProjectT } from '@/components/@pages/server-status-overview-page/types';
import { Layout } from '@/components/layout';

import api from '@/api';

export type TProjectDevice = {
  _id: string;
  deviceId: number;
  deviceInfo: string;
  deviceType: string;
  projectInfo: string;
  projectName: string;
  buildingProgressConfiguration: object | null;
  gateConfiguration: object | null;
  leanConfiguration: object | null;
  safetyConfiguration: object | null;
  unionId: string;
  vehicleConfiguration: object | null;
  __v: number;
};

const ProjectDevicesPage = ({
  projectUnionId,
  projectData,
  projectDevices,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { t } = useTranslation('common');
  return (
    <Layout pageTitle={t('pages.dashboard.configuration_check.title')}>
      {/* <Seo
        title={`${t('pages.dashboard.server_status_overview.title')} | ${t(
          'app.name'
        )} ${t('app.description')}`}
      /> */}
      <div className='flex justify-between'>
        <h3 className='h5'>
          {t('pages.dashboard.configuration_check.project_devices')}
        </h3>
        <AddNewDeviceModal
          defaultUnionId={projectUnionId}
          defaultProjectName={projectData.projectName}
          defaultProjectInfo={projectData.projectInfo}
        />
      </div>
      <div className='mt-5'>
        {projectData && <ProjectDevicesTable projectDevices={projectDevices} />}
      </div>
    </Layout>
  );
};

export default ProjectDevicesPage;

// export async function getStaticPaths() {
//   const { data } = await api.projects.getAllProjects();

//   const paths = data.map((project) => ({
//     params: { unionId: project.unionId },
//   }));

//   return { paths, fallback: false };
// }

export const getServerSideProps: GetServerSideProps<{
  projectUnionId: ProjectT['unionId'];
  projectData: ProjectT;
  projectDevices: TProjectDevice[];
}> = async ({ params, locale }) => {
  const projectUnionId = params?.unionId as string;

  const { data } = await api.projects.getAllProjects();

  const projectData = data.find(
    (project) => project.unionId === projectUnionId
  ) as ProjectT;

  const { data: projectDevices } =
    await api.projects.getProjectDeviceConfigurations(projectUnionId as string);

  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common'])),
      projectUnionId,
      projectData,
      projectDevices,
    },
  };
};
