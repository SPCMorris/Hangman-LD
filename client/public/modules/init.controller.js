const InitCtrl = (function() {
  $(document).ready( () => {
    const $btn_difficulty = $('div#difficulty'),
          $btn_restart = $('button.restart'),
          $game_board = $('div#gameBoard'),
          $game_onP = $('p.game-on'),
          $introP = $('p.intro');
    // Initiates game
    $btn_difficulty.click( (e) => {
      e.preventDefault();
      // Basic CSS changes for display
      $btn_difficulty.css('display', 'none');
      $game_board.css('display', 'block');
      $introP.css('display', 'none');
      $game_onP.css('display', 'block');
      // Sends difficulty level to the controler to build the query for the api
      DifficultyCtrl.setDifficulty(e.target.innerHTML);
    });
    // ChoiceCtrl builds out choice list and handles choice clicks
    // Builds List
    ChoicesCtrl.buildChoiceList();
    // Click handler for list choices
    const $choice_list = $('ul.choices');
    $choice_list.click( (e) => {
      let currentTarget = $(e.target).hasClass('disabled');
      if(!currentTarget) { ChoicesCtrl.getChoice(e.target.innerHTML, e) }
    });
    // Restart the game
    $btn_restart.click( () => {
      location.reload();
    });
  });
})();