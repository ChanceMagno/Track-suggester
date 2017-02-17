$(document).ready(function(){
  $("form").submit(function() {
    var interest = parseInt($("select#question1").val());
    var appealing = parseInt($("select#question2").val());
    var demand = parseInt($("select#question3").val());
    var popularity = parseInt($("select#question4").val());
    var color = parseInt($("select#question5").val());
    var totalScore = interest + appealing + demand + popularity + color;

    if (interest === 0 || appealing === 0 || demand === 0 || popularity ===0 || color ===0) {
      $(".alert-danger").show();

    } else {
      if(totalScore <= 5){
        $(".java").show();
        $(".swift, .php").hide();


      } else if ((totalScore > 5) && (totalScore < 9)) {
          $(".swift").show();
          $(".php, .java").hide();


      }  else {
          $(".php").show();
          $(".swift, .java").hide();

      }
      }


    event.preventDefault();
  });
});
