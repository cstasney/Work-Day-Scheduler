var date = dayjs().format("dddd, MMMM DD, YYYY")
$("#currentDay").text(date)


$(document).ready(function () {
  // save button listener. saves time slot and task
  $(".saveBtn").on("click", function () {
    // get input values in jquery
    var task = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // saves task in local storage
    localStorage.setItem(time, task);
  })

  function timeFeed() {
    //get current number of hours.
    var time = moment().hour();

    // loops through each time block and checks current time against hour of each block. applies styling accordingly
    $(".time-block").each(function () {
        var taskHour = parseInt($(this).attr("id").split("-")[1]);

        //to check the current time against the time for each block of tasks
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
  $("#-9 .description").val(localStorage.getItem("-9"));
  $("#-10 .description").val(localStorage.getItem("-10"));
  $("#-11 .description").val(localStorage.getItem("-11"));
  $("#-12 .description").val(localStorage.getItem("-12"));
  $("#-13 .description").val(localStorage.getItem("-13"));
  $("#-14 .description").val(localStorage.getItem("-14"));
  $("#-15 .description").val(localStorage.getItem("-15"));
  $("#-16 .description").val(localStorage.getItem("-16"));
  $("#-17 .description").val(localStorage.getItem("-17"));

timeFeed();
})