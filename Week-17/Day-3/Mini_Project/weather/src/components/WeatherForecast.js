import React from 'react'
import {connect} from 'react-redux'
import '../weather.css'

function WeatherForecast(props){
    if(props.error){
        console.log(props.error)
        return <div>Erreur: {props.error} </div>
    }

    if(!props.data){
        return null
    }

    console.log('props.data', props.data)
    
    const {name, main, weather} = props.data
    return(
        <div className='display'>
            <h4>City :  <span>{name}</span> </h4>
            <p>Temperature : <span>{Math.round(main.temp-273.15)} °C</span> </p>
            <p> Weather : <span>{weather[0].description}</span> </p>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return {
        data : state.weatherData, 
        error : state.error
    }
}

export default connect(mapStateToProps)(WeatherForecast)