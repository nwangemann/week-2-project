$(document).ready(function() {
  $(".takequiz").click(function() {
    $(".Question-init").show();
    $(".intro").hide();
  });
  $("#btn1").click(function() {
    $(".Question-init").hide();
    $(".Question-2").show();
  });
  $(".takequiz").click(function() {
    $(".Question-2").hide();
    $(".Question-3").show();
  });
  $(".takequiz").click(function() {
    $(".Question-3").hide();
    $(".Question-4").show();
  });
  $(".takequiz").click(function() {
    $(".Question-4").hide();
    $(".Question-5").show();
  });

  var results = $(parseInt(response1 + response2 + response3 + response4 + response5))

  if (results >= 6) {
  $(".takequiz").click(function() {
    $(".Question-5").hide();
    $(".ResultsFrontEnd").show();
  } else if (results < 6 && results > 3) {
    $(".Question-5").hide();
    $(".ResultsApp").show();
  } else if (results <= 3) {
    $(".Question-5").hide();
    $(".ResultsBackEnd").show();
  }
  });
});



var response1 = $("input:radio[name=response1]:checked").val();
var response2 = $("input:radio[name=response2]:checked").val();
var response3 = $("input:radio[name=response3]:checked").val();
var response4 = $("input:radio[name=response4]:checked").val();
var response5 = $("input:radio[name=response5]:checked").val();
