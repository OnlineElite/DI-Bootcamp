
/*-------------------------Exercise2-------------------------*/
let a = 2 + 2;

switch (a) {
    case 3: // He will check this case and he will find that a not equal 3 and he will go to the next case
        alert('Too small');
        break;
    case 4: // he will check this case and he will find that the a is equal 4 so he will exicute Exactly as a message the he will break the code
        alert('Exactly!');
        break;
    case 5: // he will check if a equal 5 and display "Too large" using alert
        alert('Too large');
        break;
    default: // if non of those case is true he will display "I don't such values" using alert
        alert("I don't know such values");
}