const ButtonCtrl = (function() {
  const $btn_hint = $('button.hint');
  let vowelCount = 0,
      hintCount = 0,
      randomLetter,
      ChosenWord;

  // Get vowel count and store it for hints
  const vowelCounter = () => {
    const vowels = {'a': true, 'e': true, 'i': true, 'o': true, 'u': true};

    for(let i = 0; i < ChosenWord.length; i++) {
      if(vowels.hasOwnProperty(ChosenWord[i])) { vowelCount++ }
    }
  };
  // Give a letter that hasnt been found yet for hints
  const giveRandomLetter = () => {
    let $span_dashes = $('span#dashes')["0"].childNodes,
        numOfChildren = $span_dashes.length,
        hintLetter,
        hintIndex;

    for(let i = 0; i < numOfChildren - 1; i++) {
      if($span_dashes[i].innerHTML) {
        hintIndex = i;
        hintLetter = ChosenWord[i];
        i = numOfChildren;
      }
    }
    $($span_dashes).eq(hintIndex).replaceWith(hintLetter);
    alert( "'" + hintLetter + "' was your last hint. Good luck, you may need it...");
  };
  // Allow the user to gues the full word and count that against their guesses if wrong
  const userGuessedWord = (word) => {
    let input = this.prompt('Very Brave! What do you think the word is?', 'Enter the word here...');
    if(input.toLowerCase() === ChosenWord) {
      $('span#dashes').replaceWith(ChosenWord);
      GuessesCtrl.checkIfWordIsSolved(true);
    } else {
      GuessesCtrl.guessCounter();
      alert("Sorry, that is not the secret word. I would tell you what it is but... it's a secret")
    }
  };
  // This function gets and stores the chosen word for hints and guesses
  const getWordFromDifficultyCtrl = (word) => {
    ChosenWord = word;
    vowelCounter();
  };
  /////////////////////////////////////////////////////////////////////////////////////
  //---------------------------------Click Handlers --------------------------------//
  ///////////////////////////////////////////////////////////////////////////////////

  // Easy button. Just reloads the game from the start.
  $('button.restart').click( () => {
    location.reload();
  })

  // Hint button. There are two different hints: 1. vowel count in word, 2: random letter reveal
  $btn_hint.click( () => {
    // First thing to do is increment hint to keep track of how many hints are used
    hintCount++;

    if(hintCount === 1) { alert("There are " + vowelCount + " vowels in this word. And don't include 'y' in that!") }
    else if(hintCount === 2) { 
      giveRandomLetter();
      $btn_hint.hide();
    }
  })

  // Guess
  $('button.guess').click( () => {
    userGuessedWord();
  })

  return {
    getWordFromDifficultyCtrl
  };
})();