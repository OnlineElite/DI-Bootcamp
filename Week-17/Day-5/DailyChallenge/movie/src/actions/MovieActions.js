
const serchMovie =(movie)=>{
    return {
        type :'SEARCH_MOVIE',
        payload : movie
    }
}

const fetchMovies =(movies)=>{
    return {
        type :'FETCH_MOVIES',
        payload : movies
    }
}

const fetchMovie =(movie)=>{
    return {
        type :'FETCH_MOVIE',
        payload : movie
    }
}

const loading =(value)=>{
    return {
        type :'LOADING',
        payload : value
    }
}


const moviesThunk = (value) => (dispatch)=>{
    fetch('')
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        console.log('data fetched', data)
        dispatch(fetchMovies(data)) //???????????
    })
}


export {moviesThunk}