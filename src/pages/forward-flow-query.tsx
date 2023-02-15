import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { fetchAPI } from '@/lib/api';

import { ForwardFlowQueryTable } from '@/components/@pages/forward-flow-query-page';
import { StreamOutputT } from '@/components/@pages/forward-flow-query-page/types';
import { Layout } from '@/components/layout';
import Seo from '@/components/Seo';

const ForwardFlowQueryPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { t } = useTranslation(['common']);
  return (
    <Layout pageTitle={t('pages.dashboard.forward_flow_query.title')}>
      <Seo
        title={`${t('pages.dashboard.forward_flow_query.title')} | ${t(
          'app.name'
        )} ${t('app.description')}`}
      />
      <h3 className='h5'>
        {t('pages.dashboard.forward_flow_query.live_stream')}
      </h3>

      <ForwardFlowQueryTable streams={data} />
    </Layout>
  );
};

export default ForwardFlowQueryPage;

export const getStaticProps: GetStaticProps<{
  data: StreamOutputT[];
}> = async ({ locale }) => {
  const data = await fetchAPI.get('/forward-flow-query');
  return {
    props: {
      data,
      ...(await serverSideTranslations(locale as string, ['common'])),
    },
    revalidate: 5,
  };
};
