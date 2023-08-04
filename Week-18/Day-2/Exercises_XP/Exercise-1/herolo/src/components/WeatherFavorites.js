import React from 'react'
import {connect} from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../WeatherStyle.css'


function WeatherFavorites(props){
    /* 
    
    */
    return(
        <div className='main'>
            <h1>favories</h1>
            <div className='display favory'>
                {props.favories.map((city)=>(
                    <div className='cards' key={city.name}>
                        <FontAwesomeIcon className='icon2 like' icon="fa-solid fa-heart" />
                        <p> City : <span className='day'>{city.name}</span> </p>
                        <p> Temperature : <span className='min'>{city.temp} ℃</span> </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = (state)=>{
    console.log('favories', state.favories)
    return {
        name : state.cityName,
        temperateur : state.temperateur,
        nextFiveDays : state.nextFiveDays,
        favories : state.favories,
        error : state.error
    }
}
export default connect(mapStateToProps)(WeatherFavorites);