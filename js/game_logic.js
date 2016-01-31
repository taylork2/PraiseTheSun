//PlayerStats is an array that holds all of the player's statistics
game.playerStats=[];
//Initialize all values
game.playerStats.prayerPoints=new game.StatNumber(100);
game.playerStats.cultists=new game.StatNumber(4);
game.playerStats.prisoners=new game.StatNumber(1);
game.playerStats.prodRateCult=new game.StatNumber(0);
game.playerStats.prodRatePris=new game.StatNumber(0);
game.playerStats.prodRateExec=new game.StatNumber(0);

game.playerStats.ppMultiplier=new game.StatNumber(4);
game.playerStats.costPPMultiplier=new game.StatNumber(1.1);
game.playerStats.costCultMultiplier=new game.StatNumber(1.1);

game.playerStats.booksStats=new game.ToolStats(10,1,1,0,0,0);
game.playerStats.soapboxStats=new game.ToolStats(10,1,1,0,0,0);
game.playerStats.speakerStats=new game.ToolStats(10,1,1,0,0,0);
game.playerStats.podiumStats=new game.ToolStats(10,1,1,0,0,0);
game.playerStats.camcorderStats=new game.ToolStats(10,1,1,0,0,0);
game.playerStats.computerStats=new game.ToolStats(10,1,1,0,0,0);
game.playerStats.laptopStats=new game.ToolStats(10,1,1,0,0,0);

game.playerStats.netStats=new game.ToolStats(10,1,0,1,0,0);
game.playerStats.lassoStats=new game.ToolStats(10,1,0,1,0,0);
game.playerStats.trapdoorStats=new game.ToolStats(10,1,0,1,0,0);
game.playerStats.vanStats=new game.ToolStats(10,1,0,1,0,0);
game.playerStats.invasionStats=new game.ToolStats(10,1,0,1,0,0);
game.playerStats.phaserStats=new game.ToolStats(10,1,0,1,0,0);
game.playerStats.cloningStats=new game.ToolStats(10,1,0,1,0,0);

game.playerStats.knifeStats=new game.ToolStats(10,1,0,0,1,0);
game.playerStats.cleaversStats=new game.ToolStats(10,1,0,0,1,0);
game.playerStats.axeStats=new game.ToolStats(10,1,0,0,1,0);
game.playerStats.bladeStats=new game.ToolStats(10,1,0,0,1,0);
game.playerStats.guillotineStats=new game.ToolStats(10,1,0,0,1,0);
game.playerStats.sawStats=new game.ToolStats(10,1,0,0,1,0);
game.playerStats.lightsaberStats=new game.ToolStats(10,1,0,0,1,0);

//These are the upgrade stats
game.playerStats.bookUpgradeCosts=new game.CostStats(100,0);
game.playerStats.soapboxUpgradeCosts=new game.CostStats(100,0);
game.playerStats.speakerUpgradeCosts=new game.CostStats(100,0);
game.playerStats.podiumUpgradeCosts=new game.CostStats(100,0);
game.playerStats.camcorderUpgradeCosts=new game.CostStats(100,0);
game.playerStats.computerUpgradeCosts=new game.CostStats(100,0);
game.playerStats.laptopUpgradeCosts=new game.CostStats(100,0);

//Controls the mood of the sun
game.sun=[];
game.sun.mood="happy";
game.sun.x=1672;
game.sun.y=80;
game.sun.img=new Image();
game.sun.imgSrc="img/sun_moods/sun_";

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

game.cloud=new game.SpriteCloud(1330,230,400,300,0,0,"img/cloud.png",30,1);
game.cloud.setVisible(true);
game.sprites.push(game.cloud);

//In retrospect, bobbing up and down is more useful than it seemed at first
game.lava=new game.SpriteCloud(1370,740,100,110,0,0,"img/sprites/lava.png",125,5);
game.lava.setVisible(true);
game.sprites.push(game.lava);

