
/*-----------------Exercise_1------------------*/
// Part I
function infoAboutMe(){
    console.log("My name is jamal Boujbari, I'm 26 yars old and my hobbies are doing sport and coding")
}
infoAboutMe()

// Part II
function infoAboutPerson(personName, personAge, personFavoriteColor){
    console.log("You name is: " + personName + ", you are " + personAge + " years old, your favorite color is: " + personFavoriteColor)
}
infoAboutPerson("David", 45, "blue")
infoAboutPerson("Josh", 12, "yellow")

/*-----------------Exercise_2------------------*/
function calculateTip(){
    var amountBill = prompt("Hi John, How match is the amount of your bill")
    var tip;
    if(amountBill < 50){
        tip = amountBill * (50 / 100);
    }
    else if(amountBill >= 50 && amountBill <= 200){
        tip = amountBill * (15 / 100);
    }
    else{
        tip = amountBill * (10 / 100);
    }
    var finalBill = Number(amountBill) + Number(tip);
    console.log("The tip is: "+tip+", The final bill is: "+finalBill)
}
calculateTip();

/*-----------------Exercise_3------------------*/
function isDivisible(Divisor){
    var allNums = "";
    var sum = 0;
    for(let i=0; i<= 500; i++){
        if (i % Divisor === 0){
            allNums += i +" ";
            let N = Number(i);
            sum += N;
        }
    }
    console.log("Outcome: "+allNums);
    console.log("Sum: "+ sum)
}
isDivisible(23);

/*-----------------Exercise_4------------------*/
const stock = {
    "banana": 4,
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry": 1
}

const prices = {
    "banana": 4,
    "apple": 2,
    "pear": 1,
    "orange": 1.5,
    "blueberry": 10
} 
const shoppingList = ["banana", "orange", "apple"]

function myBill(){
    var bill = 0;
    for (let i in shoppingList){
        for (const key in stock) {
            if (shoppingList[i] === key && stock[key] != 0) {
                for(let p in prices){
                    if (shoppingList[i] === p){
                        bill += Number(prices[p]);
                    }
                }
                stock[key] = stock[key] - 1;
            }
            else if (shoppingList[i] === key &&stock[key] == 0){
                console.log("The product: " + shoppingList[i]+" is out of stock.")
            }
        }
    }
    console.log("The total bill of yor cart is: "+bill);
}
myBill();

/*-----------------Exercise_5------------------*/ // probleme it dosn't display the expicted results
var change = {
    "quarters" : 0.25,
    "dimes" : 0.10,
    "nickel" : 0.05,
    "penny" : 0.01
}
var sumChange = 0;
const changePrice = Object.values(change);

function changeEnough(itemPrice, amountOfChange){
    for(let i in amountOfChange){
        for (let j in changePrice){
            if(i === j){
                sumChange += Number(amountOfChange[i]) * Number(changePrice[j]);
            }
            else{
                continue;
            }
        }
    }
    console.log("the sum is"+ sumChange)
    if(sumChange >= itemPrice){
        return true;
    }
    else{
        return false;
    }
}
console.log(changeEnough(4.25, [25, 20, 5, 0])) // true
console.log(changeEnough(14.11, [2, 100, 0, 0])) // false
console.log(changeEnough(0.75, [0, 0, 20, 5])) // true

/*-----------------Exercise_6------------------*/
var totalCost = 0;
function hotelCost(nightsNumber){
    //var nightsNumber = parseInt(prompt("Hello sir how many nights are you staying at the hotel?"));
    var n = toString(nightsNumber).length;
    while(n == 0 || isNaN(nightsNumber)) {
        nightsNumber = parseInt(prompt("Hello sir how many nights are you staying at the hotel?"));
    }
    totalCost = nightsNumber * 140 ;
    return totalCost;
}

function planeRideCost(destination){
    var price;
    //var destination = prompt("Hi sir, what is your destination? ");
    var n = toString(destination).length;
    while (n == 0 || typeof (destination) !== "string"){
        destination = prompt("Hi sir, what is your destination? ");
    }
    if(destination.toLocaleLowerCase() === "london"){
        price = 183;
    }
    else if (destination.toLocaleLowerCase() === "paris") {
        price = 220;
    }
    else{
        price = 300;
    }
    return price;
}

function rentalCarCost(rentDay){
    var rentCost = 0;
    //var rentDay = parseInt(prompt("Hello sir, how manu days would you like to rent the car?"));
    var n = toString(rentDay).length;
    while(n == 0 ||isNaN(rentDay)){
        rentDay = parseInt(prompt("Hello sir, how manu days would you like to rent the car?"));
    }
    if(rentDay > 10){
        let discount = 40 * (5/100);
        rentCost = rentDay * (40 - Number(discount));
    }
    else{
        rentCost = rentDay * 40;
    }
    return rentCost;
}

function totalVacationCost(){
    var nightsNumber = parseInt(prompt("Hello sir how many nights are you staying at the hotel?"));
    var destination = prompt("Hi sir, what is your destination? ");
    var rentDay = parseInt(prompt("Hello sir, how manu days would you like to rent the car?"));
    let hotel = Number(hotelCost(nightsNumber));
    let plane = Number(planeRideCost(destination));
    let car = Number(rentalCarCost(rentDay));
    var VacationCost = hotel + plane + car;
    var msg = "The hotel cost: " + hotel +"$, "+ "The plane cost: " + plane +"$, "+ "The car rent cost: " + car +"$, "
            +"So the total cost for the vacation is: "+ VacationCost +"$";
    return msg;
}
console.log(totalVacationCost());