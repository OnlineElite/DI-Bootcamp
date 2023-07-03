const http = require('http')
const port = 8080;

const server = http.createServer((req, res)=>{
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(200);
    const user = {
        firstname: 'John',
        lastname: 'Doe'
    }
    res.end(JSON.stringify(user));
})

server.listen(port,()=>{console.log(`Ì'm listening to port ${port}...`)})