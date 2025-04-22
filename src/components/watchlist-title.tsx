/* eslint-disable @next/next/no-img-element */
'use client'

import { TMDB_IMAGE_ORIGINAL, TMDB_POSTER_PATH_300x450 } from '@/constants/tmdb'
import { FavoriteButton } from './common/favorite-button'
import { TrailerDialog } from './common/trailer-dialog'
import { HomeButton } from './common/home-button'
import { HiStar } from 'react-icons/hi'
import Link from 'next/link'

export const WatchlistTitle: React.FC<{ data: IMovieData; type: TMediaType }> = ({ data, type }) => {
  const title = data.title || data.original_title || data.name || data.original_name
  const backgroundImage = `url(${TMDB_IMAGE_ORIGINAL + data.backdrop_path})`
  const year = data.release_date || data.first_air_date || null
  const poster_path = TMDB_POSTER_PATH_300x450 + data.poster_path

  return (
    <section style={{ backgroundImage: backgroundImage }} className="bg-no-repeat bg-cover bg-center text-white">
      <div className="flex justify-center w-full bg-[rgba(10,25,47,0.7)] px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start max-w-7xl py-10 gap-10 w-full">
          <img className="rounded-lg shadow-lg aspect-[9/13] max-w-[250px] md:max-w-[300px] w-full" src={poster_path} alt={title} title={title} />
          <div className="flex flex-col w-full gap-4">
            <div>
              <h1 className="text-3xl font-bold ">{title}</h1>
              <ul className="flex flex-wrap gap-2">
                {data.genres.map(genre => (
                  <Link href={`/genre/${type}/${genre.id}?category=${genre.name}`} key={genre.id} className="hover:underline">
                    <li>{genre.name}</li>
                  </Link>
                ))}
              </ul>
            </div>

            {data.tagline && <p className="text-white/70">{data.tagline}</p>}

            {data.overview && (
              <div>
                <span className="font-bold">Sinopse</span>
                <p className="mt-2 text-sm">{data.overview}</p>
              </div>
            )}

            <div className="flex gap-4 my-2">
              <HomeButton homepage={data.homepage} />
              <TrailerDialog results={data.videos.results} />
              <FavoriteButton data={data} type={type} />
            </div>

            <ul className="flex flex-wrap gap-2">
              {data.vote_average && (
                <li className="flex gap-1 items-center px-3 py-0.5 border max-w-max text-xs rounded-full" title="Vote Average">
                  {data.vote_average.toFixed(1)} <HiStar />
                </li>
              )}
              {year && (
                <li title="Release" className="px-3 py-0.5 border max-w-max text-xs rounded-full">
                  {new Date(year).getFullYear()}
                </li>
              )}
              {data.status && (
                <li title="Status" className="px-3 py-0.5 border max-w-max text-xs rounded-full">
                  {data.status}
                </li>
              )}

              {data.runtime && (
                <li title="Runtime" className="px-3 py-0.5 border max-w-max text-xs rounded-full">
                  {`${Math.floor(data.runtime / 60)}h ${data.runtime % 60}m`}
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
