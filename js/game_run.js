game.canvas = document.getElementById('game');
game.context = game.canvas.getContext('2d');

game.canvas.width=window.innerWidth;
game.canvas.height=window.innerHeight;
game.context.scale(game.widthScale,game.heightScale);

game.context.mouse = {
    x: 0,
    y: 0,
    clicked: false,
    down: false
}

game.canvas.addEventListener("mousemove", function (e) {
    game.context.mouse.x = e.offsetX/game.widthScale;
    game.context.mouse.y = e.offsetY / game.heightScale;
    //game.context.mouse.clicked = (e.which == 1 && !game.context.mouse.down);
    //game.context.mouse.down = (e.which == 1);
});

game.canvas.addEventListener("mousedown", function(e) {
    game.context.mouse.clicked = !game.context.mouse.down;
    game.context.mouse.down = true;
});

game.canvas.addEventListener("mouseup", function(e) {
    game.context.mouse.down = false;
    game.context.mouse.clicked = false;
});

// wait one second before starting animation
setTimeout(function() {
    game.startTime = (new Date()).getTime();

    //This function is the main tick for the game
    game.update();
}, 1000);