import WatchListGenre from '@/components/watchlist-genre'
import { getGenres } from '@/services/api'

export default async function Genre({ params }: IPage) {
  const { locale, type } = await params

  const [data] = await Promise.all([getGenres(type as TMediaType, { language: locale }).catch(() => null)])

  return (
    <>
      <WatchListGenre type={type as TMediaType} genres={data} />
    </>
  )
}
