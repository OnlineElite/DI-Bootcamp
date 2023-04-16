
/*------------------Exercise-1------------------*/
var x = 7;
var y = 5;

if (x > y) {
    console.log(x + " is the biggest number")
}
else if (x < y) {
    console.log(y + " is the biggest number")
}
else {
    console.log(x + " is equal to " + y)
}

/*------------------Exercise-2------------------*/
var newDog = "Chihuahua"
console.log(newDog.length)
console.log(newDog.toUpperCase())
console.log(newDog.toLowerCase())

if (newDog == "Chihuahua") {
    console.log("I love Chihuahuas, it’s my favorite dog breed")
}
else {
    console.log("I dont care, I prefer cats")
}

/*------------------Exercise-3------------------*/
var num = prompt("Enter a number: ")

if (num % 2 == 0) {
    alert("x is an even number")
}
else {
    alert("x is an odd number")
}

/*------------------Exercise-4------------------*/
const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
if (users.length == 0) {
    console.log("no one is online")
}
else if (users.length == 1) {
    console.log(users[0] + "is online")
}

else if (users.length == 2) {
    console.log(users[0] + " and " + users[1] + " are online")
}
else {
    console.log(users[0] + " , " + users[1] + " and " + (users.length - 2) + " are online")
}