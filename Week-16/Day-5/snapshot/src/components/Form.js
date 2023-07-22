import React, { useState } from  'react'
import '../Snapshot.css'


function Form({handellSearch}){
    const [searchValue, setSearchValue] = useState('')
    function handellSubmit(e){
        e.preventDefault();
        

        handellSearch(searchValue)
    }

    return(
        <div className='form'>
            <h1> Snap Shot </h1>
            <div className='inp_btn'>
                <input value={searchValue} type='text' placeholder='Search...' onChange={e => setSearchValue(e.target.value)} ></input>
                <button type='submit' onClick={handellSubmit}>search</button>
            </div>
        </div>
    )
}

export default Form;