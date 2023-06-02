/*--------------------Exercise-4_XP---------------*/

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

colors.forEach((element, index) => {
    console.log(`${index+1}# choice  is ${element}`)
    
});

colors.find((val) =>{
    if(val === "Violet"){
        console.log('yeah')
        return
    }
    else{
        console.log("No...") 
        return
    }
})