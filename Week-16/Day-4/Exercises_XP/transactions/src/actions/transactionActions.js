const insert  = (data) =>{
    //console.log('action state', data)
    return {
        type: 'INSERT',
        payload: data
    }
}

const update  = (data) =>{
    //console.log('action state', data)
    return {
        type: 'UPDATE',
        payload: data
    }
}

const Delete  = (id) =>{
    //console.log('action state', id)
    return {
        type: 'DELETE',
        payload: id
    }
}

const updateIndex  = (index) =>{
    //console.log('action state', index)
    return {
        type: 'UPDATE-INDEX',
        payload: index
    }
}

export  {insert, update, Delete, updateIndex}