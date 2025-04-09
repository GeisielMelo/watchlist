'use client'

import { ImBookmark, ImMinus, ImPlus } from 'react-icons/im'
import { useState, useEffect } from 'react'

export const TitleFavorite: React.FC<{ data: IMovieData }> = ({ data }) => {
  const [favorites, setFavorites] = useState<IMovieData[]>([])
  const favorite = favorites.some(fav => fav.id === data.id && fav.media_type === data.media_type)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('favorites')
      setFavorites(stored ? JSON.parse(stored) : [])
    }
  }, [])

  const handleFavorite = () => {
    const updatedFavorites = favorite
      ? favorites.filter(fav => !(fav.id === data.id && fav.media_type === data.media_type))
      : [...favorites, data]
    setFavorites(updatedFavorites)
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
  }

  return (
    <button className="absolute top-0 left-2" onClick={handleFavorite}>
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
