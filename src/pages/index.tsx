import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Layout } from '@/components/layout';
import { dashboardLinks } from '@/components/layout/SideBar';
import Seo from '@/components/Seo';

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <Layout pageTitle={t('app.description')}>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className='bg-white'>
          <div className='flex min-h-screen flex-col'>
            <div className='grid gap-y-4 md:grid-cols-2'>
              {' '}
              {dashboardLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className='h3 inline-flex items-center gap-2 text-primary first-letter:uppercase hover:text-primary-400 focus:text-primary-600'
                >
                  <p className='first-letter:uppercase'>
                    {t(`pages.dashboard.${link.text}.title`)}
                  </p>
                  <ArrowRightIcon className='w-7' />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
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
