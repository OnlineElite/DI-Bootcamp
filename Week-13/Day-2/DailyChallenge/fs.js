const exp = require('express')
const bd = require('body-parser')
const fs = require('fs')

const app = exp()
const port = 3000

app.use(bd.urlencoded({extended : false}))
app.use(bd.json())

fs.readFile('RightLeft.txt','utf-8' ,(err, data)=>{
    if(err){
        console.error(err)
        return
    }
    else{
        let chars = data.split("")
        let position = 0;
        let step = 0;
        let minusOneStep = null;
        for(let char of chars){
            if(char === '<'){
                position --;
                step++;
            }
            else if(char === '>'){
                position ++;
                step++;
            }
            else{
                continue;
            }
            if(position === -1 & minusOneStep === null){
                minusOneStep = step;
                console.log('we hit -1 at step: '+ minusOneStep) 
            } 
        }
        let isRightOrLeft
        (rightOrLeft = ()=>{
            (position < 0)? isRightOrLeft = 'to the left' 
            : (position > 0)? isRightOrLeft ='to the right'
            : isRightOrLeft = ''
        })()
        console.log(`The position is: ${position} ${isRightOrLeft} `)
    }
})
app.listen(port, ()=>{console.log(`I'm lstening on port ${port}...`)})