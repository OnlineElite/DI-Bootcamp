
/*---------------Exercises_XP------------------*/

/*------Exercise_2------*/
var dev = document.querySelector("div")
var ulItems = document.getElementsByTagName('li')
var bodi = document.getElementsByTagName('body')[0]
console.log(bodi)
dev.style.backgroundColor = "lightblue";
dev.style.padding = "5px";
ulItems[0].style.display = "none"
ulItems[1].style.border = "2px solid red"
bodi.style.fontSize = "25px"

if(dev.style.backgroundColor = "lightblue"){
    alert("Hello " +ulItems[0].textContent+ " and "+ulItems[1].textContent)
}
