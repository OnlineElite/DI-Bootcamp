
/*---------------------Exercise3-----------------------*/
let a = 2 + 2;

switch (a) {
    case 4: // he will check if a equal 4 he will display Right! using alert
        alert('Right!');
        break;

    case 3: // (*) grouped two cases // even if a equal 3 he will go to the next case becouse break dosn't exist
    case 5: // he will check if a equal 5 and display "wrong" and "Why don't you take a math class?" using alert
        alert('Wrong!');
        alert("Why don't you take a math class?");
        break;

    default: // if any of those cases right then he will display "The result is strange. Really." using alert
        alert('The result is strange. Really.');
}