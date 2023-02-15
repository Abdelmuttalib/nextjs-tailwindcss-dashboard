import { HomeIcon } from '@heroicons/react/20/solid';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import * as React from 'react';

import { Layout } from '@/components/layout';
import { ButtonLink } from '@/components/links';
import Seo from '@/components/Seo';

export default function NotFoundPage() {
  return (
    <Layout pageTitle='404'>
      <Seo templateTitle='Not Found' />

      <main>
        <section className='bg-white'>
          <div className='flex min-h-[70vh] flex-col items-center justify-center text-center text-black'>
            <div className='flex flex-col items-center gap-4 md:flex-row md:divide-x-4 md:divide-gray-800'>
              <p className='text-5xl md:text-7xl'>404</p>
              <h1 className='pl-4 text-4xl md:text-6xl'>Page Not Found</h1>
            </div>
            <ButtonLink href='/' variant='light' className='mt-14'>
              <HomeIcon className='mr-1.5 w-5' />
              Back to Home
            </ButtonLink>
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
