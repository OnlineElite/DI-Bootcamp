/*----------DailyChallenge-2------------*/

// 2nd Daily Challenge
const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
}`
var morseJS =  {};
var EnteredSentence;
var morseTranslation = [];

// 1st function
function toJs(){
    return new Promise((resolve, reject)=>{
        let obj = JSON.parse(morse);
        morseJS = {...obj};
        if(obj.length != 0){
            resolve(obj)
        }
        else{
            reject('The object converted is empty')
        }
    })
}
toJs()
    .then((result)=>{console.log(result)})
    .catch((err) =>{console.log(err)})

// 2nd function
function toMorse(morseJS){
    var sentence = prompt("please enter a word or a sentence");
    EnteredSentence = sentence;
    let newChars = [...sentence].filter( val => val != ' ')
    return new Promise((resolve, reject)=>{
        if(theCharNotExist(morseJS)){
            resolve(getMorseCode())
        }
        else{
            reject(`The entered sentence contains a character that doesn't exist in the Morse javascript object`)
        }
    })

    function theCharNotExist(){
        return newChars.every( char => morseJS.hasOwnProperty(char.toLowerCase()))
    }

    function getMorseCode(){
        for(let i in morseJS){
            for(let item of newChars ){
                if(item.toLowerCase() == i){
                    let index = newChars.indexOf(item)
                    newChars.splice(index, 1, morseJS[i])
                }
                else{
                    continue;
                }
            }
        }
        joinWords(newChars)
        return newChars
    }
}

toMorse(morseJS)
    .then((result)=>{console.log(result)})
    .catch((err) =>{console.log(err)})

// 3rd function
function joinWords(morseTranslation){
    let sent = document.getElementById('sentence')
    let morseCode = document.getElementById('morseCode')
    sent.textContent = EnteredSentence;
    morseTranslation.forEach(item => {
        const p = document.createElement('p')
        p.textContent = item;
        morseCode.appendChild(p)
    })
}

