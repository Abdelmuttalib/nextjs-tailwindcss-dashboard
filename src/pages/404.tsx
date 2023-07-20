import { HomeIcon } from '@heroicons/react/20/solid';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import * as React from 'react';

import cn from '@/lib/cn';

import { Layout } from '@/components/layout';
import Seo from '@/components/Seo';
import { buttonVariants } from '@/components/ui/button';

export default function NotFoundPage() {
  return (
    <Layout pageTitle='404'>
      <Seo templateTitle='Not Found' />

      <main>
        <section className='bg-white'>
          <div className='flex min-h-[70vh] flex-col items-center justify-center gap-6 text-center text-gray-800'>
            <div className='flex flex-col items-center gap-4 md:flex-row md:divide-x-4 md:divide-gray-800'>
              <p className='h4'>404</p>
              <h1 className='h3 pl-4'>Page Not Found</h1>
            </div>
            <Link
              href='/'
              className={cn(
                buttonVariants({
                  variant: 'outline',
                })
              )}
            >
              <HomeIcon className='mr-1.5 w-5' />
              Back to Home
            </Link>
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
    },
  };
};
