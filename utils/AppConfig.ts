import type { LocalePrefix } from 'node_modules/next-intl/dist/types/src/routing/types';

const localePrefix: LocalePrefix = 'as-needed';

export const AppConfig = {
  name: 'App',
  locales: ['en', 'pt', 'fr'],
  defaultLocale: 'en',
  localePrefix,
};
