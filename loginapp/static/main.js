var down_letter_array=[];
var up_letter_array=[];
var press_time_array=[];
var down_time=[]; <!-- array storing the time of key pressed which can later be used to calculate the hold time in between -->
var up_time=[];
(function($) {

    $(".toggle-password").click(function() {

        $(this).toggleClass("zmdi-eye zmdi-eye-off");
        var input = $($(this).attr("toggle"));
        if (input.attr("type") == "password") {
          input.attr("type", "text");
        } else {
          input.attr("type", "password");
        }
      });

})(jQuery);

function myFunction()
{


        pressed = {};
  document.onkeydown = function(e) {
  if(e.repeat) return;
   const currentCode = e.which || e.code;
    let currentKey = e.key;
     if (!currentKey) {
    currentKey = String.fromCharCode(currentCode);
  }
    if ( pressed[currentKey] ) return;
    pressed[currentKey] = e.timeStamp;
    down_time.push(e.timeStamp/1000);
    down_letter_array.push(currentKey);
    document.getElementById('c').setAttribute('value', down_time.toString());
    document.getElementById('a').setAttribute('value', down_letter_array.toString());


};

document.onkeyup = function(e) {
      const currentCode = e.which || e.code;
    let currentKey = e.key;
     if (!currentKey) {
    currentKey = String.fromCharCode(currentCode);
   }

    if ( !pressed[currentKey] ) return;
    var duration = ( e.timeStamp - pressed[currentKey] ) / 1000;

    up_time.push(e.timeStamp/1000);
    press_time_array.push(duration);
    up_letter_array.push(e.key);
   document.getElementById('d').setAttribute('value', up_time.toString());
   document.getElementById('e').setAttribute('value', up_letter_array.toString());
   document.getElementById('b').setAttribute('value', press_time_array.toString());

};}

function myFunction1()
{

        pressed1 = {};
  document.onkeydown = function(e) {
    if ( pressed1[e.which] ) return;
    pressed1[e.which] = e.timeStamp;
    };

document.onkeyup = function(e) {
    if ( !pressed1[e.which] ) return;
    var duration = ( e.timeStamp - pressed[e.which] ) / 1000;


};}

$('#password, #re_password').on('keyup', function () {
  if ($('#password').val() == $('#re_password').val()) {
    $('#message').html('Matching').css('color', 'green');
  } else
    $('#message').html('Not Matching').css('color', 'red');
});








