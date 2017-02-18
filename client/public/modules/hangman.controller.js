const HangmanCtrl = (function() {
      let hangingPicIndex = 10;

  const startInterval = (intervlNum) => {
    let interval = setInterval(drawingInterval, 1000);
    function drawingInterval() {
      let newSrc = './media/losing/Drawing' + intervlNum + '.png';
      if(intervlNum === 0) { clearInterval(interval) } 
      else { $('img.drawing').attr('src', newSrc) }
      intervlNum--;
    };
  };

  const stringEmUp = () => {
    hangingPicIndex--;
    let newSrc = './media/losing/Drawing' + hangingPicIndex + '.png';

    if(hangingPicIndex >= 4) {
      $('img.drawing').attr('src', newSrc);
      if(hangingPicIndex === 4) { 
        startInterval(hangingPicIndex);
         
      }
    } 
  };

  return {
    stringEmUp
  };

})();