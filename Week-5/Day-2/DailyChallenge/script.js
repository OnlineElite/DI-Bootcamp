
/*-------------------DailyChallenge---------------------*/

var submet = document.getElementById('lib-button')
var showScreen = document.getElementById('story')

submet.addEventListener('click', getData)
function getData(event){
    var noun = document.getElementById('noun')
    var adjec = document.getElementById('adjective')
    var person = document.getElementById('person')
    var verb = document.getElementById('verb')
    var place = document.getElementById('place')

    if(noun.value == "" || adjec.value == "" || person.value == "" || verb.value == "" || place.value == ""){
        alert("There is an empty field")
    }
    else{
        var story = ` ${ person.value } is my best friend. I knew him from hight school. He like's ${ verb.value } \
        in ${ place.value }, he use to play with ${ noun.value } becouse it's ${ adjec.value }`
        showScreen.innerHTML = story;

    }
    event.preventDefault()
}

