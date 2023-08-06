
const onAgeUp = (age) =>{

    return {
        type: 'AGE_UP',
        payload : age
    }
}

const onAgeDown  = (age) =>{

    return {
        type: 'AGE_DOWN',
        payload : age
    }
}

export {onAgeUp, onAgeDown}