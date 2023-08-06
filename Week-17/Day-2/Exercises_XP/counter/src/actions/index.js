
const increase =(count) =>{

    return {
        type: 'INCREASE_COUNT',
        counter: count
    }
}

const decrease = (count) =>{
    
    return {
        type: 'DECREASE_COUNT',
        counter: count
    }
}


export {increase, decrease}