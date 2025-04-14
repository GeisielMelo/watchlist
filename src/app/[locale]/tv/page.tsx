import { WatchlistPagination } from '@/components/watchlist-pagination'
import { WatchlistTitles } from '@/components/watchlist-titles'
import { getTvShows } from '@/services/api'

export default async function Movies({ params, searchParams }: IPage) {
  const query = await searchParams
  const { locale } = await params
  const page = query.page ? parseInt(query.page as string, 10) : 1

  const [tv] = await Promise.all([getTvShows({ page: page, language: locale }).catch(() => null)])
  const totalPages = tv ? tv.total_pages : null

  return (
    <>
      <WatchlistTitles type="tv" title="TV Shows" results={true} data={tv} />
      <WatchlistPagination currentPage={page} totalPages={totalPages} />
    </>
  )
}
