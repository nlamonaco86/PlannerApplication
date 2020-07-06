// Get the Current Date and display it at the top of the page on load
var date = moment();

// Display the current date and time at top of the page
$(document).ready(function () {
    $("#currentDay").append(date.format('MMMM-DD-YYYY'));

// Load the previous planner inputs 
// There must be a more efficient way?
    am9 = JSON.parse(localStorage.getItem("am9"));
    am10 = JSON.parse(localStorage.getItem("am10"));
    am11 = JSON.parse(localStorage.getItem("am11"));
    pm12 = JSON.parse(localStorage.getItem("pm12"));
    pm13 = JSON.parse(localStorage.getItem("pm13"));
    pm14 = JSON.parse(localStorage.getItem("pm14"));
    pm15 = JSON.parse(localStorage.getItem("pm15"));
    pm16 = JSON.parse(localStorage.getItem("pm16"));
    pm17 = JSON.parse(localStorage.getItem("pm17"));

// And print them into each box
// I have concerns about the efficiency of this 
    $("#am9" ).val(am9)
    $("#am10").val(am10)
    $("#am11").val(am11)
    $("#pm12").val(pm12)
    $("#pm13").val(pm13)
    $("#pm14").val(pm14)
    $("#pm15").val(pm15)
    $("#pm16").val(pm16)
    $("#pm17").val(pm17)
});

// Defines the current time
var currentTime = moment().format('H');

// Adds Event Listener to each Button
// This is done with 8 individual functions - I feel like it could be shortened?
$(document).ready(function(){
    $("#btn9").click(function(){
    var am9 = $("#am9").val().trim();
// Saves text entered in each form box into localStorage
    localStorage.setItem("am9", JSON.stringify(am9));
    });
  });

  $(document).ready(function(){
    $("#btn10").click(function(){
    var am10 = $("#am10").val().trim();
// Saves text entered in each form box into localStorage
    localStorage.setItem("am10", JSON.stringify(am10));
    });
  });

  $(document).ready(function(){
    $("#btn11").click(function(){
    var am11 = $("#am11").val().trim();
// Saves text entered in each form box into localStorage
    localStorage.setItem("am11", JSON.stringify(am11));
    });
  });

  $(document).ready(function(){
    $("#btn12").click(function(){
    var pm12 = $("#pm12").val().trim();
// Saves text entered in each form box into localStorage
    localStorage.setItem("pm12", JSON.stringify(pm12));
    });
  });

  $(document).ready(function(){
    $("#btn13").click(function(){
    var pm13 = $("#pm13").val().trim();
// Saves text entered in each form box into localStorage
    localStorage.setItem("pm13", JSON.stringify(pm13));
    });
  });

  $(document).ready(function(){
    $("#btn14").click(function(){
    var pm14 = $("#pm14").val().trim();
// Saves text entered in each form box into localStorage
    localStorage.setItem("pm14", JSON.stringify(pm14));
    });
  });

  $(document).ready(function(){
    $("#btn15").click(function(){
    var pm15 = $("#pm15").val().trim();
// Saves text entered in each form box into localStorage
    localStorage.setItem("pm15", JSON.stringify(pm15));
    });
  });

  $(document).ready(function(){
    $("#btn16").click(function(){
    var pm16 = $("#pm16").val().trim();
// Saves text entered in each form box into localStorage
    localStorage.setItem("pm16", JSON.stringify(pm16));
    });
  });

  $(document).ready(function(){
    $("#btn17").click(function(){
    var pm17 = $("#pm17").val().trim();
// Saves text entered in each form box into localStorage
    localStorage.setItem("pm17", JSON.stringify(pm17));
     });
  });


// Change Colors of the Time Slots based on Current Time
// Checks current time against the hour block, and then adds the appropriate color
// There must be a more efficient way than running individual functions on page load for each block
$(document).ready(function () {
    if (currentTime > 9) {
        $("#am9").addClass("past");
      }
    else if (currentTime < 9) {
        $("#am9").addClass("future");
    }
    else if (currentTime = 9) {
        $("#am9").addClass("present");
    }
});

$(document).ready(function () {
    if (currentTime > 10) {
        $("#am10").addClass("past");
    }
    else if (currentTime < 10) {
        $("#am10").addClass("future");
    }
    else if (currentTime = 10) {
        $("#am10").addClass("present");
    }
});

$(document).ready(function () {
    if (currentTime > 11) {
        $("#am11").addClass("past");
    }
    else if (currentTime < 11) {
        $("#am11").addClass("future");
    }
    else if (currentTime = 11) {
        $("#am11").addClass("present");
    }
});

$(document).ready(function () {
    if (currentTime > 12) {
        $("#pm12").addClass("past");
    }
    else if (currentTime < 12) {
        $("#pm12").addClass("future");
    }
    else if (currentTime = 12) {
        $("#pm12").addClass("present");
    }
});

$(document).ready(function () {
    if (currentTime > 13) {
        $("#pm13").addClass("past");
    }
    else if (currentTime < 13) {
        $("#pm13").addClass("future");
    }
    else if (currentTime = 13) {
        $("#pm13").addClass("present");
    }
});

$(document).ready(function () {
    if (currentTime > 14) {
        $("#pm14").addClass("past");
    }
    else if (currentTime < 14) {
        $("#pm14").addClass("future");
    }
    else if (currentTime = 14) {
        $("#pm14").addClass("present");
    }
});

$(document).ready(function () {
    if (currentTime > 15) {
        $("#pm15").addClass("past");
    }
    else if (currentTime < 15) {
        $("#pm15").addClass("future");
    }
    else if (currentTime = 15) {
        $("#pm15").addClass("present");
    }
});

$(document).ready(function () {
    if (currentTime > 16) {
        $("#pm16").addClass("past");
    }
    else if (currentTime < 16) {
        $("#pm16").addClass("future");
    }
    else if (currentTime = 16) {
        $("#pm16").addClass("present");
    }
});

$(document).ready(function () {
    if (currentTime > 17) {
        $("#pm17").addClass("past");
    }
    else if (currentTime < 17) {
        $("#pm17").addClass("future");
    }
    else if (currentTime = 17) {
        $("#pm17").addClass("present");
    }
});

console.log(currentTime)


