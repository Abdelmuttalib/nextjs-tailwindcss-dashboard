import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import DesignSystemGuide from '@/components/design-system';
import { Layout } from '@/components/layout';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <Layout pageTitle='Design'>
      <Seo />

      <DesignSystemGuide />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  };
};

{
  /* <h1 className='display-lg'>Display LG</h1>
        <h1 className='display-lg-light'>Display LG Light</h1>
        <h1 className='display-md'>Display MD</h1>
        <h1 className='display-md-light'>Display MD Light</h1>
        <h1 className='display-sm'>Display SM</h1>
        <h1 className='display-sm-light'>Display SM Light</h1>

        <h1 className='h1'>H1</h1>
        <h1 className='h1-light'>H1 Light</h1>
        <h1 className='h2'>H2</h1>
        <h1 className='h2-light'>H2 Light</h1>
        <h1 className='h3'>H3</h1>
        <h1 className='h3-light'>H3 Light</h1>
        <h1 className='h4'>H4</h1>
        <h1 className='h4-light'>H4 Light</h1>
        <h1 className='h5'>H5</h1>
        <h1 className='h5-light'>H5 Light</h1>
        <h1 className='h6'>H6</h1>
        <h1 className='h6-light'>H6 Light</h1>

        <p className='body-lg'>Body LG</p>
        <p className='body-lg-light'>Body LG Light</p>
        <p className='body-md'>Body MD</p>
        <p className='body-md-light'>Body MD Light</p>
        <p className='body-sm'>Body SM</p>
        <p className='body-sm-light'>Body SM Light</p>

        <p className='label-lg'>Label LG</p>
        <p className='label-lg-light'>Label LG Light</p>
        <p className='label-md'>Label MD</p>
        <p className='label-md-light'>Label MD Light</p>
        <p className='label-sm'>Label SM</p>
        <p className='label-sm-light'>Label SM Light</p> */
}
