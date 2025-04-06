import { defineRouting } from 'next-intl/routing'

export const locales = ['en', 'pt', 'uk']

export const routing = defineRouting({
  locales,
  defaultLocale: 'en',
  localePrefix: 'as-needed',
})
