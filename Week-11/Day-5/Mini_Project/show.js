
document.getElementById('goback').addEventListener('click', goback = () => {
    location.href = 'index.html';
})

// create drop down for the discription of the tasks------------------------------------//
function createDropDown(el){
    const cont = document.getElementById('subContainer')

            const dropdown = document.createElement('div')
            dropdown.setAttribute('class','dropdown')

               // Creating the card
                const card = document.createElement('div') 
                card.setAttribute('data-toggle', 'collapse')
                card.setAttribute('data-target', '#'+ el.name.replaceAll(' ', ''))
                card.setAttribute('aria-expanded', 'false')
                card.setAttribute('aria-controls', 'collapseExample')   
                card.setAttribute('class', 'carts')
                card.style.backgroundColor = el.backgraound;
                    
                    const Ndiv = document.createElement('div')
                    Ndiv.textContent = 'Name: ';
                    Ndiv.setAttribute('class', 'spanDiv')
                        const spName = document.createElement('span')
                        spName.setAttribute('class', 'spn')
                    Ndiv.appendChild(spName)
                card.appendChild(Ndiv)
                    
                    const SDdiv = document.createElement('div')
                    SDdiv.textContent = 'Starting date: ';
                    SDdiv.setAttribute('class', 'spanDiv')
                        const spStartingDate = document.createElement('span')
                        spStartingDate.setAttribute('class', 'spn')
                    SDdiv.appendChild(spStartingDate)
                card.appendChild(SDdiv)
                    
                    const DLdiv = document.createElement('div')
                    DLdiv.textContent = 'Days left: ';
                    DLdiv.setAttribute('class', 'spanDiv')
                        const spDaysLeft = document.createElement('span')
                        spDaysLeft.setAttribute('class', 'spn')
                    DLdiv.appendChild(spDaysLeft)
                card.appendChild(DLdiv)
                    const statusdiv = document.createElement('div')
                    statusdiv.textContent = 'Done: ';
                    statusdiv.setAttribute('class', 'spanDiv')
                        const spStatus = document.createElement('span')
                        spStatus.setAttribute('class', 'spn')
                    statusdiv.appendChild(spStatus)
                card.appendChild(statusdiv)
                // container of card and buttons
                const subCont = document.createElement('div')
                subCont.classList.add('subCont')
                subCont.appendChild(card)
                //add buttons container next to card with this function
                addButtns(subCont) 
            dropdown.appendChild(subCont)
            
                // create dropdown menu
                const dropMenu = document.createElement('div')
                dropMenu.setAttribute('class', 'collapse')
                dropMenu.setAttribute('id', el.name.replaceAll(' ', ''))

                    const desc = document.createElement('div')
                    desc.setAttribute('class', 'card card-body')
                    desc.classList.add('desc')
                dropMenu.appendChild(desc)

            dropdown.appendChild(dropMenu)               
            
        cont.appendChild(dropdown)

        // Insert data to the card
        spName.textContent = el.name;
        spStartingDate.textContent = el.startTime;
        desc.textContent = el.description;
        spStatus.textContent = el.status;

        const eDay = new Date(el.endTime).getDate()
        const sDay = new Date(el.startTime).getDate()
        const Dleft = eDay - sDay;
        spDaysLeft.textContent = Dleft;
        
        
}

//fill the drop down with inserted values-----------------------------------------------//

window.addEventListener('load',exportData)
function exportData(){

    const dataLoad = JSON.parse(localStorage.getItem("TasksList"))
    
    dataLoad.forEach(el => { 

        createDropDown(el)
        
    })
}

//Change status and color of the tsks-----------------------------------------------//

function addButtns(parent){
    const buttonsCont = document.createElement('div')
    buttonsCont.classList.add('buttonsCont')

        // This check box to handell status of the task
        const check = document.createElement('input')
        check.setAttribute('type', 'checkbox')
        check.addEventListener('change', handellCheckbox)
        check.classList.add('checks')
        buttonsCont.appendChild(check)
        
        // add an 'X' button to delete the task
        const xbtn = document.createElement('button')
        xbtn.textContent = 'X'
        xbtn.addEventListener('click', deleteAction)
        xbtn.classList.add('xbtn')
        buttonsCont.appendChild(xbtn)

        // add an 'Edite' button to edite the task
        const edit = document.createElement('button')
        edit.textContent = 'Edit'
        edit.addEventListener('click', updateAction)
        edit.classList.add('edit')
        buttonsCont.appendChild(edit)
        
    parent.appendChild(buttonsCont)

}
// This function is deleting tasks-----------------------------------------------//

