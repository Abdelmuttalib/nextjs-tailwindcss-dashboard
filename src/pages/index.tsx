import { ArrowRight } from 'lucide-react';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { dashboardLinks } from '@/components/layout/SideBar';
import Seo from '@/components/Seo';
import Typography from '@/components/ui/typography';

import { Customization } from '@/pages/dashboard/settings';

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      <Seo title={`${t('app.name')}`} />
      <main className=' min-h-[100svh] w-full h-full relative grid lg:grid-cols-3 gap-x-8'>
        <div className='space-y-2 flex flex-col justify-center h-full lg:col-span-2 px-6 lg:px-8'>
          <h1 className='bg-gradient-to-br from-gray-800 to-primary-700 bg-clip-text text-transparent dark:from-primary-700 text-display-xl font-semibold dark:via-primary-600 dark:to-primary-400'>
            Dashboard 2.0
          </h1>
          <Typography
            as='p'
            variant='lg/medium'
            className='max-w-2xl text-foreground-light'
          >
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </Typography>

          <div className='pt-6 flex flex-col gap-3'>
            <Typography as='p' variant='sm/medium'>
              Customize your experience
            </Typography>
            <Customization />
          </div>
        </div>
        <div className='text-center space-y-6 col-span-1 h-full bg-layer-2 px-6 lg:px-8 w-full'>
          <div className='my-8 flex flex-col justify-center gap-4 h-full '>
            {dashboardLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className='group w-full inline-flex font-medium items-center justify-between rounded border bg-white dark:bg-background border-border px-5 py-6 hover:text-primary'
                // className='group inline-flex items-center justify-between rounded-lg border-2 bg-gradient-to-br from-white to-primary-100/50 px-5 py-6 text-gray-800 hover:border-primary-100 hover:text-primary-700 dark:border-gray-800/50 dark:from-gray-900 dark:to-gray-900 dark:text-primary-200 hover:dark:text-primary-400'
              >
                <span className='inline-flex items-center gap-x-2'>
                  {link.icon && link.icon}
                  <Typography
                    as='span'
                    variant='base/regular'
                    className='capitalize'
                  >
                    {link.text}
                  </Typography>
                </span>
                <ArrowRight className='w-[18px] h-[18px] transform group-hover:translate-x-1 transition-transform' />
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common'])),
      // Will be passed to the page component as props
    },
  };
};

// --color-gray: 211.2 10% 49.2%; /* #717D8A */
// --color-gray-50: 0 0% 98%; /* #FAFAFA */
// --color-gray-100: 0 0% 94.5%; /* #F1F1F1 */
// --color-gray-200: 210 10.5% 92.5%; /* #EAECEE */
// --color-gray-300: 210 10.8% 85.5%; /* #D6DADE */
// --color-gray-400: 211.8 10.8% 69.2%; /* #A8B0B9 */
// --color-gray-500: 211.2 10% 49.2%; /* #717D8A */
// --color-gray-600: 219 40% 21%;
// --color-gray-650: 219 40% 18%;
// --color-gray-700: 219 40% 15%;
// --color-gray-750: 219 40% 12%;
// --color-gray-800: 219 40% 9%;
// --color-gray-850: 219 40% 6%;
// --color-gray-900: 219 40% 3%;
// --color-gray-950: 219 40% 0%;

// const logStatusTypes: {
//   [key in NotificationDetailsT['type']]: { label: string; color: string };
// } = {
//   INFO: { label: 'INFO', color: 'gray' },
//   WARNING: { label: 'WARNING', color: 'yellow' },
//   DEBUG: { label: 'DEBUG', color: 'blue' },
//   ERROR: { label: 'ERROR', color: 'red' },
//   CRITICAL: { label: 'CRITICAL', color: 'red' },
// };

// --color-gray: 211.2 10% 49.2%; /* #717D8A */
// --color-gray-50: 0 0% 98%; /* #FAFAFA */
// --color-gray-100: 0 0% 94.5%; /* #F1F1F1 */
// --color-gray-200: 210 10.5% 92.5%; /* #EAECEE */
// --color-gray-300: 210 10.8% 85.5%; /* #D6DADE */
// --color-gray-400: 211.8 10.8% 69.2%; /* #A8B0B9 */
// --color-gray-500: 211.2 10% 49.2%; /* #717D8A */
// --color-gray-600: 210 13.2% 35.7%; /* #4F5B67 */
// --color-gray-700: 210 12.7% 24.7%; /* #373F47 */
// --color-gray-750: 205.7 20% 13.7%; /* #1c242a #20282f #242D35 208.2 19.1% 17.5% hsl(210, 29.6%, 10.6%) #131b23 hsl(213.3, 11.1%, 15.9%) #24282d */
// --color-gray-800: 210 29.6% 10.6%; /* #242D35 hsl(213.3, 11.1%, 15.9%) #24282d */
// --color-gray-850: 210 30% 11.8%; /* #151e27 #131B23 #111827 */
// --color-gray-900: 210 29.4% 6.7%; //#0C1116
