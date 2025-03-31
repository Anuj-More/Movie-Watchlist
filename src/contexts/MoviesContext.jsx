import { createContext, useState } from "react";

const MoviesContext = createContext(null)
const SetMoviesContext = createContext(null)

const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([])

  return (
    <MoviesContext.Provider value={movies}>
      <SetMoviesContext.Provider value={setMovies}>
        {children}
      </SetMoviesContext.Provider>
    </MoviesContext.Provider>
  )
}