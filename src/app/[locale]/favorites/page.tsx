'use client'

import { WatchlistTitles } from '@/components/watchlist-titles'
import { useEffect, useState } from 'react'

export default function Favorites() {
  const [favorites, setFavorites] = useState<IResponse<IMovieData[]> | null>(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('favorites')
      const results = stored ? JSON.parse(stored) : []
      setFavorites({ results: results, total_pages: 1, total_results: results.length, page: 1 })
    }
  }, [])

  return <WatchlistTitles title="Favorites" results={true} data={favorites} />
}
