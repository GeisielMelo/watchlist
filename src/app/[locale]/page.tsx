import { getPopularMovies, getTopRatedMovies, getUpcomingMovies } from '@/services/api'

import popular from '@/mock/popular.json'
import top from '@/mock/top.json'
import upcoming from '@/mock/upcoming.json'
import MoviesSlider from '@/components/slider'

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  // const [popular, top, upcoming] = await Promise.all([
  //   getPopularMovies(1, locale).catch(() => null),
  //   getTopRatedMovies(1, locale).catch(() => null),
  //   getUpcomingMovies(1, locale).catch(() => null),
  // ])

  return (
    <>
      <MoviesSlider movies={(popular?.results as IMovieData[]) || []} />
    </>
  )
}
