const UserCtrl = (function() {
  const userObj = {};
  // Simply gets the user input from login
  const getUserInput = (input, difficulty) => {
    userApiCall(input);
    userObj['level'] = difficulty;
  };
  // Makes the ajax call to the server which makes the call to the REST api provided
  // Also, handles loading screen animations
  const userApiCall = (input) => {
    console.log(input)
    axios.get('user?' + 'nickname=' + input.nickname + '&secret=' + input.secret)
    .then( (resp) => {
      userObj["id"] = resp.data.id;
      userObj["nickname"] = resp.data.nickname;
      userObj["score"] = resp.data.score;
      $('#login-profile').show();
      $('#user-score').show();
      console.log(userObj)
      $('#user-score').append(resp.data.score);
    })
    .catch( (err) => {
      console.log(err);
      alert('Sorry a problem occured. Please try again!');
      location.reload();
    })
  };

  const scoreIndex = (level) => {
    switch(level) {
      case 'Easy':
        userObj["score"] = userObj["score"] + 10;
        break;
      case 'Medium':
        userObj["score"] = userObj["score"] + 20;
        break;
      case 'Hard':
        userObj["score"] = userObj["score"] + 30;
        break;
      default:
        userObj["score"] = userObj["score"] + 40;
    }
  };

  const updateUserScore = () => {
    scoreIndex(userObj.level);
    $('#user-score').text(userObj.score);
    axios.put('user?' + 'id=' + userObj.id + '&score=' + userObj.score)
    .then( (resp) => {
      console.log(resp);
    })
    .catch( (err) => {
      console.log(err);
    })
  };

  return {
    getUserInput,
    updateUserScore
  };

})();
