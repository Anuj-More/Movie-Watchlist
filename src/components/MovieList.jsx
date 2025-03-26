import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ movies }) => {
  return (
    <ul className="flex gap-[20px] m-3">
      {movies.map(movie => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </ul>
  )
}

export default MovieList