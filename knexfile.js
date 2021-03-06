const path = require('path');
require('dotenv').config();

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: '50.62.209.194',
      user: process.env.db_username,
      password: process.env.db_password,
      database: 'hangman',
      charset: 'utf8'
    },
    pool: {
       min: 0,
       max: 7
     }
  },

  production: {
    client: 'mysql',
    connection: {
      host: '50.62.209.194',
      user: process.env.db_username,
      password: process.env.db_password,
      database: 'hangman',
      charset: 'utf8',
      ssl: true
    },
    pool: {
       min: 0,
       max: 7
     }
  }
};
