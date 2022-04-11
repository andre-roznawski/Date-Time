function date ()
{
    var date = new Date ();
    var day = date.getDate ();
    var month = date.getMonth () + 1;
    var year = date.getFullYear ();
    
    if (month <10 ){
        month = "0" + month;
    } 
    if (day <10 ){
        day = "0" + day;
    } 
    document.getElementById('date').innerHTML = document.getElementById('date').innerHTML + day + "." + month + "." +year;
}

date ();

function time ()
{
    var date = new Date ();
    var hour = date.getHours();
    var minute = date.getMinutes ();
    var second = date.getSeconds ();

    if (hour <10 ){
        hour = "0" + hour;
    } 
    if (minute <10 ){
        minute = "0" + minute;
    } 
    if (second <10 ){
        second = "0" + second;
    } 
    document.getElementById('time').innerHTML = "" + hour + ":" + minute + ":" + second;
    setTimeout(time, 500);
}

time ();


