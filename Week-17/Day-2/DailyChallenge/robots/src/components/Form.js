import React from 'react'
import '../Robots.css'
import {selectrobot, robosThunk} from '../actions'
import {connect} from 'react-redux'

function Form(props){
    console.log('form robots', props.data)
    //const Default = props.data;
    robosThunk()
    function hansellinput(e){
      var value = e.target.value.toLowerCase()
      console.log("value", value)

      if(value !== ""){
        var temp = []
        props.data.map((robot)=>(
          (robot.name.toLowerCase().includes(value))? temp.push(robot) : ''
        ))
        props.next(temp)
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
        data : state.robots

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