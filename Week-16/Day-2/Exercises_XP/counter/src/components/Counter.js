import React from 'react'
import {store} from '../store'
import {increase, decrease} from '../actions'
import '../counter.css'

function Counter({count}){

    function hundellSubmit(e){
        let btnType = e.target.dataset.btn;
        let currentCounter = e.target.parentElement.children[1].dataset.counte

        switch(btnType){
            case 'increase':
                store.dispatch(increase(currentCounter));
                break;
            case 'decrease':
                store.dispatch(decrease(currentCounter));
                break;
            default:
                console.log("wrong button");
        }
    }

    return(
        <div className='parent'>
            <button type='submit' onClick={hundellSubmit} data-btn = 'increase' > + </button>
            <h1 data-counte ={count}> {count} </h1>
            <button type='submit' onClick={hundellSubmit} data-btn = 'decrease' > - </button>
        </div>
    )
}

export default Counter;