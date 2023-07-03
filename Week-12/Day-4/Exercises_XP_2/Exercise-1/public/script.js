fetch('/users')
.then(response => {
    if (response.ok) {
        console.log(response)
        return response.json()
    }
    else{
        throw new Error(response.statusText);
    }
})
.then((data)=>{
    console.log(data)
    document.getElementById('userData').textContent= data;
})
.catch(error => {
    console.log('Looks like there was a problem: \n', error);
});




