import './App.css';
import MoviesList from './components/MoviesList'
import MovieDetails from './components/MovieDetails'

function App() {

  return (
    <div className='container'>
      <h1>Redux Movies</h1>
      <div className='comp'>
        <MoviesList/>
        <MovieDetails />
      </div>
    </div>
  );
}


export default App;

