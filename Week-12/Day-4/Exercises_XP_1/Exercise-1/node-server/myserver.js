const http = require('http')
const port = 3000;

const server = http.createServer((req, res)=>{
    res.setHeader('Content-Type', 'text/html');
    res.writeHead(200);
    let response = `<html>
                        <body>
                            <h1>Hello Developer</h1>
                            <p>Welcome again</p>
                            <P>To this page</p>
                        </body>
                    </html>`
    res.end(response)
})
server.listen(port,()=>{console.log(`I'm listening to port ${port}...`);})



