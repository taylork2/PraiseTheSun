//PlayerStats is an array that holds all of the player's statistics
game.playerStats=[];
//Initialize all values
game.playerStats.prayerPoints=new game.StatNumber(34600000000000000);
game.playerStats.cultists=new game.StatNumber(3160478162894712369846);
game.playerStats.prisoners=new game.StatNumber(132460123806580123);
game.playerStats.prodRateCult=new game.StatNumber(0);
game.playerStats.prodRatePris=new game.StatNumber(0);
game.playerStats.prodRateExec=new game.StatNumber(0);

game.playerStats.ppMultiplier=new game.StatNumber(1);

game.playerStats.booksStats=new game.ToolStats(new game.StatNumber(10),new game.StatNumber(1),new game.StatNumber(1),new game.StatNumber(0),new game.StatNumber(0),new game.StatNumber(0));

game.playerStats.netsStats=new game.ToolStats(new game.StatNumber(10),new game.StatNumber(1),new game.StatNumber(0),new game.StatNumber(1),new game.StatNumber(0),new game.StatNumber(0));

game.playerStats.cleaversStats=new game.ToolStats(new game.StatNumber(10),new game.StatNumber(1),new game.StatNumber(0),new game.StatNumber(0),new game.StatNumber(1),new game.StatNumber(0));

//These are the reference resolutions for all images
//Images are drawn scaled based on these
game.nativeResolution=[];
game.nativeResolution.width=1920;
game.nativeResolution.height=1080;
game.widthScale=window.innerWidth/game.nativeResolution.width;
game.heightScale=window.innerHeight/game.nativeResolution.height;


//This array holds all created backgrounds that are independent of other game objects
game.backgrounds=[];

//This array holds all buttons
game.buttons=[];

//This array holds all ToolButtons, which are still in Buttons
game.conversionToolButtons=[];
game.captureToolButtons=[];
game.executionToolButtons=[];

//This array holds all of the tabs
game.tabs=[];

console.log(window.innerWidth);

var test2=new game.ToolButton(0,267,580,98,"img/conversion_book.png",game.playerStats.booksStats);
var testText2=new game.Text(test2.background,150,5,"BOOK","bold 30pt lucida console ","white",6,"#5f3c0f");
test2.setVisible(true);
game.buttons.push(test2);

var test3=new game.ToolButton(0,417,580,98,"img/conversion_book.png",game.playerStats.netsStats);
test3.setVisible(true);
game.buttons.push(test3);

var test4=new game.ToolButton(0,567,580,98,"img/conversion_book.png",game.playerStats.cleaversStats);
test4.setVisible(true);
game.buttons.push(test4);

game.conversionToolButtons.push(test2);
game.captureToolButtons.push(test3);
game.executionToolButtons.push(test4);


//This master background is behind everything
//It holds objects that will always appear on the screen
game.masterBackground=new game.Background(0,0,1920,1080,"img/example.png");



//Create the tracker area at the bottom right
game.trackerPanel=new game.Background(1365,935,554,119,"img/money.png");
//Create the text number tracker for prayerPoints
game.prayerPointsText=new game.TextNumber(game.trackerPanel,70,45,"0","bold 24pt lucida console ","white",6,"#5f3c0f",game.playerStats.prayerPoints);
//Create the icon for prayerPoints
game.prayerPointsIcon=new game.Background(1400,977,37,37,"img/coin.png");
game.prayerPointsIcon.setVisible(true);
game.backgrounds.push(game.prayerPointsIcon);

//Create the text number tracker for cultists
game.cultistsText=new game.TextNumber(game.trackerPanel,240,45,"0","bold 24pt lucida console ","white",6,"#5f3c0f",game.playerStats.cultists);
//Create the icon for cultists
game.cultistsIcon=new game.Background(1566,977,37,37,"img/happy.png");
game.cultistsIcon.setVisible(true);
game.backgrounds.push(game.cultistsIcon);

//Create the text number tracker for prisoners
game.prisonersText=new game.TextNumber(game.trackerPanel,402,45,"0","bold 24pt lucida console ","white",6,"#5f3c0f",game.playerStats.prisoners);
//Create the icon for prisoners
game.prisonersIcon=new game.Background(1729,977,37,37,"img/anger.png");
game.prisonersIcon.setVisible(true);
game.backgrounds.push(game.prisonersIcon);
//unshift to put panel behind tracker icons
game.trackerPanel.setVisible(true);
game.backgrounds.unshift(game.trackerPanel);

game.masterBackground.setVisible(true);
//unshift puts the master background to the front of the list
//so it will be drawn first and other backgrounds will draw on top of it
game.backgrounds.unshift(game.masterBackground);

game.conversionHeader=new game.Background(0,0,584,126,"img/conversion.png");
game.conversionHeader.setVisible(true);
game.backgrounds.push(game.conversionHeader);

game.conversionObjects=[];
game.conversionObjects.push(game.conversionToolButtons);
game.conversionObjects.push(game.conversionHeader);

game.conversionTab=new game.Tab(680,137,113,108,"img/conversion_button.png",game.conversionObjects);
game.conversionTab.setTabVisible(true);
game.conversionTab.setVisible(true);
game.tabs.push(game.conversionTab);

function button1Click(){
	b1+=1;
	var textbox = document.getElementById('text');
	textbox.placeholder = "hello";
}