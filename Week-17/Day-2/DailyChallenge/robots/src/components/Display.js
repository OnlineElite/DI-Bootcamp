import React from 'react'
//import { useEffect  } from 'react';
import '../Robots.css'
import { connect } from 'react-redux';

function Display(props){
 

    return(
        <div className='container'>
            {props.data === undefined? <h3 className='load'> Loading ...</h3>: props.data.map((robot)=>(
                <div className='card' key= {robot.name} id= ''  >
                    <div className='cercle'>
                        <img className='img' src= {`https://robohash.org/${robot.id}?200x200`} alt= {robot.username} ></img>
                    </div>
                    <h4 className='title'> {robot.name} </h4>
                    <p className='email'> {robot.email} </p>
                </div>
            ))}
            
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log('Display state ***', state.robots)
    if(state.selectedRobots === undefined){
        return {
            data : state.robots
        }
    }
    else{
        return {
            data : state.selectedRobots
        }
    }
}


export default connect(mapStateToProps)(Display);