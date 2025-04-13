import { WatchlistPagination } from '@/components/ui/watchlist-pagination'
import { getTvShows } from '@/services/api'
import { Titles } from '@/components/titles'

export default async function Movies({ params, searchParams }: IPage) {
  const query = await searchParams
  const { locale } = await params
  const page = query.page ? parseInt(query.page as string, 10) : 1

  const [tv] = await Promise.all([getTvShows({ page: page, language: locale }).catch(() => null)])
  const totalPages = tv ? tv.total_pages : null

  return (
    <>
      <Titles type="tv" title="TV Shows" results={true} data={tv} />
      <WatchlistPagination currentPage={page} totalPages={totalPages} />
    </>
  )
}
