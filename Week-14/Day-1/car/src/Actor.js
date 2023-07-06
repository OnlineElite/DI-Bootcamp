import React from 'react';
import './Actor.css'

function Actor(props){
    return(    
        <ul>
            <li style={{
                border:'2px solid blue', 
                backgroundColor:'coral',
                width: 'fit-content',
                marginBottom:'5px'}}>
                {props.act.firstNmae}
            </li>
            <li style={{
                border:'2px solid blue', 
                backgroundColor:'lightblue',
                width: 'fit-content',
                marginBottom:'5px'}}>
                {props.act.lastNmae}
            </li>
            <li style={{
                border:'2px solid blue', 
                backgroundColor:'yellowgreen',
                width: 'fit-content',
                marginBottom:'5px'}}>
                <img style ={{width : '200px', height : '200px'}} src={props.act.image}></img>   
            </li>
        </ul>    
    )
}

export default Actor;