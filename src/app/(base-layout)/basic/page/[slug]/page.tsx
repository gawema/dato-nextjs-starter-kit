import { getBasicPageData, getBasicPageSeoMetaTags } from '@/lib/data/access/cms';
import CmsStructuredText from '@/ui/components/CmsStructuredText';
import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { toNextMetadata } from 'react-datocms';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { isEnabled: isDraftModeEnabled } = await draftMode();
  const { slug } = await params;
  const seoTags = await getBasicPageSeoMetaTags({
    slug,
    includeDrafts: isDraftModeEnabled,
  });

  if (!seoTags) {
    return {};
  }

  return toNextMetadata(seoTags);
}

export default async function Page({ params }: PageProps) {
  const { isEnabled: isDraftModeEnabled } = await draftMode();
  const { slug } = await params;
  const page = await getBasicPageData({
    slug,
    includeDrafts: isDraftModeEnabled,
  });

  if (!page) {
    notFound();
  }

  return (
    <>
      <h1>{page.title}</h1>
      <CmsStructuredText data={page.structuredText} pageBasePath="/basic/page" />
      <footer>Published at {page.firstPublishedAt}</footer>
    </>
  );
}
