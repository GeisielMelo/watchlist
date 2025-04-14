import Link from 'next/link'

const WatchListGenre: React.FC<{ type: TMediaType; genres: { genres: IGenre[] } | null }> = ({ type, genres }) => {
  return (
    <section className="flex flex-col items-center px-4">
      <div className="flex flex-col justify-center max-w-7xl w-full pb-10">
        <div className="my-10">
          <h1 className="text-4xl font-semibold capitalize text-center">{type}</h1>
        </div>

        {genres && genres.genres.length >= 1 ? (
          <ul className="grid grid-cols-2 gap-4">
            {genres.genres.map((element, key) => (
              <Link key={key} href={`/genre/${type}/${element.id}?category=${element.name}`}>
                <li
                  title={element.name}
                  style={{ backgroundImage: `url(/img/categories/${element.id}.webp)` }}
                  className="rounded-md border border-accent bg-no-repeat bg-cover bg-center text-white"
                >
                  <div className="flex items-center justify-center text-center bg-[rgba(10,25,47,0.7)] hover:bg-black/20  h-16 md:h-36 text-sm sm:text-base md:text-2xl rounded-md transition-all">
                    <span>{element.name}</span>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {Array.from({ length: 12 }).map((_, key) => (
              <div key={key} className="h-16 md:h-32 animate-pulse rounded-md border border-accent bg-accent" />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default WatchListGenre
