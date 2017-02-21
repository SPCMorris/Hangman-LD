const db = require('../db/db.js');

const Users = module.exports;

// Create
Users.createUser = (attr) => {
  console.log(attr, 'IN USER MODLE CREATE USER')
  return new Promise( (resolve, reject) => {
    return db('Users').insert(attr)
      .then( (result) => {
        attr.id = result[0];
        resolve(attr);
      });
  });
};

// Read
Users.findUser = (request) => {
  console.log(request, 'IN USER MODLE FIND USER')
  return db('Users').where({
    nickname: request.nickname,
    secret: request.secret
  })
  .limit(1)
  .then( (rows) => {
    return rows[0];
  })
  .catch( (err) => {
    return err;
  });
};

// Update

// Delete