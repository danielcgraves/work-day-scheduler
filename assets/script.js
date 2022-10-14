//Psuedocode

//3. Color code time blocks to indicate whether they are past, present or future
//4. Make the time block have text entry that is able to be saved to localStorage
//5. If the page is refreshed, the time blocks persist.


var dateToday = dayjs();
$("#currentDay").text(dateToday.format("dddd, MMMM DD"));