//controls the spawning of climbers
game.climberCount=0;
game.climberColors=["red","blue","gold"];

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


//Create the objects that will go in the conversion tab
game.conversionHeader=new game.Background(0,0,584,126,"img/headers/conversion.png");
game.conversionHeader.setVisible(true);
game.backgrounds.push(game.conversionHeader);

//These are all the conversion buttons


//var buttonConversionSoapbox=new game.ToolButton(0,384,580,98,"img/conversion_tool_icons/conversion_soapbox.png","SOAPBOX",game.playerStats.soapboxStats);
//buttonConversionSoapbox.setVisible(true);
//game.buttons.push(buttonConversionSoapbox);
//game.conversionToolButtons.push(buttonConversionSoapbox);
//
//var buttonConversionSpeaker=new game.ToolButton(0,500,580,98,"img/conversion_tool_icons/conversion_speaker.png","LOUDSPEAKER",game.playerStats.speakerStats);
//buttonConversionSpeaker.setVisible(true);
//game.buttons.push(buttonConversionSpeaker);
//game.conversionToolButtons.push(buttonConversionSpeaker);
//
//var buttonConversionPodium=new game.ToolButton(0,617,580,98,"img/conversion_tool_icons/conversion_podium.png","PODIUM",game.playerStats.podiumStats);
//buttonConversionPodium.setVisible(true);
//game.buttons.push(buttonConversionPodium);
//game.conversionToolButtons.push(buttonConversionPodium);
//
//var buttonConversionCamcorder=new game.ToolButton(0,734,580,98,"img/conversion_tool_icons/conversion_camcorder.png","CAMCORDER",game.playerStats.camcorderStats);
//buttonConversionCamcorder.setVisible(true);
//game.buttons.push(buttonConversionCamcorder);
//game.conversionToolButtons.push(buttonConversionCamcorder);
//
//var buttonConversionComputer=new game.ToolButton(0,849,580,98,"img/conversion_tool_icons/conversion_computer.png","COMPUTER",game.playerStats.computerStats);
//buttonConversionComputer.setVisible(true);
//game.buttons.push(buttonConversionComputer);
//game.conversionToolButtons.push(buttonConversionComputer);
//
//var buttonConversionLaptop=new game.ToolButton(0,964,580,98,"img/conversion_tool_icons/conversion_laptop.png","LAPTOP",game.playerStats.laptopStats);
//buttonConversionLaptop.setVisible(true);
//game.buttons.push(buttonConversionLaptop);
//game.conversionToolButtons.push(buttonConversionLaptop);

game.conversionObjects.push(game.conversionHeader);

game.conversionTab=new game.Tab(680,137,113,108,"img/tab_buttons/conversion_button.png",game.conversionObjects);
game.conversionTab.setVisible(true);
game.tabs.push(game.conversionTab);

var buttonConversionBook=new game.ToolButton(0,267,580,98,"book","BOOK",game.playerStats.booksStats,"conversion", conversionTab);
buttonConversionBook.setVisible(true);
game.buttons.push(buttonConversionBook);
game.conversionToolButtons.push(buttonConversionBook);

game.conversionObjects=[];
for(var x=0;x<game.conversionToolButtons.length;x++) {
    game.conversionObjects.push(game.conversionToolButtons[x]);
}


//These are all the upgrade buttons
var buttonConversionUpgradeBook=new game.UpgradeButton(-1,150,85,98,"book",game.playerStats.bookUpgradeCosts,game.playerStats.booksStats, "conversion", 1, game.conversionTab);
buttonConversionUpgradeBook.setVisible(true);
game.buttons.push(buttonConversionUpgradeBook);
game.conversionUpgradeButtons.push(buttonConversionUpgradeBook);

var buttonConversionUpgradeSoapbox=new game.UpgradeButton(82,150,85,98,"soapbox",game.playerStats.soapboxUpgradeCosts,game.playerStats.soapboxStats, "conversion", 1, game.conversionTab);
buttonConversionUpgradeSoapbox.setVisible(true);
game.buttons.push(buttonConversionUpgradeSoapbox);
game.conversionUpgradeButtons.push(buttonConversionUpgradeSoapbox);

