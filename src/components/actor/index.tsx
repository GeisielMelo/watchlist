import { ActorPerson } from './actor-person'
import { ActorCasting } from './actor-casting'
import { notFound } from 'next/navigation'

const Actor: React.FC<{ person: IActor | null; casting: { cast: IMovieData[] } | null }> = ({ person, casting }) => {
  if (!person && !casting) return notFound()
  return (
    <>
      {person && <ActorPerson person={person} />}
      {casting && <ActorCasting cast={casting.cast} />}
    </>
  )
}

export default Actor
