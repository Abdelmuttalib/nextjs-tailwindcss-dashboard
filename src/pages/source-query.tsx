import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { fetchAPI } from '@/lib/api';

import SourceQueryTable, {
  ProjectT,
} from '@/components/@pages/source-query-page/SourceQueryTable';
import { Layout } from '@/components/layout';

const SourceQueryPage = ({ data }: { data: ProjectT[] }) => {
  const { t } = useTranslation('common');

  return (
    <Layout pageTitle={t('pages.dashboard.source_query.title')}>
      <h3 className='h5'>
        {t('pages.dashboard.source_query.projects_servers_status')}
      </h3>
      <SourceQueryTable data={data} />
    </Layout>
  );
};

export default SourceQueryPage;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const data = await fetchAPI('/check-server-status');

  return {
    props: {
      data,
      ...(await serverSideTranslations(locale as string, ['common'])),
    },
    revalidate: 5,
  };
};
