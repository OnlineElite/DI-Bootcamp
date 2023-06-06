
/*-----------------------DailyChallenge----------------------*/

//create display form
function createdisplayForm(source){
    const display = document.getElementById('display')

    const  card = document.createElement('div')
    card.setAttribute('class', 'carts')
    card.classList.add('cardStyle')
    card.setAttribute('id','card')
    display.appendChild(card)

    const  gif = document.createElement('img')
    gif.classList.add('gifStyle')
    gif.setAttribute('id','image')
    gif.setAttribute('src', source)
    card.appendChild(gif)

    const btnsContainer = document.createElement('div')
    btnsContainer.classList.add('btnsContainerStyle')
    card.appendChild(btnsContainer)

    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = "Delete"
    deleteBtn.classList.add('deleteBtns')
    deleteBtn.setAttribute('id', 'delete')
    btnsContainer.appendChild(deleteBtn)

}

// Get gata from the server
const search = document.getElementById('search')
search.addEventListener('click', getData = (e)=>{
    e.preventDefault()
    const inp = document.getElementById('inp')

    let req = new XMLHttpRequest();
    req.open('GET',`https://api.giphy.com/v1/gifs/random?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`);
    req.responseType = 'json';
    req.send();

    req.onload = function (){
        if(req.status == 200){
            //console.log(req.response)
            const responseToArray = Object.values(req.response)
            const data = responseToArray[0];
            const images = data.images;
            const imagesObj = Object.values(images)
            imagesObj.forEach((elem) => {
                if(elem.hasOwnProperty("url")){
                    //console.log(elem.url)
                    const source = elem.url
                    createdisplayForm(source)
                }
                else{
                    //console.log(elem.mp4)
                    const source = elem.mp4
                    createdisplayForm(source)
                }
                
            })
        }
        else{
            console.log(`Erreur ${req.status}: ${req.statusText}`)
        }
    }

    req.onerror = function(){
        console.log("Request failed")
    }
})

//Delete All cards
const deleteAll = document.getElementById('deleteAll')
deleteAll.addEventListener('click', delleteAllCards)
function delleteAllCards(e){
    e.preventDefault()
    const display = document.getElementById('display')
    const cartss = document.getElementsByClassName('carts')
    //console.log(cartss)
    for(let cart of cartss){
        console.log(cart)
        display.removeChild(cart)
    }
}
