import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { fetchAPI } from '@/lib/api';

import ProjectsStatuses, {
  ProjectStatusT,
} from '@/components/@pages/server-status-overview/ProjectsStatuses';
import { Layout } from '@/components/layout';

const ServerStatusOverviewPage = ({ data }: { data: ProjectStatusT[] }) => {
  const { t } = useTranslation('common');

  return (
    <Layout pageTitle={t('pages.dashboard.server_status_overview.title')}>
      <h3 className='h5'>
        {t('pages.dashboard.server_status_overview.projects')}
      </h3>
      <ProjectsStatuses data={data} />
    </Layout>
  );
};

export default ServerStatusOverviewPage;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const data = await fetchAPI('/status-overview');

  return {
    props: {
      data,
      ...(await serverSideTranslations(locale as string, ['common'])),
    },
    revalidate: 5,
  };
};
