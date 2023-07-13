const exp = require('express')
const bd = require('body-parser')
const fs = require('fs')

const app = exp()

app.use(bd.urlencoded({extended: false}))
app.use(bd.json())
let data = 'Hellow this is new file content'
let newdata = '\nmore text appended to the file content'
fs.writeFile('data.text',data, (err, data)=>{
    if(err){
        console.error(err)
        return
    }
    else{
        console.log(data)
    }
})

fs.appendFile('data.text',newdata, (err, data)=>{
    if(err){
        console.error(err)
        return
    }
    else{
        console.log(data)
    }
})

fs.unlink('fs.text', (err)=>{
    console.log('operation complate')
})

app.listen(3000)