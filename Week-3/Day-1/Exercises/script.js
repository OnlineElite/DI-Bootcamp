
//-------------------Exercise 1------------------//
var addressNumber = "House number 39 ";
var addressStreet = "in Ennour street ";
var country = "in Morocco";

var globalAddress = "I live in " + addressNumber + addressStreet + country;

console.log(globalAddress);

//----------------Exercise 2-------------------//
var birthyear = 1997;
var futureyear= 2024;
var result = futureyear - birthyear;
var age = "I will be " + result + " in " + futureyear;

console.log(age)
//----------------Exercise 3-------------------//
var pets = ['cat', 'dog', 'fish', 'rabbit', 'cow'];
var choosen = pets[1];
console.log(choosen)
pets.splice(3,1,"Horse");
console.log(pets)
console.log("The array lenght is: " + pets.length)
