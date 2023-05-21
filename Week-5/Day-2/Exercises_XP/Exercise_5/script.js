
/*---------------------Exercises_XP----------------------*/

/*--------Exercise_5---------*/

var btn = document.getElementById('submit')

btn.addEventListener('click', changeX)
function changeX(){
    btn.style.transform = "translateX(150px)"
}

btn.addEventListener('dblclick', changeY)
function changeY(){
    btn.style.transform = "translateY(100px)"
}

btn.addEventListener('mouseover', changeColor)
function changeColor(){
    btn.style.color = "red"
}

btn.addEventListener('mouseout', changeFontSize)
function changeFontSize(){
    btn.style.fontSize = "22px"
}