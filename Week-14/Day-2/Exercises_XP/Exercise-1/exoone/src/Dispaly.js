import React from 'react'

function Display(){
    const myelement = <h1>I Love JSX!</h1>;
    const sum = 5+5;
    return(
        <>
            <p>Hello World</p>
            <p>{myelement}</p>
            <p>"React is {sum} times better with JSX"</p>
        </>
    )
}

export default Display;