import React,{useState} from 'react'

function Phone(){
    const [phoneinfo, setPhoneinfo] = useState({ brand: "Samsung", model: "Galaxy S20", color: "black", year: 2020})

    function changeColor(){
        setPhoneinfo({...phoneinfo, color: 'blue'})
    }

    return(
        <div style={{border: '2px solid black', padding: '10px', margin: '10px'}}>
            <h1>My phone is a {phoneinfo.brand} </h1>
            <p>its a <span style={{fontWeight: 'bold'}}>{phoneinfo.color}</span> {phoneinfo.model} from {phoneinfo.year} </p>
            <br></br>
            <button onClick={changeColor}>Change color</button>
        </div>
    )
}

export default Phone;