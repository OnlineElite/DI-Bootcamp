
const reducer = (state, action) =>{
    
    switch(action.type){
        case 'FORCAST_WEATHER_SUCCESS': 
        console.log(action.playload)
            return {
                ...state,
                weatherData : action.playload
            } 
        case 'FORCAST_WEATHER_FAILED' : 
            return {
                ...state,
                error : action.playload
            }
        default :
            return state
    }
}

export {reducer}