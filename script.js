window.onload= function () {
    var d = new Date();
    if(d.getMinutes()<10){
        var hours= "0"+d.getMinutes();
    }
    else{
        var hours = d.getMinutes();
    }
    var date = d.getHours() + ":" + hours;
    document.getElementById('time').innerHTML = date;
}

