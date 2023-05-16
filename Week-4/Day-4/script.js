/*----------------------DailyChallenge------------------*/
var dropsNumber = prompt("Enter the number of bottels droped: ")
Number(dropsNumber);
for(let i= 99; i >= 0; i--){
    console.log( i + " bottles of beer on the wall")
    console.log( i + " bottles of beer")
    console.log("Take " + dropsNumber + " down, pass it around")
    console.log((i-dropsNumber)+ " bottles of beer on the wall")
    i = i-dropsNumber;
}

