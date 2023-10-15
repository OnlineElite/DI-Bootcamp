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
  console.log(`I'm inserting into users table: ${firstname} , ${lastname} , ${email}, ${username}, ${password}`)
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
    console.log(`I'm inserting into login table:  ${email}, ${password}`)
    return db('login').insert( 
      {
        email : email,
        password : bcrypt.hashSync(password, salt)
      }
    )
    .returning('*')
}


function removeLoginUser({ email }) {
  console.log(`I'm removing from login table: ${email}`);
  return db('login')
      .where({ email: email })
      .del()
      .then(() => {
          console.log(`Removed login user: ${email}`);
      })
      .catch(error => {
          console.error('Error removing login user:', error);
          throw error;
      });
}



module.exports = {
  createUser,
  addLoginUser,
  removeLoginUser
}