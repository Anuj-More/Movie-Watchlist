import React from 'react'
import MovieCard from './MovieCard'

const WatchList = ({ movies }) => {
  return (
    <div className='watch-list font-bold m-3'>
      <h3 className='mb-3'>Watchlist</h3>
      <ul className="flex flex-wrap gap-[20px]">
        {movies.map(movie => (
          <MovieCard movie={movie} watchList={true} key={movie.id} />
        ))}
      </ul>
    </div>
  )
}

export default WatchList
