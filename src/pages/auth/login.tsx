import React from 'react';

import AuthLayout from '@/components/layout/auth-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Typography from '@/components/ui/typography';

// type LoginPageProps = {};

export default function LoginPage() {
  return (
    <AuthLayout>
      <div className='border w-full h-full flex justify-center items-center'>
        <div className='w-full max-w-sm'>
          <form className='space-y-5'>
            <div className='mb-6'>
              <Typography as='h1' variant='display-xs/medium'>
                Login
              </Typography>
            </div>
            <div>
              <Label>Email</Label>
              <Input id='email' type='email' placeholder='email address' />
            </div>
            <div>
              <Label>Password</Label>
              <Input id='password' type='password' placeholder='password' />
            </div>
            <div className='w-full flex flex-col gap-y-3 pt-4'>
              <Button type='button' className='w-full'>
                Login
              </Button>
              <Button
                type='button'
                className='w-full capitalize'
                variant='secondary'
              >
                create account
              </Button>
            </div>
          </form>
        </div>
      </div>
    </AuthLayout>
  );
}
