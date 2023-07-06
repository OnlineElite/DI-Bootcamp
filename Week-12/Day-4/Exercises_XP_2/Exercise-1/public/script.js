function getData(){
    console.log('sKJDHgfkjgkasdfkjl')
        fetch('/users')
    .then(response => {
        if (response.status == 200) {
            return response.json()
        }
        else{
            throw new Error(response.statusText);
        }
    })
    .then((data)=>{
        console.log(data)
        document.getElementById('userData').textContent= JSON.stringify(data) +"hello";
    })
    .catch(error => {
        console.log('Looks like there was a problem: \n', error);
    });
}
getData()



