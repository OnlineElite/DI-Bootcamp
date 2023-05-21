  
/*---------------------Exercises_XP----------------------*/

/*--------Exercise_1---------*/
var h1Elem = document.querySelector("h1")
console.log(h1Elem.innerHTML)

var artcl = document.querySelector("article")
var lastP = artcl.lastElementChild;
artcl.removeChild(lastP)

var h2Elem = document.getElementsByTagName('h2')[0]
h2Elem.addEventListener('click', changeBackground)
function changeBackground(){
    h2Elem.style.backgroundColor = "red"
}

var h3Elem = document.getElementsByTagName('h3')[0]
h3Elem.addEventListener('click', hideElem)
function hideElem(){
    h3Elem.style.display = "none"
}

var parags = document.getElementsByTagName('p')
var btn = document.createElement('button')
btn.textContent = "Make it Bold"
artcl.appendChild(btn)
btn.addEventListener('click', makeItBold)
function makeItBold(){
    for(let i in parags){
        parags[i].style.fontWeight = "bold"
    }
}

h1Elem.addEventListener('mouseover', changeFontSize)
function changeFontSize(){
    h1Elem.style.fontSize = Math.floor(Math.random() * 101)+"px";
}