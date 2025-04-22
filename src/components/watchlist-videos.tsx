/* eslint-disable @next/next/no-img-element */
'use client'

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'

export const WatchlistVideos: React.FC<{ videos: IVideo[] }> = ({ videos }) => {
  console.log(videos)
  const allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'

  return (
    <section className="grid grid-flow-col auto-cols-max gap-2 overflow-x-auto w-full">
      {videos.map(video => (
        <Dialog key={video.id}>
          <DialogTrigger asChild>
            <img
              src={`https://img.youtube.com/vi/${video.key}/hqdefault.jpg`}
              loading='lazy'
              alt={video.name}
              className="cursor-pointer border max-h-[300px] hover:opacity-80 transition-opacity mb-5 rounded-md"
            />
          </DialogTrigger>
          <DialogContent className="w-[1000px]">
            <DialogHeader>
              <VisuallyHidden>
                <DialogTitle>{video.name}</DialogTitle>
              </VisuallyHidden>
              <DialogDescription>{video.name}</DialogDescription>
            </DialogHeader>
            <iframe
              width="100%"
              height="315"
              src={`https://www.youtube.com/embed/${video.key}`}
              title={video.name}
              frameBorder="0"
              allow={allow}
              allowFullScreen
            />
          </DialogContent>
        </Dialog>
      ))}
    </section>
  )
}
