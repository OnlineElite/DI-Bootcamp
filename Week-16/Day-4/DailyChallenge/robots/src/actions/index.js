
const selectrobot = (robot) => {
    console.log('action state', robot)
    return{
        type : 'SELECTED_ROBOT',
        playload: robot
    }
}

export {selectrobot}