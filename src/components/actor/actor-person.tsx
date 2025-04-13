/* eslint-disable @next/next/no-img-element */
import { TMDB_POSTER_PATH_300x450 } from '@/constants/tmdb'
import { ActorSocial } from './actor-social'
import { ActorBiography } from './actor-biography'
import { ActorDetails } from './actor-details'

export const ActorPerson: React.FC<{ person: IActor }> = ({ person }) => {
  return (
    <section className="flex flex-col items-center px-4">
      <div className="flex flex-col justify-center max-w-7xl w-full py-10">
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center md:items-start w-full">
          <img src={TMDB_POSTER_PATH_300x450 + person.profile_path} alt="" className="rounded-lg max-h-[450px] max-w-[300px] w-full shadow-md" />
          <div className="flex flex-col gap-8 w-full">
            <div className="flex flex-row justify-between">
              <h1 className='text-3xl font-bold'>{person.name}</h1>
            </div>

            <ActorBiography biography={person.biography} />
            <ActorDetails person={person} />
            <ActorSocial external={person.external_ids} />
          </div>
        </div>
      </div>
    </section>
  )
}
