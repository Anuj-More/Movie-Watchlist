import React, { useContext } from 'react'
import MovieCard from './MovieCard'
import { MoviesContext } from '../contexts/MoviesContext'

const MovieList = () => {
  const movies = useContext(MoviesContext)

  if(movies){
    return (
      <ul className="search-result flex flex-wrap gap-[20px] m-3">
        {movies.map(movie => (
          <MovieCard movie={movie} watchList={false} key={movie.imdbID} />
        ))}
      </ul>
    )
  } else {
    return (
      <h1>Search for a movie in the search bar.</h1>
    )
  }
}

export default MovieList