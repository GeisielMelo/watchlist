/* eslint-disable @next/next/no-img-element */
import { TMDB_IMAGE_ORIGINAL, TMDB_POSTER_PATH_185x278 } from '@/constants/tmdb'

export const WatchlistPersonImages: React.FC<{ profiles: IImage[] }> = ({ profiles }) => {
  return (
    <section className="flex flex-col items-center px-4">
      <div className="flex flex-col justify-center max-w-7xl w-full pb-10">
        <div className="my-10">
          <h1 className="text-4xl font-semibold capitalize">Profile Images</h1>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 lg:gap-x-6 gap-y-10">
          {profiles.map((profile, key) => (
            <a href={TMDB_IMAGE_ORIGINAL + profile.file_path} key={key} target="_blank">
              <img
                src={TMDB_POSTER_PATH_185x278 + profile.file_path}
                alt={`${profile.width}x${profile.height}`}
                title={`${profile.width}x${profile.height}`}
                className="rounded-lg shadow w-full hover:shadow-black transition-all"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
