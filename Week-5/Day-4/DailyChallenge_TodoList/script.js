
/*---------------DailyChallenge_ToCoList------------------*/

const tasks = [];
const inp = document.getElementById('inp')
const list = document.getElementsByClassName('listTasks')[0]
const submit = document.getElementById('submit')
submit.addEventListener('click', addTask)
function addTask(e){
    e.preventDefault()
    if(inp.value != ""){
        tasks.push(inp.value)
        var xBtn = document.createElement('i')
        xBtn.setAttribute("class", "fa-solid fa-square-xmark");
        xBtn.style.color = "red"
        list.appendChild(xBtn)
        var checkBox = document.createElement('input')
        checkBox.setAttribute('type', 'checkbox')
        checkBox.style.marginInline = "5px"
        checkBox.setAttribute('class', 'checked')
        list.appendChild(checkBox)
        var label = document.createElement('label')
        label.textContent = inp.value;
        label.style.fontSize = "18px"
        list.appendChild(label)
        var hr = document.createElement('hr')
        hr.style.marginTop = "5px"
        hr.style.marginBottom = "5px"
        list.appendChild(hr)
    }
    else{
        alert('The empty field is empty, please enter a task')
    }
    inp.value = "";
}

let chackedElem = document.getElementsByClassName('checked')
for(let i of chackedElem){
    i.addEventListener('click',removeAction)
    function removeAction(){
        let lab = document.querySelector('i:first-child')
        lab.style.textDecoration = "line-through"
    }
}
