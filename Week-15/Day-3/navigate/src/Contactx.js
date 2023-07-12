import React from 'react'
import contactimg from './images/contact.jpg'
class Contactx extends React.Component{

    constructor(){
        super()
        this.state = {
            text : 'Hello welcome to Contact page'
        }
    }

    render(){
        return(
            <>
                <h1>Contact Title</h1>
                <p>{this.state.text}</p>
                <img
                src={contactimg}
                alt="Contact"
                width="40%" />
            </>
        )
    }
}

export default  Contactx;