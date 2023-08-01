import React, {useState, useEffect} from 'react'
import '../Transactions.css'
import {connect} from 'react-redux'
import {insert, update} from '../actions/transactionActions'

function TransactionForm (props){
    //console.log('selectedRow formstate', props.selectedRow)

    const [state, setState] = useState({
        accountNumber: '',
        FSC: '',
        name: '',
        amount: '',
    });

    function handleInputChange(e){
        let {name, value } = e.target;
        setState({
            ...state,
            [name] : value
        })
    }

    function handellSubmit (e){
        e.preventDefault()
        if(props.index === -1){
            props.next(state)
        }
        else{
            props.newOne({ ...state, id: props.list[props.index].id });
        }
        setState({
            accountNumber: '',
            FSC: '',
            name: '',
            amount: '',
        });
    }

    useEffect(()=>{
        setState({
            accountNumber: props.selectedRow.accountNumber,
            FSC: props.selectedRow.FSC,
            name: props.selectedRow.name,
            amount: props.selectedRow.amount,
        });
    }, [props.selectedRow])

    return(
        <div>
            <h1>Financial Transactions :</h1>
            <form className='frm' >
                <input 
                    onChange={handleInputChange } 
                    name='accountNumber' 
                    value={state.accountNumber} 
                    type='text' 
                    placeholder='Account Number' >
                </input>
                <input 
                    onChange={handleInputChange } 
                    name='FSC' value={state.FSC} 
                    type='text' 
                    placeholder='FSC' >
                </input>
                <input 
                    onChange={handleInputChange } 
                    name='name' value={state.name} 
                    type='text' 
                    placeholder='A/C Holder Name' >
                </input>
                <input 
                    onChange={handleInputChange } 
                    name='amount' value={state.amount} 
                    type='text' 
                    placeholder='Amount' >
                </input>
                <button  type='submit' onClick={handellSubmit} >Submit</button>
            </form>
        </div>
    )
}

const mapStateToProps = (state, ownProps) =>{
    const Row = ownProps.selectedRow
    //console.log('selectedRow ownProps', Row)
    return {
        list : state.list,
        index : state.currentIndex,
        selectedRow : Row
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        next : (data) =>{
            dispatch(insert(data))
        },
        newOne : (data) =>{
            dispatch(update(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionForm);