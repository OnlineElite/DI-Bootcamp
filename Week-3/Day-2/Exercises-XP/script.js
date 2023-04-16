
/*---------------------Exercise_1--------------------*/
var Ffood = "tagin";
var Fmeal = "lunch";
var result = `I eat ${Ffood} at every ${Fmeal}`
console.log(result)

/*---------------------Exercise_2--------------------*/
// Part I
const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
var myWatchedSeriesLength = myWatchedSeries.length;
var myWatchedSeriesSentence = `I watched ${myWatchedSeriesLength} series: but ${myWatchedSeries[0]} is the best serie I have ever watched`;
console.log(myWatchedSeriesSentence);

// Part II
myWatchedSeries[2] = "Friends";
myWatchedSeries.push("The walking dead");
myWatchedSeries.splice(0, 0, "Scorpion")
myWatchedSeries.splice(1, 1)
console.log(myWatchedSeries[1].substring(3, 2))
console.log(myWatchedSeries)

/*---------------------Exercise_3--------------------*/
var celsius = 25;
var fahrenheit = (celsius / 5 * 9) + 32;
console.log(fahrenheit)

/*---------------------Exercise_4--------------------*/
let c;
let a = 34;
let b = 21;

console.log(a + b) //first expression
//  Q1
// Prediction: It will output 55, because its addition operation of two numbers
// Actual: 55

a = 2;

console.log(a + b) //second expression
// Q2
// Prediction: It will output 23, because we changed the value of variable "a" to "2"
// Actual: 23

// Q3
// the value of "c" is undefined becouse we haven't given it any value

// Q4
console.log(3 + 4 + '5');
// It will output 75, becouse we have two type of data, numbers and characters
// The fist operation (3 + 4) will give us 7 as result and with the character '5' it will output 75

/*---------------------Exercise_5--------------------*/
typeof (15)
// Prediction: int
// Actual: number
// Becouse it's a number

typeof (5.5)
// Prediction: float
// Actual: number
// Becouse it's a number with dote

typeof (NaN)
// Prediction: nan
// Actual: number
// Becouse it's not a number

typeof ("hello")
// Prediction: String
// Actual: String
// Becouse it's a string or text

typeof (true)
// Prediction: Boolean
// Actual: Boolean
// Becouse it's a boolean value

typeof (1 != 2)
// Prediction: Boolean
// Actual: Boolean
// Becouse it's a comparation of two values 

"hamburger" + "s"
// Prediction: hamburgers
// Actual: hamburgers
// Becouse it's an addition of two strings

"hamburgers" - "s"
// Prediction: erreur
// Actual: NaN
// Becouse thers no meaning of - betwine two strings

"1" + "3"
// Prediction: 13
// Actual: 13
// Becouse it's an addition of two strings

"1" - "3"
// Prediction: erreur
// Actual: -2
// Becouse thers no meaning of - betwine tow strings

"johnny" + 5
// Prediction: johnny5
// Actual: johnny5
// Becouse it's an addition of string and a number

"johnny" - 5
// Prediction: erreur
// Actual: NaN
// Becouse thers no meaning of - betwine string and a number

99 * "hello"
// Prediction: erreur
// Actual: NaN
// Becouse thers no meaning of * betwine string and a number

1 != 1
// Prediction: false
// Actual: false
// Becouse 1 is the same as 1 ther is no different of value or of type

1 == "1"
// Prediction: true
// Actual: true
// Becouse 1 is the same as 1 ther is no different of value 

1 === "1"
// Prediction: false
// Actual: false
// Becouse 1 is the same as 1 whene we talk about values, but whene we talk about types they are different.

/*---------------------Exercise_6--------------------*/
5 + "34"
// Prediction: 534
// Actual:534
// Becouse it's an addition of string and a number

5 - "4"
// Prediction: 1
// Actual: 1
// It's a substraction of two numbers width different types

10 % 5
// Prediction: 0
// Actual: 0
// modulation of two numbers

5 % 10
// Prediction: 5
// Actual: 5
// modulation of two numbers

"Java" + "Script"
// Prediction: JavaScript
// Actual: JavaScript
// Becouse it's an addition of two strings

" " + " "
// Prediction: Rien (Espace vide)
// Actual: Rien (Espace vide)
// Becouse it's an addition of two strings

" " + 0
// Prediction: 0
// Actual: 0
// Becouse it's an addition of string and a number

true + true
// Prediction: 2
// Actual: 2
// It's a result of two boolean values

true + false
// Prediction: 1
// Actual: 1
// It's a result of two boolean values

false + true
// Prediction: 1
// Actual: 1
// It's a result of two boolean values

false - true
// Prediction: -1
// Actual: -1
// It's a result of two boolean values

!true
// Prediction: false
// Actual: false
// It's an oposite of boolean value

3 - 4
// Prediction: -1
// Actual: -1
// It's a substraction of two numbers

"Bob" - "bill"
// Prediction: NaN
// Actual: NaN
// It's a substraction of two strings

