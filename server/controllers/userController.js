const Helpers = require('../helpers.js');
const Users = require('../models/userModel.js');

const userRoutes = {};

const parseUserData = (input) => {
  let userObj = {},
      splitData = input.split('&'),
      nickname = splitData[0].split('='),
      secret = splitData[1].split('=');

  return { 'nickname': nickname[1], 'secret': secret[1] };
};

const parseUserDataForScore = (input) => {
  let userObj = {},
      splitData = input.split('&'),
      id = splitData[0].split('='),
      score = splitData[1].split('=');

  return { 'id': id[1], 'score': score[1] };
};

const GET = (req, res) => {
  console.log('In GET in user!', req.url);

  let userData = Helpers.parsedUrl(req.url).query;
  let userObj = parseUserData(userData);

  Users.findUser(userObj)
    .then( (user) => {
      if(user) {
        res.send(user);
      } else {
        Users.createUser(userObj)
          .then( (resp) => {
            Users.findUser(userObj)
              .then( (resp) => {
                res.send(resp);
              })
              .catch( (err) => {
                res.end('There was an error with the User Controller GET.', err);
              })
          })
          .catch( (err) => {
            res.end('There was an error with the User Controller GET.', err);
          })
      }
    })
    .catch((err) => {
      res.end('There was an error with the User Controller GET.', err);
    });
};

const POST = (req, res) => {
  console.log('In POST in user', req.url);
};

const PUT = (req, res) => {
  console.log('In PUT in user', req.url);

  let userData = Helpers.parsedUrl(req.url).query;
  let userObj = parseUserDataForScore(userData);

  Users.findUserById(userObj)
    .then( (resp) => {
      res.send(resp);
    })
    .catch( (err) => {
      res.end('There was an error with the User Controller PUT.', err);
    })
};

const DELETE = (req, res) => {
  console.log('In DELETE in user', req.url);
};

userRoutes['/user?:input'] = {
  GET, 
  POST,
  PUT,
  DELETE
};

module.exports = userRoutes;
