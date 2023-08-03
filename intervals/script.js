// number of seconds that have passed
let time = 0;
// reference to the <span> containing the number
let counterElement = document.getElementById("time");


setInterval(function () {counterElement.innerHTML = time += 1}, 1000);