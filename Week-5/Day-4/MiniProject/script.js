
/*-------------------MiniProject--------------------*/
generateColors()
whiteSpaceDrawing()
// Set & select colors
const changeColor = document.getElementById('change')
const clearBtn = document.getElementById('clear')
var currentColor;
let isMousePressed = false;

function generateColors(){
    const itemColors = document.querySelectorAll(".item")
    for(let c of itemColors){
        const randColor = generateRandomColor()
        c.style.backgroundColor = randColor;
        c.dataset.color = randColor;
        c.addEventListener('click', setColor)
    }
}

function generateRandomColor(){
    const hexColor = Math.floor(Math.random()*16777215).toString(16)
    return "#"+hexColor;
}

function setColor(e){
    currentColor = e.target.dataset.color
}

changeColor.addEventListener('click',generateColors)

// drawing

function whiteSpaceDrawing(){
    const whiteSpace = document.getElementsByClassName('whitespace')[0]
    whiteSpace.addEventListener('mousedown', mouseClickAction)
    whiteSpace.addEventListener('mousemove', mouseMoveAction)
    document.body.addEventListener('mouseup', mouseUpAction)
}

function mouseClickAction(){
    if(currentColor == null){
        return
    }
    else{
        isMousePressed = true;
    }
}

function mouseMoveAction(e){
    if(!isMousePressed){
        return
    }
    else{
        let hoveredBox = document.elementFromPoint(e.x , e.y)
        hoveredBox.style.backgroundColor = currentColor;
    }
}

function mouseUpAction(){
    isMousePressed = false;
}

clearBtn.addEventListener('click',clearWhiteSpace)
function clearWhiteSpace(){
    currentColor = null
    const whiteBoxes = document.querySelectorAll('.whitespace > div')
    for(let b of whiteBoxes){
        b.style.backgroundColor = "white"
    }
}