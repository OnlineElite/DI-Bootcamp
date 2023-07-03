const exp = require('express')
const app = exp()
const port = 3000;
app.use('/',exp.static(__dirname));
app.get('/:notion',(req, res)=>{
    console.log("req.params: ", req.params)
    res.send(`the result is:  ${req.params.notion}!`)
})
app.listen(3000, () => console.log(` I'm listening on port ${port}...`));