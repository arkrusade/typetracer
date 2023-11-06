
var time = 0; // pressing time
var pressed = 0; // key is pushed or not ?

var timer = setInterval(calculate, 10); // calculate time
var events = [];

$("#txt").keydown(function(e){
pressed = 1;
events.push(e);
console.log('events', events);
});

$("#txt").keyup(function(e){
events.push(e);
pressed = 0;
$("#label").html("Pressing Time : "+time+" ms");
time = 0
});

function calculate() { // increase pressing time if key is pressed !!
    if (pressed == 1) {
        time += 1;
    }
}
