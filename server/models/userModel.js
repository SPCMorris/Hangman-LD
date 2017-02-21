const db = require('../db/db.js');

const Users = module.exports;

// Create
Users.createUser = (attr) => {
  console.log(attr, 'IN USER MODLE CREATE USER')
  return new Promise( (resolve, reject) => {
    return db('Users').insert(attr)
      .then( (result) => {
        console.log(result);
        attr.id = result[0];
        resolve(attr);
      });
  });
};

// Read
Users.findUser = (request) => {
  return db('Users').where({
    nickname: request.nickname,
    secret: request.secret
  })
  .limit(1)
  .then((rows) => {
    return rows[0];
  })
};

// Update

Users.findUserById = (attr) => {
  return db('Users').where({
      id: attr.id
    })
    .update({
      score: attr.score
    })
    .then( (result) => {
      return result;
    })
}

// Delete