//outlining types of objects, as per object-oriented Javascript
//objects are defined and stored as variables in the namespace

var game=[]; //This is the Javascript namespace, from which all other variables can be reached

//all objects are located at their top left corner

//a Background is a non-animated image that is either static or follows a Button
//Backgrounds and other objects can be visible or invisible
//If invisible, block all interactivity and do not render
game.Background=function(x,y,width,height,imgSrc) {
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
    this.img=new Image();
    this.img.width=this.width;
    this.img.height=this.height;
    this.img.onload=function() {this.imgReady=true;}
    this.img.src=imgSrc;
    this.textArray=[]; //an array of text objects
    this.visible=false;
}

game.Background.prototype.render = function(context) {
    //Backgrounds 
    if(this.visible && this.img.imgReady) {
        context.drawImage(this.img,this.x,this.y,this.img.width,this.img.height);
    }
    for(var x=0;x<this.textArray.length;x++) {
        this.textArray[x].render(context);
    }
}

game.Background.prototype.setVisible=function(visible) {
    this.visible=visible;
    for(var x=0;x<this.textArray.length;x++) {
        this.textArray[x].setVisible(visible);
    }
}

game.Background.prototype.update=function(context){

    for(var x=0;x<this.textArray.length;x++) {
        this.textArray[x].update(context);
    }
}

//Statistics tracker
game.StatNumber=function(number){
    this.number=number;
}

game.CostStats=function(costPP,costCult) {
    this.costPP=costPP;
    this.costCult=costCult;
}

game.ToolStats=function(costPP,costCult,prodRateCult,prodRatePris,prodRateExec,numTools) {
    this.costPP=new game.StatNumber(costPP);
    this.costCult=new game.StatNumber(costCult);
    this.prodRatePris=new game.StatNumber(prodRatePris);
    this.prodRateCult=new game.StatNumber(prodRateCult);
    this.prodRateExec=new game.StatNumber(prodRateExec);
    this.numTools=new game.StatNumber(numTools);
}

//Text objects are offset from a Background and go on top of it
//Whenever the Background is drawn, the Text it has will be drawn after on top of it
//The location of the text is relative to the location of the Background
game.Text=function(background,x_offset,y_offset,text,font,fillStyle,lineWidth,strokeStyle) {
    this.background=background; //linked Background
    this.x_offset=x_offset;
    this.y_offset=y_offset;
    this.visible=false;
    this.text=text;
    this.font=font;
    this.fillStyle=fillStyle;
    this.lineWidth=lineWidth;
    this.strokeStyle=strokeStyle;
    this.background.textArray.push(this); //add this text to the background
}

game.Text.prototype.render = function(context) {
    if(this.visible) {
        context.font=this.font;
        context.textBaseline="top";
        context.fillStyle=this.fillStyle;
        context.strokeStyle=this.strokeStyle;
        context.lineWidth=this.lineWidth;

        //to prevent ugly spike
        context.lineJoin='round';
        context.miterLimit=2;

    context.strokeText(this.text,this.background.x+this.x_offset,this.background.y+this.y_offset);           context.fillText(this.text,this.background.x+this.x_offset,this.background.y+this.y_offset);
    }
}

game.Text.prototype.update = function(context){
    
}

game.Text.prototype.setVisible = function(visible) {
    this.visible=visible;
}


//Numbers are text objects that display numbers
//They dynamically update the text within to match an internal counter
//Formatting for larger numbers e.g. 1 billion, 2.014 e24
game.TextNumber=function(background,x_offset,y_offset,text,font,fillStyle,lineWidth,strokeStyle,trackedStat) {
                game.Text.call(this,background,x_offset,y_offset,text,font,fillStyle,lineWidth,strokeStyle); //Numbers are a subclass of Text
    this.trackedStat=trackedStat;
    this.suffixes=['','k','m','b','t'];
}

game.TextNumber.prototype=Object.create(game.Text.prototype);
game.TextNumber.prototype.constructor=game.TextNumber;

game.TextNumber.prototype.update = function(context){
    if(this.trackedStat.number<1000) {
        this.text=Math.floor(this.trackedStat.number);
    } else{
        var power=Math.floor(Math.log10(this.trackedStat.number));
        var order=Math.floor(power/3);
        if(Math.log10(this.trackedStat.number)<15) {
            this.text=Math.floor(this.trackedStat.number/Math.pow(10,3*order))+this.suffixes[order];
        } else {
            this.text=parseFloat(this.trackedStat.number/Math.pow(10,power)).toFixed(1)+"e"+power;
        }
    }
}

