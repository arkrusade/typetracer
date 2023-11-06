
var time = 0; // pressing time
var pressed = 0; // key is pushed or not ?

var timer = setInterval(calculate, 10); // calculate time
var events = [];

/* 
track tim between keydown events
track times between pairs of keys
e -> r 
vs
r -> e
*/

$("#txt").on("keydown",function (e) {
    if(e.originalEvent.repeat) {
        return;
    }
    pressed = 1;
    events.push(e);
    
    console.log('events time', e.key, events[events.length-1].timeStamp);
    // console.log('events', events);
});

$("#txt").on("keyup",function (e) {
    events.push(e);
    console.log('events time', e.key, events[events.length-1].timeStamp);
    pressed = 0;
    $("#label").html("Pressing Time : " + time + " ms");
    time = 0
});

function calculate() { // increase pressing time if key is pressed !!
    if (pressed == 1) {
        time += 1;
    }
}
