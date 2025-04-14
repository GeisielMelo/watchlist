'use client'

/* eslint-disable @next/next/no-img-element */
import { TMDB_POSTER_PATH_300x450 } from '@/constants/tmdb'
import { AiOutlineInstagram } from 'react-icons/ai'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { ImYoutube2 } from 'react-icons/im'
import { format } from 'date-fns'
import { useState } from 'react'

const ActorBiography: React.FC<{ biography: string }> = ({ biography }) => {
  const [showFullBiography, setShowFullBiography] = useState(false)

  const toggleBiography = () => {
    setShowFullBiography(!showFullBiography)
  }

  const truncatedBiography = biography && biography.length > 535 ? biography.slice(0, 400) + '...' : biography

  if (!biography) return null

  return (
    <div>
      <span className="font-bold">Biography</span>
      <p className="mt-2 text-sm">
        {showFullBiography ? biography : truncatedBiography}{' '}
        <span>
          {biography.length > 400 && (
            <span onClick={toggleBiography} className="text-blue-500 hover:underline mt-2 text-sm cursor-pointer">
              {showFullBiography ? 'show less' : 'show more'}
            </span>
          )}
        </span>
      </p>
    </div>
  )
}

const ActorDetails: React.FC<{ person: IActor }> = ({ person }) => {
  const formatDate = (date: string) => {
    try {
      return format(new Date(date), 'MMMM dd, yyyy')
    } catch {
      return date
    }
  }

  return (
    <div className="flex flex-wrap gap-8">
      {person.known_for_department && (
        <div>
          <span className="font-bold">Known For</span>
          <p>{person.known_for_department}</p>
        </div>
      )}
      {person.popularity && (
        <div>
          <span className="font-bold">Popularity</span>
          <p>{person.popularity.toFixed(1)}</p>
        </div>
      )}
      {person.gender && (
        <div>
          <span className="font-bold">Gender</span>
          <p>{person.gender === 1 ? 'Female' : 'Male'}</p>
        </div>
      )}
      {person.place_of_birth && (
        <div>
          <span className="font-bold">Place of Birth</span>
          <p>{person.place_of_birth}</p>
        </div>
      )}
      {person.birthday && (
        <div>
          <span className="font-bold">Birthday</span>
          <p>{formatDate(person.birthday)}</p>
        </div>
      )}
      {person.deathday && (
        <div>
          <span className="font-bold">Deathday</span>
          <p>{formatDate(person.deathday)}</p>
        </div>
      )}
    </div>
  )
}

const ActorSocial: React.FC<{ external: IExternalIds }> = ({ external }) => {
  return (
    <div className="flex flex-row gap-2">
      {external.facebook_id && (
        <a target="_blank" href={'https://www.facebook.com/' + external.facebook_id}>
          <FaFacebookSquare size={24} />
        </a>
      )}
      {external.twitter_id && (
        <a target="_blank" href={'https://www.x.com/' + external.twitter_id}>
          <FaXTwitter size={24} />
        </a>
      )}
      {external.youtube_id && (
        <a target="_blank" href={'https://www.youtube.com/' + external.youtube_id}>
          <ImYoutube2 size={24} />
        </a>
      )}
      {external.instagram_id && (
        <a target="_blank" href={'https://www.instagram.com/' + external.instagram_id}>
          <AiOutlineInstagram size={24} />
        </a>
      )}
    </div>
  )
}

export const WatchlistPerson: React.FC<{ person: IActor }> = ({ person }) => {
  return (
    <section className="flex flex-col items-center px-4">
      <div className="flex flex-col justify-center max-w-7xl w-full py-10">
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center md:items-start w-full">
          <img
            src={TMDB_POSTER_PATH_300x450 + person.profile_path}
            alt=""
            className="rounded-lg max-h-[450px] max-w-[300px] w-full shadow-md"
          />
          <div className="flex flex-col gap-8 w-full">
            <div className="flex flex-row justify-between">
              <h1 className="text-3xl font-bold">{person.name}</h1>
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
