import React from 'react'
import homeimg from './images/home.png'

class Home extends React.Component{

    constructor(){
        super()
        this.state = {
            text : 'welcome to the home page'
        }
    }

    render(){
        return(
            <>
                <h1>Home Title</h1>
                <p>{this.state.text}</p>
                <img
                src={homeimg}
                alt="Home"
                width="40%" />
            </>
        )
    }
}

export default  Home;