import React, { useContext } from 'react'
import MovieCard from './MovieCard'
import { LoadingContext, MoviesContext } from '../contexts/MoviesContext'

const MovieList = () => {
  const movies = useContext(MoviesContext)
  const loading = useContext(LoadingContext) // Access loading state


  if(loading === 'initial'){
    return (
      <div className='m-3 font-bold text-2xl'>Search for a movie in the search bar.</div>
    )
  } else if(loading === 'loading'){
    return (
      <div className="text-gray-400 font-bold text-xl m-3">Loading movies...</div>
    )
  } else if(loading === 'too-many-results'){
    return (
      <div className="text-gray-400 font-bold text-xl m-3">Too many results. Please include more specific search.</div>
    )
  } else if(loading === 'no-result'){
    return (
      <div className="text-gray-400 font-bold text-xl m-3">No movies found.</div>
    )
  } else if(loading === 'result'){
    return (
      <ul className="search-result flex flex-wrap gap-[20px] m-3">
        {movies.map((movie) => <MovieCard movie={movie} watchList={false} key={movie.imdbID} />)}
      </ul>
    )
  }
  
}

export default MovieList