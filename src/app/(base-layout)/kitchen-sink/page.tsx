import Code from '@/components/Code';
import DraftModeToggler from '@/components/DraftModeToggler';
import HeadingWithAnchorLink from '@/components/HeadingWithAnchorLink';
import { ICmsSettings } from '@/lib/data/types/cms';
import { TLocales } from '@/lib/config/config';
import { Accordion } from '@/ui/components/sections/Accordion/Accordion';
import { Button } from '@/ui/components/base/Button';
import { IconLink } from '@/ui/components/base/IconLink';
import { ScrollLink } from '@/ui/components/base/ScrollLink';
import { Footer } from '@/ui/components/Footer/Footer';
import { Header } from '@/ui/components/Header/Header';
import { Gtm } from '@/ui/components/misc/GTM';
import { GtmCookie } from '@/ui/components/misc/GtmCookie';
import { GtmRouteTracker } from '@/ui/components/misc/GtmRouteTracker';
import { HDisplay, H1, H2, H3, H4, H5 } from '@/ui/components/Typography/Headings/Headings';
import { Copy } from '@/ui/components/Typography/Copy/Copy';
import { Gallery } from '@/ui/components/sections/Gallery/Gallery';
import { Hero } from '@/ui/components/sections/Hero/Hero';
import { Text } from '@/ui/components/sections/Text/Text';
import { TextMedia } from '@/ui/components/sections/TextMedia/TextMedia';
import { TextMultiColumns } from '@/ui/components/sections/TextMultiColumns/TextMultiColumns';
import ImageGallerySection from '@/ui/components/sections/ImageGallerySection';
import ImageSection from '@/ui/components/sections/ImageSection';
import VideoSection from '@/ui/components/sections/VideoSection';
import { IImage, IImageLink, ILink } from '@/ui/types/commonTypes';
import type { Code as CodeNode, Heading } from 'datocms-structured-text-utils';
import Link from 'next/link';
import { HiOutlineMail } from 'react-icons/hi';

export const metadata = {
  title: 'Kitchen Sink | Starter Kit',
};

const sampleCodeNode: CodeNode = {
  type: 'code',
  code: "export const starter = 'ready';",
  language: 'typescript',
};

const sampleHeadingNode: Heading = {
  type: 'heading',
  level: 2,
  children: [{ type: 'span', value: 'Kitchen Sink Heading' }],
};

/** Stable demo URLs (avoid dead Dato demo assets). Real projects use imgix/Dato responsive URLs. */
const PLACEHOLDER_900 = 'https://placehold.co/900x562/603cba/ffffff/png?text=Sample';
const PLACEHOLDER_900_B = 'https://placehold.co/900x562/2d3748/ffffff/png?text=B';
const PLACEHOLDER_900_C = 'https://placehold.co/900x562/319795/ffffff/png?text=C';

const sampleImage: IImage = {
  id: 1,
  src: PLACEHOLDER_900,
  alt: 'Sample image',
  dimensions: { width: 900, height: 562 },
};

const sampleLinks: ILink[] = [
  { title: 'Instagram', href: 'https://instagram.com', target: '_blank' },
  { title: 'LinkedIn', href: 'https://linkedin.com', target: '_blank' },
];

const samplePartners: IImageLink[] = [
  { ...sampleImage, id: 10, linkUrl: '#', linkTarget: '_self' },
  { ...sampleImage, id: 11, linkUrl: '#', linkTarget: '_self' },
  { ...sampleImage, id: 12, linkUrl: '#', linkTarget: '_self' },
  { ...sampleImage, id: 13, linkUrl: '#', linkTarget: '_self' },
];

const sampleSettings: ICmsSettings = {
  locallang: {
    contact_menu: 'Contact',
  },
};

const sampleLang: TLocales = 'en';

