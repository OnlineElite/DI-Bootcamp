import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Card(){


    return(
        <div className='container contact'>
            <h2>Contact us</h2>
            <div className='row'>
                <div className='info col-md- 6 col-sm-12 col-lg-6'>
                    <span>Contact us and we will get back to you within 24 hours.</span>
                    <span><FontAwesomeIcon icon="fa-solid fa-location-dot" />Company Name</span>
                    <span><FontAwesomeIcon icon="fa-solid fa-mobile-screen" />+256 778 800 900</span>
                    <span><FontAwesomeIcon icon="fa-solid fa-envelope" />company.gmail.com</span>
                </div>

                <div className='col-md- 6 col-sm-12 col-lg-6'>
                    <form>
                        <label>Contact</label>
                        <input type='email' name='email' placeholder='email address' />
                        <textarea placeholder='comment' />
                        <button type='submit'>Send</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Card;