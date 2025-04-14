import { WatchlistPagination } from '@/components/watchlist-pagination'
import { WatchlistPeople } from '@/components/watchlist-people'
import { getPersons } from '@/services/api'
import { notFound } from 'next/navigation'

export default async function Persons({ searchParams }: IPage) {
  const query = await searchParams
  const page = query.page ? parseInt(query.page as string, 10) : 1

  const [person] = await Promise.all([getPersons({ page: page }).catch(() => null)])
  const totalPages = person ? person.total_pages : null

  if (!person || person.results.length <= 0) return notFound()

  return (
    <>
      <WatchlistPeople person={person} />
      <WatchlistPagination currentPage={page} totalPages={totalPages} />
    </>
  )
}
