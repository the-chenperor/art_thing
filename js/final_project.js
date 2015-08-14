$(document).ready(function() {
   $('.text').fadeOut(0.0);
  
  
   $('#start_button.round-button').click(
     function() {
       $('.button1').fadeIn(2000);
       $('.button2').fadeIn(2000);
       $('.round-button-circle').fadeOut(1);
     });
     
   $('.button2').click(
     function() {
      $('.artwork1').fadeIn(2000);
      $('.artwork2').fadeIn(2000);
      $('.artwork3').fadeIn(2000);
      $('.artwork4').fadeIn(2000);
     });
  
  var even = false;

// $('#bluebutton').click(function() {
//     if(even) {
//         doEven();
//     } else {
//         doOdd();
//     }

//     even = !even;
// });

// function doOdd() {
//     $("paint").show("slow");
// }

// function doEven() {
//     $("paint").hide("slow");
// }
  
  });