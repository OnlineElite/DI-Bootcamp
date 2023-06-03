
/*---------------------------DailyChallenge----------------------*/
let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

displayGroceries = () => {
    groceries.fruits.forEach((elem) => {
        console.log(elem)
    })
}
displayGroceries()

cloneGroceries = () => {
    let user = client;
    client = 'Betty'
    console.log(user, client)
    //  NO we will not see this modification in the user variable because the user and client variables are not point to the same reference
    let shopping = groceries;
    groceries.totalPrice = "35$"
    console.log(shopping)
    // Yes We will also see this modification in the user variable because the groceries and shopping variables point to the same reference
    groceries.other.payed = false;
    console.log(shopping)
    // yes We will also see this modification in the user variable because the groceries and shopping variables point to the same reference
}

cloneGroceries();