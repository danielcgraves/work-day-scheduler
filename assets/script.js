//Psuedocode

//4. Make the time block have text entry that is able to be saved to localStorage
//5. If the page is refreshed, the time blocks persist.

//Save Button Variables

var saveNineAm = $("#save-9am");

var saveTenAm = $("#save-10am");

var saveElevenAm = $("#save-11am");

var saveTwelvePm = $("#save-12pm");

var saveOnePm = $("#save-1pm");

var saveTwoPm = $("#save-2pm");

var saveThreePm = $("#save-3pm");

var saveFourPm = $("#save-4pm");

var saveFivePm = $("#save-5pm");

//Text Area Variables

var nineAmText = $("#9am");

var tenAmText = $("#10am");

var elevenAmText = $("#11am");

var twelvePmText = $("#12pm");

var onePmText = $("#1pm");

var twoPmText = $("#2pm");

var threePmText = $("#3pm");

var fourPmText = $("#4pm");

var fivePmText = $("#5pm");



//Calling the dayjs time
dayjs().hour()
var currentTime = dayjs().hour();

//Calling the dayjs date
var dateToday = dayjs();
$("#currentDay").text(dateToday.format("dddd, MMMM DD"));

//Function that sets all of the time slots time and colors.
function timeSlot() {
    if (currentTime > 9) {
        $("#9am").addClass("past");
    }   else if (currentTime === 9) {
        $("#9am").addClass("present");
    }   else {
        $("#9am").addClass("future");
    }

    if (currentTime > 10) {
        $("#10am").addClass("past");
    }   else if (currentTime === 10) {
        $("#10am").addClass("present");
    }   else {
        $("#10am").addClass("future");
    }

    if (currentTime > 11) {
        $("#11am").addClass("past");
    }   else if (currentTime === 11) {
        $("#11am").addClass("present");
    }   else {
        $("#11am").addClass("future");
    }

    if (currentTime > 12) {
        $("#12pm").addClass("past");
    }   else if (currentTime === 12) {
        $("#12pm").addClass("present");
    }   else {
        $("#12pm").addClass("future");
    }

    if (currentTime > 13) {
        $("#1pm").addClass("past");
    }   else if (currentTime === 13) {
        $("#1pm").addClass("present");
    }   else {
        $("#1pm").addClass("future");
    }

    if (currentTime > 14) {
        $("#2pm").addClass("past");
    }   else if (currentTime === 14) {
        $("#2pm").addClass("present");
    }   else {
        $("#2pm").addClass("future");
    }

    if (currentTime > 15) {
        $("#3pm").addClass("past");
    }   else if (currentTime === 15) {
        $("#3pm").addClass("present");
    }   else {
        $("#3pm").addClass("future");
    }

    if (currentTime > 16) {
        $("#4pm").addClass("past");
    }   else if (currentTime === 16) {
        $("#4pm").addClass("present");
    }   else {
        $("#4pm").addClass("future");
    }

    if (currentTime > 17) {
        $("#5pm").addClass("past");
    }   else if (currentTime === 17) {
        $("#5pm").addClass("present");
    }   else {
        $("#5pm").addClass("future");
    }

}

timeSlot()

//Setting Local Storage

//9am

saveNineAm.click(function() {
    localStorage.setItem("9am Item", nineAmText.val());
});

//10am

saveTenAm.click(function() {
    localStorage.setItem("10am Item", tenAmText.val());
});

//11am

saveElevenAm.click(function() {
    localStorage.setItem("11am Item", elevenAmText.val());
});

//12pm

saveTwelvePm.click(function() {
    localStorage.setItem("12pm Item", twelvePmText.val());
});

//1pm

saveOnePm.click(function() {
    localStorage.setItem("1pm Item", onePmText.val());
});

//2pm

saveTwoPm.click(function() {
    localStorage.setItem("2pm Item", twoPmText.val());
});

//3pm

saveThreePm.click(function() {
    localStorage.setItem("3pm Item", threePmText.val());
});

//4pm

saveFourPm.click(function() {
    localStorage.setItem("4pm Item", fourPmText.val());
});

//5pm

saveFivePm.click(function() {
    localStorage.setItem("5pm Item", fivePmText.val());
});



//Getting Local Storage

function saveUserInput() {

    //9am

    var previousNineAmText = localStorage.getItem("9am Item");
    if (previousNineAmText !== null) {
        nineAmText.val(previousNineAmText);
    }

    //10am

    var previousTenAmText = localStorage.getItem("10am Item");
    if (previousTenAmText !== null) {
        tenAmText.val(previousTenAmText);
    }

    //11am

    var previousElevenAmText = localStorage.getItem("11am Item");
    if (previousElevenAmText !== null) {
        elevenAmText.val(previousElevenAmText);
    }

    //12pm

    var previousTwelvePmText = localStorage.getItem("12pm Item");
    if (previousTwelvePmText !== null) {
        twelvePmText.val(previousTwelvePmText);
    }

    //1pm

    var previousOnePmText = localStorage.getItem("1pm Item");
    if (previousOnePmText !== null) {
        onePmText.val(previousOnePmText);
    }

    //2pm

    var previousTwoPmText = localStorage.getItem("2pm Item");
    if (previousTwoPmText !== null) {
        twoPmText.val(previousTwoPmText);
    }

    //3pm

    var previousThreePmText = localStorage.getItem("3pm Item");
    if (previousThreePmText !== null) {
        threePmText.val(previousThreePmText);
    }

    //4pm

    var previousFourPmText = localStorage.getItem("4pm Item");
    if (previousFourPmText !== null) {
        fourPmText.val(previousFourPmText);
    }

    //5pm

    var previousFivePmText = localStorage.getItem("5pm Item");
    if (previousFivePmText !== null) {
        fivePmText.val(previousFivePmText);
    }


}

saveUserInput()



