import { TFunction, withTranslation } from 'next-i18next';

import Badge from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export type StreamOutputUrlT = {
  _id: string;
  url: string;
  projectId: string;
  deviceId: string;
  deviceType: string;
  status: boolean;
  __v: number;
};

const ForwardFlowQueryTable = ({
  streams,
  t,
}: {
  streams: StreamOutputUrlT[];
  t: TFunction;
}) => {
  return (
    <div className='rounded-md w-full'>
      <div className=''>
        <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
          <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
            <table className='min-w-full'>
              <thead className='bg-gray-50'>
                <tr className='border-b-2 border-gray-200 text-gray-600 text-left'>
                  <th className='label-sm px-5 py-4 whitespace-nowrap'>
                    <span>ID</span>
                    {/* <span>{t('pages.dashboard.source_query.project_id')}</span> */}
                  </th>
                  <th className='label-sm px-5 py-4 whitespace-nowrap'>
                    <span>
                      {t('pages.dashboard.forward_flow_query.device_type')}
                    </span>
                  </th>
                  <th className='label-sm px-5 py-4 whitespace-nowrap'>
                    <span>{t('pages.dashboard.source_query.device_id')}</span>
                  </th>
                  <th className='label-sm px-5 py-4 whitespace-nowrap'>
                    <span>{t('pages.dashboard.source_query.status')}</span>
                  </th>
                  <th className='label-sm px-5 py-4 whitespace-nowrap'>
                    <span>{t('pages.dashboard.source_query.view_live')}</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {streams &&
                  streams.map &&
                  streams.map((stream: StreamOutputUrlT) => (
                    <tr
                      key={stream._id}
                      className='body-md text-gray-900 whitespace-nowrap border-b border-gray-200 bg-white'
                    >
                      <td className='px-5 py-5'>
                        <p>{stream._id}</p>
                      </td>
                      <td className='px-5 py-5'>
                        <p>{stream.deviceType}</p>
                      </td>
                      <td className='px-5 py-5'>
                        <p>{stream.deviceId}</p>
                      </td>
                      <td className='px-5 py-5'>
                        {stream.status ? (
                          <Badge color='green'>
                            {t('pages.dashboard.source_query.online')}
                          </Badge>
                        ) : (
                          <Badge color='red'>
                            {t('pages.dashboard.source_query.offline')}
                          </Badge>
                        )}
                      </td>
                      <td className='px-5 py-5'>
                        <Button size='sm' disabled={!stream.status}>
                          {t('pages.dashboard.source_query.view')}
                        </Button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            {/* Pagination */}
            {/* <div */}
            {/* className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between"
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

export default withTranslation()(ForwardFlowQueryTable);
