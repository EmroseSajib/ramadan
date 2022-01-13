const ramjanTime = "25 April 2022";
const daysDiv = document.getElementById("days");
const hoursDiv = document.getElementById("hours");
const minsDiv = document.getElementById("mins");
const secsDiv = document.getElementById("secs");


function countdown() {
    const ramjanDay = new Date(ramjanTime);
    const currentday = new Date();
    const totaltime = (ramjanDay - currentday) / 1000;
    const days = Math.floor(totaltime / 3600 / 24);
    const hours = Math.floor(totaltime / 3600) % 24;
    const mins = Math.floor(totaltime / 60) % 60;
    const seconds = Math.floor(totaltime) % 60;



    daysDiv.innerHTML = days;
    hoursDiv.innerHTML = hours;
    minsDiv.innerHTML = mins;
    secsDiv.innerHTML = seconds;

}
countdown();
setInterval(countdown, 1000);