//a Button is a rectangular canvas element that can be clicked
//Buttons are invisible, but are coupled with background elements that move with them
game.Button=function(x,y,width,height,imgSrc) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.clicked = false;
    this.hovered = false;
    this.background=new game.Background(x,y,width,height,imgSrc); //the background of the button
    this.visible=false;
}

//These prototype methods will be inherited by all buttons
game.Button.prototype.intersects=function(mouse) {
    var t = 2; //tolerance
    var xIntersect = (mouse.x + t) > this.x && (mouse.x - t) < this.x + this.width;
    var yIntersect = (mouse.y + t) > this.y && (mouse.y - t) < this.y + this.height;
    return  xIntersect && yIntersect;
}

game.Button.prototype.updateStats=function(context){
    //update whether the button has been clicked
    if (this.intersects(context.mouse)) {
        this.hovered = true;
        if (context.mouse.down) {
            this.clicked = true;
        } else {
            this.clicked = false;
        }
    } else {
        this.hovered = false;
    }

    if (!context.mouse.down) {
        this.clicked = false;
    }
}

game.Button.prototype.update = function(context) {
    var wasNotClicked = !this.clicked;
    this.updateStats(context);

    //check if after updating, the button is now clicked
    if (this.visible && this.clicked && wasNotClicked) {
        this.onClick();
    }
    
    this.background.update(context);
}

game.Button.prototype.render = function(context) {
    //Buttons are invisible interactible areas, do not render
    //Backgrounds should be drawn instead
    this.background.render(context);
}

game.Button.prototype.move = function(x,y) {
    this.x=x;
    this.y=y;
    this.background.x=x;
    this.background.y=y;
}

game.Button.prototype.setVisible=function(visible) {
    this.visible=visible;
    this.background.setVisible(visible);
}

//Now we're getting into the game logic
//A ToolButton is a type of Button that represents a Tool
//Tools, when purchased, affect the rate of production
//It has a Background(as per its superclass), Numbers that represent the cost
game.ToolButton = function(x,y,width,height,background,title,toolStats) {
    game.Button.call(this,x,y,width,height,background);
    this.toolStats=toolStats;
    this.costPPText=new game.TextNumber(this.background,300,55,"0","bold 28pt lucida console ","white",6,"#5f3c0f",this.toolStats.costPP);
    this.costPPText.visible=this.visible;
    this.costCultText=new game.TextNumber(this.background,450,55,"0","bold 28pt lucida console ","white",6,"#5f3c0f",this.toolStats.costCult);
    this.costCultText.visible=this.visible;
    this.numToolsText=new game.TextNumber(this.background,150,55,"0","bold 28pt lucida console ","white",6,"#5f3c0f",this.toolStats.numTools);
    this.numToolsText.visible=this.visible;
    this.title=title;
    this.titleText=new game.Text(this.background,150,5,this.title,"bold 30pt lucida console ","white",6,"#5f3c0f");
}

game.ToolButton.prototype=Object.create(game.Button.prototype);
game.ToolButton.prototype.constructor=game.ToolButton;

//When clicked, a ToolButton will buy one more of that tool, provided the cost is appropriate
game.ToolButton.prototype.onClick = function() {
    if(game.playerStats.prayerPoints.number>=Math.floor(this.toolStats.costPP.number) && game.playerStats.cultists.number>=Math.floor(this.toolStats.costCult.number)) {
        this.toolStats.numTools.number+=1;
        //Costs are stored as floats, but are used and displayed as ints
        game.playerStats.prayerPoints.number-=Math.floor(this.toolStats.costPP.number);
        game.playerStats.cultists.number-=Math.floor(this.toolStats.costCult.number);
        //Update the costs by a scaling factor
        this.toolStats.costPP.number*=game.playerStats.costPPMultiplier.number;
        this.toolStats.costCult.number*=game.playerStats.costCultMultiplier.number;
    }
}

//An UpgradeButton has an effect on some game system
//Typically, this will be increasing the effectiveness of a Tool
//UpgradeButtons are smaller squares that have no text
game.UpgradeButton=function(x,y,width,height,background,costStats,toolStats) {
    Button.call(this,x,y,width,height,background);
    this.costStats=costStats;
    this.toolStats=toolStats;
    this.disabled=false;
}

