

const deletePost = (id)=>{
    console.log('action id', id)
    return{
        type :'DELETE_POST',
        ID : id
    }
}

export default deletePost;