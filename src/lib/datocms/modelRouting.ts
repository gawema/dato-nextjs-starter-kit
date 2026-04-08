const PAGE_MODEL_ID_FALLBACK = 'JdG722SGTSG_jEB1Jx-0XA';

export const modelRouting = {
  page: {
    id: process.env.DATOCMS_PAGE_MODEL_ID ?? PAGE_MODEL_ID_FALLBACK,
    websitePath: '/basic/page',
  },
} as const;

export function isPageModel(itemTypeId: string): boolean {
  return itemTypeId === modelRouting.page.id;
}
