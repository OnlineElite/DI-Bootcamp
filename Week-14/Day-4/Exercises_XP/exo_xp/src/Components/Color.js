import React,{useState, useEffect} from 'react'


function Color(){
    const [favoriteColor , setFavoriteColor ] = useState('red')

    useEffect(()=>{
        setFavoriteColor('yellow')
        alert('useEffect reached')
    }, [])

    function ChangeColor(){
        setFavoriteColor('blue')
    }
    
    return(
        <div style={{border: '2px solid black', padding: '10px', margin: '10px'}}>
            <h1>My favorite color is : {favoriteColor} </h1>
            <button onClick={ChangeColor}>Change color</button>
        </div>
    )
    
}


export default Color;