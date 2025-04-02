import React, { useContext, useState } from 'react'
import { SetLoadingContext, SetMoviesContext } from '../contexts/MoviesContext'

const Header = () => {
  const setMovies = useContext(SetMoviesContext)  
  const setLoading = useContext(SetLoadingContext)

  const [query, setQuery] = useState('')

  const searchMovies = async () => {
    if (!query.trim()) return;
    setLoading('loading')
    
    const API_URL = `https://www.omdbapi.com/?i=tt3896198&apikey=${import.meta.env.VITE_OMDB_API_KEY}&s=${query}`

    try{
      const response = await fetch(API_URL)
      const data = await response.json()

      console.log(data.Error)
      
      if(data.Search){
        setMovies(data.Search) 
        setLoading('result')
      } else {
        setMovies([])
        setLoading(data.Error === 'Too many results.' ? 'too-many-results' : 'no-result');
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
    }


  }

  return (
    <div className="flex justify-between m-3">
      <div className="title font-bold ">Movies Watchlist App</div>
        <div className="search flex gap-2">

          <input 
            type="text" 
            className="border-2 border-gray-600 rounded-lg w-full max-w-30 min-w-2.5"
            onChange={(e) => setQuery(e.target.value)}
          />

          <button 
            className="font-bold"
            onClick={searchMovies}
          >
            Search
          </button>
        </div>
    </div>
  )
}

export default Header
