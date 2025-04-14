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

export const getGenres = async (mediaType: TMediaType, params: Record<string, unknown>) => {
  return httpRequest<{ genres: IGenre[] }>({ url: `/genre/${mediaType}/list`, params })
}

export const getSelectedGenre = async (params: Record<string, unknown>) => {
  return httpRequest<IResponse<IMovieData[]>>({ url: `/discover/movie`, params })
}

export const getTrendingMovies = async (params: Record<string, unknown>) => {
  return httpRequest<IResponse<IMovieData[]>>({ url: `/trending/all/day`, params })
}

export const getDiscoverMovies = async (params: Record<string, unknown>) => {
  return httpRequest<IResponse<IMovieData[]>>({ url: `/discover/movie`, params })
}

export const getUpcomingMovies = async (params: Record<string, unknown>) => {
  return httpRequest<IResponse<IMovieData[]>>({ url: `/movie/upcoming`, params })
}

export const getPopularMovies = async (params: Record<string, unknown>) => {
  return httpRequest<IResponse<IMovieData[]>>({ url: `/movie/popular`, params })
}

export const getTopRatedMovies = async (params: Record<string, unknown>) => {
  return httpRequest<IResponse<IMovieData[]>>({ url: `/movie/top_rated`, params })
}

export const getTvShows = async (params: Record<string, unknown>) => {
  return httpRequest<IResponse<IMovieData[]>>({ url: `/discover/tv`, params })
}

export const getSelectedTitle = async (mediaType: TMediaType, id: string, params: Record<string, unknown>) => {
  return httpRequest<IMovieData>({ url: `/${mediaType}/${id}`, params })
}

export const getMovieCredits = async (mediaType: TMediaType, id: string, params: Record<string, unknown>) => {
  return httpRequest<{ id: string; cast: ICast[] }>({ url: `/${mediaType}/${id}/credits`, params })
}

export const getMovieKeywords = async (mediaType: TMediaType, id: string, params: Record<string, unknown>) => {
  return httpRequest<{ id: string; keywords: IKeyword[] }>({ url: `/${mediaType}/${id}/keywords`, params })
}

export const getMovieReviews = async (mediaType: TMediaType, id: string, params: Record<string, unknown>) => {
  return httpRequest<{ id: string; results: IReview[] }>({ url: `/${mediaType}/${id}/reviews`, params })
}

export const search = async (category: TMediaType | 'person', params: Record<string, unknown>) => {
  return httpRequest<IResponse<IMovieData[] | ICast[]>>({ url: `/search/${category}`, params })
}

export const getPersons = async (params: Record<string, unknown>) => {
  return httpRequest<IResponse<IActor[]>>({ url: '/person/popular', params })
}

export const getSelectedPerson = async (id: string | number, params: Record<string, unknown>) => {
  return httpRequest<IActor>({ url: `/person/${id}`, params })
}

export const getSelectedPersonCasting = async (id: string | number, params: Record<string, unknown>) => {
  return httpRequest<{ cast: IMovieData[] }>({ url: `/person/${id}/combined_credits`, params })
}
