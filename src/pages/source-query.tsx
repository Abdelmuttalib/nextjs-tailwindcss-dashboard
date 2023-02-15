import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';

// import { io } from 'socket.io-client';
import { fetchAPI } from '@/lib/api';

import { SourceQueryTable } from '@/components/@pages/source-query-page';
import { ProjectStatusT } from '@/components/@pages/source-query-page/types';
import { Layout } from '@/components/layout';
import Seo from '@/components/Seo';

const SourceQueryPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { t } = useTranslation('common');

  // const socket = io('http://161.189.66.94:8090');

  // const socketInitializer = async () => {
  //   const socket = io('http://161.189.66.94:8090', {
  //     transports: ['websocket'],
  //     path: '/api/send-notification',
  //   });

  // socket.io.on("error", (error) => {
  //   // ...
  // });

  //   // socket.on('New Notification', (message) => {
  //   //   console.log('received notification:', message);
  //   //   // addToast(message, 'error');
  //   // });

  //   socket.on('connect', () => {
  //     console.log('connected');
  //   });
  // };
  // useEffect(() => {
  //   socketInitializer();
  // }, []);

  return (
    <Layout pageTitle={t('pages.dashboard.source_query.title')}>
      <Seo
        title={`${t('pages.dashboard.source_query.title')} | ${t(
          'app.name'
        )} ${t('app.description')}`}
      />
      <h3 className='h5'>
        {t('pages.dashboard.source_query.projects_servers_status')}
      </h3>
      <SourceQueryTable data={data} />
    </Layout>
  );
};

export default SourceQueryPage;

export const getStaticProps: GetStaticProps<{
  data: ProjectStatusT[];
}> = async ({ locale }) => {
  const data = await fetchAPI.get('/check-server-status');

  return {
    props: {
      data,
      ...(await serverSideTranslations(locale as string, ['common'])),
    },
    revalidate: 5,
  };
};
