import { defineRouting } from 'next-intl/routing'
import { locales } from './locales'

export const routing = defineRouting({
  locales: locales.map(locale => locale.value),
  defaultLocale: 'en-US',
  localePrefix: 'as-needed',
  localeCookie: {
    name: 'NEXT_LOCALE',
    maxAge: 60 * 60 * 24 * 365,
  },
})
