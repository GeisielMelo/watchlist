'use client'

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import { Play } from 'lucide-react'
import Image from 'next/image'

const ALLOW = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'

const VideoCard: React.FC<{ video: IVideo; featured?: boolean }> = ({ video, featured }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="group block w-full text-left cursor-pointer">
          <div className="relative w-full aspect-video rounded-md border border-zinc-700 shadow-sm overflow-hidden transition-colors group-hover:border-zinc-500">
            <Image
              src={`https://img.youtube.com/vi/${video.key}/hqdefault.jpg`}
              alt={video.name}
              fill
              sizes={featured ? '(max-width: 1024px) 100vw, 800px' : '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'}
              className="object-cover transition-opacity group-hover:opacity-90"
              priority={featured}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
              <div className="bg-black/70 rounded-full p-3 group-hover:bg-black/90 group-hover:scale-110 transition-all">
                <Play className={featured ? 'w-8 h-8 fill-white text-white' : 'w-5 h-5 fill-white text-white'} />
              </div>
            </div>
            <span className="absolute top-2 left-2 text-[10px] font-medium uppercase tracking-wider bg-black/70 text-white px-2 py-1 rounded">
              {video.type}
            </span>
          </div>
          <p className={`mt-2 ${featured ? 'text-base' : 'text-sm'} font-medium truncate`}>{video.name}</p>
        </button>
      </DialogTrigger>
      <DialogContent className="w-[min(95vw,1280px)] sm:max-w-[1280px] p-4">
        <DialogHeader>
          <VisuallyHidden>
            <DialogTitle>{video.name}</DialogTitle>
          </VisuallyHidden>
          <DialogDescription>{video.name}</DialogDescription>
        </DialogHeader>
        <div className="relative w-full aspect-video">
          <iframe
            src={`https://www.youtube.com/embed/${video.key}`}
            title={video.name}
            allow={ALLOW}
            allowFullScreen
            className="absolute inset-0 w-full h-full rounded-md"
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}

export const WatchlistVideos: React.FC<{ videos: IVideo[] }> = ({ videos }) => {
  if (!videos.length) return null

  const [featured, ...rest] = videos

  return (
    <section>
      <div className="flex items-baseline justify-between mb-4">
        <h2 className="text-2xl font-semibold">Trailers</h2>
        <span className="text-sm text-muted-foreground">{videos.length} videos</span>
      </div>
      <VideoCard video={featured} featured />
      {rest.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {rest.map(video => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      )}
    </section>
  )
}
