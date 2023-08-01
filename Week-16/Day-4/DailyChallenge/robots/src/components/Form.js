import React from 'react'
import '../Robots.css'
import {selectrobot} from '../actions'
import {connect} from 'react-redux'

function Form(props){
    console.log('form robots', props.robots)

    
    function hansellinput(e){
        var value = e.target.value
        console.log("value", value)

        if(value !== ""){
            var temp = []
            props.robots.map((robot)=>(
                (robot.name.includes(value))? temp.push(robot) : console.log('not')
            ))
            props.next(temp)
        }
        else{
            props.next(props.robots)
        }
    }

    return(
        <div className='search'>
            <label > ROBO FRIENDS</label>
            <input onInput={ hansellinput }  type="text" name="" id="search" placeholder="search robots"></input>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        robots : state

    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        next : (robot)=>{
            dispatch(selectrobot(robot))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form)