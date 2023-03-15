import { TFunction } from 'next-i18next';
import React, { FC } from 'react';
import { withTranslation } from 'react-i18next';

const ProjectTableRowPlaceholder: FC<{ t: TFunction }> = ({ t }) => {
  return (
    <tr className='body-md whitespace-nowrap border-b border-gray-200 bg-white text-gray-800 dark:border-gray-800/50 dark:bg-gray-800/40 dark:text-gray-200'>
      <td className='px-16 py-10'>
        <span className='label-md italic text-gray-500'>
          {t('pages.dashboard.server_status_overview.data.no_projects_found')}
        </span>
      </td>
      <td className='px-5 py-5'></td>
      <td className='px-5 py-5'></td>
      <td className='px-5 py-5'></td>
      <td className='px-5 py-5'></td>
      <td className='px-5 py-5 text-gray-600 dark:text-gray-400'></td>
    </tr>
  );
};

export default withTranslation()(ProjectTableRowPlaceholder);
