import React, { useState } from 'react'

function Car(props){
    const [color, setColor] = useState('red')

    return(
       <div style={{border: '2px solid black', padding: '10px', margin: '10px'}}>
            <h1>This car is <span style={{color: 'red'}}>{color}</span> <span style={{color: 'blue'}}>{props.info.model}</span> </h1>
       </div> 
    )
}

export default Car;