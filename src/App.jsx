import Header from "./components/Header"
import MovieList from "./components/MovieList"

const dummyData = [
  {id:0, poster: 'movie-1', name: 'first', year: '2009'},
  {id:1, poster: 'movie-2', name: 'second', year: '2010'},
  {id:2, poster: 'movie-3', name: 'third', year: '2011'},
]

function App() {
  return(
    <>
      <Header />
      <MovieList movies={dummyData}/>
    </>
  )
}

export default App
