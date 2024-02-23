import Head from 'next/head';

import Board from '@/components/kanban/board';
import { Layout } from '@/components/layout';

export default function BoardPage() {
  return (
    <>
      <Head>
        <title>Board</title>
      </Head>

      <Layout pageTitle='Board' className='bg-layer-2 dark:bg-background'>
        <Board />
      </Layout>
    </>
  );
}
