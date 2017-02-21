const HangmanCtrl = (function() {
      let hangingPicIndex = 10;

  const startInterval = (intervlNum) => {
    let interval = setInterval(drawingInterval, 1000);
    function drawingInterval() {
      let newSrc = './media/Losing/Drawing' + intervlNum + '.png';
      if(intervlNum === 0) { clearInterval(interval) } 
      else { $('img.drawing').attr('src', newSrc) }
      intervlNum--;
    };
  };

  const stringEmUp = (word) => {
    hangingPicIndex--;
    let newSrc = './media/Losing/Drawing' + hangingPicIndex + '.png';
    if(hangingPicIndex >= 4) {
      $('img.drawing').attr('src', newSrc);
      if(hangingPicIndex === 4) { 
        // Displays word
        $('span#heading').replaceWith(' LOSING AT');
        $('div.dashes').replaceWith('<span>' + word + '</span>');
        // Runs lost animation
        startInterval(hangingPicIndex);
      }
    } 
  };

  return {
    stringEmUp
  };

})();

