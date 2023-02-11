import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { fetchAPI } from '@/lib/api';

import LogQueryTable from '@/components/@pages/log-query-page/LogQueryTable';
import { Layout } from '@/components/layout';

export type LogT = {
  _id: string;
  date: string;
  projectId: string;
  deviceId: string;
  type: 'INFO' | 'WARNING' | 'DEBUG' | 'ERROR';
  info: string;
  description: string;
  __v: number;
};

const LogQueryPage = ({ logsTypes }: { logsTypes: string[]; logs: LogT[] }) => {
  const { t } = useTranslation(['common']);
  return (
    <Layout pageTitle={t('pages.dashboard.log_query.title')}>
      <LogQueryTable logsTypes={logsTypes} />
    </Layout>
  );
};

export default LogQueryPage;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const logsTypes: string[] = await fetchAPI('/log-query');

  return {
    props: {
      logsTypes,
      ...(await serverSideTranslations(locale as string, ['common'])),
      // Will be passed to the page component as props
    },
  };
};
