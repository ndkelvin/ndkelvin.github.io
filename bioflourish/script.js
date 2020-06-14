var i = 0;
var heading = "QUALITY HEALTHCARE";
var speed = 200;

function writeHeading() {
    if (i < heading.length) {
        document.getElementById('healthcare').innerHTML += heading.charAt(i);
        i++;
        setTimeout(writeHeading, speed);

    }
}

 /*let letters=['Q','U','A','L','I','T','Y',' ','H','E','A','L','T','H','C','A','R','E'];

 function writeletters (){
     document.getElementById('healthcare').innerHTML + letters;

 }*/