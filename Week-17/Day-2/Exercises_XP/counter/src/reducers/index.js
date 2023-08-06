 const reducer = (state, action)=>{

    let curentCount = action.counter;
    let newCount;
    switch(action.type){
        case 'INCREASE_COUNT':
            newCount = Number(curentCount) + 1;
            return  {
                ...state, count : newCount
            }
        
        case 'DECREASE_COUNT':
            newCount = Number(curentCount) - 1;
            return  {
                ...state, count : newCount
            }
        default:
            return state;
    }
}
export {reducer}


