
const userReducer = (state, action)=>{
    switch(action.type){
        case 'REGISTER_USER':
            return {...state, RegisterRespond : action.payload}

        case 'LOGIN_USER':
            return {...state, LoginRespond : action.payload}

        case 'ERROR_MESSAGE':
            return {...state, error : action.payload}

        case 'AUTHONTIFICATION':
            return {...state, admission : action.payload}

        default:
            return state;
    }
}

export  {userReducer}