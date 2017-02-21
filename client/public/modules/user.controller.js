const UserCtrl = (function() {
  // Simply gets the user input from login
  const getUserInput = (input) => {
    userApiCall(input);
  };
  // Makes the ajax call to the server which makes the call to the REST api provided
  // Also, handles loading screen animations
  const userApiCall = (input) => {
    console.log(input)
   axios.get('user?' + 'nickname=' + input.nickname + '&secret=' + input.secret)
    .then( (resp) => {
      console.log(resp);
    })
    .catch( (err) => {
      console.log(err);
    })
  };

  return {
    getUserInput
  };

})();
