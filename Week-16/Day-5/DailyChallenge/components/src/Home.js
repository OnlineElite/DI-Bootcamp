import React from 'react'
import Card from './components/Card'
import './cards.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const numbres =[
    {Number:'3,000', Name: 'points', Icon: <FontAwesomeIcon icon="fa-solid fa-hand-point-right" />},
    {Number: '6,540', Name:  'lightning',  Icon: <FontAwesomeIcon icon="fa-solid fa-bolt-lightning" />},
    {Number:  '337,010', Name: 'shakas', Icon: <FontAwesomeIcon icon="fa-solid fa-thumbs-up" />},
    {Number:  '98,661', Name: 'Diamonds', Icon: <FontAwesomeIcon icon="fa-solid fa-diamond" />}
]
function Home(){

    return(
        <div className='container'>
            {numbres.map((item)=>(
                <Card numbers ={item} />
            ))}
        </div>
    )
}

export default Home;
