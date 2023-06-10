/*--------------Exercise --------------------*/
const words = ["hello", "hey", "hola"];
words.some((val) => {
    var result = val[0] == "h"
    return result
    
})
words.every((val) => {
    var result = val[0] == "h"
    return result
})