function deleteAction(e){
    e.preventDefault();
    const grandparent = e.target.parentElement.parentElement.parentElement
    const cont = document.getElementById('subContainer')
    cont.removeChild(grandparent)

    const parent = e.target.parentElement.parentElement.firstChild;
    let name = parent.firstChild.lastChild.textContent;
    const dataLoad = JSON.parse(localStorage.getItem("TasksList"))
    let oldDataWithoutThisItem = dataLoad.filter((val)=> val.name != name )
    localStorage.setItem("TasksList", JSON.stringify(oldDataWithoutThisItem) )


}

// This function is updating tasks status-----------------------------------------------//
function handellCheckbox(e){
    const parent = e.target.parentElement.parentElement.firstChild;
    let name = parent.firstChild.lastChild.textContent;
    let status = parent.lastChild.lastChild;
    const dataLoad = JSON.parse(localStorage.getItem("TasksList"))
    let oldDataWithoutThisItem = dataLoad.filter((val)=> val.name != name )
    //console.log("oldDataWithoutThisItem ", oldDataWithoutThisItem)
    
    if (this.checked) {
        parent.style.backgroundColor = 'rgb(10, 185, 10)';
        dataLoad.forEach(item => { 
            if(name === item.name){
                //console.log("itemTargeted ", item)
                item.status = true;
                item.backgraound = 'rgb(10, 185, 10)';
                status.textContent = true;
                oldDataWithoutThisItem.push(item)
                localStorage.setItem("TasksList", JSON.stringify(oldDataWithoutThisItem) )
            }
        })
        
    }
    else {
        parent.style.backgroundColor = 'rgb(10, 2, 116)';
        dataLoad.forEach(item => { 
            if(name === item.name){
                //console.log("itemTargeted ", item)
                item.status = false;
                item.backgraound = 'rgb(10, 2, 116)';
                status.textContent = false;
                oldDataWithoutThisItem.push(item)
                localStorage.setItem("TasksList", JSON.stringify(oldDataWithoutThisItem) )
            }
        })
    }
    
}

// This function update tasks -----------------------------------------------//
var updatedData={}
let parent, name, dataLoad, oldDataWithoutThisItem ;
function updateAction(e){
    e.preventDefault()
    const cont = document.getElementById('subContainer')
    console.log(e.target)
    createModal(cont, e.target)
    parent = e.target.parentElement.parentElement.firstChild;
    name = parent.firstChild.lastChild.textContent;
    dataLoad = JSON.parse(localStorage.getItem("TasksList"))
    oldDataWithoutThisItem = dataLoad.filter((val)=> val.name != name )   
    
}

// this fanction replace data in local storage
function replaceData(){

    dataLoad.forEach(item => { 
        if(name === item.name){
            
            console.log("itemTargeted ", item)
            item.name = updatedData.name;
            item.description = updatedData.description;
            item.startTime = updatedData.startTime;
            item.endTime = updatedData.endTime;
            item.status = updatedData.status;
            oldDataWithoutThisItem.push(item)
            localStorage.setItem("TasksList", JSON.stringify(oldDataWithoutThisItem) )

        }
    })
}

