/*--------------------------DailyChallenge------------------*/

function anagrams(sentence1, sentence2){
    str1 = sentence1.toLowerCase().split(" ").join("");
    str2 = sentence2.toLowerCase().split(" ").join("");
    
    const text2 = [...str2]
    const text1 = [...str1]
    let result = false;

    if(text1.length != text2.length){
        result = false;
        console.log(result);
    }
    else{
        text2.forEach((char) => { 
            if(text1.includes(char)){
                //console.log(char)
                let index = text1.indexOf(char)
                text1.splice(index, 1)
                //console.log(text1)
                if(text1.length == 0){
                    result = true
                }
            }
            else{
                result = false;
            }
        });
        console.log(result)
    }  
}

anagrams('Astronomer', 'Moon starer') //true
anagrams('School master', 'The classroom') //true
anagrams('The Morse Code', 'Here come dots') //true
anagrams('hello world', 'lower holld') //true
anagrams('best action', 'movie action') //false 
anagrams('next days', 'extend ay') //false