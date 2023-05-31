
/*------------MiniProject-----------------*/
// Creat HTML Element
(function createElement(){
    let body = document.getElementsByTagName('body')[0]
    const container = document.createElement('div')
    container.classList.add('container')
    body.appendChild(container)

    const display = document.createElement('div')
    display.classList.add('display')
    container.appendChild(display)

    const pName = document.createElement('p')
    pName.classList.add('namestyle')
    pName.setAttribute('id', 'name')
    display.appendChild(pName)

    const pHeight = document.createElement('p')
    pHeight.classList.add('pstyle')
    pHeight.setAttribute('id', 'height')
    display.appendChild(pHeight)
    

    const pGender = document.createElement('p')
    pGender.classList.add('pstyle')
    pGender.setAttribute('id', 'gender')
    display.appendChild(pGender)

    const pBirthYear = document.createElement('p')
    pBirthYear.classList.add('pstyle')
    pBirthYear.setAttribute('id', 'birthyear')
    display.appendChild(pBirthYear)

    const pHomeWorld = document.createElement('p')
    pHomeWorld.classList.add('pstyle')
    pHomeWorld.setAttribute('id', 'homeworld')
    display.appendChild(pHomeWorld)

    const btnFind = document.createElement('button')
    btnFind.classList.add('button')
    btnFind.setAttribute('id', 'find')
    btnFind.textContent = "Find Someone"
    container.appendChild(btnFind)

    // loading part

    const loading = document.createElement('div')
    loading.setAttribute('id', 'load')
    loading.classList.add('loading')
    loading.classList.add('hide')

    const icon =document.createElement('i')
    icon.setAttribute('class','fa-solid fa-spinner fa-spin-pulse')
    icon.classList.add('icon')
    loading.appendChild(icon)

    const header =document.createElement('h1')
    header.textContent = "Loading..."
    header.classList.add('header')
    loading.appendChild(header)
    display.appendChild(loading)

    // erreur part
    const erreurMsg = document.createElement('p')
    erreurMsg.classList.add('erreurMsg')
    erreurMsg.textContent = "Oh No! That person isn't available"
    erreurMsg.setAttribute('id', 'erreur')
    display.appendChild(erreurMsg)

})()

//send API
document.getElementById('find').addEventListener('click',getinfo)
function getinfo (e){
    e.preventDefault()
    let id = Math.floor(Math.random() * 90);
   document.getElementById('load').style.display = "block"
    function clearDisplay(){
        document.getElementById('name').textContent = "";
        document.getElementById('height').textContent = "";
        document.getElementById('gender').textContent = ""
        document.getElementById('birthyear').textContent = ""
        document.getElementById('homeworld').textContent = "";
        document.getElementById('erreur').style.display = "none"
    }
    clearDisplay()

    fetch(`https://www.swapi.tech/api/people/${id}`)
    .then((response) => {
        if(response.ok){
            return response.json()
        } else {
            if(response.status == 404){
                document.getElementById('erreur').style.display = "block"
            }else{
                throw new Error("Wrong artwork")
            }
        }
    })
    .then((response) =>{
        document.getElementById('name').textContent = response.result.properties.name;
        document.getElementById('height').textContent = "Height is: " +response.result.properties.height;
        document.getElementById('gender').textContent = "Gender is: " +response.result.properties.gender;
        document.getElementById('birthyear').textContent = "Birth Year is: " +response.result.properties.birth_year;
        fetch(`${response.result.properties.homeworld}`)
        .then((response) => {
            if(response.ok){
                return response.json()

            } else {
                throw new Error("Wrong artwork")
            }
        })
        .then((response) => {
            document.getElementById('homeworld').textContent = "Home World is: " +response.result.properties.name;
        })
        
    })  
    .finally(() => {
        document.getElementById('load').style.display = "none"
    })
}

