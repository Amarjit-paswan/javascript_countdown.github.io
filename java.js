var end_date = "04 July 2024 4:18 PM";
document.getElementById("end_time").innerText = end_date;

var inputs = document.querySelectorAll("input");

var clock = () => {
    var end = new Date(end_date);
    var now = new Date();
    var diff = (end-now)/1000;
    console.log(Math.floor(diff));

    if(diff < 0) return;
    inputs[0].value = Math.floor(diff/3600/24);
    inputs[1].value = Math.floor(diff/3600)%24;
    inputs[2].value = Math.floor(diff/60)%60;
    inputs[3].value = Math.floor(diff)%60;



}

clock();

setInterval( ()=>{
    clock()
},1000);
