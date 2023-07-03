const exp = require('express')
const app = exp()
const port = 3000;

app.use('/',exp.static(__dirname+'/public'));

app.get('/users',(req, res)=>{
    const user = {firstname: 'John',lastname: 'Doe'};
    console.log("in the server "+JSON.stringify(user))
    res.sendStatus = 200;
    res.end(JSON.stringify(user));
})
app.listen(port,()=>{console.log(`Ì'm listening to port ${port}...`)})



