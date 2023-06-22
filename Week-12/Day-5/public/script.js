const btn = document.getElementById('sub')

sub.addEventListener('click', DataTransfert)
function DataTransfert(e){
    e.preventDefault()
    const npItem = document.getElementById('item');
    const npAmount = document.getElementById('amount')

    console.log( npAmount.value +  " " + npItem.value)
    const data = {
        item : npItem.value,
        amount : npAmount.value 
    }
    console.log(data)
    
    const header = {
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }
    fetch('http://localhost:1000/login', header)
    .then((response) => {
        if(response.status === 200){
            return response.json();
        }
        else if(response.status === 404){ 
            return response.json();
        }
        else{
            throw new Error("erreur get");
        }
    })
    .then(data => {
        console.log('hello')
        if(data.empty == true ) {
            console.log("Empty data")
            console.log(data);
            alert(data.Message)
        }
        else{
            console.log("fill data")
            console.log(data);
            const display = document.getElementById('screen')
            display.innerHTML = "";
            data.forEach(obj => {
                
                const block = document.createElement('div')
                block.setAttribute('class', 'block')
                    const spanItem = document.createElement('span')
                    spanItem.setAttribute('class', 'itemName')
                    spanItem.textContent = obj.item;
                block.appendChild(spanItem)
                    const spanAmount = document.createElement('span')
                    spanAmount.setAttribute('class', 'itemAmount')
                    spanAmount.textContent = obj.amount;
                block.appendChild(spanAmount)

                display.append(block)
            });
            
        }
    })
    .catch(e => console.log(e))
    npAmount.value = "";
    npItem.value = "";
}
