import React from 'react'
import '../MoviesList.css'

function MoviesList(props){

    return(
        <div className='list'>
            <h2>Movies List</h2>
            <div className='box'>
                <ul>
                    {props.movieDetail.map((item, index)=>(
                        <div className='row'> <li key={index}> {item.title} </li> <button>details</button> </div>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default MoviesList;