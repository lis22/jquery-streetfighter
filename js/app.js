$(document).ready(function() {

    playTheme();

    $('.welcome').fadeOut(1000);

    $('.instructions').fadeIn(6000);

    /* need this variable because hovering/clicking and pressing x
    would cause an unwanted Ryu to appear below very briefly */
    var keypressed=false;

    /*mouse hover action
    Ryu gets into ready position */
    $('.ryu').mouseenter(function() {
      if(!keypressed) {
        $('.ryu-still').hide();
        $('.ryu-ready').show();
    }
    })

    /*stopped hovering action
    Ryu gets back into his standing still postion */
    .mouseleave(function() {
      if(!keypressed) {
        $('.ryu-ready').hide();
        $('.ryu-still').show();
    }
    })

    /*on mouse click Ryu gets into throwing hadouken position. It also plays
    hadouken sound and animates hadouken by moving it to the right
    so that it's left value is 1020px. It animates for 500ms and when finished
    the function is called to hide the hadouken and reset the left value back to 520px. */
    .mousedown(function() {
      if(!keypressed) {
        playHadouken();
        $('.ryu-ready').hide();
        $('.ryu-throwing').show();
        //.finish() completes all currently running animations on an element.
        $('.hadouken').finish().show().animate(
          {'left':'1020px'},
          500,
          function() {
            $(this).hide();
            $(this).css('left','520px');
            });
        }
     })

    /* on release of mouse click
    ryu goes back to ready position */
    .mouseup(function() {
      if(!keypressed) {
        $('.ryu-throwing').hide();
        $('.ryu-ready').show();
      }
    });

    /*on key press of the 'x' key
    Ryu goes into the cool position */
    $(document).keydown(function(e) {
      if (e.which == 88) {
          keypressed=true;
          $('.ryu-ready').hide();
          $('.ryu-cool').show();
          $('.ryu-still').hide();
          $('.ryu-throwing').hide();
      }
      else {
        alert("Wrong key. Press 'x'");
      }

    })

    /* on release of the 'x' key
    Ryu goes into the ready position */
    .keyup(function(e) {
      if (e.which == 88) {
        keypressed=false;
        $('.ryu-cool').hide();
        $('.ryu-ready').show();
      }
    });
});


//This will load and play the Hadouken sound file
function playHadouken() {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}
//plays street fighter theme
function playTheme()
{
  $('#theme')[0].volume = 1;
  $('#theme')[0].load();
  $('#theme')[0].play();
}
