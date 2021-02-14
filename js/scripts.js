//business logic//
//created by kings munene//
var current = [];
var current1 = [];
var total = [];
var total1 = [];
var sorrymsg = ("sorry you rolled a one, next player please!");
var sorrymsg2 = ("sorry you rolled a one, next player please!");

//UI logic//

//playerone function//
$(document).ready(function()
 {$("#roll1").click(function()
  { event.preventDefault();
    var score = Math.floor((Math.random()*6)+1);
    $("#current").text(score);
    var total = add(current);
    if (current == 1){
      $("#roll2").show();
      $("#roll1").hide();
      $("#sorry").text(sorrymsg);
    };
  });
});

$(document).ready(function(){
  $("#hold1").click(function(){
    event.preventDefault();
    var total = add(current);
    $("total1").text(total);
  });
});

$(document).ready(function(){
  $("#roll2").click(function(){
     event.preventDefault();
    var score1 = Math.floor((Math.random()*6)+1);
    $("#current1").text(score1);
    if (score == 1){
      $("#roll1").show();
      $("#roll2").hide();
      $("#sorry2").text(sorrymsg2);
    };
  });
});

$(document).ready(function(){
  $("#hold2").click(function(){
    event.preventDefault();
    var total1 = add(current1);
    $("total1").text(total1);
  });
});

