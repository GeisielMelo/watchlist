'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

export const WatchlistSearchHeader: React.FC = () => {
  const searchParams = useSearchParams()
  const query = searchParams.get('query') || ''
  const media_type = searchParams.get('media_type') || 'movie'

  return (
    <section className="flex flex-col items-center px-4">
      <div className="flex max-w-7xl w-full text-nowrap mt-4 border-b px-2">
        <Link
          href={`/search?query=${query}&media_type=movie`}
          className={`px-4 py-2 text-xs hover:bg-accent rounded-t-md ${media_type === 'movie' ? 'bg-accent/20' : ''}`}
        >
          Movies
        </Link>
        <Link
          href={`/search?query=${query}&media_type=tv`}
          className={`px-4 py-2 text-xs hover:bg-accent rounded-t-md ${media_type === 'tv' ? 'bg-accent/20' : ''}`}
        >
          TV Show
        </Link>
        <Link
          href={`/search?query=${query}&media_type=person`}
          className={`px-4 py-2 text-xs hover:bg-accent rounded-t-md ${media_type === 'person' ? 'bg-accent/20' : ''}`}
        >
          Person
        </Link>
      </div>
    </section>
  )
}
