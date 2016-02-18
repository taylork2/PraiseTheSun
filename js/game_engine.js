//outlining types of objects, as per object-oriented Javascript
//objects are defined and stored as variables in the namespace

var game=[]; //This is the Javascript namespace, from which all other variables can be reached

//a GameObject is an object within the game
//it has a position and size, a list of child objects and a single parent object
//it also has the render, update, and setVisible methods
//all objects are located at their top left corner
game.GameObject = function (x, y, width, height, parent) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.childObjects = [];
    if (parent != undefined) {
        this.parent = parent;
    }
    this.visible = false;
}

//The render method should display the object to the screen in some way
//It then displays all children, which appear above it
game.GameObject.prototype.render = function (context) {
    if (this.visible) {
        for (var x = 0; x < this.childObjects.length; x++) {
            this.childObjects[x].render(context);
        }
    }
}

//The update method should update the parameters of the object each game loop
//The default method is unimplemented and should always be overridden
game.GameObject.prototype.update = function () {
    for (var x = 0; x < this.childObjects.length; x++) {
        this.childObjects[x].update(game.context);
    }
}

//The setVisible method should be used to make an object visible
//It also updates the visibility of all child objects
game.GameObject.prototype.setVisible = function (visible) {
    this.visible = visible;
    for (var x = 0; x < this.childObjects.length; x++) {
        this.childObjects[x].setVisible(visible);
    }
}

//a Background is a non-animated image that is either static or follows a Button
//Backgrounds and other objects can be visible or invisible
//If invisible, block all interactivity and do not render
game.Background = function (x, y, width, height, parent, imgSrc) {
    game.GameObject.call(this, x, y, width, height, parent);
    this.img = new Image();
    this.img.width = this.width;
    this.img.height = this.height;
    this.img.onload = function () { this.imgReady = true; }
    this.img.src = imgSrc;
}

game.Background.prototype = Object.create(game.GameObject.prototype);
game.Background.prototype.constructor = game.Background;

//The Background draws an image to the screen
//Backgrounds, as all GameObjects, are drawn relative to their parent
game.Background.prototype.render = function (context) {
    if (this.visible && this.img.imgReady) {
        if (this.parent == undefined) {
            context.drawImage(this.img, this.x, this.y, this.img.width, this.img.height);
        } else {
            context.drawImage(this.img, this.parent.x + this.x, this.parent.y + this.y, this.img.width, this.img.height);
        }
    }
    game.GameObject.prototype.render.call(this, context);
}

game.Background.prototype.setVisible = function (visible) {
    game.GameObject.prototype.setVisible.call(this, visible);
}

game.CostStats = function (costPP, costCult) {
    this.costPP = costPP;
    this.costCult = costCult;
}

game.ToolStats = function (costPP, costCult, prodRateCult, prodRatePris, prodRateExec, numTools) {
    this.costPP = costPP;
    this.costCult = costCult;
    this.prodRatePris = prodRatePris;
    this.prodRateCult = prodRateCult;
    this.prodRateExec = prodRateExec;
    this.numTools = numTools;
}

//Text objects draw text to the screen
//Text objects render text in the default font, unless otherwise specified
game.Text = function (parent, x, y, text, font, fillStyle, lineWidth, strokeStyle) {
    game.GameObject.call(this, x, y, null, null, parent);
    this.parent = parent; //linked Background
    this.text = text;
    if (font) {
        this.font = font;
        this.fillStyle = fillStyle;
        this.lineWidth = lineWidth;
        this.strokeStyle = strokeStyle;
    } else {
        this.font = "bold 28pt lucida console";
        this.fillStyle = "white";
        this.lineWidth = 6;
        this.strokeStyle = "#5f3c0f";
    }
    this.parent.childObjects.push(this); //add this text to the background
}

