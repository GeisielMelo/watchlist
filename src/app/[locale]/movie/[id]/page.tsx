import { WatchlistTitles } from '@/components/watchlist-titles'
import { getSelectedTitle } from '@/services/api'

export default async function Movie({ params }: IPage) {
  const { locale, id } = await params

  const [data] = await Promise.all([
    getSelectedTitle('movie', id, { language: locale, append_to_response: 'similar,videos,images' }).catch(() => null),
  ])

  console.log(data)

  return (
    <>
      {locale}
      {data && data.similar && <WatchlistTitles type="movie" limit={12} title="Similar Movies" data={data.similar} />}
    </>
  )
}
