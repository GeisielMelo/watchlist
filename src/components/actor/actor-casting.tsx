/* eslint-disable @next/next/no-img-element */
import { TMDB_POSTER_PATH_185x278 } from '@/constants/tmdb'
import Link from 'next/link'
import { HiStar } from 'react-icons/hi'

export const ActorCasting: React.FC<{ cast: IActor[] }> = ({ cast }) => {
  return (
    <section className="flex flex-col items-center px-4">
      <div className="flex flex-col justify-center max-w-7xl w-full pb-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 lg:gap-x-6 gap-y-10">
          {cast.map((element, key) => (
            <Link key={key} href={`/${element.media_type}/${element.id}`}>
              <img
                src={TMDB_POSTER_PATH_185x278 + element.poster_path || TMDB_POSTER_PATH_PLACEHOLDER}
                className="w-full aspect-[9/14] rounded-md bg-foreground"
                alt={element.title}
                title={title}
              />
              <div className="text-md">
                <p className="overflow-hidden text-nowrap overflow-ellipsis mt-4 mb-1">{title}</p>
                <div className="flex justify-between items-center">
                  <span>{year ? new Date(year).getFullYear() : '...'}</span>
                  <div className="flex flex-row items-center gap-1">
                    <span>{note}</span>
                    <HiStar className="text-yellow-300" />
                  </div>
                </div>
              </div>
              //{' '}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
