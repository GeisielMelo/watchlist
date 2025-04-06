import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'

interface LocaleLayoutProps {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const locale = (await params).locale || 'en'
  if (!routing.locales.includes(locale)) return notFound()

  return <>{children}</>
}