//var buttonConversionUpgradeSpeaker=new game.UpgradeButton(165,150,85,98,"speaker",game.playerStats.speakerUpgradeCosts,game.playerStats.speakerStats, "conversion", 1, game.conversionTab);
//buttonConversionUpgradeSpeaker.setVisible(true);
//game.buttons.push(buttonConversionUpgradeSpeaker);
//game.conversionUpgradeButtons.push(buttonConversionUpgradeSpeaker);

var buttonConversionUpgradePodium=new game.UpgradeButton(247,150,85,98,"podium",game.playerStats.podiumUpgradeCosts,game.playerStats.podiumStats, "conversion", 1, game.conversionTab);
buttonConversionUpgradePodium.setVisible(true);
game.buttons.push(buttonConversionUpgradePodium);
game.conversionUpgradeButtons.push(buttonConversionUpgradePodium);

var buttonConversionUpgradeCamcorder=new game.UpgradeButton(329,150,85,98,"camcorder",game.playerStats.camcorderUpgradeCosts,game.playerStats.camcorderStats, "conversion", 1, game.conversionTab);
buttonConversionUpgradeCamcorder.setVisible(true);
game.buttons.push(buttonConversionUpgradeCamcorder);
game.conversionUpgradeButtons.push(buttonConversionUpgradeCamcorder);

var buttonConversionUpgradeComputer=new game.UpgradeButton(410,150,85,98,"computer",game.playerStats.computerUpgradeCosts,game.playerStats.computerStats, "conversion", 1, game.conversionTab);
buttonConversionUpgradeComputer.setVisible(true);
game.buttons.push(buttonConversionUpgradeComputer);
game.conversionUpgradeButtons.push(buttonConversionUpgradeComputer);

var buttonConversionUpgradeLaptop=new game.UpgradeButton(494,150,85,98,"laptop",game.playerStats.laptopUpgradeCosts,game.playerStats.laptopStats, "conversion", 1, game.conversionTab);
buttonConversionUpgradeLaptop.setVisible(true);
game.buttons.push(buttonConversionUpgradeLaptop);
game.conversionUpgradeButtons.push(buttonConversionUpgradeLaptop);

for(var x=0;x<game.conversionUpgradeButtons.length;x++) {
    game.conversionObjects.push(game.conversionUpgradeButtons[x]);
}

//Create the objects that will go in the capture tab
game.captureHeader=new game.Background(0,0,584,126,"img/headers/capture.png");
game.captureHeader.setVisible(false);
game.backgrounds.push(game.captureHeader);

//These will be all the capture buttons
//order of capture net, lasso, trapdoor, van, invasion, phaser, cloning 
var buttonCaptureNet=new game.ToolButton(0,267,580,98,"img/capture_tool_icons/capture_net.png","",game.playerStats.netStats);
buttonCaptureNet.setVisible(true);
game.buttons.push(buttonCaptureNet);
game.captureToolButtons.push(buttonCaptureNet);

var buttonCaptureLasso=new game.ToolButton(0,384,580,98,"img/capture_tool_icons/capture_lasso.png","",game.playerStats.lassoStats);
buttonCaptureLasso.setVisible(true);
game.buttons.push(buttonCaptureLasso);
game.captureToolButtons.push(buttonCaptureLasso);

var buttonCaptureTrapdoor=new game.ToolButton(0,500,580,98,"img/capture_tool_icons/capture_trapdoor.png","",game.playerStats.trapdoorStats);
buttonCaptureTrapdoor.setVisible(true);
game.buttons.push(buttonCaptureTrapdoor);
game.captureToolButtons.push(buttonCaptureTrapdoor);

