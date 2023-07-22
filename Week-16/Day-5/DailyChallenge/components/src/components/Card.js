import React, { useEffect, useState } from 'react'
import '../cards.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Card({numbers}){
    const [number, setNumber] = useState('22222222')
    const [name, setName] = useState('example')
    const [icon , setIcon] = useState('')

    useEffect(()=>{
        console.log("item", numbers)
        setNumber(numbers.Number)
        setName(numbers.Name)
        setIcon(numbers.Icon)
    }, [numbers])

    return(
        <div className='card'>
            {icon} <label> {name} </label>
            <h1> {number} </h1>
        </div>
    )
}

export default Card;
