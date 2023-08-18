import React from 'react'
import data from '../Data.json'
import '../Style.css'

class Example3 extends React.Component{
    

    render(){
        return(
            <div className='ex3'>
                {data.Experiences.map((item)=>(
                    <div key={item.companyName}>
                        <img src= {item.logo} alt='company logo' />
                        <a href={item.url} ><h4> {item.companyName} </h4></a>
                        {item.roles.map((role)=>(
                            <div key={role.title}>
                                <h5> {role.title} </h5>
                                <p> {role.startDate}{role.location} </p>
                                <p> {role.description} </p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        )
    }
}

export default Example3;