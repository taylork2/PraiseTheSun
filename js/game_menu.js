
//Create the objects that will go in the conversion tab
game.conversionHeader=new game.Background(0,0,584,126,"img/headers/conversion.png");
game.conversionHeader.setVisible(true);
game.backgrounds.push(game.conversionHeader);

game.conversionObjects=[];
game.conversionObjects.push(game.conversionHeader);

game.conversionTab=new game.Tab(680,137,113,108,"img/tab_buttons/conversion_button.png",game.conversionObjects);
game.conversionTab.setVisible(true);
game.tabs.push(game.conversionTab);

//These are all the conversion buttons
var buttonConversionBook=new game.ToolButton(0,267,580,98,"book","BOOK",game.playerStats.booksStats,"conversion", game.conversionTab, "50 Shades of Sunlight");
buttonConversionBook.setVisible(true);
game.buttons.push(buttonConversionBook);
game.conversionToolButtons.push(buttonConversionBook);

var buttonConversionSoapbox=new game.ToolButton(0,384,580,98,"soapbox","SOAPBOX",game.playerStats.soapboxStats,"conversion", game.conversionTab,"Your own personal moral elevator.");
buttonConversionSoapbox.setVisible(true);
game.buttons.push(buttonConversionSoapbox);
game.conversionToolButtons.push(buttonConversionSoapbox);

var buttonConversionSpeaker=new game.ToolButton(0,500,580,98,"speaker","LOUDSPEAKER",game.playerStats.speakerStats,"conversion",game.conversionTab,"For the hard of hearing. Because they will be, after hearing you.");
buttonConversionSpeaker.setVisible(true);
game.buttons.push(buttonConversionSpeaker);
game.conversionToolButtons.push(buttonConversionSpeaker);

var buttonConversionPodium=new game.ToolButton(0,617,580,98,"podium","PODIUM",game.playerStats.podiumStats,"conversion",game.conversionTab,"You've bought a spot in your local election. Turns out it was pretty cheap.");
buttonConversionPodium.setVisible(true);
game.buttons.push(buttonConversionPodium);
game.conversionToolButtons.push(buttonConversionPodium);

var buttonConversionCamcorder=new game.ToolButton(0,734,580,98,"camcorder","CAMCORDER",game.playerStats.camcorderStats,"conversion",game.conversionTab,"Now you can show your face to all the people in the world who don't care about you.");
buttonConversionCamcorder.setVisible(true);
game.buttons.push(buttonConversionCamcorder);
game.conversionToolButtons.push(buttonConversionCamcorder);

var buttonConversionComputer=new game.ToolButton(0,849,580,98,"computer","COMPUTER",game.playerStats.computerStats,"conversion",game.conversionTab,"A behemoth of a machine, this quad-core Titan still doesn't help you win arguments on the Internet.");
buttonConversionComputer.setVisible(true);
game.buttons.push(buttonConversionComputer);
game.conversionToolButtons.push(buttonConversionComputer);

var buttonConversionLaptop=new game.ToolButton(0,964,580,98,"laptop","LAPTOP",game.playerStats.laptopStats,"conversion",game.conversionTab,"All the convenience of arguing with people who will never understand you, to go!");
buttonConversionLaptop.setVisible(true);
game.buttons.push(buttonConversionLaptop);
game.conversionToolButtons.push(buttonConversionLaptop);

for(var x=0;x<game.conversionToolButtons.length;x++) {
    game.conversionObjects.push(game.conversionToolButtons[x]);
}

var panelLine=new game.Background(-73,131,648,17,"img/panel_line.png");
panelLine.setVisible(true);
game.backgrounds.push(panelLine);

panelLine=new game.Background(-73,250,648,17,"img/panel_line.png");
panelLine.setVisible(true);
game.backgrounds.push(panelLine);

panelLine=new game.Background(-73,365,648,17,"img/panel_line.png");
panelLine.setVisible(true);
game.backgrounds.push(panelLine);

