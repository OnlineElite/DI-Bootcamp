
fetch('/')
.then(response => {
    if (response.ok) {
        console.log(response)
        return response.body;
    }
    else{
        throw new Error(response.statusText);
    }
})
.then((data)=>{
    console.log(JSON.stringify(data))
    document.getElementById('display').textContent= data;
})
.catch(error => {
    console.log('Looks like there was a problem: \n', error);
});
