const GuessesCtrl = (function() {
  let ChosenWord,
      NumOfDashes,
      $span_dashes,
      foundLetters = 0;
      totalGuessLeft = 6;

  const guessCounter = () => {
    totalGuessLeft--;
    $('span#guesses-left').replaceWith(totalGuessLeft);
  };

  const checkIfWordIsSolved = () => {
    
  };

  const addLetterToDashes = (letter, index) => {
    let currentDashElement = $span_dashes[index]);
    foundLetters++;
    checkIfWordIsSolved();
  };


  const checkIfChoiceIsInWord = (choice) => {
    let reg = new RegExp(choice, "gi");
   
    if(ChosenWord.match(reg)) {
      let wordArr = ChosenWord.split(''),
          charIndex = wordArr.indexOf(choice);
      addLetterToDashes(choice, charIndex);
    } else {
      guessCounter();
      // HangmanCtrl.stringEmUp();
    }
  };

  const displayDashes = (len) => {
    let dashCount = 0;

    while(dashCount < len) { 
      $('span#dashes').append('<span class="dash-guesses">_</span>');
      dashCount++;
    }
    NumOfDashes = dashCount;
    $span_dashes = $('span#dashes').children();
  };

  const getWord = (word) => { 
    ChosenWord = word;
    displayDashes(word.length); 
  };

  const getChoiceFromChoicesCtrl = (letter) => { checkIfChoiceIsInWord(letter) };

  return {
    getWord,
    guessCounter,
    getChoiceFromChoicesCtrl
  };

})();