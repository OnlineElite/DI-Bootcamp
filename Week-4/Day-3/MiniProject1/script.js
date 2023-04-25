
/*---------------------------MiniProject-1-----------------------*/
// Part I
function playTheGame() {
    var ask = confirm("Would you like to play the game?")
    if (ask === true) {
        var num = prompt("Please enter a nember between 0 and 10:")

        if (isNaN(num)) {
            alert("Sorry Not a number, Goodbye")
        }
        else {

            if (num > 10 || num < 0) {
                alert("Sorry it’s not a good number, Goodbye")
            }
            else {
                var computerNumber = Math.floor(Math.random() * 11);
                compareNumbers(num, computerNumber);
            }
        }
    }
    else {
        alert("No problem goodbye")
    }
}
// Part II
function compareNumbers(userNumber, computerNumber) {
    for (let i = 0; i < 3; i++) {
        if (i == 2 && userNumber != computerNumber) {
            alert("out of chances")
            break;
        }
        if (userNumber == computerNumber) {
            alert("WINNER")
            break;
        }
        else if (userNumber > computerNumber) {
            alert("Your number is bigger then the computer’s, guess again")
            userNumber = prompt("Enter a new number:")
        }
        else {
            alert("Your number is smaller then the computer’s, guess again")
            userNumber = prompt("Enter a new number:")
        }
    }
}