game.UpgradeButton.prototype=Object.create(game.Button.prototype);
game.UpgradeButton.prototype.constructor=game.UpgradeButton;

//UpgradeButtons will have their applyUpgrade() methods coded in the game initialization
//It will then destroy itself, as Upgrades can only be bought once
game.UpgradeButton.prototype.onClick = function() {
    //this.applyUpgrade();
    if(game.playerStats.prayerPoints.number>=Math.floor(this.toolStats.costPP.number) && game.playerStats.cultists.number>=Math.floor(this.toolStats.costCult.number)) {
        this.toolStats.numTools.number+=1;
        //Costs are stored as floats, but are used and displayed as ints
        game.playerStats.prayerPoints.number-=Math.floor(this.toolStats.costPP.number);
        game.playerStats.cultists.number-=Math.floor(this.toolStats.costCult.number);
        this.toolStats.prodRateCult*=1.2;
        this.toolStats.prodRatePris*=1.2;
        this.toolStats.prodRateExec*=1.2;
        //destroy this/make it invisible forever
        this.setVisible(false);
        this.disabled=true;
    }
}

game.UpgradeButton.prototype.setVisible=function(visible) {
    if(!this.disabled) {
        this.visible=visible;
    } else {
        this.visible=false;
    }
}

//a Sprite is a moving, animated object with no interactivity, that can be destroyed
game.Sprite=function(x,y,width,height,xspeed,yspeed,imgSrc) {
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
    this.xspeed=xspeed;
    this.yspeed=yspeed;
    this.img=new Image();
    this.imgSrc=imgSrc; //source file of image
    this.img.src=this.imgSrc;
    this.destroy=false;
    this.visible=false;
}

game.Sprite.prototype.render = function(context) {
    if(this.visible) {
        context.drawImage(this.img,
                  this.x, this.y,
                  this.width, this.height,
                  0, 0,
                  this.width, this.height);
    }
}

game.Sprite.prototype.update=function() {
    //speed is in pixels per second
    //assume 60 FPS
    this.x+=this.xspeed/60;
    this.y+=this.yspeed/60;
}

//A hardcoded sprite of a climber that is animated 
game.SpriteClimber=function(x,y,width,height,xspeed,yspeed,imgSrc,maxIndex) {
    game.Sprite.call(this,x,y,width,height,xspeed,yspeed,imgSrc);
    //keep track of the current image index
    this.imageIndex=0;
    this.maxIndex=maxIndex;
    //number of frames the same image has been on screen for
    this.numFrames=0;
    //this.maxFramesSame=game.maxFramesSame;
    this.maxFramesSame=2;
}

game.SpriteClimber.prototype=Object.create(game.Sprite.prototype);
game.SpriteClimber.prototype.constructor=game.SpriteClimber;

game.SpriteClimber.prototype.update=function() {
    game.Sprite.prototype.update.call(this);
    this.numFrames++;
    if(this.numFrames>=this.maxFramesSame) {
        //switch the image
        this.imageIndex+=1;
        if(this.imageIndex>=this.maxIndex) {
            this.imageIndex=0;
        }
        //reset the same frame counter
        this.numFrames-=this.maxFramesSame;
    }
}

game.SpriteClimber.prototype.render = function(context) {
    //SpriteClimber's image has multiple sprites of animation
    //Based on the imageIndex, cut out the appropriate sprite
    if(this.visible) {
        context.drawImage(this.img,
                  this.width*this.imageIndex, 0,
                  this.width, this.height,
                  this.x, this.y,
                  this.width, this.height);
    }
}

game.SpriteClimber.prototype.setVisible=function(visible) {
    this.visible=visible;
}

//A Scrollbar is a Background with another movable Background on top of it
//When dragged with the mouse, a Scrollbar translates
game.Scrollbar=function(x,y,width,height,backgroundBar,backgroundScroller,gameObjects) {
    
}

//A Tab is a button that, when clicked, toggles the visibility(and interactivity) of a set of game objects
game.Tab=function(x,y,width,height,background,gameObjects) {
    game.Button.call(this,x,y,width,height,background);
    this.gameObjects=gameObjects;
    this.tabVisible=false;
}

game.Tab.prototype=Object.create(game.Button.prototype);
game.Tab.prototype.constructor=game.Tab;

