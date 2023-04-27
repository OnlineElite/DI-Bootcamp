
/*-------------------------Daily Challenge--------------------*/
// First Method
var star = '*';
var output = '';
var space = '+';

for(let i=0; i<6; i++){
    output += star;
    console.log(output);
}

// Second Method
console.log("///////////")

for(let i=0; i<7; i++){
    output += star;
    for(let j= 6; j>0; j--){
        output += space;
        console.log(output)
    }
    j--;
}