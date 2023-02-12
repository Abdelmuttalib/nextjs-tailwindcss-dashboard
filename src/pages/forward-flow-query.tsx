import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { fetchAPI } from '@/lib/api';

import ForwardFlowQueryTable, {
  StreamOutputUrlT,
} from '@/components/@pages/forward-flow-query-page/ForwardFlowQueryTable';
import { Layout } from '@/components/layout';

const ForwardFlowQueryPage = ({ data }: { data: StreamOutputUrlT[] }) => {
  const { t } = useTranslation(['common']);
  return (
    <Layout pageTitle={t('pages.dashboard.forward_flow_query.title')}>
      <h3 className='h5'>
        {t('pages.dashboard.forward_flow_query.live_stream')}
      </h3>

      <ForwardFlowQueryTable streams={data} />
    </Layout>
  );
};

export default ForwardFlowQueryPage;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const data = await fetchAPI('/forward-flow-query');
  return {
    props: {
      data,
      ...(await serverSideTranslations(locale as string, ['common'])),
    },
    revalidate: 5,
  };
};
