import React, {useState} from 'react'


function Events(){

    const [isToggleOn , setIsToggleOn ] = useState(true)
    const [btnval, setBtnval] = useState('ON')

    const clickMe = () =>{
        alert('I was clicked')
    }

    function handleKeyDown(e){
        const inputValue = e.target.value;
        if(e.key === 'Enter'){
            alert(`The Enter key was pressed, your input value is : ${inputValue}`);
        }
    }

    function switchState(e){
        if(isToggleOn === true){
            //console.log('OFF')
            setBtnval('OFF')
            setIsToggleOn(false)
        }
        else{
            //console.log('ON')
            setBtnval('ON')
            setIsToggleOn(true)
        }
    }

    return(
        <div style={{border: '2px solid black', padding: '10px', margin: '10px'}}>
            <button onClick={clickMe}> Click me</button>
            <br></br>
            <input onKeyDown={handleKeyDown}></input>
            <button onClick={switchState}> {btnval} </button>
        </div>
    )
}

export default Events;