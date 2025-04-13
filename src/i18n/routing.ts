import { defineRouting } from 'next-intl/routing'
import { locales } from './locales';

export const routing = defineRouting({
  locales,
  defaultLocale: 'en-US',
  localePrefix: 'as-needed',
})
