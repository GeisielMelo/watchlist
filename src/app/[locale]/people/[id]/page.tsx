import { WatchlistPersonImages } from '@/components/watchlist-person-images'
import { getSelectedPerson, getSelectedPersonCasting } from '@/services/api'
import { WatchlistPersonWorks } from '@/components/watchlist-person-works'
import { WatchlistPerson } from '@/components/watchlist-person'
import { notFound } from 'next/navigation'

export default async function SelectedPerson({ params }: IPage) {
  const { id, locale } = await params
  const [person, casting] = await Promise.all([
    getSelectedPerson(id, { language: locale, append_to_response: 'images,external_ids' }).catch(() => null),
    getSelectedPersonCasting(id, { language: locale }).catch(() => null),
  ])

  if (!person && !casting) return notFound()

  return (
    <>
      {person && <WatchlistPerson person={person} />}
      {casting && casting.cast.length >= 1 && <WatchlistPersonWorks cast={casting.cast} />}
      {person && person.images.profiles.length >= 1 && <WatchlistPersonImages profiles={person.images.profiles} />}
    </>
  )
}
