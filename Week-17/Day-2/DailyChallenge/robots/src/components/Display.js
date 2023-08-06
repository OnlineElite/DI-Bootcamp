import React from 'react'
import '../Robots.css'
import { connect } from 'react-redux';

function Display(props){
    
    return(
        <div className='container'>
            {props.data.map((robot)=>( 
                
                <div className='card' key= {robot.id} id= {robot.id}  >
                    
                    <div className='cercle'>
                        <img className='img' src= {robot.image} alt= {robot.name} ></img>
                    </div>
                    <h4 className='title'> {robot.name} </h4>
                    <p className='email'> {robot.email} </p>
                    
                </div>
            ))}
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log('Display state', state.robots)

    return {
        data : ()=>{
            if(state.selectedRobots.length === 0){
                return state.robots
            }
            else{
                return state.selectedRobots
            }
        }
    }
    
}


export default connect(mapStateToProps)(Display);