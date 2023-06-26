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

function createUser({user}){
  return db('users').insert( 
    {
      username:user
    }
  )
  .returning('*')
}

module.exports = {
  createUser
}