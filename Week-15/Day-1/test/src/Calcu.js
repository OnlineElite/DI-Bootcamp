import React from 'react'

class Calcu extends React.Component{
    
    constructor(name , value, props){
        super( props)
        this.state = {
            num1 :4,
            num2 :2,
            res : '',
            equalToZero : false
        }
    }

    hundelChangeNum1 =(e) =>{
        this.setState({num1 : e.target.value}) 
    }

    hundelChangeNum2 = (e) => {
        this.setState({num2 : e.target.value}) 
    }
    
    handelMathOperarion = (e) =>{
        e.preventDefault()
        var {num1, num2 } = this.state
        if(num2 == 0){ this.setState({equalToZero : true})}
        var result = parseFloat(num1) / parseFloat(num2)
        this.setState({res : result})

    }

    render(){
        if(this.state.equalToZero){
            throw new Error('Warning divis by zero');
        }
        else{
            return(
                <form>
                    <input type='text'  onChange={this.hundelChangeNum1} style={{color:'blue', fontSize : 20}}></input>
                    <input type='text'  onChange={this.hundelChangeNum2} style={{color:'blue', fontSize : 20}}></input>
                    <button onClick={this.handelMathOperarion}>Show</button>
                    <div style={{color:'blue', fontSize : 20}}>{this.state.res}</div>
                </form>
            )
        }
        
    }
}
export default Calcu;