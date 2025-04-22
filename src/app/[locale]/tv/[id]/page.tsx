import { WatchlistReviews } from '@/components/watchlist-reviews'
import { WatchlistTitles } from '@/components/watchlist-titles'
import { WatchlistVideos } from '@/components/watchlist-videos'
import { WatchlistTitle } from '@/components/watchlist-title'
import { getSelectedTitle } from '@/services/api'
import { notFound } from 'next/navigation'

export default async function Tv({ params }: IPage) {
  const { locale, id } = await params
  const append = 'similar,videos,images'
  const [data] = await Promise.all([getSelectedTitle('tv', id, { language: locale, append_to_response: append }).catch(() => null)])

  if (!data) return notFound()

  const filteredVideos = data.videos.results.filter(video => video.site === 'YouTube') || []
  const filteredReviews = data.reviews?.results.filter(review => !!review.author) || []

  return (
    <>
      {data && <WatchlistTitle data={data} type="tv" />}

      <div className="flex items-center justify-center my-10 px-4">
        <div className="flex flex-col sm:flex-row justify-center max-w-7xl w-full gap-8">
          <div className="flex flex-col w-full overflow-hidden gap-8">
            {filteredVideos.length >= 1 && <WatchlistVideos videos={filteredVideos} />}
          </div>
        </div>
      </div>

      {data && data.similar && <WatchlistTitles type="tv" limit={12} title="Similar TV Shows" data={data.similar} />}
      {filteredReviews.length >= 1 && <WatchlistReviews reviews={filteredReviews} />}
    </>
  )
}
