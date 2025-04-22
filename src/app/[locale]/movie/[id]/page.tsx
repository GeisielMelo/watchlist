import { WatchlistTitleDetails } from '@/components/watchlist-title-details'
import { WatchlistTitleCast } from '@/components/watchlist-title-cast'
import { WatchlistReviews } from '@/components/watchlist-reviews'
import { WatchlistVideos } from '@/components/watchlist-videos'
import { WatchlistTitles } from '@/components/watchlist-titles'
import { WatchlistTitle } from '@/components/watchlist-title'
import { getSelectedTitle } from '@/services/api'
import { notFound } from 'next/navigation'

export default async function Movie({ params }: IPage) {
  const { locale, id } = await params
  const append = 'keywords,credits,keywords,releases,reviews,similar,videos'
  const [data] = await Promise.all([getSelectedTitle('movie', id, { language: locale, append_to_response: append }).catch(() => null)])

  if (!data) return notFound()

  const filteredCast = data.credits?.cast?.filter(member => member.known_for_department === 'Acting') || []
  const filteredVideos = data.videos?.results.filter(video => video.site === 'YouTube') || []
  const filteredReviews = data.reviews?.results.filter(review => !!review.author) || []

  return (
    <>
      <WatchlistTitle data={data} type="movie" />

      <div className="flex items-center justify-center my-10 px-4">
        <div className="flex flex-col sm:flex-row justify-center max-w-7xl w-full gap-8">
          <div className="flex flex-col w-full overflow-hidden gap-8">
            {filteredCast.length >= 1 && <WatchlistTitleCast cast={filteredCast} />}
            {filteredVideos.length >= 1 && <WatchlistVideos videos={filteredVideos} />}
          </div>
          <WatchlistTitleDetails data={data} />
        </div>
      </div>

      {data.similar && <WatchlistTitles type="movie" limit={12} title="Similar Movies" data={data.similar} />}
      {filteredReviews.length >= 1 && <WatchlistReviews reviews={filteredReviews} />}
    </>
  )
}
