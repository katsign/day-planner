$(document).ready(function() {
    // Event listener for Saves
    $(".saveBtn").on("click", function() {
      // Pull existing Saves
      var value = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");
  
      // Save to Local Storage
      localStorage.setItem(time, value);
    });

    // Setting up Time
        // and tenses for description block coloring
    function hourUpdate() {
        var currentHr = moment().hours();

        $(".time-block").each(function() {
            var blockHr = parseInt($(this).attr("id").split("-")[1]);

            if (blockHr < currentHr) {
                $(this).addClass("past");
            }
            else if (blockHr === currentHr) {
                $(this).removeClass("past");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        });   
    }

    hourUpdate();

    var interval = setInterval(hourUpdate, 15000);

    // Pulls data saved to Local Storage
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));

    // Displays Date + Time
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
    $("#currentTime").text(moment().format("h:mm a"));
});