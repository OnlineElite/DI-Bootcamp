document.getElementById('submit').addEventListener('click', handellData)
function handellData(e){
    e.preventDefault()
    var registerData = [];
    const ids = ['firstname', 'lastname', 'email', 'password', 'message']
    const inputs = ids.map((id) => document.getElementById(id))

    
    inputs.forEach((inp) => { registerData.push(inp.value) })
    
    const bodyData = {
        firstname : registerData[0],
        lastname : registerData[1],
        email : registerData[2],
        password : registerData[3],
        message : registerData[4]
    }
    console.log(bodyData)
    function fetchData(){
        fetch('/formData', {
        method: 'POST',
        headers: { 'Content-Type':'application/json'},
        body: JSON.stringify(bodyData)
        })
        .then(res => {
            if(res.status = 200){
                return res.json()
            }else{
                throw new console.error(error)
            }
        } )
        .then((data) => {
            console.log(data)
            document.getElementById('showRegister').textContent = ` ${data.message} `;
        })
        .catch(err => console.log(err))
    }
    fetchData();
    inputs.forEach((inp) => { inp.value =""})
} 