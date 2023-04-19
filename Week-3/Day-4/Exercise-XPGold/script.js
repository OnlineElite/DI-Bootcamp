
/*-------------------Exercise-1------------------*/
var language = prompt("Which language do you speak :")
var result = language.toLowerCase()
switch (result) {
    case "english": alert("Hello"); break
    case "french": alert("Bonjour"); break
    case "Hebrew": alert("Shalom"); break
    default: alert("01110011 01101111 01110010 01110010 01111001"); break
}

/*-------------------Exercise-2------------------*/
var grad = prompt("Enter your grad:")

if (grad > 90) {
    console.log("A")
}
else if (90 >= grad && grad > 80) {
    console.log("B")
}
else if (80 >= grad && grad >= 70) {
    console.log("C")
}
else {
    console.log("D")
}

/*-------------------Exercise-3------------------*/
let verb = prompt("Enter a verb:")
let num = verb.length
let last = verb.slice(-3)

if (num >= 3 && last != "ing") {
    result = verb + "ing";
    console.log(result)
}
else if (num >= 3 && last === "ing") {
    result = verb + "ly";
    console.log(result)
}
else {
    console.log(verb)
}
