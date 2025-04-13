'use client'

import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

import { sliderSettings } from './slider-settings'
import Slider from 'react-slick'
import { SliderItem } from './slider-item'

const MoviesSlider: React.FC<{ movies: IMovieData[] }> = ({ movies }) => {
  if (!movies || movies.length === 0) return null

  return (
    <section>
      <Slider {...sliderSettings}>
        {movies.map((movie, key) => (
          <SliderItem key={key} movie={movie} />
        ))}
      </Slider>
    </section>
  )
}

export default MoviesSlider
