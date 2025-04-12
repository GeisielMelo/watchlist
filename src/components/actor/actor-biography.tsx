'use client'

import { useState } from 'react'

export const ActorBiography: React.FC<{ biography: string }> = ({ biography }) => {
  const [showFullBiography, setShowFullBiography] = useState(false)

  const toggleBiography = () => {
    setShowFullBiography(!showFullBiography)
  }

  const truncatedBiography = biography && biography.length > 535 ? biography.slice(0, 450) + '...' : biography

  return (
    <div>
      <span>Biography</span>
      <p className="mt-2 text-sm">
        {showFullBiography ? biography : truncatedBiography}{' '}
        <span>
          {biography.length > 535 && (
            <span onClick={toggleBiography} className="text-blue-500 underline mt-2 text-sm">
              {showFullBiography ? 'show less' : 'show more.'}
            </span>
          )}
        </span>
      </p>
    </div>
  )
}
