import { WatchlistPagination } from '@/components/ui/watchlist-pagination'
import { getTrendingMovies } from '@/services/api'
import { Titles } from '@/components/titles'

export default async function Trending({ params, searchParams }: IPage) {
  const query = await searchParams
  const { locale } = await params
  const page = query.page ? parseInt(query.page as string, 10) : 1

  const [trending] = await Promise.all([getTrendingMovies({ page: page, language: locale }).catch(() => null)])
  const totalPages = trending ? trending.total_pages : null

  return (
    <>
      <Titles type="movie" title="Trending" results={true} data={trending} />
      <WatchlistPagination currentPage={page} totalPages={totalPages} />
    </>
  )
}
