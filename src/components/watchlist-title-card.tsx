/* eslint-disable @next/next/no-img-element */
import { TMDB_POSTER_PATH_185x278, TMDB_POSTER_PATH_PLACEHOLDER } from '@/constants/tmdb'
import { WatchlistTitleFavorite } from '@/components/watchlist-title-favorite'
import { HiStar } from 'react-icons/hi'
import Link from 'next/link'

export const WatchlistTitleCard: React.FC<{ data: IMovieData }> = ({ data }) => {
  const title = data.name || data.title || data.original_title || data.original_name || ''
  const src = data.poster_path ? TMDB_POSTER_PATH_185x278 + data.poster_path : TMDB_POSTER_PATH_PLACEHOLDER
  const year = data.release_date || data.first_air_date || null
  const note = data.vote_average.toFixed(1) || 0

  return (
    <div className="relative rounded-lg">
      <WatchlistTitleFavorite data={data} />

      <Link href={`/${data.media_type}/${data.id}`}>
        <img src={src} className="w-full aspect-[9/14] rounded-lg bg-foreground" alt={title} title={title} />
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
      </Link>
    </div>
  )
}
