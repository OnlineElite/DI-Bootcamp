
/*---------------------------Exercise_XP-4----------------------*/

// creat sign in form
signInForm()
function signInForm(){
    const container = document.createElement('div')
    container.classList.add('containerStyle')
    container.setAttribute('id', 'SignForm')

    const sinForm = document.createElement('div')
    sinForm.classList.add('signInFormStyle')

    const usernameInp = document.createElement('input')
    usernameInp.setAttribute('placeholder', "Enter your username")
    usernameInp.setAttribute('id', 'username')
    usernameInp.classList.add('InpStyle')
    sinForm.appendChild(usernameInp)  

    const passwordInp = document.createElement('input')
    passwordInp.setAttribute('placeholder', 'Enter your password')
    passwordInp.setAttribute('id', 'password')
    passwordInp.setAttribute('type', 'password')
    passwordInp.classList.add('InpStyle')
    sinForm.appendChild(passwordInp)

    const submit = document.createElement('button')
    submit.setAttribute('id', 'submet')
    submit.textContent = "Sign In"
    submit.classList.add('subStyle')
    sinForm.appendChild(submit)

    container.appendChild(sinForm)

    document.getElementsByTagName('body')[0].appendChild(container)
}

// create user info form
userInfo()
function userInfo(){
    const nav = document.getElementById('navbarSupportedContent')
    const navform = document.createElement('div')
    navform.classList.add('formStyle')
    navform.setAttribute('id', 'navform')

    const username = document.createElement('disv')
    username.classList.add('usernameStyle')
    username.setAttribute('id', 'name')
    navform.appendChild(username)

    const photo = document.createElement('div')
    photo.classList.add('photoStyle')
    photo.setAttribute('id', 'image')
    photo.style.backgroundImage = 'url(images/avatar.jpg)'
    navform.appendChild(photo)

    nav.appendChild(navform)
}


function getUsername(Uname){
    let name = document.getElementById('name')
    let photo = document.getElementById('image')
    name.textContent = Uname;
    photo.style.backgroundImage = 'url(images/avatar.jpg)'
    let navForm = document.getElementById('navform')
    navForm.style.display = "flex"

}


let submet = document.getElementById('submet')
submet.addEventListener('click', goInside)
function goInside(e){
    e.preventDefault()
    let usernameValue = document.getElementById('username')
    let passwordValue = document.getElementById('password')
    if(usernameValue.value != "" & passwordValue.value != ""){
        let signForm = document.getElementById('SignForm')
        let name = document.getElementById('username')
        signForm.style.display = "none"
        getUsername(name.value)
    } 
    else{
        alert('please enter your info. ')
    }  
}