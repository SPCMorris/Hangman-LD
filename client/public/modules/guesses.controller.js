const GuessesCtrl = (function() {
  const ChosenWord = {};
  let NumOfDashes,
      $span_dashes,
      foundLetters = 0;
      totalGuessLeft = 6;

  // If you win or lose the game this disables the list
  const disableChoiceList = () => {
    $('ul.choices').children().each((index, li)=> {
      console.log(li);
      let char = $(li);

      char.removeAttr('id', 'correct-guess')
      char.removeAttr('id', 'wrong-guess');
      char.attr('id', 'game-over');
      char.addClass('disabled');
    });
    // Hide buttons
    $('button.hint').hide();
    $('button.guess').hide();
  };
  // Keeps track of the guess count to display 
  const guessCounter = () => {
    totalGuessLeft--;
    // Check if there are any more guesses left
    if(totalGuessLeft === 0) { 
      $('div.guesses').text('Oops, you got strung up!');
      disableChoiceList();
    } else if(totalGuessLeft === 1) { $('span.one-guess-hook').text(' guess') }
    // If there are, display the rest of the guesses
    $('span#guesses-left').text(totalGuessLeft);
  };
  // This function checks if you won the game and if so trigges the winning animations
  const checkIfWordIsSolved = (isSolved) => {
    if(foundLetters === NumOfDashes || isSolved) {
      // Disables choice list
      disableChoiceList();
      // Appends winning message 
      $('span#heading').replaceWith(' WINNING AT');
      $('div.guesses').text('Winner, Winner, no Hangman for you!');
      // Winning animation
      const startInterval = (intervlNum) => {
        let interval = setInterval(drawingInterval, 325);

        function drawingInterval() {
          let newSrc = './media/Winning/hm' + intervlNum + '.png';
          if(intervlNum === 22) { clearInterval(interval) } 
          else { $('img.drawing').attr('src', newSrc) }
          intervlNum++;
        };

      };
      startInterval(1);
      return true;
    }
  };

  const addLetterToDashes = (letter, indexArr) => {
    for(let i = 0; i < indexArr.length; i++) {
      $span_dashes[indexArr[i]].replaceWith(letter);
      foundLetters++;
    }
    return checkIfWordIsSolved();
  };

  const checkIfChoiceIsInWord = (choice, event) => {
    let found = [],
        flag = false;

    for(let index in ChosenWord) {
      if(choice === ChosenWord[index]) { 
        found.push(Number(index)) 
        if(!flag) {  flag = true }
      }
    }

    if(flag) {
      let endOfGame = addLetterToDashes(choice, found);
      if(!endOfGame) { $(event.target).removeClass('hover-control').attr('id','correct-guess').addClass('disabled') }
    } else {
      $(event.target).removeClass('hover-control').attr('id','wrong-guess').addClass('disabled');
      guessCounter();
      HangmanCtrl.stringEmUp(ChosenWord['full-word']);
    }
  };

  const displayDashes = (len) => {
    let dashCount = 0;

    while(dashCount < len) { 
      $('span#dashes').append('<span class="dash-guesses">__</span>');
      dashCount++;
    }
    NumOfDashes = dashCount;
    $span_dashes = $('span#dashes').children();
  };

  const getWord = (word) => { 
    for(let i = 0; i < word.length; i++) {
      ChosenWord[i] = word[i];
    }
    ChosenWord["full-word"] = word;
    console.log(ChosenWord)
    displayDashes(word.length); 
  };

  const getChoiceFromChoicesCtrl = (letter, event) => { checkIfChoiceIsInWord(letter, event) };

  return {
    getWord,
    guessCounter,
    guessCounter,
    checkIfWordIsSolved,
    getChoiceFromChoicesCtrl
  };

})();