import React from 'react'
import './Exercise.css'
class Exercise extends React.Component{

    constructor(){
        super()
        this.state = {

        }
    }

    

    render(){
        const style_header = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial",
            textAlign:'center'
        };

        return(
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <div style={{width: 'fitContent', backgroundColor: 'lightsalmon', padding: '30px'}}>
                <h1 style={{...style_header}}>Hello World</h1>
                <p className='para'>This is paragraph exemple using some text for test</p>
                <form>
                    <label>Searsh by item name:</label><br></br>
                    <input type='text' placeholder='Enter item name'></input>
                    <button type='submit'>Submit</button>
                </form>
                <a href='http://www.youtube.com' target='_blank'>Go to Youtube</a><br></br>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIQTDD7FUwpZ-h9vS9EflnjcKP3_ORFo90lA&usqp=CAU' alt='dog'></img>
                <h4>List item example:</h4>
                <ul>
                    <li>First item</li>
                    <li>Second item</li>
                    <li>Third item</li>
                </ul>
            </div>
            </div>
        )
    }
}

export default Exercise;