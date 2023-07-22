import React from 'react'
import '../Snapshot.css'
import { Link } from "react-router-dom";

function Header(){

    return(
        <div className='header'>
            <ul className='menu'>
                <li>
                    <Link to="/Mountain" className='link'>Mountain</Link>
                </li>
                <li>
                    <Link to="/Beaches" className='link'>Beaches</Link>
                </li>
                <li>
                    <Link to="/Birds" className='link'>Birds</Link>
                </li>
                <li>
                    <Link to="/Food" className='link'>Food</Link>
                </li>
            </ul>
        </div>   
    )
}

export default Header;