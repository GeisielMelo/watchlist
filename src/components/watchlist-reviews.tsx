/* eslint-disable @next/next/no-img-element */
'use client'

import { TMDB_POSTER_PATH_45x45 } from '@/constants/tmdb'
import { formatDistanceToNow } from 'date-fns'
import { useState } from 'react'

const Review: React.FC<{ review: IReview }> = ({ review }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const content = isExpanded ? review.content : review.content.slice(0, 400)

  return (
    <div key={review.id} className="flex flex-row gap-4 text-sm">
      {review.author_details.avatar_path ? (
        <img
          className="min-w-[45px] max-h-[45px] rounded-full border"
          src={TMDB_POSTER_PATH_45x45 + review.author_details.avatar_path}
          alt={review.author_details.username}
          title={review.author_details.username}
          loading="lazy"
        />
      ) : (
        <div style={{ width: '40px', height: '40px' }} title={review.author_details.username}>
          <span className="flex items-center justify-center rounded-full border" style={{ width: '40px', height: '40px' }}>
            {review.author_details.username.charAt(0).toUpperCase()}
          </span>
        </div>
      )}

      <div>
        <div className="flex flex-row gap-2 text-foreground/75 items-center justify-center max-w-max">
          <span className="font-semibold text-sm">{`@${review.author_details.username}`}</span>
          <span className="font-light text-xs">{formatDistanceToNow(new Date(review.created_at), { addSuffix: true })}</span>
        </div>
        <p className="mt-2">
          {content}
          {review.content.length > 400 && (
            <button onClick={() => setIsExpanded(!isExpanded)} className="text-foreground/50 hover:underline ml-2">
              {isExpanded ? 'ver menos' : 'ver mais...'}
            </button>
          )}
        </p>
      </div>
    </div>
  )
}

export const WatchlistReviews: React.FC<{ reviews: IReview[] }> = ({ reviews }) => {
  const sortedReviews = [...reviews].sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())

  return (
    <section className="flex flex-col items-center px-4 my-10">
      <div className="flex flex-col justify-center max-w-7xl w-full pb-10 gap-6">
        <h1 className="text-3xl font-bold">Reviews</h1>
        {sortedReviews.map(review => (
          <Review key={review.id} review={review} />
        ))}
      </div>
    </section>
  )
}
