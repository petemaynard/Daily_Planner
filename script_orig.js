// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var startTime=9;
var numberOfHours=9;
var timeDisplayEl = $('#currentDay');
console.log("Setting timeDisplayEl to : "+timeDisplayEl);
var calendarItemDisplayEl = $('.calendar-display');
console.log("start calendarItemsDisplayEl is: " + calendarItemDisplayEl);
var calendarItemInputEl = $('.description');
console.log("Setting calendarItemInputEl to : "+calendarItemInputEl);

var calendarItems = [
   {description: "it's 9 am", hour: dayjs().set('hour',9)},
   {description: "it's 10 am", hour: dayjs().set('hour',10)},
   {description: "it's 11 am", hour: dayjs().set('hour',11)},
   {description: "it's 12 pm", hour: dayjs().set('hour',12)},
   {description: "it's 1 pm", hour: dayjs().set('hour',13)},
   {description: "it's 2 pm", hour: dayjs().set('hour',14)},
   {description: "it's 3 pm", hour: dayjs().set('hour',15)},
   {description: "it's 4 pm", hour: dayjs().set('hour',16)},
   {description: "it's 5 pm", hour: dayjs().set('hour',17)}
]; // Will hold an array of items entered into calendar

function displayTime() {
   console.log("I am just starting function displayTime");
   var rightNow = dayjs().format('dddd, MMM DD, YYYY');
   timeDisplayEl.text(rightNow);
   console.log("rightNow is : "+rightNow);
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



   // Select all the data currently in storage.  Create empty array if nothing exists.  Do this at the start of the script won't need to run again.
function readAllFromStorage() {
   console.log("I am just starting function readAllFromStorage");
   var calendarItems = localStorage.getItem('calendarItems');
   console.log("I have just read from local storage, calendarItems is : "+calendarItems);
   if (calendarItems) {
      calendarItems = JSON.parse(calendarItems);
   } else {
      calendarItems = [];
   }
   console.log("calendarItems is now parsed as : " + calendarItems);
   return calendarItems;
}


// Takes an array of calendar items and saves them in local storage
function saveCalItemsToStorage(calendarItems) {
   console.log("I am just starting function saveCalItemsToStorage");
   console.log("I am writiing calendarItems to storate as : "+ calendarItems);
  localStorage.setItem('calendarItems', JSON.stringify(calendarItems));
}

// Call this function each time there has been a new entry on the calendar (i.e. when the "save" button is clicked).
// It will refresh ALL calendar events
function displayCalendarItems(){
   console.log("I am just starting function displayCalendarItems");
// Order of events:
// Read all records from local storage and write to page, adding html
//  -- clear current calendar items from array (not storage)
  console.log("Line 77 calendarItems is : " + calendarItemDisplayEl);
  calendarItemDisplayEl.empty();
//  -- get calendar data from local storage
var calendarItems = readAllFromStorage();
console.log("Just read all items from storage. calendarItems is : "+calendarItems);
//  -- loop through each hour and create a row
console.log("Number of entries is " + calendarItems.length);
for (var i = 9; i < 17; i ++) {
   var calItem = calendarItems[i];
   var description = calItem.description;
   var calTime = dayjs().hour(i).hour(); //dayjs(calItem.time);

   // Create the rows for the calendaer
   var  divIdEl = $('<div>');
   var  divChild = $('<div>');
   var textDesc = $('<textarea>').description;


//  -- add time-block class (past, present, future) by comparing current time to calendar time

   // Get current hour in 24-hour format (00 - 23)
   var hourNow = dayjs().hour(23);
   console.log("hourNow is :" + hourNow);
   // Save the index of the calendar entry as a data-attribute on the save button.  THis will be used when updating the project from the array.
    var saveBtn = $('<button class ="btn saveBtn btn-save-item col-2 col-md-1" data-index="' + i +'"> <i class="fas fa-save"></i></button>');
    console.log("The Save Button looks like : " + saveBtn);
   // Add class to row by comparing calendar row time to current time
   if (calTime.isBefore(hourNow)) {
      divIdEl.addClass('row time-block past');
   } else if (calTime.isSame(hourNow)){
      divIdEl.addClass('row time-block present');
   } else {
      divIdEl.addClass('row time-block future');
   }
   console.log("divIdEl before adding classes is : " + divIdEl);

// Add additional IDs, classes, and text as needed
   divIdEl.setAttribute('id', 'hour-' +i);
   divChild.addClass(('col-2 col-md-1 hour text-center py-3'));
   if (i < 12) {
   divChild.textContent=i + "AM";
   } else {
      divChild.textContent=i + "PM";
   }
   textDesc.addClass('col-8 col-md-10 description');
   textDesc.setAttribute("rows", "3");
   saveBtn.addClass('btn saveBtn col-2 col-md-1');


   // -- add the elements to display them
divIdEl.append(divChild, textDesc, saveBtn);
console.log("divIdEl after adding stuff is : " + divIdEl);
calendarItemDisplayEl.append(divIdEl);
}
}  // End of displayCalendarItems

function handleSaveCalItems(){
   console.log("I am just starting function handleSaveCalItems");
  var calIndex = parseInt($(this).attr('data-index'));
  console.log("calIndex is : "+calIndex);
  var calendarItems = readAllFromStorage();
  calendarItems.push(calIndex,1);
  saveCalItemsToStorage();

  // Print calendar Items

  displayCalendarItems();

}

// Add an event listener to the "save" buttons and update the calendar array by basically replacing it

function updateCalendar(newHourBlock) {
   console.log("I am just starting function updateCalendar");
   // Search for the one item that was changed by ignoring all the items that didn't change
   calendar = calendarItems.map(function (hourBlock) {
      if (hourBlock.hour !== newHourBlock.hour) return hourBlock;
      hourBlock.description = newHourBlock.description;
      return hourBlock;
   })
   // Now that the calendar array is updated, need to update storage with the new values by submitting whole array.
   saveCalItemsToStorage();
   // Now update the web page
   displayCalendarItems();

}

console.log("I am just before the listener.");
calendarItemDisplayEl.on('click', '.btn-save-item', handleSaveCalItems);

console.log("I am right before displayTime");
displayTime();
// setInterval(displayTime, 1000);

updateCalendar();

// Set the listener for the save buttons
console.log("I am going to display calendar items.");
displayCalendarItems();