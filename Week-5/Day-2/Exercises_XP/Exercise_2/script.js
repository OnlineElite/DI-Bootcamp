
/*---------------------Exercises_XP----------------------*/

/*--------Exercise_2---------*/
var frm = document.forms[0]
console.log(frm)

var fname = document.getElementById('fname')
var lname = document.getElementById('lname')
var sub = document.getElementById('submit')
console.log(fname)
console.log(lname)
console.log(sub)

var fname = document.forms[0].fname
var lname = document.forms[0].lname
console.log(fname)
console.log(lname)

sub.addEventListener('click', submitForm)
function submitForm(event){
    if(fname.value == "" || lname.value == ""){
        alert("there is an empty field")
    }
    else{
        var fnameLi = document.createElement('li')
        fnameLi.textContent = fname.value;
        var lnameLi = document.createElement('li')
        lnameLi.textContent = lname.value; 
        document.getElementsByClassName('usersAnswer')[0].appendChild(fnameLi)
        document.getElementsByClassName('usersAnswer')[0].appendChild(lnameLi)
    }
    event.preventDefault()
}

