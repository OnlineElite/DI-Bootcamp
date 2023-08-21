//Exercise 1: Random Number

function getRandomNum(){
    return Math.floor(Math.random() * 101) + 1;
}
let evens= []
let randomNum = getRandomNum()
console.log('Random number is: ', randomNum)

for(let i=0 ; i< randomNum; i++){
    if(i % 2 === 0){
        evens.push(i)
    }
}
console.log('Even numbres: ', evens)

//Exercise 2: Capitalized Letters

function CapitalizedLetters(str){
    let loweredStr = str.toLowerCase().split(" ").join("")
    let strArray = loweredStr.split('')
    let evenArray = []
    let oddArray = []

    for(let i in strArray){
        if(i % 2 === 0){
            let letter1 = strArray[i].toUpperCase()
            evenArray.push(letter1)
            oddArray.push(strArray[i])
        }
        else{
            let letter2 =strArray[i].toUpperCase()
            evenArray.push(strArray[i])
            oddArray.push(letter2)
        }
    }
    
    let evenUpper = evenArray.toString().replaceAll(',','')
    let oddUpper = oddArray.toString().replaceAll(',','')
    return [evenUpper, oddUpper]
}

console.log(CapitalizedLetters('jamal Boujbari'))

//Exercise 3 : Is Palindrome?

function IsPalindrome(Palindrome){
    let PalArray = Palindrome.split('')
    let leng = PalArray.length;
    let midelIndex = ((leng/2).toFixed(0))-1
    
    for(let i=1; i<=midelIndex ; i++){
        if(PalArray[midelIndex+i] === PalArray[midelIndex-i] ){
            console.log('is Palindrome')
            return(true)
        }
        else{
            console.log('is not Palindrome')
            return(false)
        }
    }
}

console.log(IsPalindrome('madam'))

//Exercise 4 : Biggest Number

function biggestNumberInArray(arrayNumber){
    let leng = arrayNumber.length
    let bigest = 0
    for(let i=1; i<leng; i++){
        if(isNaN(arrayNumber[i])){
            continue
        }else{
            if(arrayNumber[i] > bigest){
                bigest = arrayNumber[i]
            }
            else{
                continue
            }
        }
    }

    console.log(bigest)
}

biggestNumberInArray([-1,0,3,100, 99, 2, 99])
biggestNumberInArray(['a', 3, 4, 2])
biggestNumberInArray([])

// Exercise 5: Unique Elements

function UniqueElements(array){
    let leng = array.length
    let newArray =[]
    for(let i=0; i< leng; i++){
        
        if(array[i] !== array[i+1]){
            newArray.push(array[i])
        }
        else{
            continue
        }
    }

    console.log('newArray', newArray)
}

UniqueElements([1,2,3,3,3,3,4,5])
UniqueElements([1,2,3,3,3,3,4,5])