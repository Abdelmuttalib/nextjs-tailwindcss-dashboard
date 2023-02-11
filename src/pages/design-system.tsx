import { Layout } from '@/components/layout';
import { ButtonLink } from '@/components/links';
import Seo from '@/components/Seo';
import { Button } from '@/components/ui/button';
import {
  Blockquote,
  Display,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Label,
  P,
} from '@/components/ui/typography';

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className='bg-white'>
          <div className='layout flex min-h-screen flex-col justify-center'>
            <Display size='lg' weight='normal'>
              Display
            </Display>
            <Display size='lg' weight='medium'>
              Display Medium
            </Display>
            <Display size='md' weight='normal'>
              Display
            </Display>
            <Display size='md' weight='medium'>
              Display Medium
            </Display>
            <Display size='sm' weight='normal'>
              Display
            </Display>
            <Display size='sm' weight='medium'>
              Display Medium
            </Display>

            {/* Heading */}
            <H1 weight='normal'>H1</H1>
            <H1 weight='medium'>H1 medium</H1>
            <H2 weight='normal'>H2</H2>
            <H2 weight='medium'>H2 medium</H2>
            <H3 weight='normal'>H3</H3>
            <H3 weight='medium'>H3 medium</H3>
            <H4 weight='normal'>H4</H4>
            <H4 weight='medium'>H4 medium</H4>
            <H5 weight='normal'>H5</H5>
            <H5 weight='medium'>H5 medium</H5>
            <H6 weight='normal'>H6</H6>
            <H6 weight='medium'>H6 medium</H6>

            <P size='lg'>Paragraph</P>
            <P size='md'>Paragraph</P>
            <P size='sm'>Paragraph</P>

            <Label size='lg'>Label</Label>
            <Label size='md'>Label</Label>
            <Label size='sm'>Label</Label>

            <Blockquote>Blockquote</Blockquote>

            <Button type='reset' variant='default'>
              Button
            </Button>

            <ButtonLink className='mt-8' href='/components' variant='light'>
              See all components
            </ButtonLink>
          </div>
        </section>
      </main>
    </Layout>
  );
}
