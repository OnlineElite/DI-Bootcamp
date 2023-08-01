
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
    const API_Key = 'lJG10Gw0RHA4bzBzipAGZ5fA5lGjA9ZE'
    const API = `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?q=${value}&apikey=${API_Key}&language=en-us`
    try{
        const response = await fetch(API)
        console.log('data from thunk', response)
        dispatch(weatherSuccess(response))
    }
    catch(error){
        console.log('data from thunk', error.message)
        dispatch(weatherFialed(error.message))
    }
}
export default  weatherForecastThunk