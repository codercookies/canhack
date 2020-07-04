// Change the time every second
var changeTime = window.setInterval(calculateTime, 1000);


function calculateTime() {
	// Set the constant(s); the number of milliseconds per day
	const milliseconds_per_day = 1000 * 60 * 60 * 24;
	
	// Create date objects for Canada Day in 1867, Canada Day in the current year, and today
	const date_now = new Date();
	const canada_day = new Date("July 1, 1867");
	const year_canada_day = new Date("July 1, " + date_now.getUTCFullYear());
	
	// Calculate the number of years, days, hours, minutes, and seconds since Canada Day
	const year = date_now.getUTCFullYear() - canada_day.getUTCFullYear();
	const day = Math.round((date_now - year_canada_day) / milliseconds_per_day);
	const hour = date_now.getHours();
	const minute = date_now.getMinutes();
	const second = date_now.getSeconds();
	
	// Set the date values to the corresponding HTML tags
	document.getElementById("years").innerHTML = year;
	document.getElementById("days").innerHTML = day;
	document.getElementById("hours").innerHTML = hour;
	document.getElementById("minutes").innerHTML = minute;
	document.getElementById("seconds").innerHTML = second;
}

calculateTime();