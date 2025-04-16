/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { useFavoritesContext } from '@/context/favotires-contex'
import { ImMinus, ImPlus } from 'react-icons/im'

export const FavoriteButton: React.FC<{ data: IMovieData; type: TMediaType }> = ({ data, type }) => {
  const { handleFavorite, favorites } = useFavoritesContext()
  const favorite = favorites.some(fav => fav.id === data.id && fav.media_type === data.media_type)

  const reducedFavorite: IMovieData = (() => {
    const { genres, similar, videos, images, ...filteredData } = data
    if (!filteredData.media_type) filteredData.media_type = type
    return filteredData as IMovieData
  })()

  return (
    <button
      className="flex items-center justify-center text-white rounded w-8 h-8 bg-transparent border-1 hover:bg-white/20 transition-all"
      onClick={() => handleFavorite(reducedFavorite as IMovieData, favorite)}
    >
      {favorites.some(fav => fav.id === data.id) ? <ImMinus /> : <ImPlus />}
    </button>
  )
}
