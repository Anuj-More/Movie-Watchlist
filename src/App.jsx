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

const watchList = [
  {id:0, poster: 'movie-1', name: 'first', year: '2009'},
  {id:1, poster: 'movie-2', name: 'second', year: '2010'},
]

export default App