
const selectrobot = (robot) => {
    console.log('action state', robot)
    return{
        type : 'SELECTED_ROBOT',
        payload: robot
    }
}

const robotsLoaded = (robots) =>{
    console.log('actionrobots', robots)

    return{
        type :'ROBOTS_LOADED',
        payload : robots
    }
}

const robotError = (error) =>{
    console.log('actionrobots', error)

    return{
        type :'ROBOTS_ERROR',
        payload : error
    }
}


const robosThunk = () => (dispatch)=>{
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        console.log('data fetched' ,data)
        dispatch(robotsLoaded())
    })
    .catch((error)=>{ 
        console.log('erreur message: ', error.message)
        dispatch(robotError(error.message))
    })

}

export {selectrobot, robosThunk}