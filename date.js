function date() {
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    if (month < 10) {
        month = "0" + month;
    }
    if (day < 10) {
        day = "0" + day;
    }
    document.getElementById('date').innerHTML = document.getElementById('date').innerHTML + day + "." + month + "." + year;
}

date();

function time() {
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

    if (hour < 10) {
        hour = "0" + hour;
    }
    if (minute < 10) {
        minute = "0" + minute;
    }
    if (second < 10) {
        second = "0" + second;
    }
    document.getElementById('time').innerHTML = "" + hour + ":" + minute + ":" + second;
    setTimeout(time, 500);
}

time();

var endtime = new Date("Dec 24, 2022 18:00:00");
var endezeit = endtime.getTime();

var timer = setInterval(function () {

    var datetoday = new Date();
    var datumheute = datetoday.getTime();

    var delta = endezeit - datumheute;

    var day = Math.floor(delta / (1000 * 60 * 60 * 24));
    var hour = Math.floor((delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minute = Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60));
    var second = Math.floor((delta % (1000 * 60)) /1000);

    document.getElementById('timer').innerHTML = "Dem Oli seine Weihnachtsgans gibts in : " + day + " Tage " + hour + " Stunden " + minute + " Minuten " + second + " Sekunden";

}, 1000);

