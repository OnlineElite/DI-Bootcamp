/*----------DailyChallenge-1------------*/

// 1rst Daily Challenge
const arry = ['jamal', 'boujbari', 'fahd', 'ahmed', 'ali']
var uppered = []
function makeAllCaps(words){
    return new Promise((resolve, reject) =>{
        if(isAllString(words)){
            var upper = words.map(elem=> elem.toUpperCase())
            uppered = [...upper]
            resolve(upper)
        }
        else{
            reject('One of the values is not a string ')
        }
    })

    function isAllString(words){
        return  words.every( val => typeof val === "string" )   
    }
}
makeAllCaps(arry)
    .then((result)=>{console.log(result)})
    .catch((err) =>{console.log(err)})

function sortWords(upper){
    return new Promise((resolve, reject)=>{
        if(upper.length > 4){
            let sorted = upper.sort();
            resolve(sorted)
        }
        else{
            reject('The array length is less then or equal 4, try to add some elements')
        }
    })
}
sortWords(uppered)
    .then((result)=>{console.log(result)})
    .catch((err) =>{console.log(err)})

/*------------------Test--------------------*/

//in this example, the catch method is executed
makeAllCaps([1, "pear", "banana"])
.then((arr) => sortWords(arr))
.then((result) => console.log(result))
.catch(error => console.log(error))

//in this example, the catch method is executed
makeAllCaps(["apple", "pear", "banana"])
.then((arr) => sortWords(arr))
.then((result) => console.log(result))
.catch(error => console.log(error))

//in this example, you should see in the console, 
// the array of words uppercased and sorted
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
.then((arr) => sortWords(arr))
.then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
.catch(error => console.log(error))

