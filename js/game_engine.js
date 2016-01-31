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
    this.costPP=new game.StatNumber(costPP);
    this.costCult=new game.StatNumber(costCult);
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

//TextWrap for description paragraphs because canvas doesnt do this 
game.TextWrap=function(background,x_offset,y_offset,text,font,fillStyle,lineWidth,strokeStyle, maxWidth, lineHeight){
    game.Text.call(this, background,x_offset,y_offset,text,font,fillStyle,lineWidth,strokeStyle);
    this.maxWidth=maxWidth;
    this.lineHeight=lineHeight;
    
}  
game.TextWrap.prototype=Object.create(game.Text.prototype);
game.TextWrap.prototype.constructor=game.TextWrap;

      
game.TextWrap.prototype.render=function(context) {
    if(this.visible) {
        context.font=this.font;
        context.textBaseline="top";
        context.fillStyle=this.fillStyle;
        context.strokeStyle=this.strokeStyle;
        context.lineWidth=this.lineWidth;

        //to prevent ugly spike
        context.lineJoin='round';
        context.miterLimit=2;

        var bgy=this.background.y;
        
        var words = this.text.split(' ');
        var line = '';
        for(var n = 0; n < words.length; n++) {
            var testLine = line + words[n] + ' ';
            var metrics = context.measureText(testLine);
            var testWidth = metrics.width;
            if (testWidth > this.maxWidth && n > 0) {
                context.strokeText(line, this.background.x+this.x_offset, bgy+this.y_offset);
                context.fillText(line, this.background.x+this.x_offset, bgy+this.y_offset);

                line = words[n] + ' ';
                bgy += this.lineHeight;
            }
            else {
                line = testLine;
            }
        }
        context.strokeText(line,this.background.x+this.x_offset, bgy+this.y_offset);
        context.fillText(line,this.background.x+this.x_offset, bgy+this.y_offset);
    }
 
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

game.Overlay=function(button, width, height, x_offset, y_offset){
    this.width=width;
    this.height=height;
    this.button=button;
    this.x_offset=x_offset;
    this.y_offset=y_offset;
    this.background = new game.Background(this.button.x+x_offset, this.button.y+y_offset, this.width, this.height, "img/description.png");
    this.description=new game.TextWrap(this.background,25,55,this.button.description,"bold 18pt lucida console ","white",3,"#5f3c0f",470,28);
    this.coin = new game.Background(this.button.x+x_offset+20, this.button.y+y_offset+12, 37, 37, "img/coin.png");
    this.costPP=new game.TextNumber(this.background,65,15,"0","bold 28pt lucida console ","white",6,"#5f3c0f",this.button.toolStats.costPP);
    
    this.happy = new game.Background(this.button.x+x_offset+150, this.button.y+y_offset+12, 37, 37, "img/happy.png");
    this.costCult=new game.TextNumber(this.background,195,15,"0","bold 28pt lucida console ","white",6,"#5f3c0f",this.button.toolStats.costCult);
    
    
    game.overlays.push(this);
    
}

game.Overlay.prototype.render=function(context){
    this.background.render(context);
    this.coin.render(context);
    this.happy.render(context);
}

game.Overlay.prototype.setVisible=function(visible){
    this.background.setVisible(visible);
    this.coin.setVisible(visible);
    this.happy.setVisible(visible);
}

game.Overlay.prototype.update=function(){
    this.background.update();
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
//It has a Background(as per its superclass)
//toolStats holds the cost and rate of production of the tool, as well as the number
game.ToolButton = function(x,y,width,height,bgString,title,toolStats, tabString, tab, description) {
    var _background = "img/" + tabString + "_tool_icons/" + tabString + "_" + bgString + ".png";
    this.textArray=[];
    game.Button.call(this,x,y,width,height,_background);
    this.toolStats=toolStats;
    this.costPPText=new game.TextNumber(this,300,55,"0","bold 28pt lucida console ","white",6,"#5f3c0f",this.toolStats.costPP);
    this.costPPText.visible=this.visible;
    this.costCultText=new game.TextNumber(this,450,55,"0","bold 28pt lucida console ","white",6,"#5f3c0f",this.toolStats.costCult);
    this.costCultText.visible=this.visible;
    this.numToolsText=new game.TextNumber(this,150,55,"0","bold 28pt lucida console ","white",6,"#5f3c0f",this.toolStats.numTools);
    this.numToolsText.visible=this.visible;
    this.title=title;
    this.titleText=new game.Text(this,150,5,this.title,"bold 30pt lucida console ","white",6,"#5f3c0f");
    this.bgString=bgString;
    this.tabString=tabString;
    this.tab=tab;
    this.negBgSrc=_background.substring(0,_background.length-4)+"_negative.png";
    this.negBackground=new game.Background(this.x,this.y,this.width,this.height,this.negBgSrc);
    this.description=description;
    this.overlay=new game.Overlay(this,500, 200, 580,-100);
}

game.ToolButton.prototype=Object.create(game.Button.prototype);
game.ToolButton.prototype.constructor=game.ToolButton;

game.ToolButton.prototype.update=function(context){
    if(this.hovered && this.visible){
        this.overlay.setVisible(true);}
    else{
        this.overlay.setVisible(false);
    }
    if (this.tab.tabVisible){
        this.negBackground.setVisible(true);
    } else {
        this.negBackground.setVisible(false);
    }
    game.Button.prototype.update.call(this,context);
    
    if(this.tab.tabVisible) {
        if (game.playerStats.prayerPoints.number>this.toolStats.costPP.number && game.playerStats.cultists.number>this.toolStats.costCult.number){
            this.background.setVisible(true);
            this.negBackground.setVisible(false);
        } else {
            this.background.setVisible(false);
            this.negBackground.setVisible(true);
        }
    }
    for(var x=0;x<this.textArray.length;x++) {
        this.textArray[x].update();
    }
}

game.ToolButton.prototype.render=function(context){
    this.negBackground.render(context);
    game.Button.prototype.render.call(this, context);
    for(var x=0;x<this.textArray.length;x++) {
        this.textArray[x].render(context);
    }
}

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

game.ToolButton.prototype.setVisible=function(visible) {
    game.Button.prototype.setVisible.call(this,visible);
    for(var x=0;x<this.textArray.length;x++) {
        this.textArray[x].setVisible(visible);
    }
}

//An UpgradeButton has an effect on some game system
//Typically, this will be increasing the effectiveness of a Tool
//UpgradeButtons are smaller squares that have no text
game.UpgradeButton=function(x,y,width,height,bgString,costStats,toolStats, tabString, num, tab, description) {
    this.description=description;
    var _background = "img/" + tabString + "_upgrades/upgrade_" + bgString + num.toString() + ".png";
    game.Button.call(this,x,y,width,height,_background);
    this.costStats=costStats;
    this.toolStats=toolStats;
    this.disabled=false;
    var negBgSrc=_background.substring(0,_background.length-4)+"_negative.png";
    this.negBackground=new game.Background(x,y,width,height,negBgSrc);
    this.negBackground.setVisible(true);
    this.tabString=tabString;
    this.bgString=bgString;
    this.tab=tab;
    this.num=num;
    this.overlay = new game.Overlay(this, 500, 250, 34, 45);
}

game.UpgradeButton.prototype=Object.create(game.Button.prototype);
game.UpgradeButton.prototype.constructor=game.UpgradeButton;

game.UpgradeButton.prototype.render=function(context){
    this.negBackground.render(context);
    game.Button.prototype.render.call(this,context);
}

//UpgradeButtons will have their applyUpgrade() methods coded in the game initialization
//It will then destroy itself, as Upgrades can only be bought once
game.UpgradeButton.prototype.onClick = function() {
    //this.applyUpgrade();
    if(game.playerStats.prayerPoints.number>=Math.floor(this.costStats.costPP.number) && game.playerStats.cultists.number>=Math.floor(this.costStats.costCult.number)) {
        //Costs are stored as floats, but are used and displayed as ints
        game.playerStats.prayerPoints.number-=Math.floor(this.costStats.costPP.number);
        game.playerStats.cultists.number-=Math.floor(this.costStats.costCult.number);
        this.toolStats.prodRateCult.number*=1.2;
        this.toolStats.prodRatePris.number*=1.2;
        this.toolStats.prodRateExec.number*=1.2;
        //destroy this/make it invisible forever
        this.setVisible(false);
        this.negBackground.setVisible(true);
        this.disabled=true;
    }
}

game.UpgradeButton.prototype.update=function(context){
    if(this.hovered && this.visible){
        this.overlay.setVisible(true);
    }
    else{
        this.overlay.setVisible(false);
    }
    
    game.Button.prototype.update.call(this,context);
    if (this.disabled &&  game.playerStats.prayerPoints.number>this.costStats.costPP.number && game.playerStats.cultists.number>this.costStats.costCult.number){
        this.disabled=false;
        if (this.num <3){
            this.num++;
        }
        else{
            this.disabled=true;
        }
        this.background.img.src="img/" + this.tabString + "_upgrades/upgrade_" + this.bgString + this.num.toString() + ".png";   
        this.negBackground.img.src=this.background.img.src.substring(0,this.background.img.src.length-4)+"_negative.png";
        if (this.tab.tabVisible){
            this.setVisible(true);
        }
    }
}
game.UpgradeButton.prototype.setVisible=function(visible) {
    if(!this.disabled) {
        this.visible=visible;
        this.background.setVisible(visible);
        this.negBackground.setVisible(visible);
    } else {
        this.visible=false;
        this.background.setVisible(false);
        this.negBackground.setVisible(visible);
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
    this.spriteCreated=false;
}

game.Sprite.prototype.render = function(context) {
    if(this.visible) {
        context.drawImage(this.img,
                  this.x, this.y,
                  this.width, this.height);
    }
}

game.Sprite.prototype.update=function() {
    //speed is in pixels per second
    //assume 60 FPS
    this.x+=this.xspeed/60;
    this.y+=this.yspeed/60;
}

game.Sprite.prototype.setVisible=function(visible) {
    this.visible=visible;
}

//A hardcoded sprite of a climber that is animated 
game.SpriteClimber=function(x,y,width,height,xspeed,yspeed,imgSrc,maxIndex,imgScale,color) {
    //sprite image urls start with their color
    game.Sprite.call(this,x,y,width,height,xspeed,yspeed,"img/sprites/"+color+imgSrc);
    //keep track of the current image index
    this.imageIndex=0;
    this.maxIndex=maxIndex;
    //number of frames the same image has been on screen for
    this.numFrames=0;
    //this.maxFramesSame=game.maxFramesSame;
    this.maxFramesSame=2;
    this.imgScale=imgScale;
    this.color=color;
    this.spriteCreated=true;
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
    if(this.y<300) {
        this.destroy=true;
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
                  this.width*this.imgScale, this.height*this.imgScale);
    }
}

game.SpriteClimber.prototype.onDestroy=function() {
    var head=new game.SpriteHead(1405+40*Math.random(),350,135,135,0,30,"head.png",1.2+.5*Math.random(),this.color);
    head.setVisible(true);
    game.sprites.unshift(head); //behind the cloud
}

game.SpriteHead=function(x,y,width,height,xspeed,yspeed,imgSrc,rotationSpd,color) {
    game.Sprite.call(this,x,y,width,height,xspeed,yspeed,"img/sprites/"+color+imgSrc);
    this.rotationSpd=rotationSpd;
    this.rotationAngle=0;
    this.color=color;
    this.imgScale=0.33;
    this.destroy=false;
}

game.SpriteHead.prototype=Object.create(game.Sprite.prototype);
game.SpriteHead.prototype.constructor=game.SpriteHead;

game.SpriteHead.prototype.update=function() {
    game.Sprite.prototype.update.call(this);
    this.rotationAngle+=this.rotationSpd/60;
    if(this.y>800) {
        this.destroy=true;
    }
}

game.SpriteHead.prototype.render=function(context) {
    context.save();
    context.translate(this.x,this.y);
    context.rotate(this.rotationAngle);
    if(this.visible) {
        context.drawImage(this.img,
                  -this.width/2*this.imgScale,-this.height/2*this.imgScale,
                  this.width*this.imgScale, this.height*this.imgScale);
    }
    context.restore();
}

game.SpriteHead.prototype.onDestroy=function() {
    //pass
}

game.SpriteCloud=function(x,y,width,height,xspeed,yspeed,imgSrc,maxFrames,maxDisplacement) {
    game.Sprite.call(this,x,y,width,height,xspeed,yspeed,imgSrc);
    this.numFrames=0;
    this.maxFrames=maxFrames;
    this.position=0;
    this.maxDisplacement=maxDisplacement;
    this.direction=1;
}

game.SpriteCloud.prototype=Object.create(game.Sprite.prototype);
game.SpriteCloud.prototype.constructor=game.SpriteCloud;

//SpriteClouds just bob, up and down by 1 pixel
game.SpriteCloud.prototype.update=function() {
    this.numFrames+=1;
    if(this.numFrames>=this.maxFrames) {
        this.numFrames-=this.maxFrames;
        this.y-=this.position;
        this.position+=this.direction;
        if(this.position<=0 || this.position>=this.maxDisplacement) {
            this.direction=-this.direction;
        }
        this.y+=this.position;
    }
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

//An Achievement is a popup that has a trigger method checkCondition()
//Each update, checkCondition is checked
//if it is met, the Achievement pops up, then destroys itself
game.Achievement=function(x,y,imgSrc,text) {
    this.x=x;
    this.y=y;
    this.ySpeed=-20;
    this.minY=900;
    this.width=300;
    this.height=60;
    this.background=new game.Background(x,y,this.width,this.height,"img/description.png");
    this.achievementIcon=new game.Background(x+5,y+5,50,50,imgSrc);
    this.text=text;
    this.textObject=new game.Text(this.background,60,10,this.text,"bold 20pt lucida console ","white",6,"#5f3c0f")
    this.active=false;
    this.activeFrames=0;
    this.maxActiveFrames=240;
    this.destroy=false;
}

game.Achievement.prototype.update=function() {
    this.background.update();
    this.achievementIcon.update();
    this.active=this.checkCondition();
    if(this.active) {
        this.setVisible(true);
        this.activeFrames++;
        if(this.activeFrames>=this.maxActiveFrames) {
            this.destroy=true;
        }
        if(this.y>this.minY) {
            this.y+=this.ySpeed/60;
        }
    } else {
        this.setVisible(false);
    }
}

game.Achievement.prototype.setVisible=function(visible) {
    this.background.setVisible(visible);
    this.achievementIcon.setVisible(visible);
}

game.Achievement.prototype.render=function(context) {
    if(this.active) {
        this.background.render(context);
        this.achievementIcon.render(context);
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
    
    game.playerStats.totalExecuted.number+=realExecutionRate/60;
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
    //update the mood of the sun
    if(sunMultiplier==1.5) {
        game.sun.mood="happy";
    } else {
        if(sunMultiplier>0.75) {
            game.sun.mood="normal";
        } else {
            if(sunMultiplier>0.5) {
                game.sun.mood="sad";
            } else {
                game.sun.mood="angry";
            }
        }
    }
        
    //apply cultist rate
    game.playerStats.cultists.number+=game.playerStats.prodRateCult.number/60;
    if (game.playerStats.cultists.number>game.playerStats.totalCultists.number){
        game.playerStats.totalCultists.number=game.playerStats.cultists.number;
    }
    
    //apply prisoner rate
    game.playerStats.prisoners.number+=game.playerStats.prodRatePris.number/60;
    if(game.playerStats.prisoners.number<0) {
        game.playerStats.prisoners.number=0;
    }
    
    //apply PP rate
   game.playerStats.totalPrayerPoints.number+=realExecutionRate/60*game.playerStats.ppMultiplier.number*sunMultiplier;  game.playerStats.prayerPoints.number+=realExecutionRate/60*game.playerStats.ppMultiplier.number*sunMultiplier;    
    
    //check all achievements
    for(var x=0;x<game.achievements.length;x++) {
        game.achievements[x].update();
    }
    //check all achievements for destroy
    var y=game.achievements.length-1;
    while(y>=0) {
        if(game.achievements[y].destroy) {
            game.achievements[y].setVisible(false);
            game.achievements.splice(y,1);
        }
        y--;
    }
    
    //render all objects in order
    for(var x=0;x<game.backgrounds.length;x++) {
        game.backgrounds[x].render(game.context);
    }
    
    //render dynamic sprites(backgrounds since they are static) on panels
    var yLocs=[267,384,500,617,734,849,964];
    var convNames=['book','soapbox','speaker','podium','camcorder','computer','laptop'];
    var convStats=[game.playerStats.booksStats,game.playerStats.soapboxStats,game.playerStats.speakerStats,
game.playerStats.podiumStats,
game.playerStats.camcorderStats,
game.playerStats.computerStats,
game.playerStats.laptopStats];
    var convWidths=[29,50,51,43,47,75,60];
    var convHeights=[53,82,78,50,69,67,63];
    
    var capNames=['net','lasso','trapdoor','van','invasion','phaser','cloning'];
    var capStats=[game.playerStats.netStats,
game.playerStats.lassoStats,
game.playerStats.trapdoorStats,
game.playerStats.vanStats,
game.playerStats.invasionStats,
game.playerStats.phaserStats,
game.playerStats.cloningStats];
    var capWidths=[55,63,54,85,50,40,44];
    var capHeights=[65,66,33,55,66,72,82];

        var execStats=[game.playerStats.knifeStats,
game.playerStats.cleaversStats,
game.playerStats.axeStats,
game.playerStats.bladeStats,
game.playerStats.guillotineStats,
game.playerStats.sawStats,
game.playerStats.lightsaberStats];
    var execNames=['knife','cleaver','axe','blade','guillotine','saw','lightsaber'];
    var execWidths=[63,69,93,108,107,57,54];
    var execHeights=[70,73,73,108,99,73,74];
    
    if(game.conversionTab.tabVisible) {
        for(var x=0;x<yLocs.length;x++) {
            var numIter=Math.min(15,convStats[x].numTools.number);
            for(var y=game.numConvSprites[x];y<numIter;y++) {
                var tempSprite=new game.Sprite(646+y*41,yLocs[x]+20*(y%2),convWidths[x],convHeights[x],0,0,"img/conversion_panel_icons/panel_"+convNames[x]+"_person"+(y%3+1)+".png");
                tempSprite.setVisible(true);
                this.sprites.unshift(tempSprite);
                this.conversionObjects.push(tempSprite);
                game.numConvSprites[x]+=1;
            }
        }
    } else if(game.captureTab.tabVisible) {
        for(var x=0;x<yLocs.length;x++) {
            var numIter=Math.min(15,capStats[x].numTools.number);
            for(var y=game.numCapSprites[x];y<numIter;y++) {
                var tempSprite=new game.Sprite(646+y*41,yLocs[x]+20*(y%2),capWidths[x],capHeights[x],0,0,"img/capture_panel_icons/panel_capture_"+capNames[x]+"_person"+(y%3+1)+".png");
                tempSprite.setVisible(true);
                this.sprites.unshift(tempSprite);
                this.captureObjects.push(tempSprite);
                game.numCapSprites[x]+=1;
            }
        }
    } else if(game.executionTab.tabVisible) {
        for(var x=0;x<yLocs.length;x++) {
            var numIter=Math.min(15,execStats[x].numTools.number);
            for(var y=game.numExecSprites[x];y<numIter;y++) {
                var tempSprite=new game.Sprite(646+y*41,yLocs[x]+20*(y%2),execWidths[x],execHeights[x],0,0,"img/execution_panel_icons/panel_execution_"+execNames[x]+"_person"+(y%3+1)+".png");
                tempSprite.setVisible(true);
                this.sprites.unshift(tempSprite);
                this.executionObjects.push(tempSprite);
                game.numExecSprites[x]+=1;
            }
        }
    }
    
    
    for(var x=0;x<game.buttons.length;x++) {
        game.buttons[x].render(game.context);
    }
    
    for(var x=0;x<game.tabs.length;x++) {
        game.tabs[x].render(game.context);
    }
    
    //render the sun
    game.sun.img.src=game.sun.imgSrc+game.sun.mood+".png";
    game.context.drawImage(game.sun.img,game.sun.x,game.sun.y,game.sun.img.width,game.sun.img.height);
    
    //update and render sprites last for performance
    for(var x=0;x<game.sprites.length;x++) {
        game.sprites[x].update();
    }
    
    //Iterate backwards through array, so indexes of remaining sprites don't change on delete
    var x=game.sprites.length-1;
    while(x>=0) {
        if(game.sprites[x].destroy) {
            
            if(game.sprites[x].spriteCreated) {
                game.sprites[x].onDestroy();
                game.sprites.splice(x+1,1);
            } else {
                game.sprites[x].onDestroy();
                game.sprites.splice(x,1);
            }
        } 
        x--;
    }
    
    for(var x=0;x<game.sprites.length;x++) {
        game.sprites[x].render(game.context);
    }
    
    //render all achievements(if active)
    for(var x=0;x<game.achievements.length;x++) {
        game.achievements[x].render(this.context);
    }
    
    for (var x=0; x<game.overlays.length; x++){
        game.overlays[x].render(game.context);
    }
    
    //update and render lava
    game.lava.update();
    game.lava.render(game.context);
    
    //update and render stat tracker panel
    game.trackerPanel.update();
    game.trackerPanel.render(game.context);
    game.cultistsIcon.render(game.context);
    game.prayerPointsIcon.render(game.context);
    game.prisonersIcon.render(game.context);
    
    //spawn climbers
    game.climberFrames+=1;
    game.climberCount+=realExecutionRate/60;
    if(game.climberCount>=1) {
        if(game.climberFrames>=game.maxClimberFrames) {
            game.climberFrames-=game.maxClimberFrames;
            game.climberCount-=1;
            var newClimber=new game.SpriteClimber(1750+30*Math.random(),800+30*Math.random(),136,328,-50,-100,"climb_strip16.png",16,0.33,game.climberColors[Math.floor(game.climberColors.length*Math.random())]);
            newClimber.setVisible(true);
            game.sprites.splice(game.sprites.length-3,0,newClimber);
        }
    }   
    
    game.playerStats.time = game.startTime-(new Date()).getTime();
    
    // request new frame
     requestAnimFrame(function() {
      game.update(game.context);
    });
}
