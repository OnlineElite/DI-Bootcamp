import React from 'react'
import Quotes from './QuotesDatabase'
import './QuoteStyle.css'

class QuoteX extends React.Component{
    constructor(){
        super()
        this.state = {
            statequote :{
                quote: "Genius is one percent inspiration and ninety-nine percent perspiration.",
	            author: "Thomas Edison"
            },
            back : 'lightblue'
        }
    }

    generateRandomColor(){
        let maxVal = 0xFFFFFF; // 16777215
        let randomNumber = Math.random() * maxVal; 
        randomNumber = Math.floor(randomNumber);
        randomNumber = randomNumber.toString(16);
        let randColor = randomNumber.padStart(6, 0); 
        console.log(`#${randColor.toUpperCase()}`)  
        return `#${randColor.toUpperCase()}`

    }

    generateQuote =() =>{
        var newQuote = Quotes[Math.floor(Math.random()* Quotes.length)]

        this.setState({
            statequote :newQuote,
            back : this.generateRandomColor()
        })
    }

    render(){
        return(
            <section id='body' style={{backgroundColor : this.state.back}}>
                <div className='cart'>
                <h3 id='title' style={{color : this.state.back}}>
                     {this.state.statequote.quote} 
                </h3>
                <span id='author' style={{color : this.state.back}}> 
                    {this.state.statequote.author}
                </span>
                <button onClick={this.generateQuote}  id='btn' style={{backgroundColor : this.state.back, color: 'white'}}>
                    Next Quote
                </button>
            </div>
            </section>
        )
    }
}

export default QuoteX;