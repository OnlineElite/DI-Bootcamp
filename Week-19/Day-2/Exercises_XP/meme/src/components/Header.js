import React from 'react'
import logoImage from '../images/Trollface.png'
import '../App.css'


function Header(){


    return(
        <header className='header'>
            <img src= {logoImage} alt='logo'/>
            <p> Meme Generator </p>
        </header>
    )
}

export default Header;