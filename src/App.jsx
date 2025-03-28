import Header from "./components/Header"
import MovieList from "./components/MovieList"
import WatchList from "./components/WatchList"

function App() {
  return(
    <div className="flex flex-col gap-2.5">
      <Header />
      <MovieList movies={dummyData}/>
      <WatchList movies={watchList}/>
    </div>
  )
}

const dummyData = [
  {id:0, poster: 'movie-1', name: 'first', year: '2009'},
  {id:1, poster: 'movie-2', name: 'second', year: '2010'},
  {id:2, poster: 'movie-3', name: 'third', year: '2011'},
  {id:3, poster: 'movie-3', name: 'third', year: '2011'},
  {id:4, poster: 'movie-3', name: 'third', year: '2011'},
  {id:5, poster: 'movie-3', name: 'third', year: '2011'},
  {id:6, poster: 'movie-3', name: 'third', year: '2011'},
]

const watchList = [
  {id:0, poster: 'movie-1', name: 'first', year: '2009'},
  {id:1, poster: 'movie-2', name: 'second', year: '2010'},
]

export default App