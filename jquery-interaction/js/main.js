$(document).ready(function() {
  // $('h1').css('color', 'white');
  $('#number5').click(function() {
    $('#number5').css('color', 'white');
    $('#bird-5').toggleClass('black');
  });
  $('#number4').click(function() {
    // $('#number4').css('color', 'goldenrod');
    $('#number4').toggleClass('text-color-to-goldenrod');
    console.log('we just changed the color!')
  });
});
