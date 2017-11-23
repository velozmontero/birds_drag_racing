$(document).ready(function(){
  var count = 0;
  var time = 0;
  var result = null;

  var timer = setInterval(function () {
    
    if (count >= 1000 && count < 2000) {
      $('.rsg').html('READY');
    }
    else if (count >= 2000 && count < 3000) {
      $('.rsg').html('SET');
    }
    else if (count >= 3000 && count < 4000) {
      $('.rsg').html('GO!');
    }
    else {
      $('.rsg').html('');
    }

    if(count >= 3000) {
      time+=100;
      $('.timer').html(time / 1000);
    }

    count+=100;
  }, 100);

  function stopTimer() {
    clearInterval(timer);
  }

  $(window).keydown(function (e) {
    let position = $('.bird').offset();
    let target = $('.crossing-line').offset();

    // console.log(position);
    if(count > 3000){
      if (position.left + 20 > target.left) {
        if (time >= 10000 && !result) {
          console.log('time ',time);

          result = 'lost';
          stopTimer();
          $('.result').removeClass('hide').html('YOU LOSE!');
        }
        if (time < 10000 && !result) {
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