import React, { useContext } from 'react'
import { SetWatchlistContext, WatchlistContext } from '../contexts/MoviesContext'

const MovieCard = ({ movie, isWatchlist }) => {
  const setWatchlist = useContext(SetWatchlistContext)
  const watchlist = useContext(WatchlistContext)


  if(isWatchlist){
    return (
      <li className='border p-4'>
        <img src={movie.Poster} width={250}/>
        <h5 className="w-[250px]">{movie.Title}</h5>
        <h6>{movie.Year}</h6>
        <button 
          className='border px-2 py-1'
          onClick={() => {
            setWatchlist(watchlist.filter(movi => {
              return movie.imdbID !== movi.imdbID
            }))
            console.log(movie)
            console.log(watchlist)
          }}
        >
          Remove
        </button>
      </li>
    )
  } else {
    return (
      <li className='border p-4'>
        <img src={movie.Poster} width={250}/>
        <h5 className="w-[250px]">{movie.Title}</h5>
        <h6>{movie.Year}</h6>
        <button 
          className='border px-2 py-1'
          onClick={() => {
            let flag = false
            watchlist.forEach(element => {
              if(element.imdbID === movie.imdbID){
                flag = true
              }
            });

            if(!flag){
              setWatchlist([
                ...watchlist,
                movie
              ])
            }
            console.log(movie)
            console.log(watchlist)
          }}
        >
          Add
        </button>
      </li>
    )
  }
}

export default MovieCard