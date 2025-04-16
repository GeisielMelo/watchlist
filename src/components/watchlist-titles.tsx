import { WatchlistCard } from './watchlist-card'
import Link from 'next/link'

const TitleSkeleton: React.FC<{ title: string }> = ({ title }) => {
  return (
    <section className="flex flex-col items-center px-4">
      <div className="flex flex-col justify-center max-w-7xl w-full pb-10">
        <div className="my-10">
          <h1 className="text-4xl font-semibold capitalize">{title}</h1>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 lg:gap-x-6 gap-y-10">
          {Array.from({ length: 12 }).map((_, key) => (
            <div key={key} className="w-full aspect-[9/16] bg-gray-300 animate-pulse rounded-md" />
          ))}
        </div>
      </div>
    </section>
  )
}

export const WatchlistTitles: React.FC<ITitles> = ({ title, href, type, limit, results = false, data }) => {
  if (!data) return <TitleSkeleton title={title} />

  const filteredData = data.results
    .filter(item => item.poster_path)
    .map(item => ({ ...item, media_type: item.media_type || type }))
    .slice(0, limit ? limit : 20)

  return (
    <section className="flex flex-col items-center px-4">
      <div className="flex flex-col justify-center max-w-7xl w-full pb-10">
        <div className="my-10">
          <h1 className="text-4xl font-semibold capitalize ">{title}</h1>
          {results && (
            <span className="text-zinc-400 text-sm font-semibold">
              {data.total_results.toLocaleString('pt-BR')} Results
            </span>
          )}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 lg:gap-x-6 gap-y-10">
          {filteredData.map((element, key) => (
            <WatchlistCard key={key} data={element} />
          ))}
        </div>
      </div>
      {href && (
        <Link
          href={href}
          className="py-6 px-12 mb-4 text-nowrap rounded-md cursor-pointer mt-4 bg-accent-foreground text-accent hover:bg-accent-foreground/70 transition-all"
        >{`View All ${title}`}</Link>
      )}
    </section>
  )
}
