import React from 'react'

const MovieCard = ({ movie }) => {
  return (
    <li className='border p-4'>
      <h3>{movie.poster}</h3>
      <h5>{movie.name}</h5>
      <h6>{movie.year}</h6>
      <button className='border px-2 py-1'>Add</button>
    </li>
  )
}

export default MovieCard