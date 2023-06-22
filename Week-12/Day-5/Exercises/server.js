const exp = require('express');
const bp = require('body-parser');
const cors = require('cors')
const app = exp();

app.use(cors())
app.use(bp.urlencoded({ extended: false }))
app.use(bp.json())
app.use('/',exp.static(__dirname+'/public'));

const itemList = [];
app.route('/login')
  
   .post( (req,res) => {
        if(req.body.item == '' || req.body.amount == ''){
            res.sendStatus = 404;
            const respond = {
                Message : 'One of the fields is empty please fill all the fields!',
                empty : true
            }
            res.send(respond);
        }else{
            //console.log(req.body);
            const data = {
                item : req.body.item,
                amount : req.body.amount
            }
            itemList.push(data)
            //console.log('POST',data);
            res.sendStatus = 200;
            res.send(itemList)
            const respond = {
                message : 'Data saved successfully!'
            }
            res.send(JSON.stringify(respond));
        }
  })

app.listen(1000);
