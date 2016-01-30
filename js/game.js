//outlining types of objects, as per object-oriented Javascript
//objects are defined and stored as variables in the namespace

//all objects are located at their top left corner

//a Background is a non-animated image that is either static or follows a Button
var Background=function(x,y,width,height,image) {
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
    this.image=image;
}

//a Button is a rectangular canvas element that can be clicked
//Buttons are invisible, but are coupled with background elements that move with them
var Button=function(x,y,width,height,background) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.clicked = false;
    this.hovered = false;
    this.background=background; //the background of the button
    
}

//These prototype methods will be inherited by all buttons
Button.prototype.intersects=function(mouse) {
    var t = 5; //tolerance
    var xIntersect = (mouse.x + t) > this.x && (mouse.x - t) < this.x + this.width;
    var yIntersect = (mouse.y + t) > this.y && (mouse.y - t) < this.y + this.height;
    return  xIntersect && yIntersect;
}

Button.prototype.updateStats=function(canvas){
    //update whether the button has been clicked
    if (this.intersects(this, canvas.mouse)) {
        this.hovered = true;
        if (canvas.mouse.clicked) {
            this.clicked = true;
        }
    } else {
        this.hovered = false;
    }

    if (!canvas.mouse.down) {
        this.clicked = false;
    }
}

Button.prototype.update = function(canvas) {
    var wasNotClicked = !this.clicked;
    this.updateStats(canvas);
    
    //check if after updating, the button is now clicked
    if (this.clicked && wasNotClicked) {
        this.onClick();
    }
}

Button.prototype.render = function(context) {
    //Buttons are invisible interactible areas, do not draw
    //Backgrounds should be drawn instead
}

//a Sprite is a moving, animated object with no interactivity, that can be destroyed
var Sprite=function(x,y,width,height,xspeed,yspeed,image) {
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
    this.xspeed=xspeed;
    this.yspeed=yspeed;
    this.image=image; //source file of image
    this.destroy=false;
}

Sprite.prototype.render = function(context) {
    ctx.drawImage(resources.get(this.url),
                  this.x, this.y,
                  this.width, this.height,
                  0, 0,
                  this.width, height);
}

window.requestAnimFrame = (function(callback) {
    return window.requestAnimationFrame     || 
        window.webkitRequestAnimationFrame  || 
        window.mozRequestAnimationFrame     || 
        window.oRequestAnimationFrame       || 
        window.msRequestAnimationFrame      ||
    function(callback) {
    //lock to 60 FPS
      window.setTimeout(callback, 1000 / 60);
    };
})();

window.cancelRequestAnimFrame = (function(callback) {
	return window.cancelAnimationFrame            ||
		window.webkitCancelRequestAnimationFrame  ||
		window.mozCancelRequestAnimationFrame     ||
		window.oCancelRequestAnimationFrame       ||
		window.msCancelRequestAnimationFrame      ||
		clearTimeout
})();

function drawRectangle(myRectangle, context) {
    context.beginPath();
    context.rect(myRectangle.x, myRectangle.y, myRectangle.width, myRectangle.height);
    context.fillStyle = '#8ED6FF';
    context.fill();
    context.lineWidth = myRectangle.borderWidth;
    context.strokeStyle = 'black';
    context.stroke();
}

function animate(myRectangle, canvas, context, startTime) {
    // update
    var time = (new Date()).getTime() - startTime;

    var linearSpeed = 100;
    // pixels / second
    var newX = linearSpeed * time / 1000;

    if(newX < canvas.width - myRectangle.width - myRectangle.borderWidth / 2) {
      myRectangle.x = newX;
    }

    // clear
    context.clearRect(0, 0, canvas.width, canvas.height);

    drawRectangle(myRectangle, context);

    // request new frame
    requestAnimFrame(function() {
      animate(myRectangle, canvas, context, startTime);
    });
}
