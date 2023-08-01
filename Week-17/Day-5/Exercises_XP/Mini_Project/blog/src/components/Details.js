import '../style.css'
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { Link} from "react-router-dom";
import deletePost from '../actions/postActions'

function Details(props){
    const p_id = useParams().post_id
    let data;
    
    (function fillPost (){
        data = props.posts.filter((item)=> item.id === p_id);
    })()

    function handleClick(e){
        e.preventDefault()
        let specific_id = e.target.dataset.id
        console.log('specific_id', specific_id)
        props.next(specific_id)
        props.browserHistory.push('/')

    }
    

    return(
        <div className='details'>
            <h4> {data[0].title} </h4>
            <p> {data[0].body} </p>
            <Link to='/'><button onClick={handleClick} data-id={data[0].id} >DELETE POST</button></Link>
            
        </div>
    )
}

const mapStateToProps = (state) =>{
    //console.log('detail state', state)
    return {
        posts : state 
    }
}

const mapDespatchToProps = (dispatch)=>{
    return {
        next : (p_id)=>{
            dispatch(deletePost(p_id))
        }
    }
}
export default connect(mapStateToProps, mapDespatchToProps)(Details);
