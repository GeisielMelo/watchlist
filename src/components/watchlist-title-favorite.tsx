'use client'

import { useFavoritesContext } from '@/context/favotires-contex'
import { ImBookmark, ImMinus, ImPlus } from 'react-icons/im'

export const WatchlistTitleFavorite: React.FC<{ data: IMovieData }> = ({ data }) => {
  const { handleFavorite, favorites } = useFavoritesContext()
  const favorite = favorites.some(fav => fav.id === data.id && fav.media_type === data.media_type)

  return (
    <button className="absolute top-0 left-2" onClick={() => handleFavorite(data, favorite)}>
      <div className="relative flex items-center justify-center">
        <ImBookmark className="text-4xl text-yellow-300" />
        {favorites.some(fav => fav.id === data.id) ? (
          <ImMinus className="text-xs absolute mb-2" />
        ) : (
          <ImPlus className="text-xs absolute mb-2" />
        )}
      </div>
    </button>
  )
}
