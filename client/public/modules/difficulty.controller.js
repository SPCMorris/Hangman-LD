const DifficultyCtrl = (function() {
  const random = (min, max) => ( Math.floor(Math.random() * (max - min + 1)) + min );

  const chooseWord = (wordsResp) => {
    console.log("IN CHOOSE WORD",wordsResp);
  };

  const $getWords = (level) => {
    $.ajax({
      url: 'http://localhost:9000/game',
      type: 'GET',
      data: { level }, 
      success: (resp) => {
       // console.log(resp);
        //chooseWord(resp);
      },
      error: (error) => {
        console.log(error)
      }
    })
  };

  const setDifficulty = (rate) => {
    let difficultyLevel;

    switch(rate) {
      case 'Easy':
      console.log(rate)
        difficultyLevel = random(0, 3);
        break;
      case 'Medium':
        difficultyLevel = random(3, 5);
        break;
      case 'Hard':
        difficultyLevel = random(5, 8);
        break;
      default:
      console.log(typeof rate)
        difficultyLevel = random(8, 10);
    }
   $getWords(difficultyLevel)
  };

  return {
    $getWords,
    setDifficulty
  };

})();