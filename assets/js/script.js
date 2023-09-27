var currentTime = moment().format('dddd, MMMM D, YYYY');
$("#currentDay").html(currentTime);


$(document).ready(function () {
  // save button listener. saves time slot and input into local storage
  $(".saveBtn").on("click", function () {
    // Get nearby values of the description in JQuery
    var task = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // saves task in local storage
    localStorage.setItem(time, task);
  })

  function eventChecker() {
    //get current number of hours.
    var time = moment().hour();

    // loop over time blocks
    $(".time-block").each(function () {
        var taskHour = parseInt($(this).attr("id").split("hour-")[1]);

        // To check the time and add the classes for background indicators
        if (taskHour < time) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if (taskHour === time) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");

        }
    })
}

  // Retrieve todo's from local storage
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));
  $("#hour-18 .description").val(localStorage.getItem("hour-18"));
  $("#hour-19 .description").val(localStorage.getItem("hour-19"));
  $("#hour-20 .description").val(localStorage.getItem("hour-20"));
  $("#hour-21 .description").val(localStorage.getItem("hour-21"));

eventChecker();
})