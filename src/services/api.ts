'use server'

const TMDB_API_URL = process.env.TMDB_API_URL
const TMDB_API_KEY = process.env.TMDB_API_KEY

const ONE_HOUR = 60 * 60
const ONE_DAY = ONE_HOUR * 24
const ONE_WEEK = ONE_DAY * 7

type RequestOptions = {
  url: string
  params?: Record<string, unknown>
  revalidate?: number | false
  tags?: string[]
}

const buildUrl = ({ url, params }: Pick<RequestOptions, 'url' | 'params'>): string => {
  const search = new URLSearchParams({ api_key: TMDB_API_KEY ?? '' })

  if (params) {
    for (const [key, value] of Object.entries(params)) {
      if (value === undefined || value === null) continue
      search.append(key, String(value))
    }
  }

  return `${TMDB_API_URL}${url}?${search.toString()}`
}

const httpRequest = async <T>({ url, params, revalidate, tags }: RequestOptions): Promise<T> => {
  const response = await fetch(buildUrl({ url, params }), {
    method: 'GET',
    next: { revalidate, tags }
  })

  if (!response.ok) {
    const error = await response.json().catch(() => ({ status_code: response.status }))
    throw error
  }

  return response.json() as Promise<T>
}

export const getGenres = async (mediaType: TMediaType, params: Record<string, unknown>) => {
  return httpRequest<{ genres: IGenre[] }>({
    url: `/genre/${mediaType}/list`,
    params,
    revalidate: ONE_WEEK,
    tags: ['tmdb', 'genres', `genres:${mediaType}`]
  })
}

export const getSelectedGenre = async (params: Record<string, unknown>) => {
  return httpRequest<IResponse<IMovieData[]>>({
    url: `/discover/movie`,
    params,
    revalidate: ONE_HOUR * 6,
    tags: ['tmdb', 'discover', 'movies']
  })
}

export const getTrendingMovies = async (params: Record<string, unknown>) => {
  return httpRequest<IResponse<IMovieData[]>>({
    url: `/trending/all/day`,
    params,
    revalidate: ONE_HOUR,
    tags: ['tmdb', 'trending']
  })
}

export const getDiscoverMovies = async (params: Record<string, unknown>) => {
  return httpRequest<IResponse<IMovieData[]>>({
    url: `/discover/movie`,
    params,
    revalidate: ONE_HOUR * 6,
    tags: ['tmdb', 'discover', 'movies']
  })
}

export const getUpcomingMovies = async (params: Record<string, unknown>) => {
  return httpRequest<IResponse<IMovieData[]>>({
    url: `/movie/upcoming`,
    params,
    revalidate: ONE_DAY,
    tags: ['tmdb', 'movies', 'upcoming']
  })
}

export const getPopularMovies = async (params: Record<string, unknown>) => {
  return httpRequest<IResponse<IMovieData[]>>({
    url: `/movie/popular`,
    params,
    revalidate: ONE_HOUR * 6,
    tags: ['tmdb', 'movies', 'popular']
  })
}

export const getTopRatedMovies = async (params: Record<string, unknown>) => {
  return httpRequest<IResponse<IMovieData[]>>({
    url: `/movie/top_rated`,
    params,
    revalidate: ONE_DAY,
    tags: ['tmdb', 'movies', 'top_rated']
  })
}

export const getTvShows = async (params: Record<string, unknown>) => {
  return httpRequest<IResponse<IMovieData[]>>({
    url: `/discover/tv`,
    params,
    revalidate: ONE_HOUR * 6,
    tags: ['tmdb', 'discover', 'tv']
  })
}

export const getSelectedTitle = async (mediaType: TMediaType, id: string, params: Record<string, unknown>) => {
  return httpRequest<IMovieData>({
    url: `/${mediaType}/${id}`,
    params,
    revalidate: ONE_DAY,
    tags: ['tmdb', `${mediaType}:${id}`]
  })
}

export const getMovieCredits = async (mediaType: TMediaType, id: string, params: Record<string, unknown>) => {
  return httpRequest<{ id: string; cast: ICast[] }>({
    url: `/${mediaType}/${id}/credits`,
    params,
    revalidate: ONE_WEEK,
    tags: ['tmdb', `${mediaType}:${id}`, `${mediaType}:${id}:credits`]
  })
}

export const getMovieKeywords = async (mediaType: TMediaType, id: string, params: Record<string, unknown>) => {
  return httpRequest<{ id: string; keywords: IKeyword[] }>({
    url: `/${mediaType}/${id}/keywords`,
    params,
    revalidate: ONE_WEEK,
    tags: ['tmdb', `${mediaType}:${id}`, `${mediaType}:${id}:keywords`]
  })
}

export const getMovieReviews = async (mediaType: TMediaType, id: string, params: Record<string, unknown>) => {
  return httpRequest<{ id: string; results: IReview[] }>({
    url: `/${mediaType}/${id}/reviews`,
    params,
    revalidate: ONE_HOUR * 6,
    tags: ['tmdb', `${mediaType}:${id}`, `${mediaType}:${id}:reviews`]
  })
}

export const search = async (category: TMediaType | 'person', params: Record<string, unknown>) => {
  return httpRequest<IResponse<IMovieData[] | ICast[]>>({
    url: `/search/${category}`,
    params,
    revalidate: 60 * 5,
    tags: ['tmdb', 'search', `search:${category}`]
  })
}

export const getPersons = async (params: Record<string, unknown>) => {
  return httpRequest<IResponse<IActor[]>>({
    url: '/person/popular',
    params,
    revalidate: ONE_DAY,
    tags: ['tmdb', 'persons']
  })
}

export const getSelectedPerson = async (id: string | number, params: Record<string, unknown>) => {
  return httpRequest<IActor>({
    url: `/person/${id}`,
    params,
    revalidate: ONE_WEEK,
    tags: ['tmdb', `person:${id}`]
  })
}

export const getSelectedPersonCasting = async (id: string | number, params: Record<string, unknown>) => {
  return httpRequest<{ cast: IMovieData[] }>({
    url: `/person/${id}/combined_credits`,
    params,
    revalidate: ONE_DAY,
    tags: ['tmdb', `person:${id}`, `person:${id}:casting`]
  })
}
