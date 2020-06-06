var i = 0;
var txt = 'HEALTH CARE';
var speed = 400;

function typeMsg() {
    if (i < txt.length) {
        document.getElementById('health-care').innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeMsg, speed);
    }
    setInterval(500);
}
