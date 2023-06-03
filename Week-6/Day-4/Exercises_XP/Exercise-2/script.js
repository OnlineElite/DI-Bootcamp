
/*---------------------------Exercise_XP-2----------------------*/
// Using function declaration
function transformWeight(weight){
    return console.log(`Using function declaration: ${weight*1000 +'gr'}`)
}
transformWeight(2);

//Using function expression
let transformWeight2 = function (weight){
    return console.log(`Using function expression: ${weight*1000 +'gr'}`)
}
transformWeight2(1.5);

// The difference is: the function expression assigned to a variable and doesn't have a name so it's an anonymous function


// Using arrow function
let transformWeight3 = (weight) => { return console.log(`Using arrow function: ${weight*1000 +'gr'}`)}
transformWeight3(1.3)