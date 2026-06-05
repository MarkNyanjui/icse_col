// Defining a function to greet a user
function greetings(name) {
    var fname = name; // Local variable to store the name
    // Spot day time
    var today = new Date();
    var hour = today.getHours();

    // Return appropriate greeting based on the time of day
    if (hour < 12) {
        var greet = "Good morning, " + fname + "!";
    } else if (hour < 18) {
        var greet = "Good afternoon, " + fname + "!";
    } else {
        var greet = "Good evening, " + fname + "!";
    }
    return greet; // Return the greeting message
}

function startTime() {
    var today = new Date(); // Create a new Date object representing the current date and time
    var day = today.getDate();
    var month = today.getMonth(); // Months are zero-based
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    month = months[month]; // Get the name of the month
    var year = today.getFullYear();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    var weekday = today.getDay(); // 0 (Sunday) to 6 (Saturday)

    var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    weekday = weekdays[weekday]; // Get the name of the weekday

    document.getElementById('date').innerHTML = weekday + ", " + month + " " + day + ", " + year; // Display the date
    document.getElementById('time').innerHTML = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds); // Display the time
    document.getElementById('DateTime').innerHTML = weekday + ", " + month + " " + day + ", " + year + " " + formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds); // Display the date and time together
    var t = setTimeout(startTime, 1000); // Update the time every second
}
function formatTime(i) {
    if (i < 10) { i = "0" + i }  // Add leading zero to minutes and seconds if they are less than 10
    return i;
}

function daysInMonth(TimeDate) {
    // calculate the number of days in the current month
    var currentMonth = TimeDate.getMonth() + 1; // Get the current month (0-11)
    var months_with_30_days = [4, 6, 9, 11]; // April, June, September, November
    var months_with_31_days = [1, 3, 5, 7, 8, 10, 12]; // January, March, May, July, August, October, December
    var february_month = 2; // February
    if (months_with_30_days.includes(currentMonth)) {
        var daysInMonth = 30;
    } else if (months_with_31_days.includes(currentMonth)) {
        var daysInMonth = 31;
    } else if (currentMonth === february_month) {
        // Check for leap year
        var year = TimeDate.getFullYear();
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            var daysInMonth = 29; // Leap year
        } else {
            var daysInMonth = 28; // Non-leap year
        }
    } else {
        var daysInMonth = 0; // Default case, should not occur
    }
    return daysInMonth; // Return the number of days in the current month
}