export default function KitchenSinkPage() {
  return (
    <div className="u-container u-stack-md">
      <h1>Kitchen sink</h1>
      <p>
        This page showcases all reusable components ported from the agency TYPO3 starter, plus the
        new CMS-agnostic Dato starter sections.
      </p>

      <section>
        <h2>Shared helper components</h2>
        <HeadingWithAnchorLink node={sampleHeadingNode}>Kitchen Sink Heading</HeadingWithAnchorLink>
        <Code node={sampleCodeNode} />
        <DraftModeToggler draftModeEnabled={false} />
        <div className="flex flex-wrap gap-4">
          <Button label="Primary button" />
          <Button label="Link button" href="/" />
          <IconLink Icon={HiOutlineMail} url="mailto:hello@example.com" />
          <ScrollLink url="#page-footer" label="Scroll to footer" />
        </div>
      </section>

      <section>
        <h2>Typography</h2>
        <HDisplay>Display heading</HDisplay>
        <H1>H1 Heading</H1>
        <H2>H2 Heading</H2>
        <H3>H3 Heading</H3>
        <H4>H4 Heading</H4>
        <H5>H5 Heading</H5>
        <Copy size="large">
          Large body copy with <strong>bold text</strong> and inline content.
        </Copy>
      </section>

      <section>
        <h2>Ported TYPO3 sections</h2>
        <Hero
          image={sampleImage}
          callout={{
            text: '<p>Sample callout text from the hero section.</p>',
            link: { title: 'Read more', href: '/' },
          }}
        />
        <Gallery
          images={[
            sampleImage,
            { ...sampleImage, id: 2, src: PLACEHOLDER_900_B },
            { ...sampleImage, id: 3, src: PLACEHOLDER_900_C },
          ]}
        />
        <Text
          pretitle="Pretitle"
          title="Text section title"
          text="<p>This is sample HTML content for the text section.</p>"
        />
        <TextMedia
          bgColor="yellow"
          title="Text media title"
          text="<p>Sample text media content.</p>"
          image={sampleImage}
        />
        <TextMultiColumns
          columns={2}
          title="Two columns section"
          subtitle="Subtitle text"
          text1="<p>First column content.</p>"
          text2="<p>Second column content.</p>"
          link={{ title: 'Optional link', href: '/' }}
        />
        <Accordion
          title="FAQ"
          items={[
            {
              id: 'faq-1',
              title: 'Question one',
              subtitle: 'Subtitle',
              body: '<p>Answer for question one.</p>',
            },
            {
              id: 'faq-2',
              title: 'Question two',
              body: '<p>Answer for question two.</p>',
            },
          ]}
        />
      </section>

      <section>
        <h2>Header/Footer shell components</h2>
        <Header
          logo={sampleImage}
          links={[
            { id: 'nav-1', url: '#one', label: 'One' },
            { id: 'nav-2', url: '#two', label: 'Two' },
          ]}
          currentLang={sampleLang}
          settings={sampleSettings}
        />
        <Footer
          logo={sampleImage}
          intro="<p>Intro copy in footer.</p>"
          info="<p>Company information block.</p>"
          socials={sampleLinks}
          addressLine1="Main street 1"
          addressLine2="8000 Zurich"
          phone="+41 00 000 00 00"
          email="hello@example.com"
          partnersLogos={samplePartners}
          addressLink="https://maps.google.com"
          contactLabel="Contact"
          nlPretitle="Newsletter"
          nlTitle="Stay up to date"
          nlEmailLabel="Email"
          nlButtonLabel="Subscribe"
        />
      </section>

      <section>
        <h2>Misc components</h2>
        <GtmRouteTracker />
        <Gtm />
        <GtmCookie cidCode="demo-cid" gtmCode="demo-gtm" />
      </section>

      <section>
        <h2>Section components</h2>
        <ImageSection
          image={{
            src: PLACEHOLDER_900,
            srcSet:
              'https://placehold.co/500x312/603cba/ffffff/png?text=500w 500w, https://placehold.co/900x562/603cba/ffffff/png?text=900w 900w',
            width: 900,
            height: 562,
            sizes: '(max-width: 900px) 100vw, 900px',
            alt: 'Sample hero image',
            title: 'Sample image section',
          }}
          caption="Sample image section caption"
        />

        <ImageGallerySection
          images={[
            {
              id: 'gallery-1',
              image: {
                src: 'https://placehold.co/300x187/603cba/ffffff/png?text=1',
                srcSet:
                  'https://placehold.co/300x187/603cba/ffffff/png?text=1 300w, https://placehold.co/600x375/603cba/ffffff/png?text=1 600w',
                width: 300,
                height: 187,
                sizes: '300px',
                alt: 'Gallery image one',
                title: 'Gallery image one',
              },
              caption: 'Gallery item one',
            },
            {
              id: 'gallery-2',
              image: {
                src: 'https://placehold.co/300x187/319795/ffffff/png?text=2',
                srcSet:
                  'https://placehold.co/300x187/319795/ffffff/png?text=2 300w, https://placehold.co/600x375/319795/ffffff/png?text=2 600w',
                width: 300,
                height: 187,
                sizes: '300px',
                alt: 'Gallery image two',
                title: 'Gallery image two',
              },
              caption: 'Gallery item two',
            },
          ]}
        />

        <VideoSection
          video={{
            muxPlaybackId: 'x9YG01ZrN02g4nM3sVfK6afqSCD6I8eJSgQfYQk6WnJW4',
            title: 'Sample video section',
            width: 1920,
            height: 1080,
          }}
          caption="Sample video section caption"
        />
      </section>

      <p>
        <Link href="/">Back to home</Link>
      </p>
    </div>
  );
}
