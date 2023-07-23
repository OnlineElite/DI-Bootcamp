import React from 'react';
import { connect } from 'react-redux';
import '../Movie.css'

const MovieDetails = ({ selectedMovie }) => {
  if (!selectedMovie) {
    return(
      <div className='list'>
        <h2>Movies Details</h2>
        <div className='box boxdetail'>Please select a movie.</div>

      </div>
    ) 
  }
  return(
    <div className='list'>
        <h2>Movies Details</h2>
        <div className='box boxdetail'>
          <h3>Title: <span>{selectedMovie.title}</span> </h3>
          <p>Release Date: <span>{selectedMovie.releaseDate}</span> </p>
          <p>Rating: <span>{selectedMovie.rating}</span> </p>
        </div>
    </div>
)

};

const mapStateToProps = (state) => {
  return { selectedMovie: state.selectedMovie };
};

export default connect(mapStateToProps)(MovieDetails);
