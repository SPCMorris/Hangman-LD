const InitCtrl = (function() {
  $(document).ready( () => {
    const $btn_login = $('button.login'),
          userInfo = {};
    let difficultySetting,
        loginClickCount = 0;
    // Sets difficulty rate, shows login
    $('button.difficulty').click( (e) => {
      e.preventDefault();
      difficultySetting = e.target.innerHTML;
      $('div#difficulty').hide();
      $('p.intro').hide();
      $('#login').show();
    });
    // Initiates game without login
    $('button.guest').click( (e) => {
      e.preventDefault();
      // Basic CSS changes for display
      $('div#login').hide();
      $('div#gameBoard').show();
      $('p.game-on').show()
      // Sends difficulty level to the controler to build the query for the api
      DifficultyCtrl.setDifficulty(difficultySetting);
    });
    // Initiates game with login
    $btn_login.click( (e) => {
      e.preventDefault();
      loginClickCount++;
      // Basic CSS changes for display
      if(loginClickCount === 2) {
        $('div#login').hide(); 
        $('div#gameBoard').show();
        $('p.game-on').show();
        // Get user input
        userInfo['nickname'] = $('#nickname').val();
        userInfo['secret'] =$('#secret').val();
        // Sends difficulty level and user input to the controllers to build the query for the api and save user info
        UserCtrl.getUserInput(userInfo);
        DifficultyCtrl.setDifficulty(difficultySetting);
      } else {
        $('#login-fields').show();
        $btn_login.text('Submit');
      }
    });
    // ChoiceCtrl builds out choice list and handles choice clicks
    // Builds List
    ChoicesCtrl.buildChoiceList();
  });
})();
