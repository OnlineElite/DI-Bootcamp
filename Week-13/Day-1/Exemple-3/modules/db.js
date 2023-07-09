const knex = require('knex');
const bcrypt = require('bcrypt');  //--------------------------
const saltRounds = 10;  //--------------------------

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

function createUser({user,pass}){
  const salt = bcrypt.genSaltSync(saltRounds); //--------------------------
  console.log(user +" "+ bcrypt.hashSync(pass, salt) + " in db")
  return db('users').insert(
    {
      username:user,
      password: bcrypt.hashSync(pass, salt)   //--------------------------
    }
  )
  .returning('*')
}

module.exports = {
  createUser
}