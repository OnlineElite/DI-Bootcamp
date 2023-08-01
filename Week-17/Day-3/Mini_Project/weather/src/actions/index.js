import axios from 'axios'
const weatherSuccess = (data) =>{
    console.log('weatherSuccess action ', data)
    return {
        type : 'FORCAST_WEATHER_SUCCESS',
        playload : data
    }
}

const weatherFialed = (data) =>{

    return {
        type : 'FORCAST_WEATHER_FAILED',
        playload : data
    }
}




const weatherForecastThunk = (value) => async (dispatch)=>{
    const API_Key = 'c52fb581c2868eba2c566d978b7d9e90'
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${API_Key}`
    try{
        const response = await axios.get(API)
        console.log('data from thunk', response.data)
        dispatch(weatherSuccess(response.data))
    }
    catch(error){
        console.log('data from thunk', error.message)
        dispatch(weatherFialed(error.message))
    }
    
    
}
export default  weatherForecastThunk