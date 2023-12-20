
// setting time 
// set Interval is used for repeating the same function after an interval
setInterval(() => {
    a = new Date()

    document.getElementById('hour').innerHTML = a.getHours();
    document.getElementById('minute').innerHTML = a.getMinutes();
    document.getElementById('second').innerHTML = a.getSeconds();
}, 1000);




function darkmode() {
    if (document.getElementById('drkBtn').innerHTML === "Dark mode") {
        document.getElementById('Color').style.backgroundColor = "rgba(0, 0, 0, 0.582)";
        document.getElementById('drkBtn').innerHTML = 'Light mode';
        document.getElementById('drkBtn').style.backgroundColor = "rgba(0, 0, 0, 0.582)"
        document.getElementById('drkBtn').style.color = "white"
        document.getElementById('Color').style.color = "white";
    }
    else if (document.getElementById('drkBtn').innerHTML === "Light mode") {
        document.getElementById('Color').style.backgroundColor = "white";
        document.getElementById('drkBtn').innerHTML = 'Dark mode';
        document.getElementById('drkBtn').style.backgroundColor = "white"
        document.getElementById('drkBtn').style.color = "black"
        document.getElementById('Color').style.color = "black";
    }
}
