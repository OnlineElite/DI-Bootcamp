import React from 'react'
import aboutimg from './images/about.jpg'
class About extends React.Component{

    constructor(){
        super()
        this.state = {
            text : 'welcome to the About page'
        }
    }

    render(){
        return(
            <>
                <h1>About Title</h1>
                <p>{this.state.text}</p>
                <img
                src={aboutimg}
                alt="About"
                width="40%" />
            </>
        )
    }
}

export default  About;