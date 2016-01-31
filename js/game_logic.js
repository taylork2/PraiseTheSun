//PlayerStats is an array that holds all of the player's statistics
game.playerStats=[];
//Initialize all values
game.playerStats.prayerPoints=new game.StatNumber(5000000000000000000000000);
game.playerStats.cultists=new game.StatNumber(50000000000000000);
game.playerStats.prisoners=new game.StatNumber(5000000000000000);
game.playerStats.prodRateCult=new game.StatNumber(0);
game.playerStats.prodRatePris=new game.StatNumber(0);
game.playerStats.prodRateExec=new game.StatNumber(0);

game.playerStats.ppMultiplier=new game.StatNumber(4);
game.playerStats.costPPMultiplier=new game.StatNumber(1.1);
game.playerStats.costCultMultiplier=new game.StatNumber(1.1);

game.playerStats.booksStats=new game.ToolStats(10,1,.1,0,0,0);
game.playerStats.soapboxStats=new game.ToolStats(100,1,1,0,0,0);
game.playerStats.speakerStats=new game.ToolStats(1000,1,10,0,0,0);
game.playerStats.podiumStats=new game.ToolStats(10000,1,100,0,0,0);
game.playerStats.camcorderStats=new game.ToolStats(100000,1,1000,0,0,0);
game.playerStats.computerStats=new game.ToolStats(1000000,1,10000,0,0,0);
game.playerStats.laptopStats=new game.ToolStats(10000000,1,100000,0,0,0);

game.playerStats.netStats=new game.ToolStats(10,1,0,1,0,0);
game.playerStats.lassoStats=new game.ToolStats(100,1,0,10,0,0);
game.playerStats.trapdoorStats=new game.ToolStats(1000,1,0,100,0,0);
game.playerStats.vanStats=new game.ToolStats(10000,1,0,1000,0,0);
game.playerStats.invasionStats=new game.ToolStats(100000,1,0,10000,0,0);
game.playerStats.phaserStats=new game.ToolStats(1000000,1,0,100000,0,0);
game.playerStats.cloningStats=new game.ToolStats(10000000,1,0,1000000,0,0);

game.playerStats.knifeStats=new game.ToolStats(10,1,0,0,1,0);
game.playerStats.cleaversStats=new game.ToolStats(100,1,0,0,10,0);
game.playerStats.axeStats=new game.ToolStats(1000,1,0,0,100,0);
game.playerStats.bladeStats=new game.ToolStats(10000,1,0,0,1000,0);
game.playerStats.guillotineStats=new game.ToolStats(100000,1,0,0,10000,0);
game.playerStats.sawStats=new game.ToolStats(1000000,1,0,0,100000,0);
game.playerStats.lightsaberStats=new game.ToolStats(10000000,1,0,0,1000000,0);

//These are the upgrade stats
game.playerStats.bookUpgradeCosts=new game.CostStats(100,0);
game.playerStats.soapboxUpgradeCosts=new game.CostStats(10000,0);
game.playerStats.speakerUpgradeCosts=new game.CostStats(1000000,0);
game.playerStats.podiumUpgradeCosts=new game.CostStats(1000000,0);
game.playerStats.camcorderUpgradeCosts=new game.CostStats(100000000,0);
game.playerStats.computerUpgradeCosts=new game.CostStats(1000000000000,0);
game.playerStats.laptopUpgradeCosts=new game.CostStats(100000000000000,0);

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

game.cloud=new game.SpriteCloud(1330,230,400,300,0,0,"img/cloud.png",30,1);
game.cloud.setVisible(true);
game.sprites.push(game.cloud);

//In retrospect, bobbing up and down is more useful than it seemed at first
game.lava=new game.SpriteCloud(1369,740,104,337,0,0,"img/lava/volcano_lava.png",125,5);
game.lava.setVisible(true);
//game.sprites.push(game.lava);



//controls the spawning of climbers
game.climberCount=0;
game.climberFrames=0;
game.maxClimberFrames=2;
game.climberColors=["red","blue","gold"];

//This master background is behind everything
//It holds objects that will always appear on the screen
game.masterBackground=new game.Background(0,0,1920,1080,"img/background.png");

//Create the tracker area at the bottom right
game.trackerPanel=new game.Background(1365,935,554,119,"img/money.png");
//Create the text number tracker for prayerPoints
game.prayerPointsText=new game.TextNumber(game.trackerPanel,70,45,"0","bold 24pt lucida console ","white",6,"#5f3c0f",game.playerStats.prayerPoints);
//Create the icon for prayerPoints
game.prayerPointsIcon=new game.Background(1400,977,37,37,"img/coin.png");
game.prayerPointsIcon.setVisible(true);
//game.backgrounds.push(game.prayerPointsIcon);

//Create the text number tracker for cultists
game.cultistsText=new game.TextNumber(game.trackerPanel,240,45,"0","bold 24pt lucida console ","white",6,"#5f3c0f",game.playerStats.cultists);
//Create the icon for cultists
game.cultistsIcon=new game.Background(1566,977,37,37,"img/happy.png");
game.cultistsIcon.setVisible(true);
//game.backgrounds.push(game.cultistsIcon);

//Create the text number tracker for prisoners
game.prisonersText=new game.TextNumber(game.trackerPanel,402,45,"0","bold 24pt lucida console ","white",6,"#5f3c0f",game.playerStats.prisoners);
//Create the icon for prisoners
game.prisonersIcon=new game.Background(1729,977,37,37,"img/anger.png");
game.prisonersIcon.setVisible(true);
//game.backgrounds.push(game.prisonersIcon);
//unshift to put panel behind tracker icons
game.trackerPanel.setVisible(true);
//game.backgrounds.unshift(game.trackerPanel);

game.guard=new game.Background(1850,840,75,140,"img/volcano_guard.png");
game.guard.setVisible(true);
game.backgrounds.unshift(game.guard);

game.mountainBackground=new game.Background(1470,395,452,690,"img/volcano_mountain.png");
game.mountainBackground.setVisible(true);
game.backgrounds.unshift(game.mountainBackground);

game.masterBackground.setVisible(true);
//unshift puts the master background to the front of the list
//so it will be drawn first and other backgrounds will draw on top of it
game.backgrounds.unshift(game.masterBackground);