//Text objects render to the screen
game.Text.prototype.render = function(context) {
    if(this.visible) {
        context.font = this.font;
        context.textBaseline = "top";
        context.fillStyle = this.fillStyle;
        context.strokeStyle = this.strokeStyle;
        context.lineWidth = this.lineWidth;

        //to prevent ugly spike
        context.lineJoin = 'round';
        context.miterLimit = 2;
        
        if (this.parent) {
            context.strokeText(this.text, this.parent.x + this.x, this.parent.y + this.y);
            context.fillText(this.text, this.parent.x + this.x, this.parent.y + this.y);
        } else {
            context.strokeText(this.text, this.x, this.y);
            context.fillText(this.text, this.x, this.y);
        }
        //render all child objects (normally none)
        game.GameObject.prototype.render.call(this, context);
    }
}

game.Text.prototype.setVisible = function (visible) {
    game.GameObject.prototype.setVisible.call(this, visible);
}

game.Text.prototype.update = function () {
    game.GameObject.prototype.update.call(this);
}

//TextWrap for description paragraphs because canvas doesnt do this 
game.TextWrap = function (parent, x, y, text, font, fillStyle, lineWidth, strokeStyle, maxWidth, lineHeight) {
    game.Text.call(this, parent, x, y, text, font, fillStyle, lineWidth, strokeStyle);
    this.maxWidth=maxWidth;
    this.lineHeight=lineHeight;
}

game.TextWrap.prototype = Object.create(game.Text.prototype);
game.TextWrap.prototype.constructor = game.TextWrap;

game.TextWrap.prototype.render = function (context) {
    if (this.visible) {
        context.font = this.font;
        context.textBaseline = "top";
        context.fillStyle = this.fillStyle;
        context.strokeStyle = this.strokeStyle;
        context.lineWidth = this.lineWidth;

        //to prevent ugly spike
        context.lineJoin = 'round';
        context.miterLimit = 2;

        var bgy = this.parent.y;
        
        var words = this.text.split(' ');
        var line = '';
        for (var n = 0; n < words.length; n++) {
            var testLine = line + words[n] + ' ';
            var metrics = context.measureText(testLine);
            var testWidth = metrics.width;
            if (testWidth > this.maxWidth && n > 0) {
                context.strokeText(line, this.parent.x + this.x, bgy + this.y);
                context.fillText(line, this.parent.x + this.x, bgy + this.y);

                line = words[n] + ' ';
                bgy += this.lineHeight;
            } else {
                line = testLine;
            }
        }
        context.strokeText(line,this.parent.x+this.x, bgy+this.y);
        context.fillText(line,this.parent.x+this.x, bgy+this.y);
    }
}

//Numbers are text objects that display numbers
//They dynamically update the text within to match an internal counter
//Formatting for larger numbers e.g. 1 billion, 2.014 e24
game.TextNumber = function (parent, x, y, text, font, fillStyle, lineWidth, strokeStyle, statLocation, statIndex) {
    game.Text.call(this, parent, x, y, text, font, fillStyle, lineWidth, strokeStyle); //Numbers are a subclass of Text
    this.statLocation = statLocation;
    this.statIndex = statIndex;
    this.suffixes = ['', 'k', 'm', 'b', 't'];
    this.textSuffix = text;
}

game.TextNumber.prototype = Object.create(game.Text.prototype);
game.TextNumber.prototype.constructor = game.TextNumber;

game.TextNumber.prototype.update = function (context) {
    if (this.statLocation[this.statIndex] < 1000) {
        if (this.statLocation[this.statIndex] < 1 && this.statLocation[this.statIndex] > 0) {
            this.text = "."+Math.floor(this.statLocation[this.statIndex]*10);
        } else {
            this.text = Math.floor(this.statLocation[this.statIndex]);
        }
    } else {
        var power = Math.floor(Math.log10(this.statLocation[this.statIndex]));
        var order = Math.floor(power / 3);
        if (Math.log10(this.statLocation[this.statIndex]) < 15) {
            this.text = Math.floor(this.statLocation[this.statIndex] / Math.pow(10, 3 * order)) + this.suffixes[order];
        } else {
            this.text = parseFloat(this.statLocation[this.statIndex] / Math.pow(10, power)).toFixed(1) + "e" + power;
        }
    }
    this.text += this.textSuffix;
}

