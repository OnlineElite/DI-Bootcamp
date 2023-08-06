import React from 'react'
import {store} from '../store'
import {increase, decrease} from '../actions'
import '../counter.css'

function Counter({count}){

    function hundellSubmit(e){
        let btnType = e.target.dataset.btn;
        let currentCounter = e.target.parentElement.children[0].dataset.counte

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

    function incrementIfOdd(e){
        e.preventDefault()
        let currentCounter = e.target.parentElement.children[0].dataset.counte
        if(currentCounter % 2 !== 0)
            store.dispatch(increase(currentCounter))
    }

    function incrementAsync(e){
        e.preventDefault()
        let currentCounter = e.target.parentElement.children[0].dataset.counte
        setTimeout(()=>{
            store.dispatch(increase(currentCounter))
        }, 1000)
    }

    return(
        <div className='parent'>
            <h2 data-counte ={count}>Clicked: {count} times</h2>
            <button type='submit' onClick={hundellSubmit} data-btn = 'increase' > + </button>
            <button type='submit' onClick={hundellSubmit} data-btn = 'decrease' > - </button>
            <button type='submit' onClick={incrementIfOdd} data-btn = 'incrementIfOdd' > Increment if odd </button>
            <button type='submit' onClick={incrementAsync} data-btn = 'incrementAsync' > Increment async </button>
        </div>
    )
}

export default Counter;