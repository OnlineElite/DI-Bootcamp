import './App.css';
import MoviesList from './components/MoviesList'
import MovieDetails from './components/MovieDetails'
const movies = [
  {title: 'Spider-Man: Homecoming', releaseDate: '05-07-2017', rating: 7.4,},
  {title: 'Aquaman', releaseDate: '12-07-2018', rating: 7,},
  {title: 'Black Panther', releaseDate: '02-13-2018', rating: 7.4,},
  {title: 'Avengers: Infinity War', releaseDate: '04-25-2018', rating: 8.3,},
  {title: 'Guardians of the Galaxy', releaseDate: '07-30-2014', rating: 7.9,},
]
function App() {

  return (
    <div>
      <h1>Redux Movies</h1>
      <div className='comp'>
        <MoviesList movieDetail = {movies} />
        <MovieDetails/>
      </div>
    </div>
  );
}

export default App;
