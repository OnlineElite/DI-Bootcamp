
/*-------------------------Daily Challenge--------------------*/
// First Method
var star = '*';
var output = '', desplay = ''


for(let i=0; i<6; i++){
    output += star;
    console.log(output);
}

// Second Method
console.log("///////////")

for(let i=1; i<=3; i++){
    
    for(let j=1; j<= i; j++){

        desplay += "*";
        console.log(desplay);
    }
}