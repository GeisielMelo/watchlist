import { WatchlistPagination } from '@/components/ui/watchlist-pagination'
import { getDiscoverMovies } from '@/services/api'
import { Titles } from '@/components/titles'

export default async function Movies({ params, searchParams }: IPage) {
  const query = await searchParams
  const { locale } = await params
  const page = query.page ? parseInt(query.page as string, 10) : 1

  const [movies] = await Promise.all([getDiscoverMovies({ page: page, language: locale }).catch(() => null)])
  const totalPages = movies ? movies.total_pages : null

  return (
    <>
      <Titles type="movie" title="Movies" results={true} data={movies} />
      <WatchlistPagination currentPage={page} totalPages={totalPages} />
    </>
  )
}
