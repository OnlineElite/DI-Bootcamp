
/*---------------------Exercises_XP----------------------*/

/*--------Exercise_4---------*/

var radius = document.getElementById('radius')
var volum = document.getElementById('volume')
var subbtn = document.getElementById('submit')

subbtn.addEventListener('click', calculateSphereVolune)
function calculateSphereVolune(e){
    var result = (4/3)* Math.PI * Math.pow(radius.value,3)
    volum.value = result;
    e.preventDefault()
}