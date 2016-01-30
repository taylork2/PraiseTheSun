//PlayerStats is an array that holds all of the player's statistics
game.playerStats=[];
//Initialize all values
game.playerStats.prayerPoints=new game.StatNumber(10000);
game.playerStats.cultists=new game.StatNumber(1000);
game.playerStats.prisoners=new game.StatNumber(5000);
game.playerStats.prodRateCult=new game.StatNumber(0);
game.playerStats.prodRatePris=new game.StatNumber(0);
game.playerStats.prodRateExec=new game.StatNumber(0);

game.playerStats.ppMultiplier=new game.StatNumber(1);

game.playerStats.booksStats=new game.ToolStats(new game.StatNumber(10),new game.StatNumber(1),new game.StatNumber(0),new game.StatNumber(1),new game.StatNumber(0),new game.StatNumber(0));

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

game.tabs=[];

console.log(window.innerWidth);

var test2=new game.ToolButton(0,267,580,98,"img/conversion_book.png",game.playerStats.booksStats);
var testText2=new game.Text(test2.background,150,5,"BOOK","bold 30pt lucida console ","white",6,"#5f3c0f");

console.log(test2);
test2.setVisible(true);


game.buttons.push(test2);
game.conversionToolButtons.push(test2);
//game.captureToolButtons.push(test2);
//game.executionToolButtons.push(test2);


//This master background is behind everything
//It holds objects that will always appear on the screen
game.masterBackground=new game.Background(0,0,1920,1080,"img/bg3.png");
game.masterBackground.setVisible(true);

//Create the text number tracker for prayerPoints
game.prayerPointsText=new game.TextNumber(game.masterBackground,700,200,"0","bold 28pt lucida console ","white",6,"#5f3c0f",game.playerStats.prayerPoints);
//Create the icon for prayerPoints
game.prayerPointsIcon=new game.Background(650,200,37,37,"img/coin.png");
game.prayerPointsIcon.setVisible(true);
game.backgrounds.push(game.prayerPointsIcon);

//Create the text number tracker for cultists
game.cultistsText=new game.TextNumber(game.masterBackground,900,200,"0","bold 28pt lucida console ","white",6,"#5f3c0f",game.playerStats.cultists);
//Create the icon for cultists

game.cultistsIcon=new game.Background(850,200,37,37,"img/happy.png");
game.cultistsIcon.setVisible(true);
game.backgrounds.push(game.cultistsIcon);

//Create the text number tracker for prisoners
game.prisonersText=new game.TextNumber(game.masterBackground,1100,200,"0","bold 28pt lucida console ","white",6,"#5f3c0f",game.playerStats.prisoners);
//Create the icon for prisoners
game.prisonersIcon=new game.Background(1050,200,37,37,"img/anger.png");
game.prisonersIcon.setVisible(true);
game.backgrounds.push(game.prisonersIcon);

game.backgrounds.unshift(game.masterBackground);


function button1Click(){
	b1+=1;
	var textbox = document.getElementById('text');
	textbox.placeholder = "hello";
}