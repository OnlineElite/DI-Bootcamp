import React from 'react'
import '../FormStyle.css'

function InputWithLabel(props){
    let {type, label, name, id, onChange} = props
    return(
        <div className='InputWithLabel'>
            <input onChange = {onChange} type= {type} name= {name} id= {id} ></input>
            <label htmlFor= {id} > {label} </label>
        </div>
    )
}

export default InputWithLabel;