

const selectedrobotreducer = (state, action ) =>{
    console.log('reducer state', state)
    if(action.type === 'SELECTED_ROBOT'){
        return action.playload
    }
    else{
        return state;
    }
}

export default selectedrobotreducer;

