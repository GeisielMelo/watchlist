import { ActorProfiles } from './actor-profiles'
import { ActorCasting } from './actor-casting'
import { ActorPerson } from './actor-person'
import { notFound } from 'next/navigation'

const Actor: React.FC<{ person: IActor | null; casting: { cast: IMovieData[] } | null }> = ({ person, casting }) => {
  if (!person && !casting) return notFound()

  return (
    <>
      {person && <ActorPerson person={person} />}
      {casting && casting.cast.length >= 1 && <ActorCasting cast={casting.cast} />}
      {person && person.images.profiles.length >= 1 && <ActorProfiles profiles={person.images.profiles} />}
    </>
  )
}

export default Actor
