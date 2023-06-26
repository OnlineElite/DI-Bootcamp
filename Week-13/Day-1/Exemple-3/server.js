const exp = require('express');
const bp = require('body-parser');
const DB = require('./modules/db.js')
const bcrypt = require('bcrypt');
const knex = require('knex');

const db = knex({
  client:'pg',
  connection:{
    host: '127.0.0.1',
    port: '5432',
    user: 'postgres',
    password: 'Elite%159',
    database: 'Hollywood'
  }
})

const app = exp();

app.use(bp.urlencoded({extended:false}));
app.use(bp.json());
app.use('/',exp.static(__dirname+'/public'));

app.post('/user',(req,res)=>{
  console.log(req.body +" in the server");
  DB.createUser(req.body)
  .then(data => {
    res.send({message:'OK'})
  })
  .catch(err => {
    res.send({message:err.detail})
  })
})


app.get('/show', (req,res)=>{
  db('users')
  .select('username')
  .then(data => {
    console.log(data);
    res.send(data)
  })
  .catch(err => {
    console.log(err);
    res.send({message:err.detail})
  })
})

app.post('/find', (req,res)=>{
  console.log(req.body);
  const {user,pass} = req.body;
  db('users')
  .select('user_id','username','password')
  .where({username:user})
  .then(data => {
    console.log(data);
    if(data.length>0){
      if(bcrypt.compareSync(pass, data[0].password)){
        res.send({message:`Welcome ${data[0].username}`})
      }
      else{
        res.send({message:'Wrong password'})
      }
    }
    else {
      res.send({message:'Not Found'})
    }
  })
  .catch(err => {
    console.log(err);
    res.send({message:err.detail})
  })
})



app.listen(3300)