import { WatchlistTitles } from '@/components/watchlist-titles'
import { WatchlistTitle } from '@/components/watchlist-title'
import { getSelectedTitle } from '@/services/api'

export default async function Movie({ params }: IPage) {
  const { locale, id } = await params

  const [data] = await Promise.all([getSelectedTitle('movie', id, { language: locale, append_to_response: 'similar,videos,images,credits' }).catch(() => null)])

  return (
    <>
      {data && <WatchlistTitle data={data} type="movie" />}
      {data && data.similar && <WatchlistTitles type="movie" limit={12} title="Similar Movies" data={data.similar} />}
    </>
  )
}