var buttonCaptureVan=new game.ToolButton(0,617,580,98,"img/capture_tool_icons/capture_van.png","",game.playerStats.vanStats);
buttonCaptureVan.setVisible(true);
game.buttons.push(buttonCaptureVan);
game.captureToolButtons.push(buttonCaptureVan);

var buttonCaptureInvasion=new game.ToolButton(0,734,580,98,"img/capture_tool_icons/capture_invasion.png","",game.playerStats.invasionStats);
buttonCaptureInvasion.setVisible(true);
game.buttons.push(buttonCaptureInvasion);
game.captureToolButtons.push(buttonCaptureInvasion);

var buttonCapturePhaser=new game.ToolButton(0,849,580,98,"img/capture_tool_icons/capture_phaser.png","",game.playerStats.phaserStats);
buttonCapturePhaser.setVisible(true);
game.buttons.push(buttonCapturePhaser);
game.captureToolButtons.push(buttonCapturePhaser);

var buttonCaptureCloning=new game.ToolButton(0,964,580,98,"img/capture_tool_icons/capture_cloning.png","",game.playerStats.cloningStats);
buttonCaptureCloning.setVisible(true);
game.buttons.push(buttonCaptureCloning);
game.captureToolButtons.push(buttonCaptureCloning);

game.captureObjects=[];
for(var x=0;x<game.captureToolButtons.length;x++) {
    game.captureObjects.push(game.captureToolButtons[x]);
}
game.captureObjects.push(game.captureHeader);

game.captureTab=new game.Tab(840,137,113,108,"img/tab_buttons/capture_button.png",game.captureObjects);
game.captureTab.setVisible(true);
game.tabs.push(game.captureTab);

//These are all the capture upgrade buttons
var buttonCaptureUpgradeNet=new game.UpgradeButton(-1,150,85,98,"net",game.playerStats.bookUpgradeCosts,game.playerStats.booksStats, "capture", 1, game.captureTab);
buttonCaptureUpgradeNet.setVisible(true);
game.buttons.push(buttonCaptureUpgradeNet);
game.captureUpgradeButtons.push(buttonCaptureUpgradeNet);

var buttonCaptureUpgradeLasso=new game.UpgradeButton(82,150,85,98,"lasso",game.playerStats.soapboxUpgradeCosts,game.playerStats.soapboxStats, "capture", 1, game.captureTab);
buttonCaptureUpgradeLasso.setVisible(true);
game.buttons.push(buttonCaptureUpgradeLasso);
game.captureUpgradeButtons.push(buttonCaptureUpgradeLasso);

var buttonCaptureUpgradeTrapdoor=new game.UpgradeButton(165,150,85,98,"trapdoor",game.playerStats.speakerUpgradeCosts,game.playerStats.speakerStats, "capture", 1, game.captureTab);
buttonCaptureUpgradeTrapdoor.setVisible(true);
game.buttons.push(buttonCaptureUpgradeTrapdoor);
game.captureUpgradeButtons.push(buttonCaptureUpgradeTrapdoor);

var buttonCaptureUpgradeVan=new game.UpgradeButton(247,150,85,98,"van",game.playerStats.podiumUpgradeCosts,game.playerStats.podiumStats, "capture", 1, game.captureTab);
buttonCaptureUpgradeVan.setVisible(true);
game.buttons.push(buttonCaptureUpgradeVan);
game.captureUpgradeButtons.push(buttonCaptureUpgradeVan);

var buttonCaptureUpgradeInvasion=new game.UpgradeButton(329,150,85,98,"invasion",game.playerStats.camcorderUpgradeCosts,game.playerStats.camcorderStats, "capture", 1, game.captureTab);
buttonCaptureUpgradeInvasion.setVisible(true);
game.buttons.push(buttonCaptureUpgradeInvasion);
game.captureUpgradeButtons.push(buttonCaptureUpgradeInvasion);

