const Helpers = require('../helpers.js');
const User = require('../models/userModel.js');

const userRoutes = {};

const parseUserData = (input) => {
  let userObj = {},
      splitData = input.split('&'),
      nickname = splitData[0].split('='),
      secret = splitData[1].split('=');

  return { 'nickname': nickname[1], 'secret': secret[1] };
};

const GET = (req, res) => {
  console.log('In GET in user!', req.url);

  let userData = Helpers.parsedUrl(req.url).query;
  let userObj = parseUserData(userData);

  User.findUser(userObj)
    .then( (user) => {
      if(user) {
        console.log(user, 'I FOUND A USER');
        res.send(user);
      } else {
        User.createUser(userObj)
          .then( (resp) => {
            console.log(resp, 'I CREATED A USER');
            res.send(resp);
          })
          .catch( (err) => {
            res.end('There was an error with the User Controller.', err);
          })
      }
    })
    .catch((err) => {
      res.end('There was an error with the User Controller.', err);
    });
};

const POST = (req, res) => {
  console.log('In POST in user', req.url)
};

const PUT = (req, res) => {
  console.log('In PUT in user', req.url)
};

const DELETE = (req, res) => {
  console.log('In DELETE in user', req.url)
};

userRoutes['/user?:input'] = {
  GET, 
  POST,
  PUT,
  DELETE
};

module.exports = userRoutes;
