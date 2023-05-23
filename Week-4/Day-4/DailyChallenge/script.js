/*----------------------DailyChallenge------------------*/

var startNumber = prompt("Enter the number of bottels on the wall: ")
Number(startNumber);
var i = 1
do{
    console.log( startNumber + " bottles of beer on the wall")
    console.log( startNumber + " bottles of beer")
    console.log("Take " + i + " down, pass it around")
    console.log((startNumber - i)+ " bottles of beer on the wall")
    console.log("  ")
    startNumber = startNumber - i;
    i++;
}while( startNumber >= 0 && startNumber > i)
