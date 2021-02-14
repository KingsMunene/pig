//business logic//
//created by kings munene//
var current1 = [];
var current2 = [];
var total1 = [];
var total2 = [];
var sorrymsg = ("sorry you rolled a one, next player please!");
var sorrymsg2 = ("sorry you rolled a one, next player please!")

//UI logic//
//playerone function//
$(document).ready(function(){
  $("#roll1").click(function(){
     event.preventDefault();
    var current = Math.floor((Math.random()*6)+1);
    $("#current1").text(current);
    if (current == 1){
      $("#roll2").show();
      $("#roll1").hide();
      $("#sorry").text(sorrymsg);
    };
  });
});

$(document).ready(function(){
  $("#roll2").click(function(){
     event.preventDefault();
    var currentb = Math.floor((Math.random()*6)+1);
    $("#current2").text(currentb);
    if (currentb == 1){
      $("#roll1").show();
      $("#roll2").hide();
   
      $("#sorry2").text(sorrymsg2);
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
  $("#hold2").click(function(){
    event.preventDefault();
    var totalb = add(currentb);
    $("total1").text(totalb);
  });
});

$(document).ready(function(){
  $("#hold1").click(function(){
    event.preventDefault();
    var total = add(current);
    $("total1").text(total);
  });
});