function createModal(parent, buttonTrigger){
    //-- Button trigger modal
    buttonTrigger.setAttribute('type', 'button')
    //buttonTrigger.setAttribute('class', 'btn btn-primary')
    buttonTrigger.setAttribute('data-toggle', 'modal')    
    buttonTrigger.setAttribute('data-target', '#exampleModal')   //has to change id == data-target
    //--Modal
    const modal = document.createElement('div')
    modal.setAttribute('class', 'modal fade')
    modal.setAttribute('id', 'exampleModal')    //has to change id
    modal.setAttribute('tabindex', '-1')
    modal.setAttribute('aria-labelledby', 'exampleModalLabel')   //has to change id == aria-labelledby
    modal.setAttribute('aria-hidden', 'true')
        const modalDialog = document.createElement('div')
        modalDialog.setAttribute('class', 'modal-dialog')
            const modalContent = document.createElement('div')
            modalContent.setAttribute('class', 'modal-content')
                //Header
                const modalHeader = document.createElement('div')
                modalHeader.setAttribute('class', 'modal-header')
                    const title = document.createElement('h5')
                    title.textContent = 'Update Task'
                    title.setAttribute('class', 'modal-title')
                    title.setAttribute('id', 'exampleModalLabel')  //has to change id
                    modalHeader.appendChild(title)
                    const btnX = document.createElement('button')
                    btnX.setAttribute('type', 'button')
                    btnX.setAttribute('class', 'close')
                    btnX.setAttribute('data-dismiss', 'modal')
                    btnX.setAttribute('aria-label', 'Close')
                        const span = document.createElement('span')
                        span.setAttribute('aria-hidden', 'true')
                        span.textContent = 'x'
                        btnX.appendChild(span)
                    modalHeader.appendChild(btnX)
                modalContent.appendChild(modalHeader)
                // Body
                const modalBody = document.createElement('div')
                modalBody.setAttribute('class', 'modal-body')
                    const name = document.createElement('input')
                    name.setAttribute('type', 'text')
                    name.setAttribute('placeholder', 'Enter task name')
                    name.setAttribute('class', 'inputs')
                    modalBody.appendChild(name)
                    const discription = document.createElement('input')
                    discription.setAttribute('type', 'text')
                    discription.setAttribute('placeholder', 'Enter task discription')
                    discription.setAttribute('class', 'inputs')
                    modalBody.appendChild(discription)
                    const startDate = document.createElement('input')
                    startDate.setAttribute('name', 'start-time')
                    startDate.setAttribute('value', '2023-07-14T19:30')
                    startDate.setAttribute('min', '2020-07-14T19:30')
                    startDate.setAttribute('max', '2025-07-14T19:30')
                    startDate.setAttribute('type', 'datetime-local')
                    startDate.setAttribute('class', 'inputs')
                    modalBody.appendChild(startDate)
                    const endDtae = document.createElement('input')
                    endDtae.setAttribute('name', 'end-time')
                    endDtae.setAttribute('value', '2023-07-14T19:30')
                    endDtae.setAttribute('min', '2020-07-14T19:30')
                    endDtae.setAttribute('max', '2025-07-14T19:30')
                    endDtae.setAttribute('type', 'datetime-local')
                    endDtae.setAttribute('class', 'inputs')
                    modalBody.appendChild(endDtae)
                    const status = document.createElement('input')
                    status.setAttribute('type', 'text')
                    status.setAttribute('placeholder', 'Enter task status')
                    status.setAttribute('class', 'inputs')
                    modalBody.appendChild(status)
                modalContent.appendChild(modalBody)
                // Footer
                const modalFooter = document.createElement('div')
                modalFooter.setAttribute('class', 'modal-footer')
                    const btnClose = document.createElement('button')
                    btnClose.textContent = 'Close'
                    btnClose.setAttribute('type', 'button')
                    btnClose.setAttribute('class', 'btn btn-secondary')
                    btnClose.setAttribute('data-dismiss', 'modal')
                    modalFooter.appendChild(btnClose)
                    const btnSave = document.createElement('button')
                    btnSave.textContent = 'Save'
                    btnSave.setAttribute('type', 'button')
                    btnSave.setAttribute('class', 'btn btn-primary')
                    btnSave.addEventListener('click', saveData)
                    modalFooter.appendChild(btnSave)
                modalContent.appendChild(modalFooter)

            modalDialog.appendChild(modalContent)
        modal.appendChild(modalDialog)
    
    parent.appendChild(modal)

    //get values from inputs
    function saveData(e){
        e.preventDefault()
        updatedData = {
            name : name.value,
            description : discription.value,
            startTime : startDate.value,
            endTime : endDtae.value,
            status : status.value
        };

        console.log(updatedData)

        name.value = ''
        discription.value = ''
        startDate.value = ''
        endDtae.value = ''
        status.value = ''
        replaceData()
    }
}



