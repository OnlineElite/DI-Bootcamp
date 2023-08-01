import React, { useState } from 'react'
import '../Transactions.css'
import {connect} from 'react-redux'
import { updateIndex, Delete } from '../actions/transactionActions'
import TransactionForm from './TransactionForm'

function TransactionList(props){
    //console.log('props.data', props.data)
    const [selected, setSelected] = useState({})

    const handleEdit = (index) => {
        var selectedRow = props.data[index]
        setSelected(selectedRow)
        props.change(index);
    };
    
    const handleDelete = (id) => {
        props.remove(id);
    };

    
    return (
        <div>
            <TransactionForm selectedRow ={selected} />
            <hr/>
            <table >
                <tbody>
                    {props.data.map((data, index) =>(
                        <tr key={data.id}>
                            <td> {data.accountNumber} </td>
                            <td> {data.FSC} </td>
                            <td> {data.name} </td>
                            <td> {data.amount} </td>
                            <td> <button onClick= {()=> handleEdit(index) }  >Edit</button> </td>
                            <td> <button onClick= {()=> handleDelete(data.id) } >Delete</button> </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = (state) =>{
    
    return {
        data : state.list,
        index : state.currentIndex
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        remove : (id) =>{
            dispatch(Delete(id))
        },
        change : (index) =>{
            dispatch(updateIndex(index))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TransactionList);