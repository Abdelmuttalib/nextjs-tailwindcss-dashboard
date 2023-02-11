import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { fetchAPI } from '@/lib/api';

import { Layout } from '@/components/layout';
import Badge from '@/components/ui/badge';

interface ProjectT {
  _id: string;
  host: string;
  status: string;
  __v: number;
}

const SourceQueryTable = ({ data }: { data: ProjectT[] }) => {
  const { t } = useTranslation('common');
  return (
    <div className='rounded-md w-full max-w-5xl'>
      <div className=''>
        <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
          <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
            <table className='min-w-full'>
              <thead className='bg-gray-50'>
                <tr className='border-b-2 border-gray-200 text-gray-600 text-left'>
                  <th className='label-sm px-5 py-4 whitespace-nowrap'>
                    <span>{t('pages.dashboard.source_query.host')}</span>
                  </th>
                  <th className='label-sm px-5 py-4 whitespace-nowrap'>
                    <span>{t('pages.dashboard.source_query.status')}</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {data &&
                  data.map &&
                  data.map((project: ProjectT) => (
                    <tr
                      v-for='projectServer in projectsServers'
                      key={project?._id}
                      className='body-md text-gray-900 whitespace-nowrap border-b border-gray-200 bg-white'
                    >
                      <td className='px-5 py-5'>
                        <p>{project?.host}</p>
                      </td>
                      <td className='px-5 py-5'>
                        {project?.status === 'ok' ? (
                          <Badge color='green'>
                            {t('pages.dashboard.source_query.online')}
                          </Badge>
                        ) : (
                          <Badge color='red'>
                            {t('pages.dashboard.source_query.offline')}
                          </Badge>
                        )}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            {/* Pagination */}
            {/* <div
            className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between"
          >
            <span className="body-small"> Showing 1 to 4 of 50 Entries</span>
            <div className="inline-flex mt-2 xs:mt-0 space-x-1">
              <Button size="small" type="outline">Previous</Button>
              <Button size="small" type="outline">Next</Button>
            </div>
          </div>  */}
          </div>
        </div>
      </div>
    </div>
  );
};

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
      // Will be passed to the page component as props
    },
  };
};
