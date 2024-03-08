// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {

   var hourNow;
   var timeDisplayEl = $('#currentDay');

   // ************** FUNCTIONS ******************

   // Get the hour number from dayJS and set to variable hourNow
   // Call the function any time there is an update to the calendar
   function getDayjsHour() {
      hourNow = dayjs().get('hour');
      console.log("Current hour is : " + hourNow)
   }

   // TODO: Add a listener for click events on the save button. 
   //      The save button has id #fas #fa-save
   // This code should
   // use the id in the containing time-block as a key to save the user input in
   // local storage. HINT: What does `this` reference in the click listener
   // function? How can DOM traversal be used to get the "hour-x" id of the
   // time-block containing the button that was clicked? How might the id be
   // useful when saving the description in local storage?

   //    <button class="btn saveBtn col-2 col-md-1" aria-label="save">
   //    <i class="fas fa-save" aria-hidden="true"></i>
   //    </button>

   $('.saveBtn').click(function () {
      let hourID = $(this).parent().attr('id');
      console.log("hourID is " + hourID)
      let hourIDDigits = hourID.substring(5)
      const newMessage = $(this).siblings('.description').val();
      localStorage.setItem("hour-" + hourIDDigits, newMessage);
      $(this).siblings('.description').val(newMessage);
   })

   // TODO: Add code to apply the past, present, or future class to each time
   // block by comparing the id to the current hour. HINTS: How can the id
   // attribute of each time-block be used to conditionally add or remove the
   // past, present, and future classes? How can Day.js be used to get the
   // current hour in 24-hour time?

   $(".time-block").each(function () {
      let hourID = $(this).attr('id');
      console.log("hourID is " + hourID)
      let hourIDDigits = hourID.substring(5)
      console.log("hourIDDigits is " + hourIDDigits)
      if (hourIDDigits == dayjs().hour()) {
         $(this).attr("class", "row time-block present")
         console.log("Present")
      } else if (hourIDDigits < dayjs().hour()) {
         $(this).addClass("past")
         console.log("Past")
      } else if (hourIDDigits > dayjs().hour()) {
         $(this).attr("class", "row time-block future")
         console.log("Future")
      }
      //
      // TODO: Add code to get any user input that was saved in localStorage and set
      // the values of the corresponding textarea elements. HINT: How can the id
      // attribute of each time-block be used to do this?
      //
      let scheduleMessage = $(this).children()[1];
      scheduleMessage.value = localStorage.getItem(hourID)
      if (scheduleMessage != null) {
         scheduleMessage.value = scheduleMessage.value.replace(/['"]+/g, "")
      }
   })


   // TODO: DONE: Add code to display the current date in the header of the page.
   // Use this to display the date and time above calendar
   function displayTime() {
      console.log("I am just starting function displayTime");
      var rightNow = dayjs().format('dddd, MMM DD, YYYY');
      timeDisplayEl.text(rightNow);
      console.log("rightNow is : " + rightNow);
   }

   displayTime()

});
