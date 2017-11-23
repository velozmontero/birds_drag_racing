$(document).ready(function(){
  var count = 3;
  var time = 0;
  var result = null;

  var timer = setInterval(function () {
    if(count === 3){
      $('.rsg').html('READY');
      count--;
    }
    else if (count === 2) {
      $('.rsg').html('SET');
      count--;
    }
    else if (count === 1) {
      $('.rsg').html('GO!');
      count--;
    }
    else {
      $('.rsg').html('');
    }

    if(count < 1) {
      $('.timer').html(++time);
    }
  }, 1000);

  function stopTimer() {
    clearInterval(timer);
  }

  $(window).keydown(function (e) {
    let position = $('.bird').offset();
    let target = $('.crossing-line').offset();

    // console.log(position);
    if(count < 1){
      if (position.left + 20 > target.left) {
        if (time >= 10 && !result) {
          result = 'lost';
          stopTimer();
          $('.result').removeClass('hide').html('YOU LOSE!');
        }
        if (time < 10 && !result) {
          result = 'won';
          stopTimer();
          $('.result').removeClass('hide').html('YOU WIN!');
        }
      }

      if (e.keyCode === 37) {
        if (position.left > 0) {
          $('.bird').css('left', Math.max(position.left - 50, 0));
        }
      }
      if (e.keyCode === 38) {
        if (position.top > 0) {
          $('.bird').css('top', Math.max(position.top - 50, 0));
        }
      }
      if (e.keyCode === 39) {
        if (position.left < window.innerWidth - $('.bird').width()) {
          $('.bird').css('left', Math.min(position.left + 50, window.innerWidth - $('.bird').width()));
        }
      }
      if (e.keyCode === 40) {
        if (position.top < window.innerHeight - $('.bird').height()) {
          $('.bird').css('top', Math.min(position.top + 50, window.innerHeight - $('.bird').height()));
        }
      }
    }
    
  });

  $(window).keyup(function (e) {
    let position = $('.bird').offset();

    // console.log('position ', position);

  });

});