import { WatchlistPagination } from '@/components/watchlist-pagination'
import { WatchlistTitles } from '@/components/watchlist-titles'
import { getTopRatedMovies } from '@/services/api'

export default async function TopRated({ params, searchParams }: IPage) {
  const query = await searchParams
  const { locale } = await params
  const page = query.page ? parseInt(query.page as string, 10) : 1

  const [top] = await Promise.all([getTopRatedMovies({ page: page, language: locale }).catch(() => null)])
  const totalPages = top ? top.total_pages : null

  return (
    <>
      <WatchlistTitles type="movie" title="Top Rated" results={true} data={top} />
      <WatchlistPagination currentPage={page} totalPages={totalPages} />
    </>
  )
}
