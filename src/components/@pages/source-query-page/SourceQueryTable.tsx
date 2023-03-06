import { TFunction } from 'next-i18next';
import { withTranslation } from 'react-i18next';

import Badge from '@/components/ui/badge';

import { ProjectStatusT } from './types';

const SourceQueryTable = ({
  data,
  t,
}: {
  data: ProjectStatusT[];
  t: TFunction;
}) => {
  return (
    <div className='w-full max-w-5xl rounded-md'>
      <div className=''>
        <div className='-mx-4 overflow-x-auto px-4 py-4 sm:-mx-8 sm:px-8'>
          <div className='inline-block min-w-full overflow-hidden rounded-lg shadow'>
            <table className='min-w-full'>
              <thead className='bg-gray-50 dark:bg-gray-800/50'>
                <tr className='border-b-2 border-gray-200 text-left text-gray-600 dark:border-gray-800 dark:text-gray-200'>
                  <th className='label-sm whitespace-nowrap px-5 py-4'>
                    <span>{t('pages.dashboard.source_query.name')}</span>
                  </th>
                  <th className='label-sm whitespace-nowrap px-5 py-4'>
                    <span>{t('pages.dashboard.source_query.host')}</span>
                  </th>

                  <th className='label-sm whitespace-nowrap px-5 py-4'>
                    <span>{t('pages.dashboard.source_query.status')}</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {data &&
                  data.map &&
                  data.map((project: ProjectStatusT) => (
                    <tr
                      key={project?._id}
                      className='body-md whitespace-nowrap border-b border-gray-200 bg-white text-gray-900 dark:border-gray-800/50 dark:bg-gray-800/40 dark:text-gray-200'
                    >
                      <td className='px-5 py-5'>
                        <p>{project?.name}</p>
                      </td>
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

export default withTranslation()(SourceQueryTable);
