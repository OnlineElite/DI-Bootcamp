import React from 'react'
import data from '../Data.json'
import '../Style.css'

class Example2 extends React.Component{
    

    render(){
        return(
            <div className='ex2'>
                {data.Skills.map((item)=>(
                    <div key={item.Area}>
                        <h5> {item.Area} </h5>
                        <ul>
                            {item.SkillSet.map((skil)=>(
                                <li key={skil.Name}> {skil.Name} </li>
                            ))}
                        </ul>
                    </div>
                ))}

            </div>
        )
    }
}

export default Example2;