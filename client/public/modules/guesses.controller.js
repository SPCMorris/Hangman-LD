const GuessesCtrl = (function() {
  const ChosenWord = {};
  let NumOfDashes,
      $span_dashes,
      foundLetters = 0;
      totalGuessLeft = 6;

  const disableChoiceList = () => {
    $('ul.choices').children().each((index, li)=> {
      $(li).removeClass('correct-guess wrong-guess').addClass('game-over').attr('id', 'disabled')
    });
  };

  const guessCounter = () => {
    totalGuessLeft--;
    // Check if there are any more guesses left
    if(totalGuessLeft === 0) { 
      $('div.guesses').text('Oops, you got strung up!');
      disableChoiceList();
    }
    // If there are, display the rest of the guesses
    $('span#guesses-left').text(totalGuessLeft);
  };

  const checkIfWordIsSolved = () => {
    if(foundLetters === NumOfDashes) {
      // Disables choice list
      disableChoiceList();
      // Appends winning message. 
      $('span#heading').replaceWith(' WINNING AT');

      const startInterval = (intervlNum) => {
        let interval = setInterval(drawingInterval, 700);

        function drawingInterval() {
          let newSrc = './media/Winning/hm' + intervlNum + '.png';
          if(intervlNum === 6) { clearInterval(interval) } 
          else { $('img.drawing').attr('src', newSrc) }
          intervlNum++;
        };

      };
      startInterval(1);
    }
  };

  const addLetterToDashes = (letter, indexArr) => {
    for(let i = 0; i < indexArr.length; i++) {
      $span_dashes[indexArr[i]].replaceWith(letter);
      foundLetters++;
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
      $(event.target).removeClass('hover-control').addClass('correct-guess').attr('id', 'disabled');

    } else {
      $(event.target).removeClass('hover-control').addClass('wrong-guess').attr('id', 'disabled');
      guessCounter();
      HangmanCtrl.stringEmUp(ChosenWord['full-word']);
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
    ChosenWord["full-word"] = word;
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