export const WatchlistTitleDetails: React.FC<{ data: IMovieData }> = ({ data }) => {
  const keywords = data.keywords ? data.keywords.keywords : []

  return (
    <section className="sm:max-w-64 w-full flex flex-col gap-4">
      {!!data.status && (
        <div>
          <span className="font-semibold">Status</span>
          <p className="text-sm mt-1">{data.status}</p>
        </div>
      )}

      {!!data.original_language && (
        <div>
          <span className="font-semibold">Original Language</span>
          <p className="text-sm mt-1">{data.original_language}</p>
        </div>
      )}

      {!!data.budget && (
        <div>
          <span className="font-semibold">Budget</span>
          <p className="text-sm mt-1">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(data.budget)}</p>
        </div>
      )}

      {!!data.revenue && (
        <div>
          <span className="font-semibold">Revenue</span>
          <p className="text-sm mt-1">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(data.revenue)}</p>
        </div>
      )}

      {keywords.length >= 1 && (
        <div>
          <span className="font-semibold">Keywords</span>
          <ul className="flex flex-wrap gap-2 mt-1">
            {keywords.map(element => (
              <li key={element.id} className="text-sm border rounded-full px-4 text-nowrap overflow-ellipsis">{`#${element.name}`}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  )
}
