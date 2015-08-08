$(document).ready(function() {
    //on hover Ryu gets in ready position
    $('.ryu').mouseenter(function() {
      $('.ryu-still').hide();
      $('.ryu-ready').show();
    })
    //when not hovering Ryu stands still
    .mouseleave(function() {
      $('.ryu-ready').hide();
      $('.ryu-still').show();
    })
    //on mouse click plays hadouken sound
    //show hadouken and animate it to the right of the screen
    //animate says to animate our JQuery object so it's left value is 1020px so
    //500px to the right. Next it says it should take 500ms. Finally, when the
    //animation is done, the function will be called to hide the .hadouken class
    //and reset it's left property back to 520px
    .mousedown(function() {
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
          }
      );
    })
      //ryu goes back to ready position
      .mouseup(function() {
        $('.ryu-throwing').hide();
        $('.ryu-ready').show();
      });

});

//When this function gets run, it will load and play the sound file
//indicated in audio#hadouken-sound.
function playHadouken() {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}
