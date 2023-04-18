import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import { useTranslation } from 'react-i18next';

import ProjectsTable from '@/components/@pages/server-status-overview-page/ProjectsTable/ProjectsTable';
import { ProjectT } from '@/components/@pages/server-status-overview-page/types';
import { Layout } from '@/components/layout';
import Seo from '@/components/Seo';

import api from '@/api';

const ServerStatusOverviewPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { t } = useTranslation('common');
  return (
    <Layout pageTitle={t('pages.dashboard.server_status_overview.title')}>
      <Seo
        title={`${t('pages.dashboard.server_status_overview.title')} | ${t(
          'app.name'
        )} ${t('app.description')}`}
      />
      <h3 className='h5'>
        {t('pages.dashboard.server_status_overview.projects')}
      </h3>
      <div className='mt-5'>
        {data && <ProjectsTable projectsData={data} />}
      </div>
    </Layout>
  );
};

export default ServerStatusOverviewPage;

export const getStaticProps: GetStaticProps<{ data: ProjectT[] }> = async ({
  locale,
}) => {
  const { data } = await api.projects.getAllProjects();

  return {
    props: {
      data: data,
      ...(await serverSideTranslations(locale as string, ['common'])),
    },
    revalidate: 10,
  };
};
