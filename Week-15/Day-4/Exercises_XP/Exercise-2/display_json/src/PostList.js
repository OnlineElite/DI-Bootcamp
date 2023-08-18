import React from 'react'
import data from './Data.json';
function PostList(){

    return(
        <div>
        <h1>Hi This is a Title</h1>
        {data.map((item)=>(
            <div key={item.title}>
                <h2> {item.title} </h2>
                <p> {item.content} </p>
            </div>
        ))}

        </div>
    )
}

export default PostList;