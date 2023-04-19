
/*---------------------Exercise_1------------------------ */
let sentence = ["my", "favorite", "color", "is", "blue"];
result = sentence.join()

console.log(result)

/*---------------------Exercise_2------------------------ */
var fName = "Jamal"
var lName = "Boujbari"
var ext1 = fName.slice(0,1)
var ext2 = lName.slice(0, 1)

console.log(ext1 +" "+ext2)
console.log(fName+" "+lName)

var con = fName +" "+ lName;
console.log(con)
/*---------------------Exercise_3------------------------ */
var num1 = prompt("Enter the first number: ");
//console.log(typeof Number(num1));
var num2 = prompt("Enter the second number: ")
//var result = Number(num1) + Number(num2);
//alert("the result is: "+ result)
var op = prompt("enter the operation: ")

//BONUS
switch(op){
    case '+':var result = Number(num1) + Number(num2);
            alert("the result is: "+ result); break

    case '-': 
        if (Number(num1) > Number(num2) ){
            var result = Number(num1) - Number(num2);
            alert("the result is: " + result); break
        }
        else{
            var result = Number(num2) - Number(num1);
            alert("the result is: " +"-"+ result); break
         }

    case '*': var result = Number(num1) * Number(num2);
            alert("the result is: " + result); break

    case '/':
        if (Number(num2) != 0) {
            var result = Number(num1) / Number(num2);
            alert("the result is: " + result); break
        }
        else {
            alert("the second number shoudn't be equal to 0 "); break
        } 
}