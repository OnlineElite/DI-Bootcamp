import React from 'react'

class Actor extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            firstnmae : 'Jamal',
            lastname : 'Boujbari',
            image : 'https://images.all-free-download.com/images/graphiclarge/bruce_willis_celebrity_actor_217250.jpg'
        }
    }

     fetchInfo = (e) => {
        e.preventDefault()
        var fname = document.getElementById('firstname').value;
        var lname = document.getElementById('lastname').value;
        var img = document.getElementById('image').value; 
        this.setState({
            firstname : fname,
            lastname : lname,
            image : img
        })
    }
    render() {
        return(
            <div style={{margin:'20px'}}>
                <form onSubmit={this.fetchInfo}>
                    <input type='text' id='firstname' placeholder='Enter your first name'></input><br/>
                    <input type='text' id='lastname' placeholder='Enter your last name'></input><br/>
                    <input type='text' id='image' placeholder='Enter your image url'></input><br/>
                    <button type='submit' id='submit' >Submit</button>
                </form>
                <ul>
                <li style={{
                    border:'2px solid blue', 
                    backgroundColor:'coral',
                    width: 'fit-content',
                    marginBottom:'5px'}}>
                    {this.state.firstname}
                </li>
                <li style={{
                    border:'2px solid blue', 
                    backgroundColor:'lightblue',
                    width: 'fit-content',
                    marginBottom:'5px'}}>
                    {this.state.lastnmae}
                </li>
                <li style={{
                    border:'2px solid blue', 
                    backgroundColor:'yellowgreen',
                    width: 'fit-content',
                    marginBottom:'5px'}}>
                    <img style ={{width : '200px', height : '200px'}} src={this.state.image} alt='img'></img>   
                </li>
            </ul>
            </div>  
        )
    }
}

export default Actor;