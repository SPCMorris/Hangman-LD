const DifficultyCtrl = (function() {
  const random = (min, max) => ( Math.floor(Math.random() * (max - min + 1)) + min );

  const sendToGuessesCtrl = (wordsResp) => {
    GuessesCtrl.getWord(wordsResp);
  };

  const $wordApiCall = (level) => {
    $.ajax({
      url: 'http://localhost:9000/game',
      type: 'GET',
      data: { level },
      async: true,
      beforeSend: () => {
        $('div#container').hide();
        $('div#loading').show();
      },
      complete: () => {
        setTimeout( ()=> {
          $('div#loading').hide();
          $('div#container').show();
        }, 1000)
      },
      success: (resp) => {
        console.log(resp);
        sendToGuessesCtrl(resp);
      },
      error: (error) => {
        console.log(error);
        alert("Sorry something went wrong and I couldn't find you a word. Please try again");
      }
    })
  };

  const setDifficulty = (rate) => {
    let difficultyLevel;

    switch(rate) {
      case 'Easy':
        difficultyLevel = random(1, 3);
        break;
      case 'Medium':
        difficultyLevel = random(3, 5);
        break;
      case 'Hard':
        difficultyLevel = random(5, 8);
        break;
      default:
        difficultyLevel = random(8, 10);
    }
    console.log(difficultyLevel)
   $wordApiCall(difficultyLevel)
  };

  return {
    setDifficulty
  };

})();