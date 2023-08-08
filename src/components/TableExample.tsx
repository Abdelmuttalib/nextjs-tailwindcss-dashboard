import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import { TFunction } from 'next-i18next';
import { FC, useState } from 'react';
import { withTranslation } from 'react-i18next';

import { getMeetingStatusBadgeColor } from '@/lib/get-badge-status-color';

import DialogExample from '@/components/DialogExample';
import Badge from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export type MeetingStatus =
  | 'Scheduled'
  | 'Confirmed'
  | 'Postponed'
  | 'Cancelled';

export interface Meeting {
  id: number;
  title: string;
  date: string;
  time: string;
  organizer: string;
  attendees: string;
  status: MeetingStatus;
}

const meetings: Meeting[] = [
  {
    id: 1,
    title: 'Project Kickoff',
    date: '2023-07-25',
    time: '10:00 AM - 11:30 AM',
    organizer: 'John Doe',
    attendees: 'Amy, Mark, Sarah',
    status: 'Confirmed',
  },
  {
    id: 2,
    title: 'Client Presentation',
    date: '2023-07-27',
    time: '2:00 PM - 3:30 PM',
    organizer: 'Jane Smith',
    attendees: 'David, Emily, Michael',
    status: 'Scheduled',
  },
  {
    id: 3,
    title: 'Team Standup',
    date: '2023-08-02',
    time: '9:30 AM - 10:00 AM',
    organizer: 'Mike Johnson',
    attendees: 'Tom, Alice, Chris',
    status: 'Postponed',
  },
  {
    id: 4,
    title: 'Budget Review',
    date: '2023-08-10',
    time: '11:00 AM - 12:30 PM',
    organizer: 'Emily Brown',
    attendees: 'Linda, Robert, Karen',
    status: 'Cancelled',
  },
  {
    id: 5,
    title: 'Marketing Strategy',
    date: '2023-08-18',
    time: '3:00 PM - 4:30 PM',
    organizer: 'John Doe',
    attendees: 'Amy, Mark, Sarah',
    status: 'Scheduled',
  },
];

interface Props {
  t: TFunction;
}

const TableExample: FC<Props> = ({ t }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [selectedMeeting, setSelectedMeeting] = useState<Meeting | null>(null);

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      {selectedMeeting && (
        <DialogExample
          isOpen={isOpen}
          closeModal={closeModal}
          meeting={selectedMeeting}
        />
      )}

      {/* table */}
      <div className='-mx-4 overflow-x-auto px-4 pb-10 sm:-mx-8 sm:px-8'>
        <div className='inline-block min-w-full overflow-hidden rounded-lg rounded-t-none shadow'>
          <table className='min-w-full'>
            <thead className='bg-gray-50 dark:bg-gray-800/60'>
              <tr className='border-b-2 border-gray-200 text-left text-gray-600 dark:border-gray-800 dark:text-gray-200'>
                <th className='label-sm whitespace-nowrap px-5 py-4'>
                  <span>{t('pages.dashboard.home.table.meeting_id')}</span>
                </th>
                <th className='label-sm whitespace-nowrap px-5 py-4'>
                  <span>{t('pages.dashboard.home.table.meeting_title')}</span>
                </th>
                <th className='label-sm whitespace-nowrap px-5 py-4'>
                  <span>{t('pages.dashboard.home.table.date')}</span>
                </th>
                <th className='label-sm whitespace-nowrap px-5 py-4'>
                  <span>{t('pages.dashboard.home.table.time')}</span>
                </th>
                <th className='label-sm whitespace-nowrap px-5 py-4'>
                  <span>{t('pages.dashboard.home.table.organizer')}</span>
                </th>
                <th className='label-sm whitespace-nowrap px-5 py-4'>
                  <span>{t('pages.dashboard.home.table.attendees')}</span>
                </th>
                <th className='label-sm whitespace-nowrap px-5 py-4'>
                  <span>{t('pages.dashboard.home.table.status')}</span>
                </th>
                <th className='label-sm whitespace-nowrap px-5 py-4'>
                  <span>{t('components.buttons.view_details')}</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {meetings.map(
                ({ id, title, date, time, organizer, attendees, status }) => (
                  <tr
                    key={id}
                    className='body-sm whitespace-nowrap border-b border-gray-200 bg-white text-gray-900 dark:border-gray-800/50 dark:bg-gray-800/40 dark:text-gray-200'
                  >
                    <td className='px-5 py-5'>{id}</td>
                    <td className='px-5 py-5'>{title}</td>
                    <td className='px-5 py-5'>{date}</td>
                    <td className='px-5 py-5'>{time}</td>
                    <td className='px-5 py-5'>{organizer}</td>
                    <td className='px-5 py-5'>{attendees}</td>
                    <td className='px-5 py-5'>
                      <Badge
                        color={getMeetingStatusBadgeColor(
                          status.toLocaleLowerCase()
                        )}
                      >
                        {t(
                          `pages.dashboard.home.statuses.${status.toLowerCase()}`
                        )}
                      </Badge>
                    </td>
                    <td className='px-5 py-4'>
                      <Button
                        size='sm'
                        onClick={() => {
                          setSelectedMeeting({
                            id,
                            title,
                            date,
                            time,
                            organizer,
                            attendees,
                            status,
                          });
                          setIsOpen(true);
                        }}
                      >
                        {t('components.buttons.view_details')}
                      </Button>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
          {/* Pagination */}
          <div className='flex flex-col items-start gap-2 border-t border-gray-200 bg-gray-50/20 px-5 py-8 dark:border-gray-800 dark:bg-gray-800/40 sm:items-center'>
            <p className='label-sm lg:label-md text-gray-700 dark:text-gray-300'>
              {t('pages.dashboard.home.table.showing_page')}{' '}
              <span className='text-primary dark:text-primary-400'>1</span>{' '}
              {t('pages.dashboard.home.table.of')}{' '}
              <span className='text-primary dark:text-primary-400'>1 page</span>
            </p>
            <div className='xs:mt-0 mt-2 grid grid-cols-2 sm:w-full sm:max-w-xs'>
              <Button
                size='sm'
                variant='primary'
                className='rounded-r-none focus:border-primary-700'
                disabled
              >
                <ChevronLeftIcon className='mr-2 inline w-5' />
                {t('components.buttons.previous')}
              </Button>

              <Button
                size='sm'
                variant='primary'
                className='rounded-l-none focus:border-primary-700'
              >
                {t('components.buttons.next')}
                <ChevronRightIcon className='ml-2 inline w-5' />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withTranslation()(TableExample);
