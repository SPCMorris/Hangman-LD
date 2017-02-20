const DifficultyCtrl = (function() {
  // Chooses random integar value inclusive of min and max
  const random = (min, max) => ( Math.floor(Math.random() * (max - min + 1)) + min );
  let interval,
      userInput,
      startInterval,
      numOfWalkingMen = 2;

  const sendToGuessesCtrl = (wordsResp) => { 
    GuessesCtrl.getWord(wordsResp);
    ButtonCtrl.getWordFromDifficultyCtrl(wordsResp); 
  };
  // Simply gets the user input from login
  const getUserInput = (input) => {
    userInput = input;
  };
  // Makes the ajax call to the server which makes the call to the REST api provided
  // Also, handles loading screen animations
  const $wordApiCall = (level) => {
    $.ajax({
      url: 'https://this-is-hangman.herokuapp.com/game',
      type: 'GET',
      data: {level},
      async: true,
      beforeSend: () => {
        $('div.container').hide();
        $('div.loading').attr('id','loading-page')
        // Start the Walking Man
        startInterval = (intervlNum) => {
          interval = setInterval(drawingInterval, 200);
          function drawingInterval() {
            let newSrc = './media/Loading/walking' + numOfWalkingMen + '.png';
            if(numOfWalkingMen === 5) { numOfWalkingMen = 1 } 
            else { $('img.loading').attr('src', newSrc) }
            numOfWalkingMen++;
          };
        };
        startInterval(1);
      },
      complete: () => {
        setTimeout( ()=> {
          $('img.loading').remove();
          // Move walking man to top left corner for a cool logo!
          $('span#walking-man').append('<img class="loading" src="./media/Loading/walking1.png" width="38" height="57" alt="Supposed to be a walking man here... Not good.">')
          $('div#loading').hide();
          $('div.container').show();
        }, 1500)
      },
      success: (resp) => { sendToGuessesCtrl(resp) },
      error: (error) => {
        console.log(error);
        alert("Sorry something went wrong and I couldn't find you a word. Please try again");
        location.reload();
      }
    })
  };
  // Takes in user difficulty selection and returns a random value based on the rules below
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
   $wordApiCall(difficultyLevel)
  };

  return {
    getUserInput,
    setDifficulty
  };

})();