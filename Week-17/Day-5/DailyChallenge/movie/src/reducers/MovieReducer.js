

const reducer = (state, action ) =>{
    switch(action.type){
        case 'SEARCH_MOVIE':
            return{ ...state,text : action.payload}

        case 'FETCH_MOVIES':
            return{ ...state,movies : action.payload}
        
        case 'FETCH_MOVIE':
            return{ ...state,movie : action.payload}

        case 'LOADING':
            return{ ...state,loading : action.payload}

        default:
            return state
    }
}

export  {reducer};