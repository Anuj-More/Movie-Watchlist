import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ movies }) => {
  return (
    <ul className="search-result flex flex-wrap gap-[20px] m-3">
      {movies.map(movie => (
        <MovieCard movie={movie} watchList={false} key={movie.id} />
      ))}
    </ul>
  )
}

export default MovieList