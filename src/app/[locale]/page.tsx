import { getPopularMovies, getTopRatedMovies, getUpcomingMovies } from '@/services/api'
import MoviesSlider from '@/components/slider'
import { Titles } from '@/components/titles'

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const [trending, top, upcoming] = await Promise.all([
    getPopularMovies({ page: 1, language: locale }).catch(() => null),
    getTopRatedMovies({ page: 1, language: locale }).catch(() => null),
    getUpcomingMovies({ page: 1, language: locale }).catch(() => null),
  ])

  return (
    <>
      <MoviesSlider movies={trending?.results || []} />
      <Titles type="movie" title="Upcoming Movies" href="/upcoming" data={upcoming} limit={12} />
      <Titles type="movie" title="Top Rated Movies" href="/top_rated" data={top} limit={12} />
    </>
  )
}
