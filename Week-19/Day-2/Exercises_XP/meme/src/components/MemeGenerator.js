import React from 'react'

import '../App.css'


class MemeGenerator extends React.Component{

    constructor(){
        super()

        this.state = {
            topText :'',
            bottomText: '',
            randomImage: 'http://i.imgflip.com/1bij.jpg',
            allMemeImgs : null
        }
    }
    componentDidMount(){
       
            
            fetch('https://api.imgflip.com/get_memes')
            .then((res)=>{
                return res.json()
            })
            .then((response)=>{
                console.log('data fetched', response)
                console.log('memes fetched', response.data.memes)
                this.setState({
                    allMemeImgs : response.data.memes
                })
            })
        
    }

    handellinput= (e) =>{
        let type = e.target.dataset.id;
        let value = e.target.value
        console.log('type', type, 'value', value)
        switch(type){
            case 'top':
                this.setState({
                    topText : value
                })
                break;
            
            case 'bottom':
                this.setState({
                    bottomText : value
                })
                break;

            default:
                this.setState({
                    topText :'',
                    bottomText: '',
                    randomImage: 'http://i.imgflip.com/1bij.jpg',
                    allMemeImgs : null
                })
        }
    }

    randomMeme = (e)=>{
        e.preventDefault()
        // get random index value
        const randomIndex = Math.floor(Math.random() * this.state.allMemeImgs.length);
        // get random item
        const item = this.state.allMemeImgs[randomIndex];
        console.log('item', item) ;  
        this.setState({
            randomImage : item.url
        })
    }

    render(){

        return(
            <div>
                <form className='meme-form '>
                    <input type='text' name='topText' onChange={this.handellinput} data-id='top'></input>
                    <input type='text' name='bottomText' onChange={this.handellinput} data-id='bottom'></input>
                    <button type='submit' onClick={this.randomMeme} > Generate</button>
                </form>
                <div className='meme ' style={{width:'55vw', height: '40vh'}}>
                    <img src= {this.state.randomImage} alt='meme'/>
                    <h2 className='top'> { this.state.topText } </h2>
                    <h2 className='bottom'> { this.state.bottomText } </h2>
                </div>
            </div>
        )
    }
}

export default MemeGenerator;