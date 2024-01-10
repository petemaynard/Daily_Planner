// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var startTime=9;
var numberOfHours=9;
var timeDisplayEl = $('#currentDay');
var calendarItemDisplayEl = $('.time-block');
var calendarItemInputEl = $('.description');

var calendarItems; // Will hold an array of items entered into calendar

function displayTime() {
   var rightNow = dayjs().format('dddd, MMM DD, YYYY');
   timeDisplayEl.text(rightNow);
}


$(function () {
   // TODO: Add a listener for click events on the save button. 
   //      The save button has id #fas #fa-save
   // This code should
   // use the id in the containing time-block as a key to save the user input in
   // local storage. HINT: What does `this` reference in the click listener
   // function? How can DOM traversal be used to get the "hour-x" id of the
   // time-block containing the button that was clicked? How might the id be
   // useful when saving the description in local storage?
   //
   // TODO: Add code to apply the past, present, or future class to each time
   // block by comparing the id to the current hour. HINTS: How can the id
   // attribute of each time-block be used to conditionally add or remove the
   // past, present, and future classes? How can Day.js be used to get the
   // current hour in 24-hour time?
   //
   // TODO: Add code to get any user input that was saved in localStorage and set
   // the values of the corresponding textarea elements. HINT: How can the id
   // attribute of each time-block be used to do this?
   //
   // TODO: DONE: Add code to display the current date in the header of the page.



});




function readAllFromStorage() {
   // Select all the data currently in storage.  Create empty array if nothing exists.  Do this at the start of the script won't need to run again.
   var calendarItems = localStorage.getItem('calendarItems');
   if (calendarItems) {
      calendarItems = JSON.parse(calendarItems);
   } else {
      calendarItems = [];
   }
   return calendarItems;
}


// Takes an array of calendar items and saves them in local storage
function saveCalItemsToStorage() {
   // Update 
  localStorage.setItem("calendarItems", JSON.stringify(calendarItems));
}

// Call this function each time there has been a new entry on the calendar (i.e. when the "save" button is clicked).
// It will refresh ALL calendar events
function displayCalendarItems(){
// Order of events:
// Read all records from local storage and write to page, adding html
//  -- clear current calendar items from array (not storage)
  calendarItemEl.empty();
//  -- get calendar data from local storage
//  -- loop through each hour and create a row
//  -- add time-block class (past, present, future) by comparing current time to calendar time
//  -- add the elements to display them







  // Wipe out existing data on each calendar hour
 

  // Replace with all new data

}


// Add an event listener to the "save" buttons and update the calendar array by basically replacing it

function updateCalendar(newHourBlock) {
   // Search for the one item that was changed by ignoring all the items that didn't change
   calendar = calendar.map(function (hourBlock) {
      if (hourBlock.hour !== newHourBlock.hour) return hourBlock;
      hourBlock.message = newHourBlock.message;
      return hourBlock;
   })
   // Now that the calendar array is updated, need to update storage with the new values by submitting whole array.
   updateStorage();
   // Now update the web page
   displayCalendar();

}



displayTime();
// setInterval(displayTime, 1000);

// Set the listener for the save buttons
