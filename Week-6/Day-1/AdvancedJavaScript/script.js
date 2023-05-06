/*-------------Exercise 1----------------------------*/

function checkYear(year){
    var result= year > 2000 ? "You are in the 21st century" : "You live in the Middle Age"
    return result

}
console.log(checkYear(2023))

/*-------------Exercise 2----------------------------*/

function catculate(num1, num2, ope){
    var result = (ope == '+') ?
          Number(num1) + Number(num2) 
        : (ope == '-' )? 
          Number(num1) - Number(num2) 
        : Number(num1) * Number(num2)
        return result
}
console.log(catculate(2,3,'*'))