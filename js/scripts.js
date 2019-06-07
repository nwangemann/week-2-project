$(document).ready(function() {
  $(".takequiz").click(function() {
    $(".Question-init").show();
    $(".intro").hide();
  });
  $("#btn1").click(function() {
    $(".Question-init").hide();
    $(".Question-2").show();
  });
  $("#btn2").click(function() {
    $(".Question-2").hide();
    $(".Question-3").show();
  });
  $("#btn3").click(function() {
    $(".Question-3").hide();
    $(".Question-4").show();
  });
  $("#btn4").click(function() {
    $(".Question-4").hide();
    $(".Question-5").show();
  });
});



$(document).ready(function() {
  $("#btnfinal").click(function() {
    $(".Question-5").hide();
    var response1 = parseInt($("input:radio[name=response1]:checked").val());
    var response2 = parseInt($("input:radio[name=response2]:checked").val());
    var response3 = parseInt($("input:radio[name=response3]:checked").val());
    var response4 = parseInt($("input:radio[name=response4]:checked").val());
    var response5 = parseInt($("input:radio[name=response5]:checked").val());
    var results = response1 + response2 + response3 + response4 + response5;

    alert(results)
    if (results >= 7) {
      $(".ResultsFrontEnd").show();
    } else if (results < 7 && results > 3) {
      $(".ResultsApp").show();
    } else if (results <= 3) {
      $(".ResultsBackEnd").show();
    }
  });
});
