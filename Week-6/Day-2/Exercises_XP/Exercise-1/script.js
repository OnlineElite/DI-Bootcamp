
/*-----------------------Exercise-1_XP----------------------*/

// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}

// #1.1 - run in the console: 
funcOne()
// #1.2 What will happen if the variable is declared 
// with const instead of let ? 

//-------Response:--------//
// 1.1: I expect the value of a to be: 3 because the value of a changed inside if statement.
// 1.2: then we will have an erreur because the value of a can not change

//#2 
let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
funcThree()
funcTwo()
funcThree()
// #2.2 What will happen if the variable is declared 
// with const instead of let ?

//-------Response:--------// 
// 2.1: I expect the value of a to be: 0 on the first call of the funcThree() and 5 on the second call of the funcThree()
// because we have called the funcTwo() where the value of a is changed before calling the funcThree() the second time.
// 2.2: then we will have an erreur when we call the funcThree()the second time because the value of a can not change.

//#3
function funcFour() {
    window.a = "hello";
}

function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour()
funcFive()

//-------Response:--------// 
// 3.1: I expect the value of a to be: "hello" because we called the funcFour() that give's the value "hello" to a.

//#4
let a = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}

// #4.1 - run in the console:
funcSix()
// #4.2 What will happen if the variable is declared 
// with const instead of let ?

//-------Response:--------// 
// 4.1: I expect the value of a to be: "test" because we changed the value of a before the first message was shown.
// 4.2: then we will have an erreur because the value of a can not change

//#5
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
// #5.2 What will happen if the variable is declared 
// with const instead of let ?

//-------Response:--------// 
// 4.1: I expect the value of a to be: 5 in both messages because we changed the value fo a before the first message was shown.
// 4.2: then we will have an erreur because the value of a can not change.