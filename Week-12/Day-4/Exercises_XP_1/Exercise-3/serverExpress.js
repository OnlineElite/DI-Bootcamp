const exp = require('express')
const app = exp()
const port = 3000;

app.get('/',(req,res)=>{
    res.setHeader('Content-Type', 'text/html');
    res.writeHead(200);
    const response =`
    <html>
        <body>
            <h1>This is an HTML tag</h1>
        </body>
    </html>`
    res.end(response)
})
app.listen(port,()=>{console.log(`I'm listening to port ${port}...`)})