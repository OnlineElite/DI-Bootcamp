let model = require('./main.js');
const b = 5;
console.log("result: "+ (model.myVar + b));
//-----------------------------------------------

const http = require('http')

const server1 = http.createServer((req, res)=>{
    res.setHeader('Content-Type', 'text/html');
    res.writeHead(200);
    const respose = `<html><body>
                        <p>My Module is </p>
                        <p>${(model.myVar + b)}</p>
                        <h1>Hi there at the frontend </h1>
                    </body></html>`;
    res.end(respose);
});
server1.listen(3000,()=>{console.log(`I'm listening to server1...`);})

//----------------------------------------------

const server2 = http.createServer((req,res)=>{

    res.setHeader('Content-Type', 'text/html');
    res.writeHead(200);
    const respose = `<html><body>
                        <p>Date and Time</p>
                        <p>The date and time are currently: ${model.myDate()} in Morocco</p>
                    </body></html>`;
    res.end(respose);
})
server2.listen(8080,()=>{console.log(`I'm listening to server 2...`);})