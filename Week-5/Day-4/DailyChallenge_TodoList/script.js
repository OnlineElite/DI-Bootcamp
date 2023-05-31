
/*---------------DailyChallenge_ToCoList------------------*/

const tasks = [];
const inp = document.getElementById('inp')
const list = document.getElementsByClassName('listTasks')[0]
const submit = document.getElementById('submit')
submit.addEventListener('click', addTask)

// Add function
function addTask(e){
    e.preventDefault()
    if(inp.value != ""){
        tasks.push(inp.value)
        let row = document.createElement('div')
        row.setAttribute('class', 'rows')
            var xBtn = document.createElement('i')
            xBtn.setAttribute("class", "fa-solid fa-square-xmark");
            xBtn.style.color = "red"
            xBtn.setAttribute('data',inp.value)
            row.appendChild(xBtn)

            var checkBox = document.createElement('input')
            checkBox.setAttribute('name', inp.value)
            checkBox.setAttribute('type', 'checkbox')
            checkBox.style.marginInline = "5px"
            checkBox.setAttribute('class', 'chickes')
            row.appendChild(checkBox)

            var label = document.createElement('label')
            label.textContent = inp.value;
            label.setAttribute('name', inp.value)
            label.style.fontSize = "18px"
            row.setAttribute('data',inp.value)
            row.appendChild(label)

            var hr = document.createElement('hr')
            hr.style.marginTop = "5px"
            hr.style.marginBottom = "5px"
            row.appendChild(hr)
        list.appendChild(row)
        ifElemChecked()
        resetFunction()
    }
    else{
        alert('The empty field is empty, please enter a task')
    }
    inp.value = "";
}

// Check function
function ifElemChecked(){
    let checkboxes = document.getElementsByClassName('chickes')
    for(let i of checkboxes){
        let iname =i.getAttribute('name')
        i.addEventListener('change', function() {
            let labels = document.querySelectorAll('.listTasks div label')
            for(let j of labels){
                if (this.checked) {
                    let jname = j.getAttribute('name')
                    if(iname === jname){
                        j.classList.add('ChechedTask')
                    }
                    else{
                        continue;
                    }
                }
                else {
                    j.classList.remove("ChechedTask")
                    return;
                }
            }  
        });
    }
}

//Reset function
function resetFunction(){
    var xButton = document.querySelectorAll('.listTasks div i')
    var rows = document.querySelectorAll('.listTasks div')
    for(let x of xButton){
        let xdata = x.getAttribute('data')
        x.addEventListener('click',removeTask)
        function removeTask(e){
            e.preventDefault();
            for(let y of rows){
                let ydata = y.getAttribute('data')
                if(xdata === ydata){
                    list.removeChild(y)
                }
                else{
                    continue;
                }
            }
        }
    }
}
