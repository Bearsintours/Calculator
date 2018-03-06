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
        screen.removeClass("smaller").addClass("regular");
        store = [];
        newCalcul = false;
      }
      // Limit number of digits calculator can take
      if (store.length > 20) {
        newCalcul = true;
      }
      // Change font-size if more than 10 digits on screen
      if (store.length > 10) {
        screen.removeClass("regular").addClass("smaller");
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
      var result = store.join("");
      result = eval(result);
      result.toString().length > 12
        ? screen.text(result.toFixed(10))
        : screen.text(result);
      store = [result];
      newCalcul = true;
    })
  }

  init();
  calculate();

});
