interface IRootState {
  filters: IFilterState
  misc: IMiscState
  genre: IGenreState
  movies: IMovieState
  people: IPeopleState
  search: ISearchState
  favorites: IMovieData[] | []
}

interface IFilterProps {
  genre: string
  sort: TSortType
  year: string
  query: string
}

type TSortType =
  | 'popularity.desc'
  | 'popularity.asc'
  | 'release_date.desc'
  | 'release_date.asc'
  | 'vote_count.desc'
  | 'vote_count.asc'
  | 'original_title.asc'
  | 'original_title.desc'

interface IFilterState {
  tv: IFilterProps
  discover: IFilterProps
}

interface IMiscState {
  isLoading: boolean
  darkMode: boolean
}

interface IGenreState {
  genres: IGenre[]
  current: IResponse<IMovieData[]> | null
}

interface IMovieState {
  trending: IResponse<IMovieData[]> | null
  discover: IResponse<IMovieData[]> | null
  current: {
    movie: IMovieData | null
    keywords: IKeyword[]
    casts: IActor[]
    reviews: IReview[]
  }
  popular: IResponse<IMovieData[]> | null
  topRated: IResponse<IMovieData[]> | null
  upcoming: IResponse<IMovieData[]> | null
  tvShows: IResponse<IMovieData[]> | null
}

interface IPeopleState {
  people: IResponse<IActor[]> | null
  current: {
    actor: IActor | null
    casting: IMovieData[] | []
  }
}

interface ISearchState {
  query: string
  tv: IResponse<IMovieData[]> | null
  movies: IResponse<IMovieData[]> | null
  people: IResponse<IActor[]> | null
  recent: string[]
}

type TFilterCategory = 'discover' | 'tv'

type TMediaType = 'movie' | 'tv'

interface IMovieData {
  adult?: boolean
  name?: string
  id: number
  poster_path: string
  original_name: string
  original_title: string
  original_language: string
  release_date: string
  first_air_date: string
  backdrop_path: string
  vote_average: number
  vote_count: number
  title: string
  homepage: string
  genres: IGenre[]
  overview: string
  popularity: number
  budget: number
  genre_ids: IMovieGenreIds
  imdb_id: string | null
  revenue: number
  runtime: number | null
  status: string
  tagline: string | null
  media_type?: TMediaType
  video?: boolean
  videos: {
    id: number
    results: IVideo[]
  }
  similar?: IResponse<IMovieData[]>
  images?: {
    backdrops: IImage[]
    posters: IImage[]
  }
}

interface IVideo {
  id: string
  key: string
  name: string
  site: string
  size: 360 | 480 | 720 | 1080
  type: 'Trailer' | 'Teaser' | 'Clip' | 'Featurette' | 'Behind the Scenes' | 'Bloopers'
}

type IMovieGenreIds = Array<number>

interface IImage {
  file_path: string
  aspect_ratio: number
  height: number
  width: number
}

interface IGenre {
  id: number
  name: string
}

interface IKeyword {
  id: number
  name: string
}

interface IReview {
  author: string
  author_details: {
    name: string
    username: string
    avatar_path: string | null
    rating: number
  }
  content: string
  created_at: string
  id: string
  updated_at: string
  url: string
}

interface ICast {
  adult: boolean
  gender: number
  id: number
  known_for?: IMovieData[]
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path: string
  cast_id: number
  character: string
  credit_id: string
  other: number
}


interface IResponse<T> {
  page: number
  results: T
  total_results: number
  total_pages: number
}


interface IPage  {
  params: Promise<{ [key: string]: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

interface ITitles  {
  data: IResponse<IMovieData[]> | null
  type?: TMediaType
  title: string
  href?: string
  limit?: number
  results?: boolean
}


interface IExternalIds {
  freebase_mid?: string
  freebase_id?: string
  imdb_id?: string
  tvrage_id?: number
  wikidata_id?: string
  facebook_id?: string
  instagram_id?: string
  tiktok_id?: string | number
  twitter_id?: string | number
  youtube_id?: string | number
}


interface IActor extends ICast {
  also_known_as: string[]
  biography: string
  birthday: string
  deathday: string | null
  homepage: string | null
  imdb_id: string
  place_of_birth: string
  images: {
    profiles: IImage[]
  }
  external_ids: IExternalIds
}
