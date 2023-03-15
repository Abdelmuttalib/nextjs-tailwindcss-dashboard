import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { fetchAPI } from '@/lib/api';

import ProjectsTable from '@/components/@pages/server-status-overview-page/ProjectsTable/ProjectsTable';
import { ProjectT } from '@/components/@pages/server-status-overview-page/types';
import { Layout } from '@/components/layout';
import Seo from '@/components/Seo';

const DevicesPage = ({
  projectsData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { t } = useTranslation('common');

  return (
    <Layout pageTitle={t('pages.dashboard.devices.title')}>
      <Seo
        title={`${t('pages.dashboard.server_status_overview.title')} | ${t(
          'app.name'
        )} ${t('app.description')}`}
      />
      <h3 className='h5'>
        {t('pages.dashboard.server_status_overview.projects')}
      </h3>
      <div className='mt-5'>
        {projectsData && (
          <ProjectsTable
            projectsData={projectsData}
            showDevicesDetailsButton={true}
          />
        )}
      </div>
    </Layout>
  );
};

export default DevicesPage;

export const getStaticProps: GetStaticProps<{
  projectsData: ProjectT[];
}> = async ({ locale }) => {
  await fetchAPI.get('/check-devices-algorithm');
  const { data: projectsData } = await fetchAPI.get('/status-overview');

  return {
    props: {
      projectsData,
      ...(await serverSideTranslations(locale as string, ['common'])),
    },
    revalidate: 10,
  };
};
