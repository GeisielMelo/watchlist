import 'font-awesome/css/font-awesome.min.css'
import '@/styles/globals.css'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Watchlist',
  description: 'Watchlist is a popular website that allows users to track their movies and TV show preferences.',
  keywords: 'Movies, TV Shows, Reviews, Actresses, Photos, Trailers, Teasers, Credits, Cast',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children
}
