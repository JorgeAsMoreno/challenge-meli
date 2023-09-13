import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import './loader.scss'

const Loader = ({ count }) => {
  return (
    <Skeleton
      count={count}
      className='loader'
      containerClassName='loader-container'
    />
  )
}

export default Loader
