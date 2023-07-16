import React  from 'react'

function Garage(props){

    
    return(
        <div style={{border: '2px solid black', padding: '10px', margin: '10px'}}>
            <p>Who lives in my <span style={{color: 'blue'}}>{props.size}</span> Garage?</p>
        </div>
    )
}

export default Garage;