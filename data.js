$(document).ready(function() {
  //Declare variables
  var screen = $("#screen");
  var store = [];
  var newCalcul = false;

  // Function to switch on / reset calculator
  var init = function() {
    $("#on, #ac").click(function(e) {
      screen.addClass("screen-on");
      screen.text("");
      store = [];
    });
  }

  // Function to make simple calculation
  var calculate = function() {
    //When click number:
    $(".number").click(function(e) {
      //If it is a new calculation: empty screen and store
      if (newCalcul == true) {
        screen.text("");
        store = [];
        newCalcul = false;
      }
      // store the number and print it on screen
      var val = e.target.textContent;
      store.push(val);
      screen.append(val);

    })
    //When click operation (+, -, *, or /) :
    $(".operation").click(function(e) {
      //Store operation and print it on screen
      var val = e.target.textContent;
      store.push(val);
      screen.append(val);
      newCalcul = false;
    })

    //When click " = " :
    $("#equal").click(function(e) {
      //Use eval() to get result, store it and print it
      var printResult = store.join("");
      screen.text(eval(printResult).toFixed(2));
      var result = eval(printResult);
      store = [result];
      //Set newCalcul to true so if next button clicked is a number, it will reset screen and start a new calculation
      newCalcul = true;
    })
  }

  // var error = function(){
  //   $("#number, #operation").click(function(e){
  //     if(store.length > 12){
  //       screen.text("error");
  //       store=[];
  //       newCalcul = true;
  //     }
  //   })
  // }

  init();
  calculate();

});
