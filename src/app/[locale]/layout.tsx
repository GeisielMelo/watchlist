import 'font-awesome/css/font-awesome.min.css'
import '@/styles/globals.css'

import { FavoritesProvider } from '@/context/favotires-contex'
import { hasLocale, NextIntlClientProvider } from 'next-intl'
import WatchlistHeader from '@/components/watchlist-header'
import WatchlistFooter from '@/components/watchlist-footer'
import { Geist, Geist_Mono } from 'next/font/google'
import NextTopLoader from 'nextjs-toploader'
import { ThemeProvider } from 'next-themes'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })

interface RootLayoutProps {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export default async function LocaleLayout({ children, params }: RootLayoutProps) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) return notFound()

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
        <NextTopLoader color="#71717A" />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <NextIntlClientProvider locale={locale}>
            <FavoritesProvider>
              <WatchlistHeader />
              <main className="flex flex-grow flex-col">{children}</main>
              <WatchlistFooter />
            </FavoritesProvider>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