var buttonCaptureUpgradePhaser=new game.UpgradeButton(410,150,85,98,"phaser",game.playerStats.computerUpgradeCosts,game.playerStats.computerStats, "capture", 1, game.captureTab);
buttonCaptureUpgradePhaser.setVisible(true);
game.buttons.push(buttonCaptureUpgradePhaser);
game.captureUpgradeButtons.push(buttonCaptureUpgradePhaser);

var buttonCaptureUpgradeCloning=new game.UpgradeButton(494,150,85,98,"cloning",game.playerStats.laptopUpgradeCosts,game.playerStats.laptopStats, "capture", 1, game.captureTab);
buttonCaptureUpgradeCloning.setVisible(true);
game.buttons.push(buttonCaptureUpgradeCloning);
game.captureUpgradeButtons.push(buttonCaptureUpgradeCloning);

for(var x=0;x<game.captureUpgradeButtons.length;x++) {
    game.captureObjects.push(game.captureUpgradeButtons[x]);
}

//Create the objects that will go in the execution tab 
game.executionHeader=new game.Background(0,0,584,126,"img/headers/execution.png");
game.executionHeader.setVisible(true);
game.backgrounds.push(game.executionHeader);

//These will be all the execution buttons
//knife, cleavr, ax, blade, gui, saw, light
var buttonExecutionKnife=new game.ToolButton(0,267,580,98,"img/execution_tool_icons/execution_knife.png","",game.playerStats.knifeStats);
buttonExecutionKnife.setVisible(true);
game.buttons.push(buttonExecutionKnife);
game.executionToolButtons.push(buttonExecutionKnife);

var buttonExecutionCleaver=new game.ToolButton(0,384,580,98,"img/execution_tool_icons/execution_cleaver.png","",game.playerStats.cleaversStats);
buttonExecutionCleaver.setVisible(true);
game.buttons.push(buttonExecutionCleaver);
game.executionToolButtons.push(buttonExecutionCleaver);

var buttonExecutionAxe=new game.ToolButton(0,500,580,98,"img/execution_tool_icons/execution_axe.png","",game.playerStats.axeStats);
buttonExecutionAxe.setVisible(true);
game.buttons.push(buttonExecutionAxe);
game.executionToolButtons.push(buttonExecutionAxe);

var buttonExecutionBlade=new game.ToolButton(0,617,580,98,"img/execution_tool_icons/execution_blade.png","",game.playerStats.bladeStats);
buttonExecutionBlade.setVisible(true);
game.buttons.push(buttonExecutionBlade);
game.executionToolButtons.push(buttonExecutionBlade);

var buttonExecutionGuillotine=new game.ToolButton(0,734,580,98,"img/execution_tool_icons/execution_guillotine.png","",game.playerStats.guillotineStats);
buttonExecutionGuillotine.setVisible(true);
game.buttons.push(buttonExecutionGuillotine);
game.executionToolButtons.push(buttonExecutionGuillotine);

var buttonExecutionSaw=new game.ToolButton(0,849,580,98,"img/execution_tool_icons/execution_saw.png","",game.playerStats.sawStats);
buttonExecutionSaw.setVisible(true);
game.buttons.push(buttonExecutionSaw);
game.executionToolButtons.push(buttonExecutionSaw);

var buttonExecutionLightsaber=new game.ToolButton(0,964,580,98,"img/execution_tool_icons/execution_lightsaber.png","",game.playerStats.lightsaberStats);
buttonExecutionLightsaber.setVisible(true);
game.buttons.push(buttonExecutionLightsaber);
game.executionToolButtons.push(buttonExecutionLightsaber);

game.executionObjects=[];
for(var x=0;x<game.executionToolButtons.length;x++) {
    game.executionObjects.push(game.executionToolButtons[x]);
}
game.executionObjects.push(game.executionHeader);

game.executionTab=new game.Tab(999,137,113,108,"img/tab_buttons/execution_button.png",game.executionObjects);
game.executionTab.setVisible(true);
game.tabs.push(game.executionTab);

