import React from 'react'
import '../style.css'
import { Link} from "react-router-dom";


function Post({data}){
    //console.log('post data', data)
    return(
        <div>
            <Link to= {'/post/'+ data.id}> <h5>{data.title}</h5></Link>
            <p> {data.body} </p>
        </div>
    )
}



export default Post;