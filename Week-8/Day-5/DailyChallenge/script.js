/*-----------DailyChallenge-----------------*/
function DateToString(date){
    for(let i=0; i<1 ; i++){
        if(date.getFullYear() < 1970){
            alert('The year should be greater the 1970, please try again')
            break;
        }else{
            let arrayDate = [
                date.getFullYear().toString(),
                (date.getMonth()+1).toString(),
                date.getDate().toString(),
                date.getHours().toString(),
                date.getMinutes().toString(),
                date.getSeconds().toString()
            ]
            console.log(arrayDate)
        
            arrayDate.forEach((val) => {
                if(val.length == 1){
                    const index = arrayDate.indexOf(val)
                    const newtext = val.padStart(2,"0");
                    arrayDate.splice(index, 1, newtext);
                }
            })
            
            let dateString = arrayDate.toString()
            dateString = dateString.replaceAll(",", '')
            //console.log(arrayDate)
            console.log("The result is: "+ dateString)
        }
    }  
}

DateToString(new Date(1989, 9, 15, 3, 45, 53))
DateToString(new Date(2020, 6, 4, 8, 0, 0))
DateToString(new Date(2019, 11, 31, 23, 59, 59))
DateToString(new Date(2020, 6, 4))




