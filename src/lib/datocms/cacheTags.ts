export const DATOCMS_BASE_CACHE_TAG = 'datocms';

export function buildDatoCacheTags(input: {
  modelApiKey?: string;
  recordId?: string;
  locale?: string;
  slug?: string;
  additional?: string[];
}): string[] {
  const tags = new Set<string>([DATOCMS_BASE_CACHE_TAG]);

  if (input.modelApiKey) {
    tags.add(`datocms:model:${input.modelApiKey}`);
  }

  if (input.recordId) {
    tags.add(`datocms:record:${input.recordId}`);
  }

  if (input.slug) {
    tags.add(`datocms:slug:${input.slug}`);
  }

  if (input.locale) {
    tags.add(`datocms:locale:${input.locale}`);
  }

  if (input.additional) {
    for (const tag of input.additional) {
      tags.add(tag);
    }
  }

  return [...tags];
}
