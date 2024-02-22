import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import LanguageSwitcher from '@/components/language-switcher';
import { dashboardLinks } from '@/components/layout/SideBar';
import Seo from '@/components/Seo';
import ThemeSwitcher from '@/components/theme-switcher';
import Typography from '@/components/ui/typography';

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      <Seo title={`${t('app.name')}`} />
      <div className='isolate'>
        <div className='absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl dark:hidden sm:top-[-10rem]'>
          <svg
            className='relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]'
            viewBox='0 0 1155 678'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill='url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)'
              fillOpacity='.3'
              d='M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z'
            />
            <defs>
              <linearGradient
                id='45de2b6b-92d5-4d68-a6a0-9b9b2abad533'
                x1='1155.49'
                x2='-78.208'
                y1='.177'
                y2='474.645'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#9089FC' />
                <stop offset='1' stopColor='#4040F2' />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <main className='flex min-h-[100svh] items-center justify-center'>
          <div className='relative px-6 lg:px-8'>
            {/* {[...Array.from({ length: 30 }).fill(0)].map((a, i) => {
              const color = `hsl(219 40% ${i * 3}%)`;
              const brightness = i * 5;
              const className = `gray-${100 - brightness + '0'}`;
              return (
                <div
                  key={a + i}
                  style={{
                    background: color,
                  }}
                  className='w-full h-32 text-white'
                >
                  {className}: {color}
                </div>
              );
            })} */}
            <div className='mx-auto max-w-5xl'>
              <div className='text-center space-y-6'>
                <h1 className='bg-gradient-to-br from-gray-800 to-primary-700 bg-clip-text text-transparent dark:from-primary-700 text-display-2xl font-semibold dark:via-primary-600 dark:to-primary-400'>
                  Dashboard 2.0
                </h1>
                <Typography
                  as='p'
                  variant='lg/medium'
                  className='max-w-2xl text-foreground-light'
                >
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat fugiat aliqua.
                </Typography>

                <div className='mt-3 flex justify-center gap-3'>
                  <LanguageSwitcher />
                  <ThemeSwitcher />
                </div>
                <div className='my-8 mx-auto grid gap-4 grid-cols-2'>
                  {dashboardLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className='group inline-flex font-medium items-center justify-between rounded-lg border-2 border-border px-5 py-6 bg-layer hover:text-primary'
                      // className='group inline-flex items-center justify-between rounded-lg border-2 bg-gradient-to-br from-white to-primary-100/50 px-5 py-6 text-gray-800 hover:border-primary-100 hover:text-primary-700 dark:border-gray-800/50 dark:from-gray-900 dark:to-gray-900 dark:text-primary-200 hover:dark:text-primary-400'
                    >
                      <span className='capitalize'>{link.text}</span>
                      <ArrowRightIcon className='w-5' />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl dark:hidden dark:bg-gray-900 sm:top-[calc(100%-40rem)]'>
              <svg
                className='relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[32.375rem]'
                viewBox='0 0 1155 678'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill='url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)'
                  fillOpacity='.3'
                  d='M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z'
                />
                <defs>
                  <linearGradient
                    id='ecb5b0c9-546c-4772-8c71-4d3f06d544bc'
                    x1='1155.49'
                    x2='-78.208'
                    y1='.177'
                    y2='474.645'
                    gradientUnits='userSpaceOnUse'
                  >
                    <stop stopColor='#9089FC' />
                    <stop offset='1' stopColor='#4040F2' />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </main>
      </div>
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
