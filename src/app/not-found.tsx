import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Suspense } from 'react'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })

export default function GlobalNotFound() {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Suspense>
            <Header />
            <main className="flex flex-grow flex-col">
              <div className="flex flex-col items-center justify-center flex-grow w-full p-4 text-center">
                <h1 className="text-6xl font-bold">404</h1>
                <p className="mt-4 text-xl">Page Not Found</p>
                <p className="mt-2 text-gray-500">Sorry, the page you are looking for does not exist.</p>
              </div>
            </main>
            <Footer />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}
