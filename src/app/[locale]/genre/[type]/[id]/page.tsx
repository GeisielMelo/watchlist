import { WatchlistPagination } from '@/components/watchlist-pagination'
import { WatchlistTitles } from '@/components/watchlist-titles'
import { getDiscoverMovies, getTvShows } from '@/services/api'

export default async function Genre({ params, searchParams }: IPage) {
  const { page, category } = await searchParams
  const { locale, type, id } = await params
  const pageNumber = page ? parseInt(page as string, 10) : 1

  const [data] = await Promise.all([
    type == 'movie'
      ? getDiscoverMovies({ page: pageNumber, language: locale, with_genres: id, sort_by: 'popularity.desc' }).catch(
          () => null,
        )
      : getTvShows({ page: pageNumber, language: locale, with_genres: id, sort_by: 'popularity.desc' }).catch(
          () => null,
        ),
  ])

  const totalPages = data ? data.total_pages : null

  return (
    <>
      <WatchlistTitles type={type as TMediaType} title={String(category) || 'Results'} results={true} data={data} />
      <WatchlistPagination currentPage={pageNumber} totalPages={totalPages} />
    </>
  )
}
