import React from 'react'
import './CalcStyle.css'

class Calculate extends React.Component{

    constructor(){
        super()
        this.state = {
            num1 : '',
            num2 : '',
            res : ''
        }
    }
    handelChangeForNum1 = (e) =>{
        this.setState({num1 : e.target.value})
    }
    handelChangeForNum2 = (e) =>{
        this.setState({num2 : e.target.value})
    }
    calcNumbers = (e) =>{
        e.preventDefault()
        const {num1, num2} = this.state;
        console.log(this.state)

        var result = parseFloat(num1) + parseFloat(num2);

        this.setState({ res : result })
    }
    
    render(){
        return(
            <div id='screen'>
                <div id='cart'>
                    <h1>Adding Two Numbers</h1>
                    <div id='inps'>
                        <input type='text' id='num1' placeholder='First number' onChange={this.handelChangeForNum1}></input>
                        <input type='text' id='num2' placeholder='Second number' onChange={this.handelChangeForNum2}></input>
                    </div>
                    <button id='calc' onClick={this.calcNumbers}>Add Them!</button>
                    <div id='result'>{this.state.res}</div>
                </div>
            </div>
        )
    }
    
    
}

export default Calculate;
