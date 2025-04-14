import { WatchlistTitles } from '@/components/watchlist-titles'
import { getSelectedTitle } from '@/services/api'

export default async function Tv({ params }: IPage) {
  const { locale, id } = await params

  const [data] = await Promise.all([
    getSelectedTitle('tv', id, { language: locale, append_to_response: 'similar,videos,images' }).catch(() => null),
  ])

  console.log(data)

  return (
    <>
      {locale}
      {data && data.similar && <WatchlistTitles type="tv" limit={12} title="Similar TV Shows" data={data.similar} />}
    </>
  )
}
