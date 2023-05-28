
/*--------------Exercises_XP-Ex3----------------------*/

// set attributes

let box = document.getElementById('box')
box.setAttribute('draggable', "true")
box.setAttribute("ondragstart", "dragStart(event)")

let targit = document.getElementById('targit')
targit.setAttribute("ondrop", "dragDrop(event)")
targit.setAttribute("ondragover", "allowDrop(event)")
targit.setAttribute("ondragenter", "allowEnter(event)")
targit.setAttribute("ondragleave", "allowLeave(event)")


// functions for the box
function dragStart(event){
    event.dataTransfer.setData("text", event.target.id)
}

// functions for the targit
function dragDrop(event){
    event.preventDefault();
    let data = event.dataTransfer.getData("text")
    let square = document.getElementById(data)
    event.target.appendChild(square)
}

function allowDrop(event){
    event.preventDefault();
}

function allowEnter(event){
    event.target.classList.add('effet')
}

function allowLeave(event){
    event.target.classList.remove('effet')
}


