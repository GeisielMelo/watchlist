import { WatchlistPagination } from '@/components/watchlist-pagination'
import { WatchlistTitles } from '@/components/watchlist-titles'
import { getTrendingMovies } from '@/services/api'

export default async function Trending({ params, searchParams }: IPage) {
  const query = await searchParams
  const { locale } = await params
  const page = query.page ? parseInt(query.page as string, 10) : 1

  const [trending] = await Promise.all([getTrendingMovies({ page: page, language: locale }).catch(() => null)])
  const totalPages = trending ? trending.total_pages : null

  return (
    <>
      <WatchlistTitles type="movie" title="Trending" results={true} data={trending} />
      <WatchlistPagination currentPage={page} totalPages={totalPages} />
    </>
  )
}
