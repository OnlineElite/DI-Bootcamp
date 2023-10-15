const exp = require('express')
const bp = require('body-parser')
const cors = require('cors')
const app = exp()
const port = 3002
const DB = require('./modules/db');
const knex = require('knex')
const bcrypt = require('bcrypt'); 

const db = knex({
    client:'pg',
    connection:{
        host: 'localhost',
        port: '5432',
        user: 'postgres',
        password: 'Elite%159',
        database: 'SignProject'
    }
})
app.use(cors())
app.use(exp.static('public'));
app.use(bp.urlencoded({ extended: false }))
app.use(bp.json())

// API for register  //**********************************************************//
app.post('/register',(req,res)=>{
    console.log('requist recived', req.body)
    const temp = Object.values(req.body)
    console.log(temp)
    if(!isEnyInputEmpty(temp)){

        if(isUserAllreadyExsist()){
            res.sendStatus = 404;
            res.send({message : "Hello this account is allready exsist"})
        }
        else{
            console.log(`im sending from the server :`)
            console.log(req.body)
            DB.createUser(req.body)
            .then(data => {
                res.sendStatus = 200;
                res.send({message : `Hello ${req.body.firstname} your account is now created!`}) //add firstname to the message
            })
            .catch(err => {
                res.send({message: "Hello this account is allready exsist"})
            })
        }     
    }
    else{
        res.sendStatus = 404;
        res.send({message : "Please fill all the fields"})
    }
    function isEnyInputEmpty(temp){
        if(temp.length < 5){
            return true;
        }
        else{
            return temp.some((val) => val == "" || val == null);
        }
    }
    function isUserAllreadyExsist(){
        const {firstname,lastname,email,username,password} = req.body;
        db('users')
        .select('id','username', 'email')
        .where({username:username} || {email:email})
        .then(data => {
            console.log(data);
            if(data.length>0){
                return true;
            }
            else {
                return false;
            }
        })
        .catch(err => {
            console.log(err);
            res.send({message:`here is ${err.detail}`})
        })
    }
})

// API for login  /**********************************************************//
app.post('/login',(req,res)=>{
    console.log('requist recived', req.body)
    const temp = Object.values(req.body)
    console.log(temp)
    if(!isEnyInputEmpty(temp)){
        const {email, password} = req.body;
        db('users')
        .select('id','email','username','password')
        .where({email:email})
        .then(data => {
            console.log(data);
            if(data.length>0){
                onlineUser = data[0].username;
                let isAuthontefid = bcrypt.compareSync(password, data[0].password)
                console.log('is Authontefid', isAuthontefid)
                if(isAuthontefid){
                    if(data[0].username === 'admin'){
                        res.send({message:`Welcome back: ${data[0].username}`, email: data[0].email, admission  : true, isAdmin : true})
                    }else{
                        res.send({message:`Welcome back: ${data[0].username}`, email: data[0].email, admission  : true, isAdmin : false})
                    }
                    
                    DB.addLoginUser(req.body)
                    .then(data => {
                        console.log('data from database', data)
                    })
                    .catch(err => {
                        res.send({message: `Internal error: ${err}`})
                    })
                }
                else{
                    res.send({message:'Wrong password', admission  : false})
                }
            }
            else {
                res.send({message : "Hello this account is not registred", admission  : false})
            }
        })
        .catch(err => {
            console.log(err);
            res.send({message:err.detail})
        })
    }
    else{
        res.sendStatus = 404;
        res.send({message : "Please fill all the fields"})
    }
    function isEnyInputEmpty(temp){
        if(temp.length < 2){
            return true;
        }
        else{
            return temp.some((val) => val == "" || val == null);
        }
    }  
})

// API for log out  /**********************************************************//
app.post('/logout', (req, res)=>{
    console.log('data logout receved', req.body)
    DB.removeLoginUser(req.body)
    .then(data => {
        console.log('data from database', data)
    })
    .catch(err => {
        res.send({message: `Internal error: ${err}`})
    })
    res.send({message: 'loged out successfully',  admission  : false})
})

app.listen(port, ()=> console.log(`server listening on port ${port} `))


