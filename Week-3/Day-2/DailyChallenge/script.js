 /*-------------------Exercise-1----------------------*/
const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
fruits.splice(0,1)
fruits.sort()
fruits.push("Kiwi")
fruits.shift()
fruits.reverse()
console.log(fruits)
/*-------------------Exercise-2----------------------*/
const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
var result = moreFruits.indexOf("Oranges")
console.log(result)