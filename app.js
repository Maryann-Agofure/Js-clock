
function myClock(){
    const fullDate = new Date();
    const hours = fullDate.getHours();
    const mins = fullDate.getMinutes();
    const secs = fullDate.getSeconds();
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = ":" +  mins;
    document.getElementById("seconds").innerHTML = ":" + secs;
};
setInterval(myClock, 1000);