panelLine=new game.Background(-73,482,648,17,"img/panel_line.png");
panelLine.setVisible(true);
game.backgrounds.push(panelLine);

panelLine=new game.Background(-73,598,648,17,"img/panel_line.png");
panelLine.setVisible(true);
game.backgrounds.push(panelLine);

panelLine=new game.Background(-73,715,648,17,"img/panel_line.png");
panelLine.setVisible(true);
game.backgrounds.push(panelLine);

panelLine=new game.Background(-73,832,648,17,"img/panel_line.png");
panelLine.setVisible(true);
game.backgrounds.push(panelLine);

panelLine=new game.Background(-73,946,648,17,"img/panel_line.png");
panelLine.setVisible(true);
game.backgrounds.push(panelLine);

panelLine=new game.Background(-73,1062,648,17,"img/panel_line.png");
panelLine.setVisible(true);
game.backgrounds.push(panelLine);

panelLine=new game.Background(646,250,649,17,"img/panel_line.png");
panelLine.setVisible(true);
game.backgrounds.push(panelLine);

panelLine=new game.Background(646,365,649,17,"img/panel_line.png");
panelLine.setVisible(true);
game.backgrounds.push(panelLine);

panelLine=new game.Background(646,482,649,17,"img/panel_line.png");
panelLine.setVisible(true);
game.backgrounds.push(panelLine);

panelLine=new game.Background(646,598,649,17,"img/panel_line.png");
panelLine.setVisible(true);
game.backgrounds.push(panelLine);

panelLine=new game.Background(646,715,649,17,"img/panel_line.png");
panelLine.setVisible(true);
game.backgrounds.push(panelLine);

panelLine=new game.Background(646,832,649,17,"img/panel_line.png");
panelLine.setVisible(true);
game.backgrounds.push(panelLine);

panelLine=new game.Background(646,946,648,17,"img/panel_line.png");
panelLine.setVisible(true);
game.backgrounds.push(panelLine);

panelLine=new game.Background(646,1062,648,17,"img/panel_line.png");
panelLine.setVisible(true);
game.backgrounds.push(panelLine);


//These are all the upgrade buttons
var buttonConversionUpgradeBook=new game.UpgradeButton(-1,150,85,98,"book",game.playerStats.bookUpgradeCosts,game.playerStats.booksStats, "conversion", 1, game.conversionTab, "Thick Spine, Increases the conversion rate from books by 1.5, For hammering home your ideas.");
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

game.captureObjects=[];
game.captureObjects.push(game.captureHeader);

game.captureTab=new game.Tab(840,137,113,108,"img/tab_buttons/capture_button.png",game.captureObjects);
game.captureTab.setVisible(true);
game.tabs.push(game.captureTab);

