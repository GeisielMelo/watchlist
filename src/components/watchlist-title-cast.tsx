import { TMDB_POSTER_PATH_138x175, TMDB_POSTER_PATH_PLACEHOLDER } from '@/constants/tmdb'
import Image from 'next/image'
import Link from 'next/link'

export const WatchlistTitleCast: React.FC<{ cast: ICast[] }> = ({ cast }) => {
  return (
    <section className="grid grid-flow-col auto-cols-max gap-4 overflow-x-auto w-full">
      {cast.map((element, key) => {
        const src = element.profile_path ? TMDB_POSTER_PATH_138x175 + element.profile_path : TMDB_POSTER_PATH_PLACEHOLDER
        return (
          <Link key={key} className="mb-5 min-w-[140px] w-full" href={`/people/${element.id}`}>
            <Image
              src={src}
              alt={element.name}
              width={140}
              height={175}
              sizes="140px"
              className="w-full rounded-md min-w-[140px] max-h-[175px] object-cover border border-zinc-700 shadow-sm"
            />
            <div className="p-2 text-xs max-w-[140px]">
              <p className="font-semibold">{element.name}</p>
              {element.character && <span>{element.character}</span>}
            </div>
          </Link>
        )
      })}
    </section>
  )
}
