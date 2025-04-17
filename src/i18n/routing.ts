import { defineRouting } from 'next-intl/routing'
import { locales } from './locales'

export const routing = defineRouting({
  locales: locales.map(locale => locale.value),
  defaultLocale: 'en-US',
  localePrefix: 'as-needed',
})
