/*----------------------DailyChallenge------------------*/
var dropsNumber = prompt("Enter the number of bottels droped: ")
Number(dropsNumber);
var i= 99;
do{
    console.log( i + " bottles of beer on the wall")
    console.log( i + " bottles of beer")
    console.log("Take " + dropsNumber + " down, pass it around")
    console.log((i-dropsNumber)+ " bottles of beer on the wall")
    console.log("  ")
    i = i-dropsNumber;
    dropsNumber++;
}while( i >= 0 && i > dropsNumber)