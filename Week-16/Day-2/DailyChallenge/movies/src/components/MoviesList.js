import React from 'react';
import { connect } from 'react-redux';
import { selectMovie } from '../actions';
import '../Movie.css'

const MovieList = ({ movies, selectMovie }) => {

  return(
    <div className='list'>
      <h2>Movies List</h2>
      <div className='box'>
          <ul>
              {movies.map((movie)=>(
                  <div key={movie.title} className='row'>
                      <li> {movie.title} </li>
                      <button onClick={() => selectMovie(movie)}>details</button> 
                  </div>
              ))}
          </ul>
      </div>
    </div>
  ) 
};

const mapStateToProps = (state) => {
  return { movies: state.movies };
};

export default connect(mapStateToProps, { selectMovie })(MovieList);