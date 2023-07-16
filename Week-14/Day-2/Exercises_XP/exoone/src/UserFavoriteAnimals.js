import React from 'react'

function UserFavoriteAnimals(props){

    return(
        <ul>
            {props.fav_animals.map((item, index)=>(
                <li key={index}> {item} </li>
            ))}
        </ul>
    )
}

export default UserFavoriteAnimals;