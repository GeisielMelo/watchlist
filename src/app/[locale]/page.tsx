import { getPopularMovies, getTopRatedMovies, getUpcomingMovies } from '@/services/api'

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const [popular, top, upcoming] = await Promise.all([
    getPopularMovies(1, locale).catch(() => null),
    getTopRatedMovies(1, locale).catch(() => null),
    getUpcomingMovies(1, locale).catch(() => null),
  ])

  console.log('popular', popular)
  console.log('top', top)
  console.log('upcoming', upcoming)

  return (
    <div className="px-4">
      <h1 className="text-2xl font-bold">Welcome to Next.js!</h1>
      <p className="mt-4">This is a simple example of a Next.js application.</p>
    </div>
  )
}
