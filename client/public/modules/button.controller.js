const ButtonCtrl = (function() {
  const random = (min, max) => ( Math.floor(Math.random() * (max - min + 1)) + min );
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
  // Give a random letter that hasnt been found yet for hints
  const giveRandomLetter = () => {
    let $div_dashes = $('div.dashes'),
        numOfChildren,
        randomLetter,
        randomIndex;

        console.log($div_dashes)
  };
  // This function gets and stores the chosen word for hints and guesses
  const getWordFromDifficultyCtrl = (word) => {
    ChosenWord = word;
    vowelCounter();
  };
  // Easy button. Just reloads the game from the start.
  $('button.restart').click( () => {
    location.reload();
  })

  // Hint button. There are two different hints: 1. vowel count in word, 2: random letter reveal
  $('button.hint').click( () => {
    // First thing to do is increment hint to keep track of how many hints are used
    hintCount++;

    if(hintCount === 1) { alert("There are " + vowelCount + " vowels in this word. And don't include 'y' in that!") }
    else if(hintCount === 2) { giveRandomLetter() }
    else { alert("Sorry. You have used all your hints. Wouldn't be sporting to give you more") }
  })

  // Guess
  $('button.guess').click( () => {
    console.log('guess')
  })

  return {
    getWordFromDifficultyCtrl
  };
})();