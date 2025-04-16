'use client'

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import { FaYoutube } from 'react-icons/fa'

export const TrailerDialog: React.FC<{ results: IVideo[] }> = ({ results }) => {
  const trailer = results.find(video => video.type === 'Trailer' && video.site === 'YouTube') || results[Math.floor(Math.random() * results.length)]

  if (!trailer) return null

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex items-center justify-center text-white rounded w-8 h-8 bg-transparent border-1 hover:bg-white/20 transition-all">
          <FaYoutube />
        </button>
      </DialogTrigger>
      <DialogContent className="w-[1000px]">
        <DialogHeader>
          <VisuallyHidden>
            <DialogTitle>{trailer.name}</DialogTitle>
          </VisuallyHidden>
          <DialogDescription>{trailer.name}</DialogDescription>
        </DialogHeader>
        <iframe
          width="100%"
          height="315"
          src={`https://www.youtube.com/embed/${trailer.key}`}
          title={trailer.name}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </DialogContent>
    </Dialog>
  )
}
