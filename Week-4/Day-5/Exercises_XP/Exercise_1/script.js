
/*---------------Exercises_XP------------------*/

/*------Exercise_1------*/
var diiv = document.getElementById('container')
var ul = document.querySelectorAll('ul')
var li = document.querySelectorAll('ul>li')
var fchilds = document.querySelectorAll('ul>li:first-child')

console.log(diiv)
li[1].textContent = "Richard"
ul[1].removeChild(li[3])

for(let i in fchilds){
    fchilds[i].textContent = "Jamal"
}

ul[1].setAttribute('class', "student_list")
ul[0].setAttribute('class', "student_list university attendance")


