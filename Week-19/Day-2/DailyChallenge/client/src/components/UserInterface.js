import React from'react'
import Navbar from './Navbar'
import {connect} from 'react-redux'
import {LogOutThunk} from '../actions/FormAction'

function UserInterface(props){


    const handellLogOut =(e)=>{
        e.preventDefault()
        props.next(props.useremail)
        if(props.admission === false){
            console.log('to login page')
            setTimeout(()=>{
                window.location.href = 'http://localhost:3000/login';                 
            }, 3000)
        }
        else{
            console.log('wrong information')
        }
    }
    return(
        <div>
            <Navbar/>
            <h1>User Page  for : {props.useremail} </h1>
            <button onClick={handellLogOut}>Log Out</button>
        </div>
    )
}

const mapStateToProps =(state)=>{
    return{
        response : state.LoginRespond,
        admission : state.admission,
        useremail : state.userEmail
    }
}

const mapDispatchToProps =(dispatch)=>{
    return{
        next : (useremail)=>{
            dispatch(LogOutThunk(useremail))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (UserInterface);