//These will be all the capture buttons
//var buttonCaptureNet=new game.ToolButton(0,267,580,98,"net","",game.playerStats.netStats, "capture", game.captureTab);
//buttonCaptureNet.setVisible(true);
//game.buttons.push(buttonCaptureNet);
//game.captureToolButtons.push(buttonCaptureNet);
//
//var buttonCaptureLasso=new game.ToolButton(0,384,580,98,"lasso","",game.playerStats.lassoStats,"capture",game.captureTab);
//buttonCaptureLasso.setVisible(true);
//game.buttons.push(buttonCaptureLasso);
//game.captureToolButtons.push(buttonCaptureLasso);
//
//var buttonCaptureTrapdoor=new game.ToolButton(0,500,580,98,"trapdoor","",game.playerStats.trapdoorStats,"capture",game.captureTab);
//buttonCaptureTrapdoor.setVisible(true);
//game.buttons.push(buttonCaptureTrapdoor);
//game.captureToolButtons.push(buttonCaptureTrapdoor);
//
//var buttonCaptureVan=new game.ToolButton(0,617,580,98,"van","",game.playerStats.vanStats,"capture",game.captureTab);
//buttonCaptureVan.setVisible(true);
//game.buttons.push(buttonCaptureVan);
//game.captureToolButtons.push(buttonCaptureVan);
//
//var buttonCaptureInvasion=new game.ToolButton(0,734,580,98,"invasion","",game.playerStats.invasionStats,"capture",game.captureTab);
//buttonCaptureInvasion.setVisible(true);
//game.buttons.push(buttonCaptureInvasion);
//game.captureToolButtons.push(buttonCaptureInvasion);
//
//var buttonCapturePhaser=new game.ToolButton(0,849,580,98,"phaser","",game.playerStats.phaserStats,"capture",game.captureTab);
//buttonCapturePhaser.setVisible(true);
//game.buttons.push(buttonCapturePhaser);
//game.captureToolButtons.push(buttonCapturePhaser);
//
//var buttonCaptureCloning=new game.ToolButton(0,964,580,98,"cloning","",game.playerStats.cloningStats,"capture",game.captureTab);
//buttonCaptureCloning.setVisible(true);
//game.buttons.push(buttonCaptureCloning);
//game.captureToolButtons.push(buttonCaptureCloning);

for(var x=0;x<game.captureToolButtons.length;x++) {
    game.captureObjects.push(game.captureToolButtons[x]);
}

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

game.executionObjects=[];
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

//These will be all the execution buttons
//knife, cleavr, ax, blade, gui, saw, light
//var buttonExecutionKnife=new game.ToolButton(0,267,580,98,"knife","",game.playerStats.knifeStats, "execution", game.executionTab);
//buttonExecutionKnife.setVisible(true);
//game.buttons.push(buttonExecutionKnife);
//game.executionToolButtons.push(buttonExecutionKnife);
//
//var buttonExecutionCleaver=new game.ToolButton(0,384,580,98,"cleaver","",game.playerStats.cleaversStats,"execution",game.executionTab);
//buttonExecutionCleaver.setVisible(true);
//game.buttons.push(buttonExecutionCleaver);
//game.executionToolButtons.push(buttonExecutionCleaver);
//
//var buttonExecutionAxe=new game.ToolButton(0,500,580,98,"axe","",game.playerStats.axeStats,"execution",game.executionTab);
//buttonExecutionAxe.setVisible(true);
//game.buttons.push(buttonExecutionAxe);
//game.executionToolButtons.push(buttonExecutionAxe);
//
//var buttonExecutionBlade=new game.ToolButton(0,617,580,98,"blade","",game.playerStats.bladeStats,"execution",game.executionTab);
//buttonExecutionBlade.setVisible(true);
//game.buttons.push(buttonExecutionBlade);
//game.executionToolButtons.push(buttonExecutionBlade);
//
//var buttonExecutionGuillotine=new game.ToolButton(0,734,580,98,"guillotine","",game.playerStats.guillotineStats,"execution",game.executionTab);
//buttonExecutionGuillotine.setVisible(true);
//game.buttons.push(buttonExecutionGuillotine);
//game.executionToolButtons.push(buttonExecutionGuillotine);
//
//var buttonExecutionSaw=new game.ToolButton(0,849,580,98,"saw","",game.playerStats.sawStats,"execution",game.executionTab);
//buttonExecutionSaw.setVisible(true);
//game.buttons.push(buttonExecutionSaw);
//game.executionToolButtons.push(buttonExecutionSaw);
//
//var buttonExecutionLightsaber=new game.ToolButton(0,964,580,98,"lightsaber","",game.playerStats.lightsaberStats,"execution",game.executionTab);
//buttonExecutionLightsaber.setVisible(true);
//game.buttons.push(buttonExecutionLightsaber);
//game.executionToolButtons.push(buttonExecutionLightsaber);

for(var x=0;x<game.executionToolButtons.length;x++) {
    game.executionObjects.push(game.executionToolButtons[x]);
}
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
