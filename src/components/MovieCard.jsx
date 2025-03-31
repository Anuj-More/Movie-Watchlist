import React from 'react'

const MovieCard = ({ movie, watchList }) => {
  console.log(movie)
  if(watchList){
    return (
      <li className='border p-4'>
        <h3>{movie.poster}</h3>
        <h5>{movie.name}</h5>
        <h6>{movie.year}</h6>
        <button className='border px-2 py-1'>Remove</button>
      </li>
  )
  }else {
      return (
        <li className='border p-4'>
          <img src={movie.Poster} width={250}/>
          <h5 className="w-[250px]">{movie.Title}</h5>
          <h6>{movie.Year}</h6>
          <button 
            className='border px-2 py-1'
          >
            Add
          </button>
        </li>
    )
  } 
}

export default MovieCard