/*------------DailyChallenge-----------------*/
const fromSelect = document.getElementById('selectFrom');
const toSelect = document.getElementById('selectTo');
const convert = document.getElementById('convert')
function getinfo(){

    fetch("https://v6.exchangerate-api.com/v6/b5d866e5a9cad9143a919a2b/codes")
    .then(response => {
        if (!response.ok) {
        throw Error(response.statusText);
        }
        return response.json();
    })
    .then(responseAsJson => {
	    //console.log(responseAsJson.supported_codes);
        fillTheOptins(responseAsJson.supported_codes)
    })
    .catch(error => {
	    console.log('Looks like there was a problem: \n', error);
    });
}
getinfo()

function fillTheOptins(array){
    array.forEach(arr => {
        let option = document.createElement('option')
        option.textContent = arr[0]+"-"+arr[1];
        option.value = arr[0];
        fromSelect.appendChild(option)

        let option1 = document.createElement('option')
        option1.textContent =  arr[0]+"-"+arr[1];;
        option1.value = arr[0];
        toSelect.appendChild(option1)
    }); 
}
convert.addEventListener('click', handellSelect)
async function handellSelect(e){
    e.preventDefault();
    const inpAmount = document.getElementById('given')
    const screen = document.getElementById('screen')
    const currFrom = fromSelect.value;
    const currTo = toSelect.value;
    
    try{
        const res = await fetch(`https://v6.exchangerate-api.com/v6/b5d866e5a9cad9143a919a2b/pair/${currFrom}/${currTo}`)
        const resJson = await res.json();
        const rate = resJson.conversion_rate;
        const amount = Number(inpAmount.value);
        const total = rate*amount;
        console.log('rate: '+ rate +" and total: "+ total)
        screen.textContent = total.toFixed(2)
    }
    catch(error){
	    console.log('Looks like there was a problem: \n', error);
    }
}