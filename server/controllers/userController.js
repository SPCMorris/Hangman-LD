const Users = require('../models/userModel.js');

const userRoutes = {};

const GET = (req, res) => {
  console.log('In GET in user!', req.url);
  res.end()
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

userRoutes['/new_game/:type?:game_name'] = {
  GET, 
  POST,
  PUT,
  DELETE
};

module.exports = userRoutes;
