import 'font-awesome/css/font-awesome.min.css'
import '@/styles/slick-slider.css'
import '@/styles/globals.css'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Watchlist',
  description: 'Watchlist is a popular website that allows users to track their movies and TV show preferences.',
  keywords: 'Movies, TV Shows, Reviews, Actresses, Photos, Trailers, Teasers, Credits, Cast',
  authors: [
    { name: 'GeisielMelo', url: 'https://github.com/GeisielMelo' },
    { name: 'Geisiel Melo', url: 'https://geisiel.com' },
  ],
  creator: 'GeisielMelo',
  publisher: 'GeisielMelo',
  alternates: { canonical: 'https://watchlist.geisielmelo.vercel.app' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children
}
