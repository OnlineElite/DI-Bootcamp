import React from 'react'
import '../style.css'
import Post from './Post'
import blogimg from '../images/blog.png'
import {connect} from 'react-redux'



class Home extends React.Component{

    constructor(props){
        super()
    }

    render(){
        console.log('Home data', this.props.data)
        return(
            <div className='posts'>
                <h4>Home</h4>
                <ul>
                    {this.props.data.map((item)=>(
                        <li key={item.id}> 
                            <div className='cont' >
                                <img src={blogimg} alt='blog_image'></img>
                            </div>
                            <div className='comp'><Post data ={item} /> </div> 
                        </li>
                    ))}
                </ul>
            </div>
        )
    }

}

const mapStateToProps = (state) =>{
    return {
        data : state
    }
}
export default connect(mapStateToProps)(Home);