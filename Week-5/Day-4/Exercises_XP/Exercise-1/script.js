
/*--------------Exercises_XP-Ex1----------------------*/
// Part I
/*setTimeout(() => {
    alert("Hello World")
},2000)*/

// Part II
var con = document.getElementById('container')

/*setTimeout(() => {
    var para = document.createElement('p')
    para.textContent = "Hello World"
    con.appendChild(para)
}, 2000)*/

//Part III
var btnClear = document.getElementById('clear')
var parag = document.getElementsByClassName('paragraph')

function creatParagraph(){
    var para = document.createElement('p')
    para.textContent = "Hello World"
    para.setAttribute('class', 'paragraph')
    con.appendChild(para)
   clearInter()
}

let add = setInterval(creatParagraph, 2000)

btnClear.addEventListener('click',cleartimer)
function cleartimer(){
    clearInterval(add)
}

function clearInter(){
    if(parag.length === 5){
        clearInterval(add)
    }
}



