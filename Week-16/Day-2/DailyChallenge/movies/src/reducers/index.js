// src/reducers/index.js
import { combineReducers } from 'redux';

const moviesReducer = () => {
  return [
    { title: 'Spider-Man: Homecoming', releaseDate: '05-07-2017', rating: 7.4 },
    { title: 'Aquaman', releaseDate: '12-07-2018', rating: 7 },
    { title: 'Black Panther', releaseDate: '02-13-2018', rating: 7.4 },
    { title: 'Avengers: Infinity War', releaseDate: '04-25-2018', rating: 8.3 },
    { title: 'Guardians of the Galaxy', releaseDate: '07-30-2014', rating: 7.9 },
  ];
};

const selectedMovieReducer = (selectedMovie = null, action) => {
  switch (action.type) {
    case 'MOVIE_SELECTED':
      return action.payload;
    default:
      return selectedMovie;
  }
};

export default combineReducers({
  movies: moviesReducer,
  selectedMovie: selectedMovieReducer,
});
