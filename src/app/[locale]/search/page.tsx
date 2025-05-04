import { WatchlistSearchHeader } from '@/components/watchlist-search-header'
import { WatchlistPagination } from '@/components/watchlist-pagination'
import { WatchlistPeople } from '@/components/watchlist-people'
import { WatchlistTitles } from '@/components/watchlist-titles'
import { notFound } from 'next/navigation'
import { search } from '@/services/api'

export default async function TopRated({ params, searchParams }: IPage) {
  const { locale } = await params
  const query = await searchParams

  if (query.media_type == 'person') {
    const page = query.page ? parseInt(query.page as string, 10) : 1
    const [person] = (await Promise.all([
      search('person', { query: query.query, page, language: locale }).catch(() => null),
    ])) as [IResponse<IActor[]> | null]
    const totalPages = person ? person.total_pages : null
    if (!person || person.results.length <= 0) return notFound()

    return (
      <>
        <WatchlistSearchHeader />
        <WatchlistPeople person={person} />
        <WatchlistPagination currentPage={page} totalPages={totalPages} />
      </>
    )
  }

  if (query.media_type == 'tv') {
    const page = query.page ? parseInt(query.page as string, 10) : 1
    const [tv] = (await Promise.all([
      search('tv', { query: query.query, page, language: locale }).catch(() => null),
    ])) as [IResponse<IMovieData[]> | null]
    const totalPages = tv ? tv.total_pages : null
    if (!tv || tv.results.length <= 0) return notFound()

    return (
      <>
        <WatchlistSearchHeader />
        <WatchlistTitles type="tv" title="Search: TV Shows" results={true} data={tv} />
        <WatchlistPagination currentPage={page} totalPages={totalPages} />
      </>
    )
  }

  const page = query.page ? parseInt(query.page as string, 10) : 1
  const [movie] = (await Promise.all([
    search('movie', { query: query.query, page, language: locale }).catch(() => null),
  ])) as [IResponse<IMovieData[]> | null]
  const totalPages = movie ? movie.total_pages : null
  if (!movie || movie.results.length <= 0) return notFound()

  return (
    <>
      <WatchlistSearchHeader />
      <WatchlistTitles type="movie" title="Search: Movies" results={true} data={movie} />
      <WatchlistPagination currentPage={page} totalPages={totalPages} />
    </>
  )
}
