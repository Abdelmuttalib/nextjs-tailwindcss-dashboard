/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import Image from 'next/image';

import { Mail } from '@/components/examples/mail/components/mail';
import { accounts, mails } from '@/components/examples/mail/data';

export default function MailPage() {
  return (
    <>
      <div className='md:hidden'>
        <Image
          src='/examples/mail-dark.png'
          width={1280}
          height={727}
          alt='Mail'
          className='hidden dark:block'
        />
        <Image
          src='/examples/mail-light.png'
          width={1280}
          height={727}
          alt='Mail'
          className='block dark:hidden'
        />
      </div>
      <div className='hidden flex-col md:flex'>
        <Mail
          accounts={accounts}
          mails={mails}
          // defaultLayout={defaultLayout}
          // defaultCollapsed={defaultCollapsed}
          navCollapsedSize={4}
        />
      </div>
    </>
  );
}
