import { createContext, useState } from "react";

export const MoviesContext = createContext(null)
export const SetMoviesContext = createContext(null)
export const WatchlistContext = createContext(null)
export const SetWatchlistContext = createContext(null)


export const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([])
  const [watchlist, setWatchlist] = useState(JSON.parse(localStorage.getItem('watchlist')) || [])  //watchlist will contain the imdbId of the movies wathclisted, and use the movie data from the "movies" array itself

  

  return (
    <MoviesContext.Provider value={movies}>
      <SetMoviesContext.Provider value={setMovies}>
        <WatchlistContext.Provider value={watchlist}>
          <SetWatchlistContext.Provider value={setWatchlist}>
            {children}
          </SetWatchlistContext.Provider>
        </WatchlistContext.Provider>
      </SetMoviesContext.Provider>
    </MoviesContext.Provider>
  )
}