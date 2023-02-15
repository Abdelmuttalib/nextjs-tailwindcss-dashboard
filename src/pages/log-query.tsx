import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';

import { fetchAPI } from '@/lib/api';

import { LogQueryTable } from '@/components/@pages/log-query-page';
import { Layout } from '@/components/layout';
import Seo from '@/components/Seo';

const LogQueryPage = ({
  logTypes,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { t } = useTranslation(['common']);
  return (
    <Layout pageTitle={t('pages.dashboard.log_query.title')}>
      <Seo
        title={`${t('pages.dashboard.log_query.title')} | ${t('app.name')} ${t(
          'app.description'
        )}`}
      />
      <LogQueryTable logTypes={logTypes} />
    </Layout>
  );
};

export default LogQueryPage;

export const getStaticProps: GetStaticProps<{
  logTypes: string[];
}> = async ({ locale }) => {
  const logTypes = await fetchAPI.get('/log-query');

  return {
    props: {
      logTypes,
      ...(await serverSideTranslations(locale as string, ['common'])),
    },
    revalidate: 5,
  };
};
