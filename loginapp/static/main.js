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
    if ( pressed[e.which] ) return;
    pressed[e.which] = e.timeStamp;
    down_time.push(e.timeStamp);
    down_letter_array.push(e.key);


};

document.onkeyup = function(e) {
    if ( !pressed[e.which] ) return;
    var duration = ( e.timeStamp - pressed[e.which] ) / 1000;



    pressed[down_letter_array.length] = b;
    up_time.push(e.timeStamp);
    press_time_array.push(duration);
    up_letter_array.push(e.key);

};}

function myFunction1()
{

        pressed1 = {};
  document.onkeydown = function(e) {
    if ( pressed1[e.which] ) return;
    pressed1[e.which] = e.timeStamp;
    };

document.onkeyup = function(e) {
    if ( !pressed[e.which] ) return;
    var duration = ( e.timeStamp - pressed[e.which] ) / 1000;


};}


  function fun2(){
   document.getElementById('a').setAttribute('value', down_letter_array.toString());
   document.getElementById('b').setAttribute('value', press_time_array.toString());
   document.getElementById('c').setAttribute('value', down_time.toString());
   document.getElementById('d').setAttribute('value', up_time.toString());
   document.getElementById('e').setAttribute('value', up_letter_array.toString());

   }






