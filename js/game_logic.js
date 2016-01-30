//PlayerStats is an array that holds all of the player's statistics
game.playerStats=[];
//Initialize all values
game.playerStats.prayerPoints=0;
game.playerStats.cultists=0;
game.playerStats.prisoners=0;
game.playerStats.prodRateCult=0;
game.playerStats.prodRatePris=0;
game.playerStats.prodRateExec=0;
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

game.tabs=[];

console.log(window.innerWidth);

var test=new game.Background(0,0,1920,1080,"img/bg3.png");
//var testText=new game.Text(test,20,40,"","72pt serif","black");
test.setVisible(true);

var test2=new game.Button(0,267,580,98,"img/conversion_book.png");
var testText2=new game.Text(test2.background,150,0,"BOOK","bold 30pt lucida console ","white",3,"0xFFFFFF");
testText2.text="BOOK";

test2.setVisible(true);
game.buttons.push(test2);

game.backgrounds.push(test);



function button1Click(){
	b1+=1;
	var textbox = document.getElementById('text');
	textbox.placeholder = "hello";
}