game.TextNumber.prototype.setVisible = function (visible) {
    game.GameObject.prototype.setVisible.call(this, visible)
}

//Overlays are objects that appear when a button is hovered over
game.Overlay = function (button, width, height, x, y, produces) {
    game.GameObject.call(this, x, y, width, height, button);
    this.x = x+this.parent.x;
    this.y = y+this.parent.y;
    this.width = width;
    this.height = height;
    this.button = button;
    this.background = new game.Background(0, 0, this.width, this.height, this, "img/description.png");
    this.childObjects.push(this.background);
    this.coin = new game.Background(20, 12, 37, 37, this, "img/coin.png");
    this.childObjects.push(this.coin);
    this.costPP = new game.TextNumber(this, 65, 15, "", "bold 28pt lucida console ", "white", 6, "#5f3c0f", this.button.costStats, "costPP");
    
    this.happy = new game.Background(170, 12, 37, 37, this, "img/happy.png");
    this.childObjects.push(this.happy);
    this.costCult = new game.TextNumber(this, 215, 15, "", "bold 28pt lucida console ", "white", 6, "#5f3c0f", this.button.costStats, "costCult");
    if (produces) {
        this.prodText = new game.Text(this, 25, 62, "Produces:", "bold 18pt lucida console ", "white", 3, "#5f3c0f");
        if (produces == "cult") {
            this.prodIcon = new game.Background(155, 52, 37, 37, this, "img/happy.png");
            this.prodNumber = new game.TextNumber(this, 192, 53, "/s", "bold 28pt lucida console ", "white", 6, "#5f3c0f", this.button.costStats, "prodRateCult");
            this.description = new game.TextWrap(this, 25, 95, this.button.description, "bold 18pt lucida console ", "white", 3, "#5f3c0f", 470, 28);
        } else if (produces == "pris") {
            this.prodIcon = new game.Background(155, 52, 37, 37, this, "img/anger.png");
            this.prodNumber = new game.TextNumber(this, 192, 53, "/s", "bold 28pt lucida console ", "white", 6, "#5f3c0f", this.button.costStats, "prodRatePris");
            this.description = new game.TextWrap(this, 25, 95, this.button.description, "bold 18pt lucida console ", "white", 3, "#5f3c0f", 470, 28);
        } else if (produces == "exec") {
            this.prodIcon = new game.Background(155, 52, 37, 37, this, "img/coin.png");
            this.prodNumber = new game.TextNumber(this, 192, 53, "/s", "bold 28pt lucida console ", "white", 6, "#5f3c0f", this.button.costStats, "prodRateExec");
            this.consText = new game.Text(this, 25, 96, "Consumes:", "bold 18pt lucida console ", "white", 3, "#5f3c0f");
            this.consIcon = new game.Background(155, 94, 37, 37, this, "img/anger.png");
            this.consIcon.setVisible(this.visible);
            this.childObjects.push(this.consIcon);
            this.consNumber = new game.TextNumber(this, 192, 95, "/s", "bold 28pt lucida console ", "white", 6, "#5f3c0f", this.button.costStats, "prodRateExec");
            this.description = new game.TextWrap(this, 25, 137, this.button.description, "bold 18pt lucida console ", "white", 3, "#5f3c0f", 470, 28);
        }
        this.childObjects.push(this.prodIcon);
    } else {
        this.description = new game.TextWrap(this, 25, 65, this.button.description, "bold 18pt lucida console ", "white", 3, "#5f3c0f", 470, 28);
    }
    game.overlays.push(this);
}

