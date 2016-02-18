//PlayerStats is an array that holds all of the player's statistics
game.playerStats=[];
//Initialize all values
var INITIAL_PRAYERPOINTS = 50000;
var INITIAL_CULTISTS = 500;
var INITIAL_PRISONERS = 10000;

game.playerStats.prayerPoints=INITIAL_PRAYERPOINTS;
game.playerStats.cultists=INITIAL_CULTISTS;
game.playerStats.prisoners=INITIAL_PRISONERS;
game.playerStats.prodRateCult=0;
game.playerStats.prodRatePris=0;
game.playerStats.prodRateExec=0;

game.playerStats.totalPrayerPoints=INITIAL_PRAYERPOINTS;
game.playerStats.totalCultists=INITIAL_CULTISTS;
game.playerStats.totalExecuted =0;
game.playerStats.statFollowerRate=0;
game.playerStats.time=0;

game.playerStats.ppMultiplier=4;
game.playerStats.costPPMultiplier=1.1;
game.playerStats.costCultMultiplier = 1.1;
game.costUpgradeMultiplier = 10;

game.prodCultMultiplier = 1.5;
game.prodPrisMultiplier = 1.5;
game.prodExecMultiplier = 10;

// container for tool statistics
game.toolStats = [];

game.toolStats.bookStats=new game.ToolStats(10,1,.1,0,0,0);
game.toolStats.soapboxStats=new game.ToolStats(100,1,1,0,0,0);
game.toolStats.speakerStats=new game.ToolStats(1000,1,10,0,0,0);
game.toolStats.podiumStats=new game.ToolStats(10000,1,100,0,0,0);
game.toolStats.camcorderStats=new game.ToolStats(100000,1,1000,0,0,0);
game.toolStats.computerStats=new game.ToolStats(1000000,1,10000,0,0,0);
game.toolStats.laptopStats=new game.ToolStats(10000000,1,100000,0,0,0);

game.toolStats.netStats=new game.ToolStats(10,10,0,1,0,0);
game.toolStats.lassoStats=new game.ToolStats(100,100,0,10,0,0);
game.toolStats.trapdoorStats=new game.ToolStats(1000,1000,0,100,0,0);
game.toolStats.vanStats=new game.ToolStats(10000,10000,0,1000,0,0);
game.toolStats.invasionStats=new game.ToolStats(100000,100000,0,10000,0,0);
game.toolStats.phaserStats=new game.ToolStats(1000000,1000000,0,100000,0,0);
game.toolStats.cloningStats=new game.ToolStats(10000000,10000000,0,1000000,0,0);

game.toolStats.knifeStats=new game.ToolStats(5,5,0,0,1,0);
game.toolStats.cleaverStats=new game.ToolStats(50,50,0,0,8,0);
game.toolStats.axeStats=new game.ToolStats(500,500,0,0,64,0);
game.toolStats.bladeStats=new game.ToolStats(5000,5000,0,0,512,0);
game.toolStats.guillotineStats=new game.ToolStats(50000,50000,0,0,2048,0);
game.toolStats.sawStats=new game.ToolStats(500000,500000,0,0,16384,0);
game.toolStats.lightsaberStats=new game.ToolStats(5000000,5000000,0,0,131072,0);

//container for upgrade stats
game.upgradeStats = [];

game.upgradeStats.bookUpgradeCosts=new game.CostStats(100,0);
game.upgradeStats.soapboxUpgradeCosts=new game.CostStats(1000,0);
game.upgradeStats.speakerUpgradeCosts=new game.CostStats(10000,0);
game.upgradeStats.podiumUpgradeCosts=new game.CostStats(100000,0);
game.upgradeStats.camcorderUpgradeCosts=new game.CostStats(1000000,0);
game.upgradeStats.computerUpgradeCosts=new game.CostStats(10000000,0);
game.upgradeStats.laptopUpgradeCosts = new game.CostStats(100000000, 0);

game.upgradeStats.netUpgradeCosts = new game.CostStats(100, 0);
game.upgradeStats.lassoUpgradeCosts = new game.CostStats(1000, 0);
game.upgradeStats.trapdoorUpgradeCosts = new game.CostStats(10000, 0);
game.upgradeStats.vanUpgradeCosts = new game.CostStats(100000, 0);
game.upgradeStats.invasionUpgradeCosts = new game.CostStats(1000000, 0);
game.upgradeStats.phaserUpgradeCosts = new game.CostStats(10000000, 0);
game.upgradeStats.cloningUpgradeCosts = new game.CostStats(100000000, 0);

game.upgradeStats.knifeUpgradeCosts = new game.CostStats(100, 0);
game.upgradeStats.cleaverUpgradeCosts = new game.CostStats(1000, 0);
game.upgradeStats.axeUpgradeCosts = new game.CostStats(10000, 0);
game.upgradeStats.bladeUpgradeCosts = new game.CostStats(100000, 0);
game.upgradeStats.guillotineUpgradeCosts = new game.CostStats(1000000, 0);
game.upgradeStats.sawUpgradeCosts = new game.CostStats(10000000, 0);
game.upgradeStats.lightsaberUpgradeCosts = new game.CostStats(100000000, 0);

