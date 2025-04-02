import Header from "./components/Header"
import MovieList from "./components/MovieList"
import WatchList from "./components/WatchList"
import { MoviesProvider } from "./contexts/MoviesContext"

function App() {
  
  return(
    <MoviesProvider>
      <div className="flex flex-col gap-2.5">
        <Header />
        <MovieList/>
        <WatchList/>
      </div>
    </MoviesProvider>
  )
}

export default App