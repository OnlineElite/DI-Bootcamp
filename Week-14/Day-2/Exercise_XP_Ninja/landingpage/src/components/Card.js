import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Card(){


    return(
        <div className='container cart'>
            <div className='row'>
                <div className='car col-md- 2 col-sm-12 col-lg-2'>
                    <FontAwesomeIcon className='icon' icon="fa-regular fa-building" />
                </div>

                <div className=' content col-md-10 col-sm-12 col-lg-10'>
                    <h2>About the Company</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
            </div>
            <div className='row middel'>
                <div className='car col-md-2 col-sm-12 col-lg-2'>
                    <FontAwesomeIcon className='icon' icon="fa-solid fa-earth-americas" />
                </div>

                <div className=' content col-md-10 col-sm-12 col-lg-10'>
                    <h2>Our Values</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
            </div>
            <div className='row'>
                <div className='car col-md-2 col-sm-12 col-lg-2'>
                    <FontAwesomeIcon className='icon' icon="fa-solid fa-landmark" />
                </div>

                <div className=' content col-md-10 col-sm-12 col-lg-10'>
                    <h2>Our Mission</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
            </div>
        </div>
    )
}

export default Card;