//These are all the execution upgrade buttons
var buttonExecutionUpgradeKnife=new game.UpgradeButton(-1,150,85,98,"knife",game.playerStats.bookUpgradeCosts,game.playerStats.booksStats, "execution", 1, game.executionTab);
buttonExecutionUpgradeKnife.setVisible(true);
game.buttons.push(buttonExecutionUpgradeKnife);
game.executionUpgradeButtons.push(buttonExecutionUpgradeKnife);

var buttonExecutionUpgradeCleaver=new game.UpgradeButton(82,150,85,98,"cleaver",game.playerStats.soapboxUpgradeCosts,game.playerStats.soapboxStats, "execution", 1, game.executionTab);
buttonExecutionUpgradeCleaver.setVisible(true);
game.buttons.push(buttonExecutionUpgradeCleaver);
game.executionUpgradeButtons.push(buttonExecutionUpgradeCleaver);

var buttonExecutionUpgradeAxe=new game.UpgradeButton(165,150,85,98,"axe",game.playerStats.speakerUpgradeCosts,game.playerStats.speakerStats, "execution", 1, game.executionTab);
buttonExecutionUpgradeAxe.setVisible(true);
game.buttons.push(buttonExecutionUpgradeAxe);
game.executionUpgradeButtons.push(buttonExecutionUpgradeAxe);

var buttonExecutionUpgradeBlade=new game.UpgradeButton(247,150,85,98,"blade",game.playerStats.podiumUpgradeCosts,game.playerStats.podiumStats, "execution", 1, game.executionTab);
buttonExecutionUpgradeBlade.setVisible(true);
game.buttons.push(buttonExecutionUpgradeBlade);
game.executionUpgradeButtons.push(buttonExecutionUpgradeBlade);

var buttonExecutionUpgradeGuillotine=new game.UpgradeButton(329,150,85,98,"guillotine",game.playerStats.camcorderUpgradeCosts,game.playerStats.camcorderStats, "execution", 1, game.executionTab);
buttonExecutionUpgradeGuillotine.setVisible(true);
game.buttons.push(buttonExecutionUpgradeGuillotine);
game.executionUpgradeButtons.push(buttonExecutionUpgradeGuillotine);

var buttonExecutionUpgradeSaw=new game.UpgradeButton(410,150,85,98,"saw",game.playerStats.computerUpgradeCosts,game.playerStats.computerStats, "execution", 1, game.executionTab);
buttonExecutionUpgradeSaw.setVisible(true);
game.buttons.push(buttonExecutionUpgradeSaw);
game.executionUpgradeButtons.push(buttonExecutionUpgradeSaw);

var buttonExecutionUpgradeLightsaber=new game.UpgradeButton(494,150,85,98,"lightsaber",game.playerStats.laptopUpgradeCosts,game.playerStats.laptopStats, "execution", 1, game.executionTab);
buttonExecutionUpgradeLightsaber.setVisible(true);
game.buttons.push(buttonExecutionUpgradeLightsaber);
game.executionUpgradeButtons.push(buttonExecutionUpgradeLightsaber);

for(var x=0;x<game.executionUpgradeButtons.length;x++) {
    game.executionObjects.push(game.executionUpgradeButtons[x]);
}
//Create the objects that will go in the stat tab
game.statHeader=new game.Background(0,0,584,126,"img/headers/execution.png");
game.statHeader.setVisible(true);
game.backgrounds.push(game.statHeader);

game.statObjects=[];
game.statObjects.push(game.statHeader);

game.statTab=new game.Tab(1150,137,113,108,"img/tab_buttons/stat_button.png",game.statObjects);
game.statTab.setVisible(true);
game.tabs.push(game.statTab);

game.conversionTab.setTabVisible(true);
game.captureTab.setTabVisible(false);
game.executionTab.setTabVisible(false);
game.statTab.setTabVisible(false);



function button1Click(){
	b1+=1;
	var textbox = document.getElementById('text');
	textbox.placeholder = "hello";
}