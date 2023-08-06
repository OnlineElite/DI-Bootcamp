
const initialState = {age : 20}

let newAge
const reducer = (state = initialState, action)=>{
    switch(action.type){
        case 'AGE_UP':
            newAge = Number(action.payload) + 1;
            return {...state, age : newAge}

        case 'AGE_DOWN':
            newAge = Number(action.payload) - 1;
            return {...state, age : newAge}

        default:
            return state;
    }
}

export  {reducer}