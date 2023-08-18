import React from 'react'
import data from '../Data.json'
import '../Style.css'

class Example1 extends React.Component{
   
    render(){
        return(
            <div className='ex1'>
                <ul >
                    {data.SocialMedias.map((item, index)=>(
                        <li key={index}> {item} </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Example1;