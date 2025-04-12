/* eslint-disable @next/next/no-img-element */
import { TMDB_POSTER_PATH_300x450 } from '@/constants/tmdb'
import { ActorSocial } from './actor-social'
import { ActorBiography } from './actor-biography'

export const ActorPerson: React.FC<{ person: IActor }> = ({ person }) => {
  console.log(person)

  return (
    <section className="flex flex-col items-center px-4">
      <div className="flex flex-col justify-center max-w-7xl w-full py-10">
        <div className="flex flex-col sm:flex-row gap-8">
          <img src={TMDB_POSTER_PATH_300x450 + person.profile_path} alt="" className="rounded-md" />
          <div className="flex flex-col gap-4 w-full">
            <div className="flex flex-row justify-between">
              <h1>{person.name}</h1>
              <ActorSocial external_ids={person.external_ids} />
            </div>

          {person.biography && <ActorBiography biography={person.biography} />}
          </div>
        </div>
      </div>
    </section>
  )
}
