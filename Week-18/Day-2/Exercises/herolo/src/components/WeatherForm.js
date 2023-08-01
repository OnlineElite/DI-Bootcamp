import React from 'react'
import '../WeatherStyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {connect} from 'react-redux'
import weatherForecastThunk from '../actions/WeatherAction'

function WeatherForm(props){

    
    console.log('props.data', props.data)

    function hundellInput(e){
        let value = e.target.value;
        console.log(value)
        props.next(value)
    }

    function addToFavories(e){
        console.log('hello')
        
    }

    return(
        <div className='main'>
            <input type='text' name='search' placeholder='Enter a city name' onBlur={hundellInput} />
            <div className='display'>
                <div className='header'>
                    <div className='left'>
                        <span className='logoWeather'><FontAwesomeIcon className='icon' icon="fa-solid fa-cloud" /></span>
                        <span className='info'>
                            <p> city name</p>
                            <p>Temperator</p>
                        </span>
                    </div>
                    <div className='right'>
                        <span className='logoWeather'> <FontAwesomeIcon className='icon2' icon="fa-solid fa-heart" /></span>
                        <button>ADD TO FAVORIES</button>
                    </div>
                </div>
                <h1>Scottered Clouds</h1>
                <div className='nextDaysCards'>

                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return {
        data : state.weatherData, 
        error : state.error
    }
}

const mapDispatchToProps = (dispatch) =>{

    return {
        next: (value) =>{
            dispatch(weatherForecastThunk(value))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherForm)
