import axios from 'axios';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';

import { fetchAPI } from '@/lib/api';

import DevicesAlgorithmsTable from '@/components/@pages/devices-page/DevicesAlgorithmsTable/DevicesAlgorithmsTable';
import { ProjectT } from '@/components/@pages/server-status-overview-page/types';
import { Layout } from '@/components/layout';
import Seo from '@/components/Seo';

const DevicesCountPage = ({
  devicesCount,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { t } = useTranslation('common');

  return (
    <Layout pageTitle={t('pages.dashboard.devices.title')}>
      <Seo
        title={`${t('pages.dashboard.server_status_overview.title')} | ${t(
          'app.name'
        )} ${t('app.description')}`}
      />
      <h3 className='h5 mb-4'>
        {t('pages.dashboard.devices.devices_algorithms')}
      </h3>

      <DevicesAlgorithmsTable data={devicesCount} />
    </Layout>
  );
};

export default DevicesCountPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const projects = await fetchAPI.get('/status-overview');

  const currentProject = projects.filter(
    (project: ProjectT) => project._id === context?.params?.id
  );

  const requestHeaders = {
    'Content-Type': 'application/json',
  };
  const data = {
    statisticServerAddr: currentProject[0].statisticServerAddr,
    unionId: currentProject[0].unionId,
  };
  const getCurrentProjectDevicesCount = () =>
    axios
      .post('http://161.189.66.94:8090/api/devices-count', data, {
        headers: requestHeaders,
      })
      .then((response) => {
        return response.data;
      });

  const currentProjectDevicesCount = await getCurrentProjectDevicesCount();

  return {
    props: {
      devicesCount: currentProjectDevicesCount,
      ...(await serverSideTranslations(context?.locale as string, ['common'])),
    },
  };
};
