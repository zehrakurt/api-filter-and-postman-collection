const knex=require('knex')
const knexfile=require('../knexfile')
const enviroment=process.env.NODE=ENV || 'developement'

const config=knexfile(enviroment)
module.exports=knex(config)