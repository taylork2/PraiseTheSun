


var b1 = 0;

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
context.scale(game.widthScale,game.heightScale);

var myRectangle = {
x: 0,
y: 75,
width: 100,
height: 50,
borderWidth: 5
};

//drawRectangle(myRectangle, context);

// wait one second before starting animation
setTimeout(function() {
    var startTime = (new Date()).getTime();
    //animate(myRectangle, canvas, context, startTime);
    
    //This function is the main tick for the game
    game.update(context);
    console.log(game);
}, 1000);