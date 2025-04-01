import React, { useContext } from 'react'
import MovieCard from './MovieCard'
import { MoviesContext, WatchlistContext } from '../contexts/MoviesContext'

const WatchList = () => {
  const watchlist = useContext(WatchlistContext)
  
  if(watchlist.length > 0){
    return (
      <div className='watch-list m-3'>
        <div className='font-bold mb-3'>Watchlist</div>
        <ul key={crypto.randomUUID()} className="flex flex-wrap gap-[20px]">
          {watchlist.map(movie => (
            <MovieCard movie={movie} isWatchlist={true} key={movie.imdbID}/>
          ))}
        </ul>
      </div>
    )
  } else {
    return(
      <div className='font-bold m-3'>
        <div className=' mb-3'>
          Watchlist
        </div>
        <div className='text-2xl'>
          Add a movie to watchlist
        </div>
      </div>
    )
    
  }
  
}

export default WatchList
