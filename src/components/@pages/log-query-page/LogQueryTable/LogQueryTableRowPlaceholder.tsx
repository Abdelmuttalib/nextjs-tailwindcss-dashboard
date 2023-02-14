import { TFunction } from 'next-i18next';
import React from 'react';
import { withTranslation } from 'react-i18next';

const LogQueryTableRowPlaceholder = ({ t }: { t: TFunction }) => {
  return (
    <tr className='body-medium whitespace-nowrap border-b border-gray-200 bg-white text-gray-900 dark:border-gray-800 dark:bg-gray-900'>
      <td className='px-16 py-10'>
        <span className='label-md italic text-gray-500'>
          {t('pages.dashboard.log_query.no_logs_found')}
        </span>
      </td>
      <td className='px-5 py-10'></td>
      <td className='max-w-[150px] px-5 py-10'></td>
      <td className='px-5 py-10'></td>
      <td className='px-5 py-10'></td>
      <td></td>
    </tr>
  );
};

export default withTranslation()(LogQueryTableRowPlaceholder);
