$(document).ready(function(){

  // thought something like this was right for some reason, did some extra reading of resources
  // newsflash: totally wrong
  // $('h2').append('<div></div>');
  // $('h2').append('<div></div>');
  // $('h2').append('<div></div>');
  // $('h2').append('<div></div>');
  //
  // $('.box').click(function(){
  //   $(this).toggleClass('rose');
  //   $('.box').click(function(){
  //     $(this).toggleClass('gold')
  //     $('.box').click(function(){
  //       $(this).toggleClass('green');
  //       $('.box').click(function(){
  //         $(this).toggleClass('blue');
  //         });
  //       });
  //     });
  //   });
  //
  // });
  //so what this mess of code ended up doing was
  // making a set of boxes (correct) that changed color when clicked
  // but didn't correspond to anything, and didn't have the functions attached

  // make variable
  var colorBlockArray = ['rose', 'gold', 'green', 'blue'];
  // need for loop to say each time
  for (var i = 0; i < colorBlockArray.length; i++) {
    $('#container').append('<div class="box ' + colorBlockArray[i] + '"></div>');
    $('.' + colorBlockArray[i]).data('color', colorBlockArray[i]);
  };

  var beginningColor = chooseColor();
  $('#color-name').append('<p>Click ' + beginningColor + '</p>');

  // if ('correct color picked') {
  //   allow('play again')
  // } else {'wrong color'}
  // }

  $('#container').on('click', 'div', function(){
    for (var i = 0; i < colorBlockArray.length; i++) {
      var beginningColor = colorBlockArray[i];


    if(beginningColor == $(this).data('color')){
      // correct click
      beginningColor.data('beginningColor', i) = chooseColor();
      beginningColor.text('You are not colorblind! Now click ' + beginningColor + '!</p>');
      // $('#colorizer > p').replaceWith('<p>You are not colorblind! Now click ' +
      // beginningColor + '.</p>');
    } else {
      //wrong click
      beginningColor.text('<p>Try again! Click ' + beginningColor + '.</p>');
      beginningColor.data()
      // $('#colorizer > p').replaceWith('<p>Try again! Click ' +
      // beginningColor + '.</p>');
    }
  }
  });






  //given code - picks random number between 1 and 4
  function randomNum(){
    return Math.floor(Math.random() * (1 + 4 - 1) + 1);
  }
  //now need to assign random picked number to a variable for each color?
  function chooseColor(){
    if(randomNum = 1){
      var color = 'rose';
    } else if(randomNum = 2){
      var color = 'gold';
    } else if(randomNum = 3){
      var color = 'green';
    } else if(randomNum = 4){
      var color = 'blue';
    }
    return color;
  }


});


//changed variables and some html file names so these stopped working
//then realized they weren't really working anyway
// var spotRose = $('#spotRose').val();
// var spotGold = $('#spotGold').val();
// var spotGreen = $('#spotGreen').val();
// var spotBlue = $('#spotBlue').val();
//
// $('#box').append('<div>TestRose</div>');
// $('#colorSpot').append('<div>TestGold</div>');
// $('#colorSpot').append('<div>TestGreen</div>');
// $('#colorSpot').append('<div>TestBlue</div>');

//need to append divs, each with a different color: Rose, Gold, Green, Blue
