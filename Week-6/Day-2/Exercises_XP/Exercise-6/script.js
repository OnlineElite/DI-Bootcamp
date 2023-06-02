/*--------------------Exercise-6_XP---------------*/

let bankAmount = 7000 ;
let total = 0;
const VAT = 17/100;
console.log(`The VAT is: ${VAT}%`)

const details = ["+8000", "-1500", "+450", "+100", "-1800"]

details.forEach((val) =>{
    const takes = val*VAT;
    const newVal = val-takes;
    total += newVal;
})
bankAmount = bankAmount + total;
console.log(`The total of your operations for this month is: ${total}`)
console.log(`The amount of money currently in your account is: ${bankAmount}`)