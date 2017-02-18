const GuessesCtrl = (function() {
  const ChosenWord = {};
  let NumOfDashes,
      $span_dashes,
      foundLetters = 0;
      totalGuessLeft = 6;

  const guessCounter = () => {
    totalGuessLeft--;
    $('span#guesses-left').text(totalGuessLeft);
    if(totalGuessLeft === 0) { 

    }
  };

  const checkIfWordIsSolved = () => {
    if(foundLetters === NumOfDashes) {
      console.log("WINNING")
    }
  };

  const addLetterToDashes = (letter, indexArr) => {
    foundLetters++;
    for(let i = 0; i < indexArr.length; i++) {
      $span_dashes[indexArr[i]].replaceWith(letter)
    }
    checkIfWordIsSolved();
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
      addLetterToDashes(choice, found);
      $(event.target).addClass('disabled correct-guess');

    } else {
      guessCounter();
      $(event.target).addClass('disabled wrong-guess');
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
    for(let i = 0; i < word.length; i++) {
      ChosenWord[i] = word[i];
    }
    console.log(ChosenWord)
    displayDashes(word.length); 
  };

  const getChoiceFromChoicesCtrl = (letter, event) => { checkIfChoiceIsInWord(letter, event) };

  return {
    getWord,
    guessCounter,
    getChoiceFromChoicesCtrl
  };

})();