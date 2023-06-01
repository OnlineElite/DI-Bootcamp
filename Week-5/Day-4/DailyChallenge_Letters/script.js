
/*-----------------------DailyChallenge_Letters----------------------*/
const inp = document.getElementById('display')

inp.addEventListener('input',validateInput)
function validateInput(){
    var regexPattern = /^[a-z][a-z\s]*$/;
    if(inp.value != ''){
        if(inp.value.match(regexPattern))
        {
            console.log("Input is Validated");
            return true;
        }
        else
        {
            const str = this.value;
            const newValue = str.slice(0, str.length - 1);
            this.value = newValue;
            alert("Enter letters and spaces only");
            return false;
        }
    }
 
}

