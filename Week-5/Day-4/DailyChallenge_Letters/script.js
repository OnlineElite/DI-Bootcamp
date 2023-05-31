
/*-----------------------DailyChallenge_Letters----------------------*/
const inp = document.getElementById('display')

inp.addEventListener('input',(e)=>{
    e.preventDefault()
    if(inp.value != ""){
        if(/^[a-z]+$/i.test(inp.value)){
            console.log(inp.value)
        }
        else{
            let text = inp.value;
            let leng = text.length
            //console.log(text)
            //console.log(leng)
            let newText = text.substring(0, leng)
            inp.value = newText;
        }
    }
})

