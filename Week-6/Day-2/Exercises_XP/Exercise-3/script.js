/*--------------------Exercise-3_XP---------------*/

const isitaString = (parametre) => {
    if((typeof parametre) === (typeof "")){
        return true
    }
    else{
        return false
    } 
}

console.log(isitaString('hello'))