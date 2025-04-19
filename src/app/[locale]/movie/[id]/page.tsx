import { WatchlistTitles } from '@/components/watchlist-titles'
import { WatchlistTitle } from '@/components/watchlist-title'
import { getSelectedTitle } from '@/services/api'
import { notFound } from 'next/navigation'
import data from './mock.json'
import { WatchlistTitleCast } from '@/components/watchlist-title-cast'

export default async function Movie({ params }: IPage) {
  const { locale, id } = await params

  const append = 'keywords,alternative_titles,changes,credits,images,keywords,lists,releases,reviews,similar,translations,videos'

  // const [data] = await Promise.all([getSelectedTitle('movie', id, { language: locale, append_to_response: append }).catch(() => null)])

  if (!data) return notFound()

  return (
    <>
      <WatchlistTitle data={data} type="movie" />

      <div className="flex items-center justify-center my-10">
        <div className="flex flex-row justify-center max-w-7xl w-full">
          <WatchlistTitleCast cast={data.credits.cast} />
          <div>DETAILS</div>
        </div>
      </div>

      {data.similar && <WatchlistTitles type="movie" limit={12} title="Similar Movies" data={data.similar} />}
    </>
  )
}
