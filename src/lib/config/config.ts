export const cmsBaseUrl = process.env.NEXT_PUBLIC_CMS_BASE_URL;

export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'de', 'it'],
  routes: { en: '/en', de: '/de', it: '/it' },
  names: {
    en: 'English',
    de: 'Deutsch',
    it: 'Italiano',
  },
} as const;

export type TLocales = (typeof i18n)['locales'][number];
