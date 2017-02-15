const db = require('../db/db.js');

const Users = module.exports;

// Create
Users.createUser = (request) => {
  const response = db('Users').where({
    nickname: request.nickname,
    secret: request.secret
  })
  .limit(1)
  .then( (rows) => (rows) )
  .catch( (err) => (err) );
};

// Read
Users.findUser = (request) => (
  db('Users').where({
    nickname: request.nickname,
    secret: request.secret
  })
  .limit(1)
  .then( (rows) => (rows) )
  .catch( (err) => (err) )
);

// Update

// Delete