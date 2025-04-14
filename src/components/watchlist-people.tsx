import { TMDB_POSTER_PATH_185x278 } from '@/constants/tmdb'
import Link from 'next/link'

/* eslint-disable @next/next/no-img-element */
export const WatchlistPeople: React.FC<{ person: IResponse<IActor[]>}> = ({ person }) => {
  return (
    <section className="flex flex-col items-center px-4">
      <div className="flex flex-col justify-center max-w-7xl w-full pb-10">
        <div className="my-10">
          <h1 className="text-4xl font-semibold capitalize">Popular People</h1>
          {person?.results && (
            <span className="text-zinc-400 text-sm font-semibold">
              {person?.total_results.toLocaleString('pt-BR')} Results
            </span>
          )}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 lg:gap-x-6 gap-y-10">
          {person?.results.map((element, key) => (
            <Link key={key} href={`/people/${element.id}`} className='rounded-lg'>
              <img
                src={TMDB_POSTER_PATH_185x278 + element.profile_path}
                className="w-full aspect-[9/14] rounded-lg bg-foreground"
                alt={element.name || element.original_name}
                title={element.name || element.original_name}
              />
              <div className="text-md">
                <p className="overflow-hidden text-nowrap overflow-ellipsis mt-4 mb-1">
                  {element.name || element.original_name}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
