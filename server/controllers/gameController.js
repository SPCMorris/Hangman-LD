const Helpers = require('../helpers.js');
const requestP = require('request-promise');

const gameRoutes = {};

// This is used to randomly choose one word from all possible choices 
const chooseWord = (str) => {
  const random = (min, max) => ( Math.floor(Math.random() * (max - min + 1)) + min );
  let wordArr = str.split('\n'),
      randomIndex = random(0, wordArr.length-1);

  return wordArr[randomIndex];
};

const GET = (req, res) => {
  console.log('In GET in game!', req.url);

  let url = Helpers.parsedUrl(req.url),
      level = url.query,
      getUrl = 'http://linkedin-reach.hagbpyjegb.us-west-2.elasticbeanstalk.com/words?difficulty=' + level[level.length-1];

  const wordApiCall = (endpoint) => ( requestP(endpoint) );
  wordApiCall(getUrl)
    .then( (data) => {
      let chosenWord = chooseWord(data);
      res.send(chosenWord);
    })
    .catch( (err) => {
      res.end(err)
    })
};

const POST = (req, res) => {
  console.log('In POST in game', req.url)
};

const PUT = (req, res) => {
  console.log('In PUT in game', req.url)
};

const DELETE = (req, res) => {
  console.log('In DELETE in game', req.url)
};

gameRoutes['/game?:level'] = {
  GET, 
  POST,
  PUT,
  DELETE
};

module.exports = gameRoutes;
