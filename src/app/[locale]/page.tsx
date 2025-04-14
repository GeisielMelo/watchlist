import { getPopularMovies, getTopRatedMovies, getUpcomingMovies } from '@/services/api'
import { WatchlistMoviesSlider } from '@/components/watchlist-movies-slider'
import { WatchlistTitles } from '@/components/watchlist-titles'

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const [trending, top, upcoming] = await Promise.all([
    getPopularMovies({ page: 1, language: locale }).catch(() => null),
    getTopRatedMovies({ page: 1, language: locale }).catch(() => null),
    getUpcomingMovies({ page: 1, language: locale }).catch(() => null),
  ])

  return (
    <>
      <WatchlistMoviesSlider movies={trending?.results || []} />
      <WatchlistTitles type="movie" title="Upcoming Movies" href="/upcoming" data={upcoming} limit={12} />
      <WatchlistTitles type="movie" title="Top Rated Movies" href="/top_rated" data={top} limit={12} />
    </>
  )
}
