const InitCtrl = (function() {
  $(document).ready( () => {
    const $btn_difficulty = $('button.difficulty'),
          $game_board = $('div#gameBoard'),
          $game_onP = $('p.game-on'),
          $introP = $('p.intro');
    // Initiates game
    $btn_difficulty.click( (e) => {
      e.preventDefault();
      // Basic CSS changes for display
      $('div#difficulty').css('display', 'none');
      $game_board.css('display', 'block');
      $introP.css('display', 'none');
      $game_onP.css('display', 'block');
      // Sends difficulty level to the controler to build the query for the api
      DifficultyCtrl.setDifficulty(e.target.innerHTML);
    });
    // ChoiceCtrl builds out choice list and handles choice clicks
    // Builds List
    ChoicesCtrl.buildChoiceList();
  });
})();