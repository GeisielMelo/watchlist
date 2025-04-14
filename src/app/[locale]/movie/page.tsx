import { WatchlistPagination } from '@/components/watchlist-pagination'
import { WatchlistTitles } from '@/components/watchlist-titles'
import { getDiscoverMovies } from '@/services/api'

export default async function Movies({ params, searchParams }: IPage) {
  const query = await searchParams
  const { locale } = await params
  const page = query.page ? parseInt(query.page as string, 10) : 1

  const [movies] = await Promise.all([getDiscoverMovies({ page: page, language: locale }).catch(() => null)])
  const totalPages = movies ? movies.total_pages : null

  return (
    <>
      <WatchlistTitles type="movie" title="Movies" results={true} data={movies} />
      <WatchlistPagination currentPage={page} totalPages={totalPages} />
    </>
  )
}
