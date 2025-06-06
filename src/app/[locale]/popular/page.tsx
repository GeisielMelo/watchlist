import { WatchlistPagination } from '@/components/watchlist-pagination'
import { WatchlistTitles } from '@/components/watchlist-titles'
import { getPopularMovies } from '@/services/api'

export default async function Popular({ params, searchParams }: IPage) {
  const query = await searchParams
  const { locale } = await params
  const page = query.page ? parseInt(query.page as string, 10) : 1

  const [popular] = await Promise.all([getPopularMovies({ page: page, language: locale }).catch(() => null)])
  const totalPages = popular ? popular.total_pages : null

  return (
    <>
      <WatchlistTitles type="movie" title="Popular Movies" results={true} data={popular} />
      <WatchlistPagination currentPage={page} totalPages={totalPages} />
    </>
  )
}
