import { WatchlistPagination } from '@/components/watchlist-pagination'
import { WatchlistTitles } from '@/components/watchlist-titles'
import { getUpcomingMovies } from '@/services/api'

export default async function Upcoming({ params, searchParams }: IPage) {
  const query = await searchParams
  const { locale } = await params
  const page = query.page ? parseInt(query.page as string, 10) : 1

  const [upcoming] = await Promise.all([getUpcomingMovies({ page: page, language: locale }).catch(() => null)])
  const totalPages = upcoming ? upcoming.total_pages : null

  return (
    <>
      <WatchlistTitles type="movie" title="Upcoming" results={true} data={upcoming} />
      <WatchlistPagination currentPage={page} totalPages={totalPages} />
    </>
  )
}
