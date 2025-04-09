/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
'use client'

import { useState, FC } from 'react'

interface IProps {
  loadedClassName?: string
  loadingClassName?: string
  [prop: string]: any
}

const ImageLoader: FC<IProps> = props => {
  const _loaded: Record<string, boolean> = {}
  const [loaded, setLoaded] = useState<boolean>(!!_loaded[props.src])

  const onLoad = () => {
    _loaded[props.src] = true
    setLoaded(true)
  }

  return (
    <img
      className={`${props.className} ${loaded ? props.loadedClassName : props.loadingClassName}`}
      data-key={props.imgId}
      onLoad={onLoad}
      src={props.src}
      alt={props.alt || 'Image'}
    />
  )
}

ImageLoader.defaultProps = {
  className: '',
  loadingClassName: 'bg-foreground',
  loadedClassName: '',
}

export default ImageLoader