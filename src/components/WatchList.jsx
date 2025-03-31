import React, { useContext } from 'react'
import MovieCard from './MovieCard'
import { MoviesContext, WatchlistContext } from '../contexts/MoviesContext'

const WatchList = () => {
  const watchlist = useContext(WatchlistContext)
  
  return (
    <div className='watch-list font-bold m-3'>
      <h3 className='mb-3'>Watchlist</h3>
      <ul key={crypto.randomUUID()} className="flex flex-wrap gap-[20px]">
        {watchlist.map(movie => (
          <MovieCard movie={movie} isWatchlist={true} />
        ))}
      </ul>
    </div>
  )
}

export default WatchList
