import React, { useContext, useEffect, useState } from 'react'
import { SetWatchlistContext, WatchlistContext } from '../contexts/MoviesContext'

const MovieCard = ({ movie, isWatchlist }) => {
  const setWatchlist = useContext(SetWatchlistContext)
  const watchlist = useContext(WatchlistContext)
  let [movieDetails, setMovieDetails] = useState(null)

  const [isInDetails, setIsInDetails] = useState(false)

  const fetchMovieDetails = async () => {
    const API_URL = `https://www.omdbapi.com/?apikey=40524c65&t=${movie.Title}`

    try {
      const response = await fetch(API_URL)
      const data = await response.json()

      if (data.Response === "True") {
        setMovieDetails(data)
        setIsInDetails(true) // Show details modal
      }
    } catch (error) {
      console.log("Error fetching movie details:", error)
    }
  }

  useEffect(() => {
    console.log(movieDetails)
  }, [movieDetails])

  useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(watchlist))
  }, [watchlist])


  if(isWatchlist){
    return (
      <li className='border p-4'>
        <img src={movie.Poster} width={250}/>
        <h5 className="w-[250px]">{movie.Title}</h5>
        <h6>{movie.Year}</h6>
        <button 
          className='border px-2 py-1'
          onClick={() => {
            console.log(movie)
            setWatchlist(watchlist.filter(m => movie.imdbID !== m.imdbID))
          }}
        >
          Remove
        </button>
      </li>
    )
  } else if (isInDetails) {
    return (
      <li className='border p-4'>
        <img src={movieDetails.Poster} width={250}/>
        <h5 className="w-[250px]">{movieDetails.Title} ({movieDetails.Year})</h5>
        <h6>Type: {movieDetails.Type} Genre: {movieDetails.Genre}</h6>
        <div>Rating: {movieDetails.imdbRating}</div>
        <button 
          className='border px-2 py-1'
          onClick={() => {
            let flag = false
            watchlist.forEach(element => {
              if(element.imdbID === movieDetails.imdbID){
                flag = true
              }
            });

            if(!flag){
              setWatchlist([
                ...watchlist,
                movie
              ])
            }
          }}
        >
          Add
        </button>

        <button 
          className='border px-2 py-1 ml-2'
          onClick={() => {
            setIsInDetails(false)
          }}
        > 
          Close
        </button>
      </li>
    )
  } else {
    return (
      <li className='border p-4'>
        <div>
          {movie.Title} ({movie.Year})
        </div>

        <div>
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
            }}
          >
            Add
          </button>

          <button 
            className='border px-2 py-1 ml-2'
            onClick={fetchMovieDetails}
          > 
            Details
          </button>
        </div>

      </li>
    )
    
  }
}

export default MovieCard