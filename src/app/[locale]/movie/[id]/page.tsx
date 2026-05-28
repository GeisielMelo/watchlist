import { WatchlistTitleKeywords } from '@/components/watchlist-title-keywords'
import { WatchlistTitleSpecs } from '@/components/watchlist-title-specs'
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
  const keywords = data.keywords?.keywords ?? []

  return (
    <>
      <WatchlistTitle data={data} type="movie" />

      <div className="flex flex-col items-center px-4 my-10 gap-12">
        <div className="w-full max-w-7xl">
          <WatchlistTitleSpecs data={data} />
        </div>
        {filteredCast.length >= 1 && (
          <div className="w-full max-w-7xl">
            <WatchlistTitleCast cast={filteredCast} />
          </div>
        )}
        {filteredVideos.length >= 1 && (
          <div className="w-full max-w-7xl">
            <WatchlistVideos videos={filteredVideos} />
          </div>
        )}
        {keywords.length >= 1 && (
          <div className="w-full max-w-7xl">
            <WatchlistTitleKeywords keywords={keywords} />
          </div>
        )}
      </div>

      {data.similar && <WatchlistTitles type="movie" limit={12} title="Similar Movies" data={data.similar} />}
      {filteredReviews.length >= 1 && <WatchlistReviews reviews={filteredReviews} />}
    </>
  )
}
