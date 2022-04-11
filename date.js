function date ()
{
    var date = new Date ();
    var day = date.getDate ();
    var month = date.getMonth () + 1;
    var year = date.getFullYear ();
    document.getElementById('date').innerHTML = document.getElementById('date').innerHTML + day + "." + month + "." +year;
}

date ();

