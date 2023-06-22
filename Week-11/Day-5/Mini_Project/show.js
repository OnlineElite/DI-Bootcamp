
document.getElementById('goback').addEventListener('click', goback = () => {
    location.href = 'index.html';
})

window.addEventListener('load',exportData)
function exportData(){

    const dataLoad = JSON.parse(localStorage.getItem("TasksList"))
    dataLoad.forEach(el => {
        const cont = document.getElementById('container_show')

            const dropdown = document.createElement('div')
            dropdown.setAttribute('class','dropdown')
            dropdown.setAttribute('id', 'drop')
               // Creating the card
                const card = document.createElement('div') 
                card.setAttribute('class', 'dropdown-toggle')
                card.setAttribute('data-toggle', 'dropdown')
                card.setAttribute('aria-expanded', 'false')
                card.setAttribute('id', el.name)
                card.setAttribute('class', 'carts')
                    
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

            dropdown.appendChild(card)
                // create dropdown menu
                const dropMenu = document.createElement('div')
                dropMenu.setAttribute('class', 'dropdown-menu')
                dropMenu.setAttribute('id', el.name)
                dropMenu.style.display = 'none'

                    const desc = document.createElement('p')
                    desc.setAttribute('class', 'dropdown-item')
                dropMenu.appendChild(desc)

            dropdown.appendChild(dropMenu)
            
        cont.appendChild(dropdown)
    
        // Insert data to the card
        spName.textContent = el.name;
        spStartingDate.textContent = el.startTime;
        desc.textContent = el.description;

        const eDay = new Date(el.endTime).getDate()
        const sDay = new Date(el.startTime).getDate()
        const Dleft = eDay - sDay;
        spDaysLeft.textContent = Dleft;

        function openDescription(){
            const carts = document.getElementsByClassName('carts')
            for(let cart of carts){
                //console.log(cart)
                
                cart.addEventListener('click', showDiescription) 
                function showDiescription(e){
                    //console.log(e)
                    //console.log(e.target)
            
                    const dropMenu = document.getElementsByClassName('dropdown-menu')
                    for(let i of dropMenu){
                        if(i.id === e.target.id)
                        i.style.display = 'block';
                    } 
                }
            }
        }
        openDescription()
        
    })
}

