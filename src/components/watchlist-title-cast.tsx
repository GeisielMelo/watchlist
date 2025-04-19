export const WatchlistTitleCast: React.FC<{ cast: ICast[] }> = ({ cast }) => {
  return (
    <section className="flex flex-row flex-nowrap overflow-x-scroll">
      {cast.map((element, key) => (
        <div key={key}>
          <img src={'https://media.themoviedb.org/t/p/w138_and_h175_face' + element.profile_path} alt="" />
          <p>{element.name}</p>
        </div>
      ))}
    </section>
  )
}