var convNames=['book','soapbox','speaker','podium','camcorder','computer','laptop'];
    var convStats=[game.toolStats.bookStats, game.toolStats.soapboxStats, game.toolStats.speakerStats,
game.toolStats.podiumStats,
game.toolStats.camcorderStats,
game.toolStats.computerStats,
game.toolStats.laptopStats];

var capNames=['net','lasso','trapdoor','van','invasion','phaser','cloning'];
var capStats=[game.toolStats.netStats,
    game.toolStats.lassoStats,
    game.toolStats.trapdoorStats,
    game.toolStats.vanStats,
    game.toolStats.invasionStats,
    game.toolStats.phaserStats,
    game.toolStats.cloningStats];

var execNames=['knife','cleaver','axe','blade','guillotine','saw','lightsaber'];
var execStats=[game.toolStats.knifeStats,
    game.toolStats.cleaverStats,
    game.toolStats.axeStats,
    game.toolStats.bladeStats,
    game.toolStats.guillotineStats,
    game.toolStats.sawStats,
    game.toolStats.lightsaberStats];


game.numConvSprites=[0,0,0,0,0,0,0];
game.numCapSprites=[0,0,0,0,0,0,0];
game.numExecSprites=[0,0,0,0,0,0,0];

//Controls the mood of the sun
game.sun=[];
game.sun.mood="happy";
game.sun.x=1650;
game.sun.y=58;
game.sun.img=new Image();
game.sun.nextImg=new Image();
game.sun.imgSrc="img/sunny/sun_";
game.sun.imgIndex=0;
game.sun.maxIndex=4;
game.sun.frameCount=0;
game.sun.maxFrames=80;
game.sun.img.src=game.sun.imgSrc+game.sun.mood+game.sun.imgIndex+".png";
game.sun.nextImg.src=game.sun.imgSrc+game.sun.mood+(game.sun.imgIndex+1)+".png";

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

//This array holds 
game.conversionUpgradeButtons=[];
game.captureUpgradeButtons=[];
game.executionUpgradeButtons=[];

//This array holds all of the tabs
game.tabs=[];

//This array holds all of the sprites
game.sprites=[];

//This array holds all of the overlays, so they will be drawn last on top of everything
game.overlays=[];

//This array holds all of the achievements
game.achievements=[];

game.cloud = new game.SpriteCloud(1330, 230, 400, 300, null, 0, 0, "img/cloudkun.png", 30, 1);
game.cloud.setVisible(true);
game.sprites.push(game.cloud);

//In retrospect, bobbing up and down is more useful than it seemed at first
game.lava = new game.SpriteCloud(1369, 740, 104, 337, null, 0, 0, "img/lava/volcano_lava.png", 125, 5);
game.lava.setVisible(true);
//game.sprites.push(game.lava);



//controls the spawning of climbers
game.climberCount=0;
game.climberFrames=0;
game.maxClimberFrames=2;
game.climberColors=["red","blue","gold"];

//This master background is behind everything
//It holds objects that will always appear on the screen
game.masterBackground=new game.Background(0,0,1920,1080,null,"img/background.png");

//Create the tracker area at the bottom right
game.trackerPanel=new game.Background(1365,935,554,119,null,"img/money.png");
//Create the text number tracker for prayerPoints
game.prayerPointsText=new game.TextNumber(game.trackerPanel,70,45,"","bold 24pt lucida console ","white",6,"#5f3c0f",game.playerStats,"prayerPoints");
//Create the icon for prayerPoints
game.prayerPointsIcon=new game.Background(1400,977,37,37,null,"img/coin.png");
game.prayerPointsIcon.setVisible(true);
//game.backgrounds.push(game.prayerPointsIcon);

//Create the text number tracker for cultists
game.cultistsText=new game.TextNumber(game.trackerPanel,240,45,"","bold 24pt lucida console ","white",6,"#5f3c0f",game.playerStats,"cultists");
//Create the icon for cultists
game.cultistsIcon=new game.Background(1566,977,37,37,null,"img/happy.png");
game.cultistsIcon.setVisible(true);
//game.backgrounds.push(game.cultistsIcon);

//Create the text number tracker for prisoners
game.prisonersText=new game.TextNumber(game.trackerPanel,402,45,"","bold 24pt lucida console ","white",6,"#5f3c0f",game.playerStats,"prisoners");
//Create the icon for prisoners
game.prisonersIcon=new game.Background(1729,977,37,37,null,"img/anger.png");
game.prisonersIcon.setVisible(true);
//game.backgrounds.push(game.prisonersIcon);
//unshift to put panel behind tracker icons
game.trackerPanel.setVisible(true);
//game.backgrounds.unshift(game.trackerPanel);

game.guard=new game.Background(1850,840,75,140,null,"img/volcano_guard.png");
game.guard.setVisible(true);
game.backgrounds.unshift(game.guard);

game.mountainBackground=new game.Background(1470,395,452,690,null,"img/volcano_mountain.png");
game.mountainBackground.setVisible(true);
game.backgrounds.unshift(game.mountainBackground);

game.masterBackground.setVisible(true);
//unshift puts the master background to the front of the list
//so it will be drawn first and other backgrounds will draw on top of it
game.backgrounds.unshift(game.masterBackground);

