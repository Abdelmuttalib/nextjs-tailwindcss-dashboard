import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { fetchAPI } from '@/lib/api';

import { Projects } from '@/components/@pages/server-status-overview-page';
import { ProjectT } from '@/components/@pages/server-status-overview-page/types';
import { Layout } from '@/components/layout';

const ServerStatusOverviewPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { t } = useTranslation('common');

  return (
    <Layout pageTitle={t('pages.dashboard.server_status_overview.title')}>
      <h3 className='h5'>
        {t('pages.dashboard.server_status_overview.projects')}
      </h3>
      <Projects data={data} />
    </Layout>
  );
};

export default ServerStatusOverviewPage;

export const getStaticProps: GetStaticProps<{ data: ProjectT[] }> = async ({
  locale,
}) => {
  const data = await fetchAPI.get('/status-overview');

  return {
    props: {
      data,
      ...(await serverSideTranslations(locale as string, ['common'])),
    },
    revalidate: 5,
  };
};
