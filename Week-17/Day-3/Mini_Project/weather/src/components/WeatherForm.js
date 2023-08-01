import React from 'react'
import weatherForecastThunk from '../actions'
import {connect} from 'react-redux'
import '../weather.css'


function WeatherForm(props){


    const handellClick = (e) =>{
        e.preventDefault()
        let value = e.target.parentElement.firstChild.value;
        console.log('value', value)

        props.next(value)
    }


    return(
        <div className='frm'>
            <h1>Weather Forecast App</h1>
            <form>
                <input type='text' placeholder='City / Zip Code'></input>
                <button type='submit' onClick={handellClick}> Submit</button>
            </form>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return {
        data : state.weatherData, 
        error : state.error
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        next : (value)=>{
            dispatch(weatherForecastThunk(value))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherForm);