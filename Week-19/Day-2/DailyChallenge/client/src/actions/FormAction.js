
const registerUser = (answer)=>{

    return{
        type : 'REGISTER_USER',
        payload : answer
    }
}

const loginUser = (answer)=>{

    return{
        type : 'LOGIN_USER',
        payload : answer
    }
}

const authontification =(value)=>{

    return{
        type: 'AUTHONTIFICATION',
        payload: value
    }


}

const handellError = (message)=>{
    return{
        type : 'ERROR_MESSAGE',
        payload: message
    }
}

const registerThunk = (user) => async (dispatch)=>{
    try{
        const url = 'http://localhost:3002/register';    //attention port 3002
        
        const data = {...user}
        console.log('data to fetch', data)
        const header = {
          method: 'POST',
          headers: { 'Content-Type':'application/json'},
          body: JSON.stringify(data)
        };
        
        const response = await fetch(url ,header );
        const datarecived = await response.json();
        console.log('data register receved', datarecived )
        dispatch(registerUser(datarecived.message))
    }catch(err){
        console.error(err)
        dispatch(handellError(err))
    }
}

const loginThunk = (user) => async (dispatch)=>{
    try{
        const url = 'http://localhost:3002/login';    //attention port 3002
    
        const data = {...user}
    
        const header = {
          method: 'POST',
          headers: { 'Content-Type':'application/json'},
          body: JSON.stringify(data)
        };
        
        const response = await fetch(url ,header );
        const datarecived = await response.json();
        console.log('data login recived', datarecived )
        dispatch(loginUser(datarecived.message))
        dispatch(authontification(datarecived.admission))
    }catch(err){
        console.error(err)
        dispatch(handellError(err))
    }
}

export {registerThunk, loginThunk}