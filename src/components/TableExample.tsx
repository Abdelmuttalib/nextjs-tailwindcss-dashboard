import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import { TFunction } from 'next-i18next';
import { FC, useState } from 'react';
import { withTranslation } from 'react-i18next';

import { getMeetingStatusBadgeColor } from '@/lib/get-badge-status-color';

import CustomDialog from '@/components/ui/animated-dialog';
import Badge from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Typography from '@/components/ui/typography';

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

  return (
    <>
      {/* table */}
      <div className='-mx-4 overflow-x-auto px-4 pb-10 sm:-mx-8 sm:px-8'>
        <div className='inline-block min-w-full overflow-hidden rounded-lg shadow'>
          <table className='min-w-full bg-layer'>
            <thead className='bg-layer-2'>
              <tr className='border-b border-border text-left text-foreground-light'>
                <th className='text-sm font-medium whitespace-nowrap px-5 py-4'>
                  <span>{t('pages.dashboard.home.table.meeting_id')}</span>
                </th>
                <th className='text-sm font-medium whitespace-nowrap px-5 py-4'>
                  <span>{t('pages.dashboard.home.table.meeting_title')}</span>
                </th>
                <th className='text-sm font-medium whitespace-nowrap px-5 py-4'>
                  <span>{t('pages.dashboard.home.table.date')}</span>
                </th>
                <th className='text-sm font-medium whitespace-nowrap px-5 py-4'>
                  <span>{t('pages.dashboard.home.table.time')}</span>
                </th>
                <th className='text-sm font-medium whitespace-nowrap px-5 py-4'>
                  <span>{t('pages.dashboard.home.table.organizer')}</span>
                </th>
                <th className='text-sm font-medium whitespace-nowrap px-5 py-4'>
                  <span>{t('pages.dashboard.home.table.attendees')}</span>
                </th>
                <th className='text-sm font-medium whitespace-nowrap px-5 py-4'>
                  <span>{t('pages.dashboard.home.table.status')}</span>
                </th>
                <th className='text-sm font-medium whitespace-nowrap px-5 py-4'>
                  <span>{t('components.buttons.view_details')}</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {meetings.map(
                ({ id, title, date, time, organizer, attendees, status }) => (
                  <tr
                    key={id}
                    className='whitespace-nowrap border-b border-border text-foreground'
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
                      <CustomDialog
                        open={isOpen}
                        onClose={() => setIsOpen(false)}
                        triggerButton={
                          <Button
                            type='button'
                            size='sm'
                            onClick={() => setIsOpen(true)}
                          >
                            {t('components.buttons.view_details')}
                          </Button>
                        }
                        title='Meeting Details'
                        fullScreen
                      >
                        <div>
                          <div className='flex flex-col gap-4 divide-y'>
                            <div className='flex flex-col gap-y-4 py-3 text-sm'>
                              <div className='flex gap-x-6'>
                                <Typography
                                  as='p'
                                  variant='sm/regular'
                                  className='text-foreground-lighter'
                                >
                                  Status
                                </Typography>
                                <Badge
                                  color='blue'
                                  className='capitalize'
                                  size='sm'
                                >
                                  {status}
                                </Badge>
                              </div>
                              <div className='flex gap-x-6'>
                                <div className='inline-flex gap-x-2'>
                                  <Typography
                                    as='p'
                                    variant='sm/regular'
                                    className='text-foreground-lighter'
                                  >
                                    Label
                                  </Typography>
                                </div>
                                <Badge color='green' size='sm'>
                                  label
                                </Badge>
                              </div>
                              <div className='flex gap-x-6'>
                                <Typography
                                  as='p'
                                  variant='sm/regular'
                                  className='text-foreground-lighter'
                                >
                                  Organizer
                                </Typography>
                                <div className='inline-flex items-center gap-x-2'>
                                  <p>{organizer}</p>
                                </div>
                              </div>
                              <div className='flex gap-x-6'>
                                <Typography
                                  as='p'
                                  variant='sm/regular'
                                  className='text-foreground-lighter'
                                >
                                  Time
                                </Typography>
                                <div className='inline-flex items-center gap-x-2'>
                                  <p>
                                    {date} at {time}
                                  </p>
                                </div>
                              </div>
                              <div className='flex gap-x-6'>
                                <Typography
                                  as='p'
                                  variant='sm/regular'
                                  className='text-foreground-lighter'
                                >
                                  Attendees
                                </Typography>
                                <div className='inline-flex items-center gap-x-2'>
                                  <p>{attendees}</p>
                                </div>
                              </div>
                            </div>
                            {/*  */}
                            <div className='flex flex-col gap-y-2 pt-4'>
                              <h3 className='font-semibold'>Description</h3>
                              <p className='text-gray-600'>description</p>
                            </div>
                            {/* Comments */}
                            <div className='flex flex-col gap-y-2 pt-4'>
                              {/* <div className="inline-flex items-center gap-x-2">
                <h3 className="font-semibold">Comments</h3>
                <span className="block rounded-full bg-gray-200 px-1.5 py-0.5 text-sm font-medium dark:bg-gray-800">
                  {taskComments?.length}{" "}
                </span>
              </div> */}
                              {/* <div className="flex flex-col gap-y-2 divide-y">
                {taskComments?.map(
                  ({ id, comment, author, createdAt, authorId }, index) => (
                    <div
                      key={id}
                      className={cn("relative flex gap-3", {
                        "pt-3": index !== 0,
                      })}
                    >
                      <UserAvatar
                        user={author}
                        size="lg"
                        triggerClassName="w-12 h-12"
                      />
                      <div className="flex flex-col">
                        <p className="inline text-sm font-medium">
                          {author.firstName} {author.lastName}
                        </p>
                        <span className="text-xs text-gray-500">
                          {formatFullDate(createdAt)}
                        </span>
                        <p className="inline pt-2 font-semibold">{comment}</p>
                      </div>
                      {authorId === user?.id && (
                        <button
                          className="absolute right-2 top-2 outline-none focus:outline-none disabled:pointer-events-none"
                          onClick={() => onDeleteComment(id, authorId)}
                          disabled={deleteCommentMuation.isLoading}
                        >
                          <Trash2 className="w-5 text-error-500 dark:text-error-400" />
                        </button>
                      )}
                    </div>
                  )
                )}
              </div> */}
                            </div>
                          </div>
                        </div>
                      </CustomDialog>
                      {/* <CustomDialog
                        open={isOpen}
                        onClose={() => setIsOpen(false)}
                        triggerButton={
                          <Button
                            type='button'
                            size='sm'
                            onClick={() => setIsOpen(true)}
                          >
                            {t('components.buttons.view_details')}
                          </Button>
                        }
                        title='Meeting Details'
                        fullScreen
                      >
                        <div className='mt-2'>
                          <div>
                            <div className='mb-6'>
                              <div className='flex flex-col gap-4 md:gap-5'>
                                <div className='flex items-center gap-1 text-gray-500'>
                                  <CalendarDaysIcon className='w-7 text-gray-500' />
                                  <p className='label-md inline-block'>
                                    {date} at {time}
                                  </p>
                                </div>
                                <hr className='dark:border-t dark:border-gray-800' />
                                <div className='label-md flex flex-col gap-1'>
                                  <p className=' inline-block dark:text-gray-200'>
                                    Meeting ID
                                  </p>
                                  <p className='body-sm md:body-md ml-1 inline-block text-gray-500'>
                                    {id}
                                  </p>
                                </div>
                                <div className='label-md flex flex-col gap-2'>
                                  <p className=' inline-block dark:text-gray-200'>
                                    Meeting Title
                                  </p>
                                  <p className='inline-block text-gray-500'>
                                    {title}
                                  </p>
                                </div>
                                <div className='label-md flex flex-col gap-1'>
                                  <p className='inline-block dark:text-gray-200'>
                                    Organizer:
                                  </p>{' '}
                                  <p className='body-sm md:body-md inline-block text-gray-500'>
                                    {organizer}
                                  </p>
                                </div>
                                <div className='label-md flex flex-col gap-1'>
                                  <p className='inline-block dark:text-gray-200'>
                                    Attendees:
                                  </p>{' '}
                                  <p className='body-sm md:body-md inline-block text-gray-500'>
                                    {attendees}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CustomDialog> */}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
          {/* Pagination */}
          <div className='flex flex-col items-start gap-2  px-5 py-8 dark:border-gray-800 sm:items-center'>
            {/* <p className='label-sm lg:label-md text-gray-700 dark:text-gray-300'>
              {t('pages.dashboard.home.table.showing_page')}{' '}
              <span className='text-primary dark:text-primary-400'>1</span>{' '}
              {t('pages.dashboard.home.table.of')}{' '}
              <span className='text-primary dark:text-primary-400'>1 page</span>
            </p> */}
            <div className='grid grid-cols-2 sm:w-full sm:max-w-xs'>
              <Button
                size='sm'
                variant='primary'
                className='rounded-r-none'
                disabled
                iconLeft={<ChevronLeftIcon className='w-5' />}
              >
                {t('components.buttons.previous')}
              </Button>
              <Button
                size='sm'
                variant='primary'
                className='rounded-l-none'
                iconRight={<ChevronRightIcon className='w-5' />}
              >
                {t('components.buttons.next')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withTranslation()(TableExample);
