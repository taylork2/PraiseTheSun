//PlayerStats is an array that holds all of the player's statistics
game.playerStats=[];
//Initialize all values
game.playerStats.prayerPoints=0;
game.playerStats.cultists=0;
game.playerStats.prisoners=0;
game.playerStats.prodRateCult=0;
game.playerStats.prodRatePris=0;
game.playerStats.prodRateExec=0;

//This array holds all created backgrounds that are independent of other game objects
game.backgrounds=[];

//This array holds all buttons
game.buttons=[];

console.log(window.innerWidth);

var test=new game.Background(0,0,window.innerWidth,window.innerHeight,"img/bg3.png");
test.setVisible(true);

game.backgrounds.push(test);



function button1Click(){
	b1+=1;
	var textbox = document.getElementById('text');
	textbox.placeholder = "hello";
}