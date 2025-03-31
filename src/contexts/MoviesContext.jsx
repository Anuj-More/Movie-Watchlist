import { createContext, useState } from "react";

export const MoviesContext = createContext(null)
export const SetMoviesContext = createContext(null)

export const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([])

  return (
    <MoviesContext.Provider value={movies}>
      <SetMoviesContext.Provider value={setMovies}>
        {children}
      </SetMoviesContext.Provider>
    </MoviesContext.Provider>
  )
}