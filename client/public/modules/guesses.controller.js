const GuessesCtrl = (function() {
  let chosenWord;

  const displayDashes = (len) => {

  };

  const getWord = (word) => {
    chosenWord = word;
    console.log("in getWord in GuessesCtrl", chosenWord);
  };

  return {
    getWord
  };

})();