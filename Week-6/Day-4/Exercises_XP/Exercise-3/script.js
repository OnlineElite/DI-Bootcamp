
/*---------------------------Exercise_XP-3----------------------*/

// Creat DOM elements
(function bildElements(){
    const host = document.getElementById('container')

    const title = document.createElement('h1')
    title.textContent = "Fortune Teller"
    title.classList.add('titleStyle')
    host.appendChild(title)

    const childInp = document.createElement('input')
    childInp.setAttribute('placeholder', "Enter number of children")
    childInp.setAttribute('id', 'childern')
    childInp.classList.add('inpStyle')
    host.appendChild(childInp)

    const partnerInp = document.createElement('input')
    partnerInp.setAttribute('placeholder', "Enter partner's Name")
    partnerInp.setAttribute('id', 'partner')
    partnerInp.classList.add('inpStyle')
    host.appendChild(partnerInp)  

    const locationInp = document.createElement('input')
    locationInp.setAttribute('placeholder', "Enter geographic aocation")
    locationInp.setAttribute('id', 'location')
    locationInp.classList.add('inpStyle')
    host.appendChild(locationInp)  

    const jobInp = document.createElement('input')
    jobInp.setAttribute('placeholder', 'Enter job title')
    jobInp.setAttribute('id', 'job')
    jobInp.classList.add('inpStyle')
    host.appendChild(jobInp)

    const submit = document.createElement('button')
    submit.setAttribute('id', 'submet')
    submit.textContent = "Show Message"
    submit.classList.add('subStyle')
    host.appendChild(submit)

    const display = document.createElement('div')
    display.setAttribute('id', 'screen')
    display.classList.add('displayStyle')
    host.appendChild(display)
})()

// Generate message
function getInfo(numberOfChildren, partnersName, geographicLocation, jobTitle){
    let screen = document.getElementById('screen')
    const message = `You will be a ${jobTitle} in ${geographicLocation}, 
    and married to ${partnersName} with ${numberOfChildren} kids.`
    screen.textContent = message;
    screen.style.display = "block"
}

// Showing the message
let btn = document.getElementById('submet')
btn.addEventListener('click', showNessage)
function showNessage(e){
    let childInp = document.getElementById('childern')
    let partnerInp = document.getElementById('partner')
    let locationInp = document.getElementById('location')
    let jobInp = document.getElementById('job')
    e.preventDefault()
    getInfo(childInp.value, partnerInp.value, locationInp.value, jobInp.value)   
}
