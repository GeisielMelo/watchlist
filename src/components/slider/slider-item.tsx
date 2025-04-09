import { TMDB_IMAGE_ORIGINAL, TMDB_POSTER_PATH_300x450 } from '@/constants/tmdb'
import Link from 'next/link'
import { HiStar } from 'react-icons/hi'

/* eslint-disable @next/next/no-img-element */
export const SliderItem: React.FC<{ movie: IMovieData }> = ({ movie }) => {
  const backgroundImage = `url(${TMDB_IMAGE_ORIGINAL + movie.backdrop_path})`

  return (
    <div style={{ backgroundImage: backgroundImage }} className="bg-no-repeat bg-cover bg-center text-white">
      <div className="flex justify-center h-[calc(100vh-56px)] w-full bg-[rgba(10,25,47,0.7)]">
        <div className="flex flex-col-reverse  md:flex-row items-center justify-center md:justify-between w-full max-w-7xl px-4 py-10 md:px-20 gap-4">
          <div className="flex flex-col items-center text-center md:items-start md:text-start gap-2 py-8 md:max-w-1/2">
            <h1 className="text-5xl font-semibold">{movie.title || movie.original_title}</h1>
            {movie.vote_average && (
              <div className="flex items-center justify-center gap-2">
                <HiStar className="text-yellow-300" />
                <span>{movie.vote_average.toFixed(1)}</span>
                <span>Rating</span>
              </div>
            )}
            {movie.overview && <p>{movie.overview}</p>}

            <Link
              className="py-4 px-12 text-nowrap rounded-md cursor-pointer mt-4 bg-white text-black hover:bg-white/70 transition-all"
              href={`/movie/${movie.id}`}
            >
              View Movie
            </Link>
          </div>
          <img
            className="rounded-md max-w-1/2"
            src={TMDB_POSTER_PATH_300x450 + movie.poster_path}
            alt={movie.title || movie.original_title}
            title={movie.title || movie.original_title}
          />
        </div>
      </div>
    </div>
  )
}
