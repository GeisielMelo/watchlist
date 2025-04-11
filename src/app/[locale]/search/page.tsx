import { search } from '@/services/api'

export default async function TopRated({ params, searchParams }: IPage) {
  const { locale } = await params
  const urlParams = await searchParams

  const [movie, tv, person] = await Promise.all([
    search('movie', { ...urlParams, page: 1, language: locale }).catch(() => null),
    search('tv', { ...urlParams, page: 1, language: locale }).catch(() => null),
    search('person', { ...urlParams, page: 1, language: locale }).catch(() => null),
  ])


  console.log({ movie, tv, person })

  return (
    <>
      {movie && <>{movie.total_results}</>}
      {tv && <>{tv.total_results}</>}
      {person && <>{person.total_results}</>}
    </>
  )
}
