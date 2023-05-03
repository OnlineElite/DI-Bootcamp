
/*--------------------MiniProject_2------------------*/
const keys = document.querySelectorAll('.key');
const desplay_input = document.querySelector('.desplay .input');
const desplay_output = document.querySelector('.desplay .output');
const operator = document.querySelectorAll('.operator');
const clear = document.getElementById('clear');
const reset = document.getElementById('reset');
const equal = document.getElementById('equal');

/*-----------Numbers & Operators section-----------------*/
for (let i = 0; i < keys.length; i++) {
    keys[i].addEventListener("click", typingFunction);
}
for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener("click", operTypingFunction);
}

function operTypingFunction(e) {
    let value = e.target.textContent;
    if (value === "X") {
        value = "*";
    }
    let text = desplay_input.textContent;
    var check = text.charAt(text.length - 1)
    if (isNaN(check)) {
        let array = text.split("")
        array.splice(array.length - 1, 1, value)
        desplay_input.textContent = array.toString().replaceAll(',', '');
    } else {
        desplay_input.textContent += value;
    }
}

function typingFunction(e) {
    let value = e.target.textContent;
    if (value === "X") {
        value = "*";
    }
    let text = desplay_input.textContent;
    var check = text.charAt(text.length - 1)
    desplay_input.textContent += value;
}
/*-----------Equal section-----------------*/
equal.addEventListener("click", equalFunction);

function equalFunction() {
    let text = desplay_input.textContent;
    var check = text.charAt(text.length - 1)
    if (isNaN(check)) {
        let array = text.split("")
        array.slice(0, -1)
        desplay_input.textContent = array.toString().replaceAll(',', '');
    }
    else{
        result = 0;
        let text = desplay_input.textContent;
        result = eval(text);
        desplay_output.textContent = result;
    }
}

/*-----------Clear section-----------------*/
clear.addEventListener("click", clearFunction);
function clearFunction() {
    desplay_input.textContent = " ";
    desplay_output.textContent = " ";
}

/*-----------Reset section-----------------*/
reset.addEventListener("click", resetFunction);
function resetFunction() {
    let end = desplay_input.textContent.length - 1;
    desplay_input.textContent = desplay_input.textContent.slice(0, end);
}