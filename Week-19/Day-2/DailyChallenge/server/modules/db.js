const knex = require('knex');
const bcrypt = require('bcrypt');
const saltRounds = 10; 

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

function createUser({firstname,lastname,email,username,password}){
  const salt = bcrypt.genSaltSync(saltRounds);
  console.log(`I'm inserting register data: ${firstname} , ${lastname} , ${email}, ${username}, ${password}`)
  return db('users').insert( 
    {
      first_name : firstname,
      last_name : lastname,
      email : email,
      username : username,
      password : bcrypt.hashSync(password, salt)
    }
  )
  .returning('*')
}

function addLoginUser({email,password}){
    const salt = bcrypt.genSaltSync(saltRounds);
    console.log(`I'm inserting login data:  ${email}, ${password}`)
    return db('login').insert( 
      {
        email : email,
        password : bcrypt.hashSync(password, salt)
      }
    )
    .returning('*')
}



module.exports = {
  createUser,
  addLoginUser
}