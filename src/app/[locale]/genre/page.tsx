import WatchListGenre from '@/components/ui/watchlist-genre'
import { getGenres } from '@/services/api'

export default async function Genre({ params }: IPage) {
  const { locale } = await params

  const [movie, tv] = await Promise.all([
    getGenres('movie', { language: locale }).catch(() => null),
    getGenres('tv', { language: locale }).catch(() => null),
  ])

  return (
    <>
      <WatchListGenre type="movie" genres={movie} />
      <WatchListGenre type="tv" genres={tv} />
    </>
  )
}
