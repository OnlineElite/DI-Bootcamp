const json =
{
    "menu": {
        "id": "file",
        "value": "File",
        "popup": {
            "menuitem": [
                { "value": "New", "onclick": "CreateNewDoc()" },
                { "value": "Open", "onclick": "OpenDoc()" },
                { "value": "Close", "onclick": "CloseDoc()" }
            ]
        }
    }
}
function sendData() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
  
    let userdata = {
      username,
      password
    }
    console.log(userdata);
  
    fetch('http://localhost:3000/login',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userdata)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      document.getElementById('root').innerHTML = `${data.message} ${data.user}`
    })
    .catch(e => console.log(e))
  }
