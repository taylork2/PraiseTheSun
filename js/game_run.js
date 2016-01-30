var b1 = 0;

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

// Add mousemove and mousedown events to the canvas
canvas.addEventListener("mousemove", trackPosition, true);
canvas.addEventListener("mousedown", btnClick, true);

var gameObjects=[]; //this array holds all game objects
//define game objects here




var myRectangle = {
x: 0,
y: 75,
width: 100,
height: 50,
borderWidth: 5
};

drawRectangle(myRectangle, context);

// wait one second before starting animation
setTimeout(function() {
    var startTime = (new Date()).getTime();
    animate(myRectangle, canvas, context, startTime);
}, 1000);