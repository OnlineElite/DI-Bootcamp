
/*-----------------DailyChallenge-----------------*/

var fname = document.getElementById('fname')
var lname = document.getElementById('lname')
var send = document.getElementById('send')
var display = document.getElementById('display')

send.addEventListener('click', getInfo)
function getInfo(e){
    e.preventDefault()
    var info = { 
        FirstName: fname.value,
        lastName: lname.value
    }
    var jsonObj = JSON.stringify(info)
    if(fname.value != "" & lname.value != ""){
        display.textContent = jsonObj;
        console.log(fname.value +" "+lname.value)
        console.log(info) 
    }
    else{
        alert("please enter the name and the last name first")
    } 
}
