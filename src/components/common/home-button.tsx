'use client'

import { AiFillHome } from 'react-icons/ai'

export const HomeButton: React.FC<{ homepage: string }> = ({ homepage }) => {
  if (!homepage) return null

  return (
    <a href={homepage} target="_blank" className="flex items-center justify-center rounded w-8 h-8 bg-transparent border-1 hover:bg-white/20 transition-all">
      <AiFillHome />
    </a>
  )
}
