'use server'

import axios, { AxiosRequestConfig } from 'axios'

const TMDB_API_URL = process.env.TMDB_API_URL
const TMDB_API_KEY = process.env.TMDB_API_KEY

const axiosClient = axios.create({ baseURL: TMDB_API_URL })

axiosClient.interceptors.request.use(config => {
  config.baseURL = TMDB_API_URL
  config.method = 'GET'
  config.params = config.params || {}
  config.params['api_key'] = TMDB_API_KEY
  return config
})

const httpRequest = <T>(req: AxiosRequestConfig): Promise<T> => {
  return new Promise(async (resolve, reject) => {
    try {
      const request = await axiosClient(req)
      resolve(request.data)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      reject(e?.response?.data || { status_code: 500 })
    }
  })
}

export const getGenres = async (language = 'en-US') =>
  httpRequest<{ genres: IGenre[] }>({
    url: '/genre/movie/list',
    params: { language },
  })

export const getSelectedGenre = async (genreId: string, page = 1, language = 'en-US') =>
  httpRequest<IResponse<IMovieData[]>>({
    url: `/discover/movie`,
    params: { with_genres: genreId, page, language },
  })

export const getTrendingMovies = async (page = 1, language = 'en-US') =>
  httpRequest<IResponse<IMovieData[]>>({
    url: `/trending/all/day`,
    params: { page, language },
  })

export const getDiscoverMovies = async (filter: IFilterProps, page = 1, language = 'en-US') =>
  httpRequest<IResponse<IMovieData[]>>({
    url: `/discover/movie`,
    params: {
      page,
      with_genres: filter.genre,
      year: filter.year,
      first_air_date_year: filter.year,
      sort_by: filter.sort,
      language,
    },
  })

export const getUpcomingMovies = async (page = 1, language = 'en-US') =>
  httpRequest<IResponse<IMovieData[]>>({
    url: `/movie/upcoming`,
    params: { page, language },
  })

export const getPopularMovies = async (page = 1, language = 'en-US') =>
  httpRequest<IResponse<IMovieData[]>>({
    url: `/movie/popular`,
    params: { page, language },
  })

export const getTopRatedMovies = async (page = 1, language = 'en-US') =>
  httpRequest<IResponse<IMovieData[]>>({
    url: `/movie/top_rated`,
    params: { page, language },
  })

export const getTvShows = async (filter: IFilterProps, page = 1, language = 'en-US') =>
  httpRequest<IResponse<IMovieData[]>>({
    url: `/discover/tv`,
    params: {
      page,
      with_genres: filter.genre,
      year: filter.year,
      first_air_date_year: filter.year,
      sort_by: filter.sort,
      language,
    },
  })

export const getSelectedMovie = async (mediaType: TMediaType, id: string, language = 'en-US') =>
  httpRequest<IMovieData>({
    url: `/${mediaType}/${id}`,
    params: {
      append_to_response: 'similar,videos,images',
      language,
    },
  })

export const getMovieCredits = async (mediaType: TMediaType, id: string, language = 'en-US') =>
  httpRequest<{ id: string; cast: ICast[] }>({
    url: `/${mediaType}/${id}/credits`,
    params: { language },
  })

export const getMovieKeywords = async (mediaType: TMediaType, id: string, language = 'en-US') =>
  httpRequest<{ id: string; keywords: IKeyword[] }>({
    url: `/${mediaType}/${id}/keywords`,
    params: { language },
  })

export const getMovieReviews = async (mediaType: TMediaType, id: string, language = 'en-US') =>
  httpRequest<{ id: string; results: IReview[] }>({
    url: `/${mediaType}/${id}/reviews`,
    params: { language },
  })

export const search = async (category: TMediaType | 'person', query: string, page = 1, language = 'en-US') =>
  httpRequest<IResponse<IMovieData[] | ICast[]>>({
    url: `/search/${category}`,
    params: { query, page, language },
  })

export const getPeople = async (page = 1, language = 'en-US') =>
  httpRequest<IResponse<IActor[]>>({
    url: '/person/popular',
    params: { page, language },
  })

export const getSelectedPerson = async (id: string | number, language = 'en-US') =>
  httpRequest<IActor>({
    url: `/person/${id}`,
    params: { append_to_response: 'images', language },
  })

export const getSelectedPersonCasting = async (id: string | number, language = 'en-US') =>
  httpRequest<{ cast: IActor[] }>({
    url: `/person/${id}/combined_credits`,
    params: { language },
  })
