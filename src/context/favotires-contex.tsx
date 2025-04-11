'use client'

import { createContext, useContext, ReactNode, useState, useEffect } from 'react'

type FavoritesContextType = { handleFavorite: (data: IMovieData, favorite: boolean) => void; favorites: IMovieData[] }
type FavoritesProviderProps = { children: ReactNode }

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined)

export const FavoritesProvider = ({ children }: FavoritesProviderProps) => {
  const [favorites, setFavorites] = useState<IMovieData[]>([])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('favorites')
      setFavorites(stored ? JSON.parse(stored) : [])
    }
  }, [])

  const handleFavorite = (data: IMovieData, favorite: boolean) => {
    const updatedFavorites = favorite
      ? favorites.filter(fav => !(fav.id === data.id && fav.media_type === data.media_type))
      : [...favorites, data]
    setFavorites(updatedFavorites)
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
  }

  return <FavoritesContext.Provider value={{ handleFavorite, favorites }}>{children}</FavoritesContext.Provider>
}

export const useFavoritesContext = (): FavoritesContextType => {
  const context = useContext(FavoritesContext)
  if (context === undefined) throw new Error('useFavoritesContext must be used within an FavoritesProvider')

  return context
}
