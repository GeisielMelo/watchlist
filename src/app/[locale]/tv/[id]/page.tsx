import { WatchlistTitleSpecs } from '@/components/watchlist-title-specs'
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
      <WatchlistTitle data={data} type="tv" />

      <div className="flex flex-col items-center px-4 my-10 gap-12">
        <div className="w-full max-w-7xl">
          <WatchlistTitleSpecs data={data} />
        </div>
        {filteredVideos.length >= 1 && (
          <div className="w-full max-w-7xl">
            <WatchlistVideos videos={filteredVideos} />
          </div>
        )}
      </div>

      {data.similar && <WatchlistTitles type="tv" limit={12} title="Similar TV Shows" data={data.similar} />}
      {filteredReviews.length >= 1 && <WatchlistReviews reviews={filteredReviews} />}
    </>
  )
}
