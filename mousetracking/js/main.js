var down_letter_array=[];
var up_letter_array=[];
var press_time_array=[];
var down_time=[]; <!-- array storing the time of key pressed which can later be used to calculate the hold time in between -->
var up_time=[];
var re_press_time_array=[];
var re_up_time=[];
var record_timestamp=[];
var client_timestamp=[];
var button=[];
var state=[];
var X =[];
var Y=[];
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
    console.log(document.getElementById('d').value)
   console.log(document.getElementById('b').value)

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


  function fun2(){
   document.getElementById('a').setAttribute('value', down_letter_array.toString());
   document.getElementById('b').setAttribute('value', press_time_array.toString());
   document.getElementById('c').setAttribute('value', down_time.toString());
   document.getElementById('d').setAttribute('value', up_time.toString());
   document.getElementById('e').setAttribute('value', up_letter_array.toString());


      }

$('#password, #re_password').on('keyup', function () {
  if ($('#password').val() == $('#re_password').val()) {
    $('#message').html('Matching').css('color', 'green');
  } else
    $('#message').html('Not Matching').css('color', 'red');
});

function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "" || x == null) {
    alert("Name must be filled out");
    return false;
  }
}

 $('#BirthDate').datetimepicker({
      yearOffset:0,
      lang:'ch',
      timepicker:false,
      format:'d/m/Y',
      formatDate:'Y/m/d',
      minDate:'2020/05/16', // yesterday is minimum date
      maxDate:'2030/01/01' // and tommorow is maximum date calendar
    });
function re_Function()
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

};

document.onkeyup = function(e) {
      const currentCode = e.which || e.code;
    let currentKey = e.key;
     if (!currentKey) {
    currentKey = String.fromCharCode(currentCode);
   }

    if ( !pressed[currentKey] ) return;
    var duration = ( e.timeStamp - pressed[currentKey] ) / 1000;

    re_up_time.push(e.timeStamp/1000);
    re_press_time_array.push(duration);

   document.getElementById('f').setAttribute('value', re_up_time.toString());
   document.getElementById('g').setAttribute('value', re_press_time_array.toString());
   console.log(document.getElementById('g').value)
   console.log(document.getElementById('f').value)

};}


function myfunction(e) {
  var x = e.clientX;
  var y = e.clientY;
  var t = e.timeStamp;
  var b=e.button;
  X.push(x)
  Y.push(y)
  client_timestamp.push(t)
  record_timestamp.push(t)
  button.push('NoButton')
  state.push('Move')

  var coor = "Coordinates: (" + x + "," + y + "," + t + "," + b + ")";
  document.getElementById("demo").innerHTML = coor;
}
 function mousedown(e){
  var x = e.buttons;
  if (x==1){
    button.push(Left)
    }
  if (x==2){
    button.push(Right)
  }
  if (x==4){
    button.push(Center)
  }
  X.push(e.clientX);
  Y.push(e.clientY);
  client_timestamp.push(e.timeStamp);
  record_timestamp.push(e.timeStamp);
  state.push('Pressed')

  }

  function mouseup(e){
  var x = e.buttons;
  if (x==1){
    button.push(Left)
    }
  if (x==2){
    button.push(Right)
  }
  if (x==4){
    button.push(Center)
  }
  X.push(e.clientX);
  Y.push(e.clientY);
  client_timestamp.push(e.timeStamp);
  record_timestamp.push(e.timeStamp);
  state.push('Released')

  }


function clearCoor() {
  document.getElementById("demo").innerHTML = "";
}


