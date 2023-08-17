import React, { useEffect, useState } from 'react'
import '../FormStyle.css'

function EnteredInformation(props){
    const [info, setInfo] = useState({
        fname : '',
        lname : '',
        age : '',
        gender : '',
        destination : '',
        nuts : 'No',
        lactose : 'No',
        vegan : 'No'
    })


    useEffect(()=>{
        let {information} = props
        setInfo(information)
    },[props])

    return(
        <div className='entered'>
            <h1>Entered information:</h1>
            <div className='top'>
                
                <p>Your name: {info.fname} {info.lname}</p>             
                <p>Your age: {info.age} </p>             
                <p>Your gender: {info.gender} </p>                
                <p>Your destination: {info.destination}</p>               
                <p>Your dietary restrictions: </p>
                
            </div>
            <div className='bellow'>

                <p>**Nuts free : {info.nuts} </p>  
                <p>**Lactose free : {info.lactose} </p>   
                <p>**Vegan meal : {info.vegan} </p> 
                
            </div>
        </div>
        
    )
}

export default EnteredInformation;