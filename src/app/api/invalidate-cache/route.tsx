import { buildDatoCacheTags, DATOCMS_BASE_CACHE_TAG } from '@/lib/datocms/cacheTags';
import { revalidateTag } from 'next/cache';
import type { NextRequest, NextResponse } from 'next/server';
import { handleUnexpectedError, invalidRequestResponse, successfulResponse } from '../utils';

/*
 * This route handler receives "Cache Tag Invalidation" events from a DatoCMS
 * webhook, and is responsible for invalidating the Next.js cache.
 *
 * Please note, this project uses a very basic cache invalidation method: all
 * requests to DatoCMS are tagged with "datocms" in the Next.js Data Cache.
 * Whenever DatoCMS notifies us of any updates, we invalidate all requests with
 * the same tag.
 *
 * Although this caching strategy may be sufficient for smaller websites, it is
 * not advised for larger projects. Fortunately, with DatoCMS and Next, it is
 * possible to implement a much more detailed invalidation strategy.
 *
 * For more information: https://www.datocms.com/docs/next-js/using-cache-tags
 */

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    // Parse query string parameters
    const token = req.nextUrl.searchParams.get('token');

    // Ensure that the request is coming from a trusted source
    if (token !== process.env.SECRET_API_TOKEN) {
      return invalidRequestResponse('Invalid token', 401);
    }

    const payload = (await req.json().catch(() => null)) as {
      entity?: {
        id?: string;
        attributes?: {
          api_key?: string;
          slug?: string;
          locale?: string;
        };
      };
    } | null;

    const tags = buildDatoCacheTags({
      modelApiKey: payload?.entity?.attributes?.api_key,
      recordId: payload?.entity?.id,
      slug: payload?.entity?.attributes?.slug,
      locale: payload?.entity?.attributes?.locale,
    });

    for (const tag of tags.length > 0 ? tags : [DATOCMS_BASE_CACHE_TAG]) {
      revalidateTag(tag, 'default');
    }

    return successfulResponse();
  } catch (error) {
    return handleUnexpectedError(error);
  }
}
