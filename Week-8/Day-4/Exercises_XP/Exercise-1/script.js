
/*-----------------------Exercise_XP-1----------------------*/

let req = new XMLHttpRequest();

req.open('GET','https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My');

req.responseType = 'json';

req.send();

req.onload = function (){

    if(req.status == 200){
        console.log(req.response)
    }
    else{
        console.log(`Erreur ${req.status}: ${req.statusText}`)
    }
}

req.onerror = function(){
    console.log("Request failed")
}


