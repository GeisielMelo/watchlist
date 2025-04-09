import { WatchlistPagination } from '@/components/ui/watchlist-pagination'
import { getTopRatedMovies } from '@/services/api'
import { Titles } from '@/components/titles'

export default async function TopRated({ params, searchParams }: IPage) {
  const query = await searchParams
  const { locale } = await params
  const page = query.page ? parseInt(query.page as string, 10) : 1

  const [top] = await Promise.all([getTopRatedMovies({ page: page, language: locale }).catch(() => null)])
  const totalPages = top ? top.total_pages : null

  return (
    <>
      <Titles type="movie" title="Top Rated" results={true} data={top} />
      <WatchlistPagination currentPage={page} totalPages={totalPages} />
    </>
  )
}
