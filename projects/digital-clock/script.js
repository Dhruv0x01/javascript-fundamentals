// Digital Clock Program

function updateClock(){
    const now = new Date();
    let hours = now.getHours(); 

    const meridiem = hours >= 12 ? "PM" : "AM";

    hours = hours>12 ? hours%12: hours;
    hours = hours.toString().padStart(2, 0);
    const mins = now.getMinutes().toString().padStart(2, 0); 
    const secs = now.getSeconds().toString().padStart(2, 0);

    const timeString = `${hours}:${mins}:${secs} ${meridiem}`;

    document.getElementById(`clock`).textContent = timeString;
}

updateClock();

// To get this clock to update every second
setInterval(updateClock, 1000);
// It will call the function repeatedly every 1000ms -> we send callback


// to have two elements like 02 and not 2, we convert to string and used padStart method in string
// padStart(2, 0) for the first two characters, pad them with 0

// To have in normal time and not military
