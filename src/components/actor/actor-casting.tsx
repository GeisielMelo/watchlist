import { WatchlistTitleCard } from '../ui/watchlist-title-card'

export const ActorCasting: React.FC<{ cast: IMovieData[] }> = ({ cast }) => {
  return (
    <section className="flex flex-col items-center px-4">
      <div className="flex flex-col justify-center max-w-7xl w-full pb-10">
        <div className="my-10">
          <h1 className="text-4xl font-semibold capitalize">Known for</h1>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 lg:gap-x-6 gap-y-10">
          {cast.map((element, key) => (
            <WatchlistTitleCard key={key} data={element} />
          ))}
        </div>
      </div>
    </section>
  )
}
