import clsx from 'clsx';
import * as React from 'react';

import { Button } from '@/components/buttons';
import Layout from '@/components/layout/Layout';
import {
  ArrowLink,
  ButtonLink,
  PrimaryLink,
  UnderlineLink,
  UnstyledLink,
} from '@/components/links';
import { SkeletonLoader } from '@/components/loaders';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

export default function ComponentsPage() {
  return (
    <Layout pageTitle='Components'>
      <Seo
        templateTitle='Components'
        description='Pre-built components with awesome default'
      />

      <main>
        <section>
          <div className={clsx('layout min-h-screen py-20')}>
            <h1>H1</h1>
            <h2>H2</h2>
            <h3>H3</h3>
            <h4>H4</h4>
            <h5>H5</h5>
            <h6>H6</h6>
            <p>Paragraph</p>

            <h1>Built-in Components</h1>
            <ArrowLink direction='left' className='mt-2' href='/'>
              Back to Home
            </ArrowLink>

            <ol className='mt-8 space-y-6'>
              <li className='space-y-2'>
                <h2>UnstyledLink</h2>
                <p>
                  No style applied, differentiate internal and outside links,
                  give custom cursor for outside links.
                </p>
                <div className='space-x-2'>
                  <UnstyledLink href='/'>Internal Links</UnstyledLink>
                  <UnstyledLink href='#'>Outside Links</UnstyledLink>
                </div>
              </li>
              <li className='space-y-2'>
                <h2>PrimaryLink</h2>
                <p>
                  Add styling on top of UnstyledLink, giving a primary color to
                  the link.
                </p>
                <div className='space-x-2'>
                  <PrimaryLink href='/'>Internal Links</PrimaryLink>
                  <PrimaryLink href='#'>Outside Links</PrimaryLink>
                </div>
              </li>
              <li className='space-y-2'>
                <h2>UnderlineLink</h2>
                <p>
                  Add styling on top of UnstyledLink, giving a dotted and
                  animated underline.
                </p>
                <div className='space-x-2'>
                  <UnderlineLink href='/'>Internal Links</UnderlineLink>
                  <UnderlineLink href='#'>Outside Links</UnderlineLink>
                </div>
              </li>
              <li className='space-y-2'>
                <h2>ArrowLink</h2>
                <p>
                  Useful for indicating navigation, I use this quite a lot, so
                  why not build a component with some whimsy touch?
                </p>
                <div className='flex flex-wrap items-center gap-4'>
                  <ArrowLink href='/' direction='left'>
                    Direction Left
                  </ArrowLink>
                  <ArrowLink href='/'>Direction Right</ArrowLink>
                  <ArrowLink
                    as={UnstyledLink}
                    className='inline-flex items-center'
                    href='/'
                  >
                    Polymorphic
                  </ArrowLink>
                  <ArrowLink
                    as={ButtonLink}
                    variant='light'
                    className='inline-flex items-center'
                    href='/'
                  >
                    Polymorphic
                  </ArrowLink>
                </div>
              </li>
              <li className='space-y-2'>
                <h2>ButtonLink</h2>
                <p>Button styled link with 3 variants.</p>
                <div className='flex flex-wrap gap-2'>
                  <ButtonLink variant='primary' href='#'>
                    Primary Variant
                  </ButtonLink>
                  <ButtonLink variant='outline' href='#'>
                    Outline Variant
                  </ButtonLink>
                  <ButtonLink variant='ghost' href='#'>
                    Ghost Variant
                  </ButtonLink>
                  <ButtonLink variant='dark' href='#'>
                    Dark Variant
                  </ButtonLink>
                  <ButtonLink variant='light' href='#'>
                    Light Variant
                  </ButtonLink>
                </div>
              </li>
              <li className='space-y-2'>
                <h2>Button</h2>
                <p>Ordinary button with style.</p>
                <div className='flex flex-wrap gap-2'>
                  <Button variant='primary'>Primary Variant</Button>
                  <Button variant='outline'>Outline Variant</Button>
                  <Button variant='ghost'>Ghost Variant</Button>
                  <Button variant='dark'>Dark Variant</Button>
                  <Button variant='light'>Light Variant</Button>
                </div>
                <div className='flex flex-wrap gap-2'>
                  <Button disabled variant='primary'>
                    Disabled
                  </Button>
                  <Button disabled variant='outline'>
                    Disabled
                  </Button>
                  <Button disabled variant='ghost'>
                    Disabled
                  </Button>
                  <Button disabled variant='dark'>
                    Disabled
                  </Button>
                  <Button disabled variant='light'>
                    Disabled
                  </Button>
                </div>
                <div className='flex flex-wrap gap-2'>
                  <Button isLoading variant='primary'>
                    Disabled
                  </Button>
                  <Button isLoading variant='outline'>
                    Disabled
                  </Button>
                  <Button isLoading variant='ghost'>
                    Disabled
                  </Button>
                  <Button isLoading variant='dark'>
                    Disabled
                  </Button>
                  <Button isLoading variant='light'>
                    Disabled
                  </Button>
                </div>
              </li>
              <li className='space-y-2'>
                <h2>Custom 404 Page</h2>
                <p>Styled 404 page with some animation.</p>
                <div className='flex flex-wrap gap-2'>
                  <ButtonLink href='/404'>Visit the 404 page</ButtonLink>
                </div>
              </li>
              <li className='space-y-2'>
                <h2>Next Image</h2>
                <p>Next Image with default props and skeleton animation</p>
                <NextImage
                  useSkeleton
                  className='relative h-56 w-32 rounded-md md:w-40'
                  imgClassName='object-contain rounded-md bg-gray-100'
                  src='/images/nextjs-logo.png'
                  alt='Nextjs logo'
                  fill
                />
              </li>
              <li className='space-y-2'>
                <h2>Skeleton Loader</h2>
                <p>Skeleton Content Loader</p>
                <SkeletonLoader className='h-72 w-72' />
              </li>
            </ol>
          </div>
        </section>
      </main>
    </Layout>
  );
}