//custom to ensure render order
game.Overlay.prototype.render = function (context) {
    this.background.render(context);
    this.coin.render(context);
    this.happy.render(context);
    this.description.render(context);
    this.costPP.render(context);
    this.costCult.render(context);
    if (this.prodText) {
        this.prodText.render(context);
        this.prodIcon.render(context);
        this.prodNumber.render(context);
        if (this.consText) {
            this.consText.render(context);
            this.consIcon.render(context);
            this.consNumber.render(context);
        }
    }
}

game.Overlay.prototype.update = function (context) {
    this.background.update(game.context);
    game.GameObject.prototype.update.call(this, context);
}

game.Overlay.prototype.setVisible = function (visible) {
    game.GameObject.prototype.setVisible.call(this, visible);
}

//a Button is a rectangular canvas element that can be clicked
//Buttons are invisible, but are coupled with background elements that move with them
game.Button=function(x,y,width,height,parent,imgSrc) {
    game.GameObject.call(this, x, y, width, height, parent);
    this.clicked = false;
    this.hovered = false;
    this.background = new game.Background(0, 0, width, height, this, imgSrc); //the background of the button
    this.childObjects.push(this.background);
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
    game.GameObject.prototype.render.call(this, context);
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

//Save button
//Not yet implemented
game.ButtonSave = function(x,y,width,height,parent,imgSrc) {
    game.Button.call(this,x,y,width,height,parent,imgSrc);
}

game.ButtonSave.prototype=Object.create(game.Button.prototype);
game.ButtonSave.prototype.constructor=game.ButtonSave;

game.ButtonSave.prototype.onClick = function(){
    for (var x=0; x<convNames.length;x++){
        localStorage.setItem("playerstats", "hi")
    }
}

//Now we're getting into the game logic
//A ToolButton is a type of Button that represents a Tool
//Tools, when purchased, affect the rate of production
//It has a Background(as per its superclass)
//toolStats holds the cost and rate of production of the tool, as well as the number
game.ToolButton = function (x, y, width, height, parent, bgString, title, toolStats, tabString, tab, description) {
    var _background = "img/" + tabString + "_tool_icons/" + tabString + "_" + bgString + ".png";
    game.Button.call(this, x, y, width, height, parent, _background);
    this.toolStats = toolStats;
    this.costStats = this.toolStats;
    this.costPPText = new game.TextNumber(this, 300, 55, "", "bold 28pt lucida console ", "white", 6, "#5f3c0f", this.toolStats, "costPP");
    this.costPPText.visible = this.visible;
    this.childObjects.push(this.costPPText);
    this.costCultText = new game.TextNumber(this, 450, 55, "", "bold 28pt lucida console ", "white", 6, "#5f3c0f", this.toolStats, "costCult");
    this.costCultText.visible = this.visible;
    this.childObjects.push(this.costCultText);
    this.numToolsText = new game.TextNumber(this, 150, 55, "", "bold 28pt lucida console ", "white", 6, "#5f3c0f", this.toolStats, "numTools");
    this.numToolsText.visible = this.visible;
    this.title = title;
    this.titleText = new game.Text(this, 150, 5, this.title, "bold 30pt lucida console ", "white", 6, "#5f3c0f");
    this.bgString = bgString;
    this.tabString = tabString;
    this.tab = tab;
    this.negBgSrc = _background.substring(0, _background.length - 4) + "_negative.png";
    this.negBackground = new game.Background(0, 0, this.width, this.height, this, this.negBgSrc);
    this.description = description;
    if (this.toolStats.prodRateCult > 0) {
        this.overlay = new game.Overlay(this, 500, 220, 580, -120, "cult");
    } else if (this.toolStats.prodRatePris > 0) {
        this.overlay = new game.Overlay(this, 500, 220, 580, -120, "pris");
    } else if (this.toolStats.prodRateExec > 0) {
        this.overlay = new game.Overlay(this, 500, 220, 580, -120, "exec");
    }
}

game.ToolButton.prototype = Object.create(game.Button.prototype);
game.ToolButton.prototype.constructor = game.ToolButton;

game.ToolButton.prototype.update = function (context) {
    this.overlay.update(context);
    if (this.hovered && this.tab.tabVisible) {
        this.overlay.setVisible(true);
    } else {
        this.overlay.setVisible(false);
    }
    if (this.tab.tabVisible) {
        this.negBackground.setVisible(true);
    } else {
        this.negBackground.setVisible(false);
    }
    game.Button.prototype.update.call(this, context);
    
    if (this.tab.tabVisible) {
        if (game.playerStats["prayerPoints"] > this.toolStats["costPP"] && game.playerStats["cultists"] > this.toolStats["costCult"]) {
            this.background.setVisible(true);
            this.negBackground.setVisible(false);
        } else {
            this.background.setVisible(false);
            this.negBackground.setVisible(true);
        }
    }
    for(var x=0;x<this.childObjects.length;x++) {
        this.childObjects[x].update(context);
    }
}

game.ToolButton.prototype.render = function (context) {
    this.negBackground.render(context);
    game.Button.prototype.render.call(this, context);
}

//When clicked, a ToolButton will buy one more of that tool, provided the cost is appropriate
game.ToolButton.prototype.onClick = function() {
    if(game.playerStats.prayerPoints>=Math.floor(this.toolStats.costPP) && game.playerStats.cultists>=Math.floor(this.toolStats.costCult)) {
        this.toolStats.numTools+=1;
        //Costs are stored as floats, but are used and displayed as ints
        game.playerStats.prayerPoints-=Math.floor(this.toolStats.costPP);
        game.playerStats.cultists-=Math.floor(this.toolStats.costCult);
        //Update the costs by a scaling factor
        this.toolStats.costPP*=game.playerStats.costPPMultiplier;
        this.toolStats.costCult*=game.playerStats.costCultMultiplier;
    }
}

game.ToolButton.prototype.setVisible=function(visible) {
    game.Button.prototype.setVisible.call(this, visible);
    this.costPPText.setVisible(visible);
    this.costCultText.setVisible(visible);
    this.numToolsText.setVisible(visible);
    this.titleText.setVisible(visible);
}

//An UpgradeButton has an effect on some game system
//Typically, this will be increasing the effectiveness of a Tool
//UpgradeButtons are smaller squares that have no text
//All description is in the overlay
//The cost of an UpgradeButton is in costStats
game.UpgradeButton=function(x,y,width,height,parent,bgString,costStats,toolStats,tabString, num, tab, description) {
    this.description=description;
    var _background = "img/" + tabString + "_upgrades/upgrade_" + bgString + num.toString() + ".png";
    game.Button.call(this,x,y,width,height,parent,_background);
    this.costStats=costStats;
    this.toolStats=toolStats;
    this.disabled=false;
    var negBgSrc=_background.substring(0,_background.length-4)+"_negative.png";
    this.negBackground=new game.Background(0,0,width,height,this,negBgSrc);
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
    if(game.playerStats.prayerPoints>=Math.floor(this.costStats.costPP) && game.playerStats.cultists>=Math.floor(this.costStats.costCult)) {
        //Costs are stored as floats, but are used and displayed as ints
        game.playerStats.prayerPoints-=Math.floor(this.costStats.costPP);
        game.playerStats.cultists-=Math.floor(this.costStats.costCult);
        this.toolStats.prodRateCult *= game.prodCultMultiplier;
        this.toolStats.prodRatePris *= game.prodPrisMultiplier;
        this.toolStats.prodRateExec *= game.prodExecMultiplier;
        this.costStats.costPP*=game.costUpgradeMultiplier;
        if (this.num < 3) {
            this.num++;
            this.background.img.src = "img/" + this.tabString + "_upgrades/upgrade_" + this.bgString + this.num.toString() + ".png";
            this.negBackground.img.src = this.background.img.src.substring(0, this.background.img.src.length - 4) + "_negative.png";
        } else {
            this.disabled = true;
            this.setVisible(false);
            this.overlay.setVisible(false);
        }
    }
}

game.UpgradeButton.prototype.update=function(context){
    this.overlay.update(context);
    if (this.hovered && this.tab.tabVisible && !this.disabled) {
        this.overlay.setVisible(true);
    } else{
        this.overlay.setVisible(false);
    }
    
    game.Button.prototype.update.call(this,context);
    if (game.playerStats.prayerPoints > this.costStats.costPP && game.playerStats.cultists > this.costStats.costCult) {
        if (this.tab.tabVisible) {
            this.setVisible(true);
        }
    } else {
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
        this.negBackground.setVisible(false);
        this.overlay.setVisible(false);
    }
}

    

//a Sprite is a moving, animated object with no interactivity, that can be destroyed
game.Sprite = function (x, y, width, height, parent, xspeed, yspeed, imgSrc) {
    game.GameObject.call(this, x, y, width, height, parent);
    this.xspeed=xspeed;
    this.yspeed=yspeed;
    this.img=new Image();
    this.imgSrc=imgSrc; //source file of image
    this.img.src=this.imgSrc;
    this.destroy=false;
    this.visible=false;
    this.spriteCreated=false;
}

game.Sprite.prototype = Object.create(game.GameObject.prototype);
game.Sprite.prototype.constructor = game.Sprite;

game.Sprite.prototype.render = function(context) {
    if (this.visible) {
        context.drawImage(this.img,
                  this.x, this.y,
                  this.width, this.height);
    }
}

game.Sprite.prototype.update=function(context) {
    //speed is in pixels per second
    //assume 60 FPS
    this.x+=this.xspeed/60;
    this.y+=this.yspeed/60;
}

game.Sprite.prototype.setVisible=function(visible) {
    this.visible=visible;
}

//A hardcoded sprite of a climber that is animated 
game.SpriteClimber=function(x,y,width,height,parent,xspeed,yspeed,imgSrc,maxIndex,imgScale,color) {
    //sprite image urls start with their color
    game.Sprite.call(this,x,y,width,height,parent,xspeed,yspeed,"img/sprites/"+color+imgSrc);
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

game.SpriteClimber.prototype.update=function(context) {
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
    var head=new game.SpriteHead(1405+40*Math.random(),350,135,135,null,0,30,"head.png",1.2+.5*Math.random(),this.color);
    head.setVisible(true);
    game.sprites.unshift(head); //behind the cloud
}

game.SpriteHead=function(x,y,width,height,parent,xspeed,yspeed,imgSrc,rotationSpd,color) {
    game.Sprite.call(this,x,y,width,height,parent,xspeed,yspeed,"img/sprites/"+color+imgSrc);
    this.rotationSpd=rotationSpd;
    this.rotationAngle=0;
    this.color=color;
    this.imgScale=0.33;
    this.destroy=false;
}

game.SpriteHead.prototype=Object.create(game.Sprite.prototype);
game.SpriteHead.prototype.constructor=game.SpriteHead;

game.SpriteHead.prototype.update=function(context) {
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

game.SpriteCloud=function(x,y,width,height,parent,xspeed,yspeed,imgSrc,maxFrames,maxDisplacement) {
    game.Sprite.call(this,x,y,width,height,parent,xspeed,yspeed,imgSrc);
    this.numFrames=0;
    this.maxFrames=maxFrames;
    this.position=0;
    this.maxDisplacement=maxDisplacement;
    this.direction=1;
}

game.SpriteCloud.prototype=Object.create(game.Sprite.prototype);
game.SpriteCloud.prototype.constructor=game.SpriteCloud;

//SpriteClouds just bob, up and down by 1 pixel
game.SpriteCloud.prototype.update=function(context) {
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
game.Scrollbar=function(x,y,width,height,parent,backgroundBar,backgroundScroller,gameObjects) {
    
}

//A Tab is a button that, when clicked, toggles the visibility(and interactivity) of a set of game objects
game.Tab=function(x,y,width,height,parent,background,gameObjects) {
    game.Button.call(this,x,y,width,height,parent,background);
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
    this.tabVisible = visible;
    //turn on this tab
    for (var x = 0; x < this.gameObjects.length; x++) {
        this.gameObjects[x].setVisible(visible);
    }
}

//An Achievement is a popup that has a trigger method checkCondition()
//Each update, checkCondition is checked
//if it is met, the Achievement pops up, then destroys itself
game.Achievement=function(x,y,imgSrc,text) {
    this.x=x;
    this.y=y;
    this.ySpeed = 0;//-20;
    this.minY=900;
    this.width=300;
    this.height=60;
    this.background=new game.Background(this.x,this.y,this.width,this.height,null,"img/description.png");
    this.achievementIcon=new game.Background(this.x+5,this.y+5,50,50,null,imgSrc);
    this.text=text;
    this.textObject = new game.Text(this.background, 60, 10, this.text, "bold 20pt lucida console", "white", 6, "#5f3c0f");
    this.active=false;
    this.activeFrames=0;
    this.maxActiveFrames=240;
    this.destroy=false;
}

game.Achievement.prototype.update=function(context) {
    this.background.update(context);
    this.achievementIcon.update(context);
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

game.update = function () {
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
        conversionRate+=tempToolStats.prodRateCult*tempToolStats.numTools;
    }
    
    var captureRate=0;
    for(var x=0;x<game.captureToolButtons.length;x++) {
        var tempToolStats=game.captureToolButtons[x].toolStats;
        captureRate+=tempToolStats.prodRatePris*tempToolStats.numTools;
    }
    
    var executionRate=0;
    for(var x=0;x<game.executionToolButtons.length;x++) {
        var tempToolStats=game.executionToolButtons[x].toolStats;
        executionRate+=tempToolStats.prodRateExec*tempToolStats.numTools;
    }
    
    game.playerStats.prodRateCult=conversionRate;
    game.playerStats.prodRateExec=executionRate;
    
    game.playerStats.prodRatePris=captureRate-executionRate;
    //if there are not enough prisoners, cannot execute them
    var realExecutionRate=0;
    if(game.playerStats.prisoners>0||game.playerStats.prodRatePris>0) {
        realExecutionRate=executionRate;
    } else {
        realExecutionRate=captureRate;
    }
    
    game.playerStats.totalExecuted+=realExecutionRate/60;
    game.playerStats.prodRatePris=captureRate-realExecutionRate;
    
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
    game.playerStats.cultists+=game.playerStats.prodRateCult/60;
    if (game.playerStats.cultists>game.playerStats.totalCultists){
        game.playerStats.totalCultists=game.playerStats.cultists;
    }
    
    //apply prisoner rate
    game.playerStats.prisoners+=game.playerStats.prodRatePris/60;
    if(game.playerStats.prisoners<0) {
        game.playerStats.prisoners=0;
    }
    
    //apply PP rate
   game.playerStats.totalPrayerPoints+=realExecutionRate/60*game.playerStats.ppMultiplier*sunMultiplier;  game.playerStats.prayerPoints+=realExecutionRate/60*game.playerStats.ppMultiplier*sunMultiplier;    
    
    //check all achievements
    for(var x=0;x<game.achievements.length;x++) {
        game.achievements[x].update(game.context);
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
    var convStats=[game.toolStats.bookStats,game.toolStats.soapboxStats,game.toolStats.speakerStats,
game.toolStats.podiumStats,
game.toolStats.camcorderStats,
game.toolStats.computerStats,
game.toolStats.laptopStats];
    var convWidths=[29,50,51,43,47,75,60];
    var convHeights=[53,82,78,50,69,67,63];
    
    var capNames=['net','lasso','trapdoor','van','invasion','phaser','cloning'];
    var capStats=[game.toolStats.netStats,
game.toolStats.lassoStats,
game.toolStats.trapdoorStats,
game.toolStats.vanStats,
game.toolStats.invasionStats,
game.toolStats.phaserStats,
game.toolStats.cloningStats];
    var capWidths=[55,63,54,85,50,40,44];
    var capHeights=[65,66,33,55,66,72,82];

    var execStats=[game.toolStats.knifeStats,
game.toolStats.cleaverStats,
game.toolStats.axeStats,
game.toolStats.bladeStats,
game.toolStats.guillotineStats,
game.toolStats.sawStats,
game.toolStats.lightsaberStats];
    var execNames=['knife','cleaver','axe','blade','guillotine','saw','lightsaber'];
    var execWidths=[63,69,93,108,107,57,54];
    var execHeights=[70,73,73,108,99,73,74];
    
    if(game.conversionTab.tabVisible) {
        for(var x=0;x<yLocs.length;x++) {
            var numIter=Math.min(15,convStats[x].numTools);
            for(var y=game.numConvSprites[x];y<numIter;y++) {
                var tempSprite=new game.Sprite(646+y*41,yLocs[x]+20*(y%2),convWidths[x],convHeights[x],null,0,0,"img/conversion_panel_icons/panel_"+convNames[x]+"_person"+(y%3+1)+".png");
                tempSprite.setVisible(true);
                this.sprites.unshift(tempSprite);
                this.conversionObjects.push(tempSprite);
                game.numConvSprites[x]+=1;
            }
        }
    } else if(game.captureTab.tabVisible) {
        for(var x=0;x<yLocs.length;x++) {
            var numIter=Math.min(15,capStats[x].numTools);
            for(var y=game.numCapSprites[x];y<numIter;y++) {
                var tempSprite=new game.Sprite(646+y*41,yLocs[x]+20*(y%2),capWidths[x],capHeights[x],null,0,0,"img/capture_panel_icons/panel_capture_"+capNames[x]+"_person"+(y%3+1)+".png");
                tempSprite.setVisible(true);
                this.sprites.unshift(tempSprite);
                this.captureObjects.push(tempSprite);
                game.numCapSprites[x]+=1;
            }
        }
    } else if(game.executionTab.tabVisible) {
        for(var x=0;x<yLocs.length;x++) {
            var numIter=Math.min(15,execStats[x].numTools);
            for(var y=game.numExecSprites[x];y<numIter;y++) {
                var tempSprite=new game.Sprite(646+y*41,yLocs[x]+20*(y%2),execWidths[x],execHeights[x],null,0,0,"img/execution_panel_icons/panel_execution_"+execNames[x]+"_person"+(y%3+1)+".png");
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
        game.sprites[x].update(game.context);
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
        game.achievements[x].render(game.context);
    }
    
    for (var x=0; x<game.overlays.length; x++){
        game.overlays[x].render(game.context);
    }
    
    //update and render lava
    game.lava.update(game.context);
    game.lava.render(game.context);
    
    //update and render stat tracker panel
    game.trackerPanel.update(game.context);
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
            var newClimber=new game.SpriteClimber(1750+30*Math.random(),800+30*Math.random(),136,328,null,-50,-100,"climb_strip16.png",16,0.33,game.climberColors[Math.floor(game.climberColors.length*Math.random())]);
            newClimber.setVisible(true);
            game.sprites.splice(game.sprites.length-3,0,newClimber);
        }
    }   
    
    game.playerStats.time = ((new Date()).getTime()-game.startTime)/1000;
    
    // request new frame
     requestAnimFrame(function() {
      game.update(game.context);
    });
}
