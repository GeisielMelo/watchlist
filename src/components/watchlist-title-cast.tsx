'use client'

import { TMDB_POSTER_PATH_138x175, TMDB_POSTER_PATH_PLACEHOLDER } from '@/constants/tmdb'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const VISIBLE_COUNT = 12

export const WatchlistTitleCast: React.FC<{ cast: ICast[] }> = ({ cast }) => {
  const [expanded, setExpanded] = useState(false)
  const visible = expanded ? cast : cast.slice(0, VISIBLE_COUNT)
  const hasMore = cast.length > VISIBLE_COUNT

  return (
    <section>
      <div className="flex items-baseline justify-between mb-4">
        <h2 className="text-2xl font-semibold">Cast</h2>
        <span className="text-sm text-muted-foreground">{cast.length} people</span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {visible.map(member => {
          const src = member.profile_path ? TMDB_POSTER_PATH_138x175 + member.profile_path : TMDB_POSTER_PATH_PLACEHOLDER
          return (
            <Link key={member.id} href={`/people/${member.id}`} className="group">
              <div className="relative w-full aspect-[2/3] bg-foreground rounded-md border border-zinc-700 shadow-sm overflow-hidden transition-colors group-hover:border-zinc-500">
                <Image
                  src={src}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 200px"
                  className="object-cover"
                />
              </div>
              <p className="font-medium text-sm mt-2 truncate">{member.name}</p>
              {member.character && <p className="text-xs text-muted-foreground truncate">{member.character}</p>}
            </Link>
          )
        })}
      </div>
      {hasMore && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-sm font-medium border border-zinc-700 rounded-md px-6 py-2 hover:bg-accent transition-colors"
          >
            {expanded ? 'Show less' : `View all (${cast.length})`}
          </button>
        </div>
      )}
    </section>
  )
}
