const knex = require('knex');
const knexfile = require('../knexfile');
const environment = process.env.NODE_ENV || 'development'; // 'enviroment' yerine 'environment'

const config = knexfile[environment]; // 'enviroment' yerine 'environment'
module.exports = knex(config);