game.Tab.prototype.onClick=function() {
    //needs to shut off all other tabs
    for(var x=0;x<game.tabs.length;x++) {
        //shut off tab
        game.tabs[x].setTabVisible(false);
    }
    this.setTabVisible(true);
}

game.Tab.prototype.setTabVisible=function(visible){
    this.tabVisible=visible;
    //turn on this tab
    for(var x=0;x<this.gameObjects.length;x++) {
        this.gameObjects[x].setVisible(visible);
    }
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

game.update=function() {
    //clear the screen
    game.context.clearRect(0, 0, game.canvas.width, game.canvas.height);
    
    //update all objects to reflect the new game state
    for(var x=0;x<game.buttons.length;x++) {
        game.buttons[x].update(game.context);
    }

    for(var x=0;x<game.backgrounds.length;x++) {
        game.backgrounds[x].update(game.context);
    }
    
    for(var x=0;x<game.tabs.length;x++) {
        game.tabs[x].update(game.context);
    }
    
    //update all stats
    //recalculate all the production rates
    var conversionRate=0;
    for(var x=0;x<game.conversionToolButtons.length;x++) {
        var tempToolStats=game.conversionToolButtons[x].toolStats;
        conversionRate+=tempToolStats.prodRateCult.number*tempToolStats.numTools.number;
    }
    
    var captureRate=0;
    for(var x=0;x<game.captureToolButtons.length;x++) {
        var tempToolStats=game.captureToolButtons[x].toolStats;
        captureRate+=tempToolStats.prodRatePris.number*tempToolStats.numTools.number;
    }
    
    var executionRate=0;
    for(var x=0;x<game.executionToolButtons.length;x++) {
        var tempToolStats=game.executionToolButtons[x].toolStats;
        executionRate+=tempToolStats.prodRateExec.number*tempToolStats.numTools.number;
    }
    
    game.playerStats.prodRateCult.number=conversionRate;
    game.playerStats.prodRateExec.number=executionRate;
    
    game.playerStats.prodRatePris.number=captureRate-executionRate;
    //if there are not enough prisoners, cannot execute them
    var realExecutionRate=0;
    if(game.playerStats.prisoners.number>0||game.playerStats.prodRatePris>0) {
        realExecutionRate=executionRate;
    } else {
        realExecutionRate=captureRate;
    }
    
    game.playerStats.prodRatePris.number=captureRate-realExecutionRate;
    
    //check sun happiness
    var sunMultiplier=1.5;//normally bonus
    if(realExecutionRate<0.75*Math.max(executionRate,captureRate)) {
        if(realExecutionRate>0.25*Math.max(executionRate,captureRate)) {
            sunMultiplier=1-(0.75*Math.max(executionRate,captureRate)-realExecutionRate)/Math.max(executionRate,captureRate);
        } else {
            sunMultiplier=0.5;
        }
    } 
        
    //apply cultist rate
    game.playerStats.cultists.number+=game.playerStats.prodRateCult.number/60;
    
    //apply prisoner rate
    game.playerStats.prisoners.number+=game.playerStats.prodRatePris.number/60;
    if(game.playerStats.prisoners.number<0) {
        game.playerStats.prisoners.number=0;
    }
    
    //apply PP rate
    game.playerStats.prayerPoints.number+=realExecutionRate/60*game.playerStats.ppMultiplier.number*sunMultiplier;    
    
    //render all objects in order
    for(var x=0;x<game.backgrounds.length;x++) {
        game.backgrounds[x].render(game.context);
    }
    
    for(var x=0;x<game.buttons.length;x++) {
        game.buttons[x].render(game.context);
    }
    
    for(var x=0;x<game.tabs.length;x++) {
        game.tabs[x].render(game.context);
    }
    
    //update and render sprites last for performance
    
    for(var x=0;x<game.sprites.length;x++) {
        game.sprites[x].update();
    }
    
    //Iterate backwards through array, so indexes of remaining sprites don't change on delete
    var x=game.sprites.length-1;
    while(x>=0) {
        if(game.sprites[x].destroy) {
            game.sprites[x].onDestroy();
            game.sprites.splice(x,1);
        }
        x--;
    }
    
    for(var x=0;x<game.sprites.length;x++) {
        game.sprites[x].render(game.context);
    }
    
    // request new frame
     requestAnimFrame(function() {
      game.update(game.context);
    });
}

/*function drawRectangle(myRectangle, context) {
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
}*/