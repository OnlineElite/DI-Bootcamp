const first = (store) => (next) => (action)=>{
    console.log('in the middleware...')
    next(action)
}

export {first}