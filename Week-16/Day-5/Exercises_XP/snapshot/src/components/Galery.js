import React from 'react'
import '../Snapshot.css'

function Galery({images}){
    
    return(
        <div className='img-container' >
            <h2> {images.second} Pictures</h2>
            <ul className='images'>
                { images.first.map(item => (
                    <li> <img src= {item.src.medium}  alt={item.alt}></img> </li>
                ))}
            </ul>
        </div>
    )
}

export default Galery;