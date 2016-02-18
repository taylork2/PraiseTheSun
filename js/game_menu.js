//Create the lines in between panels
//This line is above the rest, on the left.
var panelLine = new game.Background(-73, 131, 648, 17, null, "img/panel_line.png");
panelLine.setVisible(true);
game.backgrounds.push(panelLine);

panelLineYValues = [250, 365, 482, 598, 715, 832, 946, 1061];

//Create the lines between the tools
for (var i = 0; i < panelLineYValues.length; i++) {
    panelLine = new game.Background(-73, panelLineYValues[i], 648, 17, null, "img/panel_line.png");
    panelLine.setVisible(true);
    game.backgrounds.push(panelLine);
}

//Create the lines between the panels showing cultists with tools
for (var i = 0; i < panelLineYValues.length; i++) {
    panelLine = new game.Background(645, panelLineYValues[i], 649, 17, null, "img/panel_line.png");
    panelLine.setVisible(true);
    game.backgrounds.push(panelLine);
}

//Create the objects that will go in the conversion tab
game.conversionHeader=new game.Background(0,0,584,126,null,"img/headers/conversion.png");
game.conversionHeader.setVisible(true);
game.backgrounds.push(game.conversionHeader);

game.conversionObjects=[];
game.conversionObjects.push(game.conversionHeader);

game.conversionTab=new game.Tab(680,137,113,108,null,"img/tab_buttons/conversion_button.png",game.conversionObjects);
game.conversionTab.setVisible(true);
game.tabs.push(game.conversionTab);

//These are all the conversion buttons
var buttonConversionBook=new game.ToolButton(0,267,580,98,null,"book","BOOK",game.toolStats.bookStats,"conversion", game.conversionTab, "50 Shades of Sunlight");
buttonConversionBook.setVisible(true);
game.buttons.push(buttonConversionBook);
game.conversionToolButtons.push(buttonConversionBook);

var buttonConversionSoapbox=new game.ToolButton(0,384,580,98,null,"soapbox","SOAPBOX",game.toolStats.soapboxStats,"conversion", game.conversionTab,"Your own personal moral elevator.");
buttonConversionSoapbox.setVisible(true);
game.buttons.push(buttonConversionSoapbox);
game.conversionToolButtons.push(buttonConversionSoapbox);

var buttonConversionSpeaker=new game.ToolButton(0,500,580,98,null,"speaker","LOUDSPEAKER",game.toolStats.speakerStats,"conversion",game.conversionTab,"For the hard of hearing. Because they will be, after hearing you.");
buttonConversionSpeaker.setVisible(true);
game.buttons.push(buttonConversionSpeaker);
game.conversionToolButtons.push(buttonConversionSpeaker);

var buttonConversionPodium=new game.ToolButton(0,617,580,98,null,"podium","PODIUM",game.toolStats.podiumStats,"conversion",game.conversionTab,"You've bought a spot in your local election. Turns out it was pretty cheap.");
buttonConversionPodium.setVisible(true);
game.buttons.push(buttonConversionPodium);
game.conversionToolButtons.push(buttonConversionPodium);

var buttonConversionCamcorder=new game.ToolButton(0,734,580,98,null,"camcorder","CAMCORDER",game.toolStats.camcorderStats,"conversion",game.conversionTab,"Now you can show your face to all the people in the world who don't care about you.");
buttonConversionCamcorder.setVisible(true);
game.buttons.push(buttonConversionCamcorder);
game.conversionToolButtons.push(buttonConversionCamcorder);

var buttonConversionComputer=new game.ToolButton(0,849,580,98,null,"computer","COMPUTER",game.toolStats.computerStats,"conversion",game.conversionTab,"A behemoth of a machine, this quad-core Titan still doesn't help you win arguments on the Internet.");
buttonConversionComputer.setVisible(true);
game.buttons.push(buttonConversionComputer);
game.conversionToolButtons.push(buttonConversionComputer);

var buttonConversionLaptop=new game.ToolButton(0,964,580,98,null,"laptop","LAPTOP",game.toolStats.laptopStats,"conversion",game.conversionTab,"All the convenience of arguing with people who will never understand you, to go!");
buttonConversionLaptop.setVisible(true);
game.buttons.push(buttonConversionLaptop);
game.conversionToolButtons.push(buttonConversionLaptop);

for(var x=0;x<game.conversionToolButtons.length;x++) {
    game.conversionObjects.push(game.conversionToolButtons[x]);
}

game.conversionPanels=[];

//These are all the conversion panels
var panelConversionBook=new game.Background(647,267,647,100,null,"img/conversion_panels/panel_book.png");
panelConversionBook.setVisible(true);
game.backgrounds.push(panelConversionBook);
game.conversionPanels.push(panelConversionBook);

var panelConversionSoapbox=new game.Background(647,384,647,100,null,"img/conversion_panels/panel_soapbox.png");
panelConversionSoapbox.setVisible(true);
game.backgrounds.push(panelConversionSoapbox);
game.conversionPanels.push(panelConversionSoapbox);

var panelConversionSpeaker=new game.Background(647,500,647,100,null,"img/conversion_panels/panel_speaker.png");
panelConversionSpeaker.setVisible(true);
game.backgrounds.push(panelConversionSpeaker);
game.conversionPanels.push(panelConversionSpeaker);

var panelConversionPodium=new game.Background(647,617,647,100,null,"img/conversion_panels/panel_podium.png");
panelConversionPodium.setVisible(true);
game.backgrounds.push(panelConversionPodium);
game.conversionPanels.push(panelConversionPodium);

var panelConversionCamcorder=new game.Background(647,734,647,100,null,"img/conversion_panels/panel_camcorder.png");
panelConversionCamcorder.setVisible(true);
game.backgrounds.push(panelConversionCamcorder);
game.conversionPanels.push(panelConversionCamcorder);

var panelConversionComputer=new game.Background(647,849,647,100,null,"img/conversion_panels/panel_computer.png");
panelConversionComputer.setVisible(true);
game.backgrounds.push(panelConversionComputer);
game.conversionPanels.push(panelConversionComputer);

var panelConversionLaptop=new game.Background(647,964,647,100,null,"img/conversion_panels/panel_laptop.png");
panelConversionLaptop.setVisible(true);
game.backgrounds.push(panelConversionLaptop);
game.conversionPanels.push(panelConversionLaptop);

for(var x=0;x<game.conversionPanels.length;x++) {
    game.conversionObjects.push(game.conversionPanels[x]);
}

//These are all the upgrade buttons
var buttonConversionUpgradeBook=new game.UpgradeButton(-1,150,85,98,null,"book",game.upgradeStats.bookUpgradeCosts,game.toolStats.bookStats, "conversion", 1, game.conversionTab, "Increases the conversion rate of books by 1.5");
buttonConversionUpgradeBook.setVisible(true);
game.buttons.push(buttonConversionUpgradeBook);
game.conversionUpgradeButtons.push(buttonConversionUpgradeBook);

var buttonConversionUpgradeSoapbox=new game.UpgradeButton(82,150,85,98,null, "soapbox",game.upgradeStats.soapboxUpgradeCosts,game.toolStats.soapboxStats, "conversion", 1, game.conversionTab, "Increases the conversion rate of soapbox by 1.5");
buttonConversionUpgradeSoapbox.setVisible(true);
game.buttons.push(buttonConversionUpgradeSoapbox);
game.conversionUpgradeButtons.push(buttonConversionUpgradeSoapbox);

var buttonConversionUpgradeSpeaker=new game.UpgradeButton(165,150,85,98,null,"speaker",game.upgradeStats.speakerUpgradeCosts,game.toolStats.speakerStats, "conversion", 1, game.conversionTab,"Increases the conversion rate of speaker by 1.5");
buttonConversionUpgradeSpeaker.setVisible(true);
game.buttons.push(buttonConversionUpgradeSpeaker);
game.conversionUpgradeButtons.push(buttonConversionUpgradeSpeaker);

var buttonConversionUpgradePodium=new game.UpgradeButton(247,150,85,98,null,"podium",game.upgradeStats.podiumUpgradeCosts,game.toolStats.podiumStats, "conversion", 1, game.conversionTab, "Increases the conversion rate of podium by 1.5");
buttonConversionUpgradePodium.setVisible(true);
game.buttons.push(buttonConversionUpgradePodium);
game.conversionUpgradeButtons.push(buttonConversionUpgradePodium);

var buttonConversionUpgradeCamcorder=new game.UpgradeButton(329,150,85,98,null, "camcorder",game.upgradeStats.camcorderUpgradeCosts,game.toolStats.camcorderStats, "conversion", 1, game.conversionTab, "Increases the conversion rate of camcorder by 1.5");
buttonConversionUpgradeCamcorder.setVisible(true);
game.buttons.push(buttonConversionUpgradeCamcorder);
game.conversionUpgradeButtons.push(buttonConversionUpgradeCamcorder);

var buttonConversionUpgradeComputer=new game.UpgradeButton(410,150,85,98,null, "computer",game.upgradeStats.computerUpgradeCosts,game.toolStats.computerStats, "conversion", 1, game.conversionTab, "Increases the conversion rate of computer by 1.5");
buttonConversionUpgradeComputer.setVisible(true);
game.buttons.push(buttonConversionUpgradeComputer);
game.conversionUpgradeButtons.push(buttonConversionUpgradeComputer);

var buttonConversionUpgradeLaptop=new game.UpgradeButton(494,150,85,98,null, "laptop",game.upgradeStats.laptopUpgradeCosts,game.toolStats.laptopStats, "conversion", 1, game.conversionTab, "Increases the conversion rate of laptop by 1.5");
buttonConversionUpgradeLaptop.setVisible(true);
game.buttons.push(buttonConversionUpgradeLaptop);
game.conversionUpgradeButtons.push(buttonConversionUpgradeLaptop);

for(var x=0;x<game.conversionUpgradeButtons.length;x++) {
    game.conversionObjects.push(game.conversionUpgradeButtons[x]);
}

//Create the objects that will go in the capture tab
game.captureHeader=new game.Background(0,0,584,126,null,"img/headers/capture.png");
game.captureHeader.setVisible(false);
game.backgrounds.push(game.captureHeader);

game.captureObjects=[];
game.captureObjects.push(game.captureHeader);

game.captureTab=new game.Tab(840,137,113,108,null,"img/tab_buttons/capture_button.png",game.captureObjects);
game.captureTab.setVisible(true);
game.tabs.push(game.captureTab);

//These will be all the capture buttons
var buttonCaptureNet=new game.ToolButton(0,267,580,98,null,"net","",game.toolStats.netStats, "capture", game.captureTab,"Bag them and tag them (and decapitate them)");
buttonCaptureNet.setVisible(true);
game.buttons.push(buttonCaptureNet);
game.captureToolButtons.push(buttonCaptureNet);

var buttonCaptureLasso=new game.ToolButton(0,384,580,98,null,"lasso","",game.toolStats.lassoStats,"capture",game.captureTab,"Yeehaw!");
buttonCaptureLasso.setVisible(true);
game.buttons.push(buttonCaptureLasso);
game.captureToolButtons.push(buttonCaptureLasso);

var buttonCaptureTrapdoor=new game.ToolButton(0,500,580,98,null,"trapdoor","",game.toolStats.trapdoorStats,"capture",game.captureTab,"Also can be used for flowerpots, and that weird stand thing in front of bars.");
buttonCaptureTrapdoor.setVisible(true);
game.buttons.push(buttonCaptureTrapdoor);
game.captureToolButtons.push(buttonCaptureTrapdoor);

var buttonCaptureVan=new game.ToolButton(0,617,580,98,null,"van","",game.toolStats.vanStats,"capture",game.captureTab,"No, we're not the FBI. Yes, we're still listening.");
buttonCaptureVan.setVisible(true);
game.buttons.push(buttonCaptureVan);
game.captureToolButtons.push(buttonCaptureVan);

var buttonCaptureInvasion=new game.ToolButton(0,734,580,98,null,"invasion","",game.toolStats.invasionStats,"capture",game.captureTab,"Walls are simply a compact way of storing future prisoners.");
buttonCaptureInvasion.setVisible(true);
game.buttons.push(buttonCaptureInvasion);
game.captureToolButtons.push(buttonCaptureInvasion);

var buttonCapturePhaser=new game.ToolButton(0,849,580,98,null,"phaser","",game.toolStats.phaserStats,"capture",game.captureTab,"Tried to use these as execution weapons, but someone keeps locking them to stun.");
buttonCapturePhaser.setVisible(true);
game.buttons.push(buttonCapturePhaser);
game.captureToolButtons.push(buttonCapturePhaser);

var buttonCaptureCloning=new game.ToolButton(0,964,580,98,null,"cloning","",game.toolStats.cloningStats,"capture",game.captureTab,"Genetically engineered for larger heads and thinner necks.");
buttonCaptureCloning.setVisible(true);
game.buttons.push(buttonCaptureCloning);
game.captureToolButtons.push(buttonCaptureCloning);

for(var x=0;x<game.captureToolButtons.length;x++) {
    game.captureObjects.push(game.captureToolButtons[x]);
}


game.capturePanels=[];
//These will be all the capture panels
var panelCaptureNet=new game.Background(647,267,647,100,null,"img/capture_panels/panel_capture_net.png");
panelCaptureNet.setVisible(true);
game.backgrounds.push(panelCaptureNet);
game.capturePanels.push(panelCaptureNet);

var panelCaptureLasso=new game.Background(647,384,647,100,null,"img/capture_panels/panel_capture_lasso.png");
panelCaptureLasso.setVisible(true);
game.backgrounds.push(panelCaptureLasso);
game.capturePanels.push(panelCaptureLasso);

var panelCaptureTrapdoor=new game.Background(647,500,647,100,null,"img/capture_panels/panel_capture_trapdoor.png");
panelCaptureTrapdoor.setVisible(true);
game.backgrounds.push(panelCaptureTrapdoor);
game.capturePanels.push(panelCaptureTrapdoor);

var panelCaptureVan=new game.Background(647,617,647,100,null,"img/capture_panels/panel_capture_van.png");
panelCaptureVan.setVisible(true);
game.backgrounds.push(panelCaptureVan);
game.capturePanels.push(panelCaptureVan);

var panelCaptureInvasion=new game.Background(647,734,647,100,null,"img/capture_panels/panel_capture_invasion.png");
panelCaptureInvasion.setVisible(true);
game.backgrounds.push(panelCaptureInvasion);
game.capturePanels.push(panelCaptureInvasion);

var panelCapturePhaser=new game.Background(647,849,647,100,null,"img/capture_panels/panel_capture_phaser.png");
panelCapturePhaser.setVisible(true);
game.backgrounds.push(panelCapturePhaser);
game.capturePanels.push(panelCapturePhaser);

var panelCaptureCloning=new game.Background(647,964,647,100,null,"img/capture_panels/panel_capture_cloning.png");
panelCaptureCloning.setVisible(true);
game.backgrounds.push(panelCaptureCloning);
game.capturePanels.push(panelCaptureCloning);

for(var x=0;x<game.capturePanels.length;x++) {
    game.captureObjects.push(game.capturePanels[x]);
}

//These are all the capture upgrade buttons
var buttonCaptureUpgradeNet=new game.UpgradeButton(-1,150,85,98,null, "net",game.upgradeStats.netUpgradeCosts,game.toolStats.netStats, "capture", 1, game.captureTab, "Increases the capture rate of  net by 1.5");
buttonCaptureUpgradeNet.setVisible(true);
game.buttons.push(buttonCaptureUpgradeNet);
game.captureUpgradeButtons.push(buttonCaptureUpgradeNet);

var buttonCaptureUpgradeLasso=new game.UpgradeButton(82,150,85,98,null, "lasso",game.upgradeStats.lassoUpgradeCosts,game.toolStats.lassoStats, "capture", 1, game.captureTab, "Increases the capture rate of  lasso by 1.5");
buttonCaptureUpgradeLasso.setVisible(true);
game.buttons.push(buttonCaptureUpgradeLasso);
game.captureUpgradeButtons.push(buttonCaptureUpgradeLasso);

var buttonCaptureUpgradeTrapdoor=new game.UpgradeButton(165,150,85,98,null, "trapdoor",game.upgradeStats.trapdoorUpgradeCosts,game.toolStats.trapdoorStats, "capture", 1, game.captureTab, "Increases the capture rate of trapdoor by 1.5");
buttonCaptureUpgradeTrapdoor.setVisible(true);
game.buttons.push(buttonCaptureUpgradeTrapdoor);
game.captureUpgradeButtons.push(buttonCaptureUpgradeTrapdoor);

var buttonCaptureUpgradeVan=new game.UpgradeButton(247,150,85,98,null, "van",game.upgradeStats.vanUpgradeCosts,game.toolStats.vanStats, "capture", 1, game.captureTab, "Increases the capture rate of van by 1.5");
buttonCaptureUpgradeVan.setVisible(true);
game.buttons.push(buttonCaptureUpgradeVan);
game.captureUpgradeButtons.push(buttonCaptureUpgradeVan);

var buttonCaptureUpgradeInvasion=new game.UpgradeButton(329,150,85,98,null, "invasion",game.upgradeStats.invasionUpgradeCosts,game.toolStats.invasionStats, "capture", 1, game.captureTab, "Increases the capture rate of invasion by 1.5");
buttonCaptureUpgradeInvasion.setVisible(true);
game.buttons.push(buttonCaptureUpgradeInvasion);
game.captureUpgradeButtons.push(buttonCaptureUpgradeInvasion);

var buttonCaptureUpgradePhaser=new game.UpgradeButton(410,150,85,98,null, "phaser",game.upgradeStats.phaserUpgradeCosts,game.toolStats.phaserStats, "capture", 1, game.captureTab, "Increases the capture rate of phaser by 1.5");
buttonCaptureUpgradePhaser.setVisible(true);
game.buttons.push(buttonCaptureUpgradePhaser);
game.captureUpgradeButtons.push(buttonCaptureUpgradePhaser);

var buttonCaptureUpgradeCloning=new game.UpgradeButton(494,150,85,98,null, "cloning",game.upgradeStats.cloningUpgradeCosts,game.toolStats.cloningStats, "capture", 1, game.captureTab, "Increases the capture rate of cloning by 1.5");
buttonCaptureUpgradeCloning.setVisible(true);
game.buttons.push(buttonCaptureUpgradeCloning);
game.captureUpgradeButtons.push(buttonCaptureUpgradeCloning);

for(var x=0;x<game.captureUpgradeButtons.length;x++) {
    game.captureObjects.push(game.captureUpgradeButtons[x]);
}

//Create the objects that will go in the execution tab 
game.executionHeader=new game.Background(0,0,584,126,null,"img/headers/execution.png");
game.executionHeader.setVisible(true);
game.backgrounds.push(game.executionHeader);

game.executionObjects=[];
game.executionObjects.push(game.executionHeader);

game.executionTab=new game.Tab(999,137,113,108,null,"img/tab_buttons/execution_button.png",game.executionObjects);
game.executionTab.setVisible(true);
game.tabs.push(game.executionTab);

//These are all the execution upgrade buttons
var buttonExecutionUpgradeKnife=new game.UpgradeButton(-1,150,85,98,null, "knife",game.upgradeStats.knifeUpgradeCosts,game.toolStats.knifeStats, "execution", 1, game.executionTab, "Increases the execution rate of knife by 10");
buttonExecutionUpgradeKnife.setVisible(true);
game.buttons.push(buttonExecutionUpgradeKnife);
game.executionUpgradeButtons.push(buttonExecutionUpgradeKnife);

var buttonExecutionUpgradeCleaver=new game.UpgradeButton(82,150,85,98,null, "cleaver",game.upgradeStats.cleaverUpgradeCosts,game.toolStats.cleaverStats, "execution", 1, game.executionTab, "Increases the execution rate of cleaver by 10");
buttonExecutionUpgradeCleaver.setVisible(true);
game.buttons.push(buttonExecutionUpgradeCleaver);
game.executionUpgradeButtons.push(buttonExecutionUpgradeCleaver);

var buttonExecutionUpgradeAxe=new game.UpgradeButton(165,150,85,98,null, "axe",game.upgradeStats.axeUpgradeCosts,game.toolStats.axeStats, "execution", 1, game.executionTab, "Increases the execution rate of axe by 10");
buttonExecutionUpgradeAxe.setVisible(true);
game.buttons.push(buttonExecutionUpgradeAxe);
game.executionUpgradeButtons.push(buttonExecutionUpgradeAxe);

var buttonExecutionUpgradeBlade=new game.UpgradeButton(247,150,85,98,null, "blade",game.upgradeStats.bladeUpgradeCosts,game.toolStats.bladeStats, "execution", 1, game.executionTab, "Increases the execution rate of blade by 10");
buttonExecutionUpgradeBlade.setVisible(true);
game.buttons.push(buttonExecutionUpgradeBlade);
game.executionUpgradeButtons.push(buttonExecutionUpgradeBlade);

var buttonExecutionUpgradeGuillotine=new game.UpgradeButton(329,150,85,98,null, "guillotine",game.upgradeStats.guillotineUpgradeCosts,game.toolStats.guillotineStats, "execution", 1, game.executionTab, "Increases the execution rate of guillotine by 10");
buttonExecutionUpgradeGuillotine.setVisible(true);
game.buttons.push(buttonExecutionUpgradeGuillotine);
game.executionUpgradeButtons.push(buttonExecutionUpgradeGuillotine);

var buttonExecutionUpgradeSaw=new game.UpgradeButton(410,150,85,98,null, "saw",game.upgradeStats.sawUpgradeCosts,game.toolStats.sawStats, "execution", 1, game.executionTab, "Increases the execution rate of saw by 10");
buttonExecutionUpgradeSaw.setVisible(true);
game.buttons.push(buttonExecutionUpgradeSaw);
game.executionUpgradeButtons.push(buttonExecutionUpgradeSaw);

var buttonExecutionUpgradeLightsaber=new game.UpgradeButton(494,150,85,98,null, "lightsaber",game.upgradeStats.lightsaberUpgradeCosts,game.toolStats.lightsaberStats, "execution", 1, game.executionTab, "Increases the execution rate of lightsaber by 10");
buttonExecutionUpgradeLightsaber.setVisible(true);
game.buttons.push(buttonExecutionUpgradeLightsaber);
game.executionUpgradeButtons.push(buttonExecutionUpgradeLightsaber);

//These will be all the execution buttons
//knife, cleavr, ax, blade, gui, saw, light
var buttonExecutionKnife=new game.ToolButton(0,267,580,98,null,"knife","",game.toolStats.knifeStats, "execution", game.executionTab,"stab stab stabby stab");
buttonExecutionKnife.setVisible(true);
game.buttons.push(buttonExecutionKnife);
game.executionToolButtons.push(buttonExecutionKnife);

var buttonExecutionCleaver=new game.ToolButton(0,384,580,98,null,"cleaver","",game.toolStats.cleaverStats,"execution",game.executionTab,"I 'ardly knew her!");
buttonExecutionCleaver.setVisible(true);
game.buttons.push(buttonExecutionCleaver);
game.executionToolButtons.push(buttonExecutionCleaver);

var buttonExecutionAxe=new game.ToolButton(0,500,580,98,null,"axe","",game.toolStats.axeStats,"execution",game.executionTab,"The favorite weapon of past presidents and crazed writers");
buttonExecutionAxe.setVisible(true);
game.buttons.push(buttonExecutionAxe);
game.executionToolButtons.push(buttonExecutionAxe);

var buttonExecutionBlade=new game.ToolButton(0,617,580,98,null,"blade","",game.toolStats.bladeStats,"execution",game.executionTab,"Do NOT try to use this blade as a top");
buttonExecutionBlade.setVisible(true);
game.buttons.push(buttonExecutionBlade);
game.executionToolButtons.push(buttonExecutionBlade);

var buttonExecutionGuillotine=new game.ToolButton(0,734,580,98,null,"guillotine","",game.toolStats.guillotineStats,"execution",game.executionTab,"Literally made for the job");
buttonExecutionGuillotine.setVisible(true);
game.buttons.push(buttonExecutionGuillotine);
game.executionToolButtons.push(buttonExecutionGuillotine);

var buttonExecutionSaw=new game.ToolButton(0,849,580,98,null,"saw","",game.toolStats.sawStats,"execution",game.executionTab,"Zombie slaying classic");
buttonExecutionSaw.setVisible(true);
game.buttons.push(buttonExecutionSaw);
game.executionToolButtons.push(buttonExecutionSaw);

var buttonExecutionLightsaber=new game.ToolButton(0,964,580,98,null,"lightsaber","",game.toolStats.lightsaberStats,"execution",game.executionTab,"An elegant weapon for a less civilized age");
buttonExecutionLightsaber.setVisible(true);
game.buttons.push(buttonExecutionLightsaber);
game.executionToolButtons.push(buttonExecutionLightsaber);

game.executionPanels=[];

//These will be all the execution panels
var panelExecutionKnife=new game.Background(647,267,647,100,null,"img/execution_panels/panel_execution_knife.png");
panelExecutionKnife.setVisible(true);
game.buttons.push(panelExecutionKnife);
game.executionPanels.push(panelExecutionKnife);

var panelExecutionCleaver=new game.Background(647,384,647,100,null,"img/execution_panels/panel_execution_cleaver.png");
panelExecutionCleaver.setVisible(true);
game.buttons.push(panelExecutionCleaver);
game.executionPanels.push(panelExecutionCleaver);

var panelExecutionAxe=new game.Background(647,500,647,100,null,"img/execution_panels/panel_execution_axe.png");
panelExecutionAxe.setVisible(true);
game.buttons.push(panelExecutionAxe);
game.executionPanels.push(panelExecutionAxe);

var panelExecutionBlade=new game.Background(647,617,647,100,null,"img/execution_panels/panel_execution_blade.png");
panelExecutionBlade.setVisible(true);
game.buttons.push(panelExecutionBlade);
game.executionPanels.push(panelExecutionBlade);

var panelExecutionGuillotine=new game.Background(647,734,647,100,null,"img/execution_panels/panel_execution_guillotine.png");
panelExecutionGuillotine.setVisible(true);
game.buttons.push(panelExecutionGuillotine);
game.executionPanels.push(panelExecutionGuillotine);

var panelExecutionSaw=new game.Background(647,849,647,100,null,"img/execution_panels/panel_execution_saw.png");
panelExecutionSaw.setVisible(true);
game.buttons.push(panelExecutionSaw);
game.executionPanels.push(panelExecutionSaw);

var panelExecutionLightsaber=new game.Background(647,964,647,100,null,"img/execution_panels/panel_execution_lightsaber.png");
panelExecutionLightsaber.setVisible(true);
game.buttons.push(panelExecutionLightsaber);
game.executionPanels.push(panelExecutionLightsaber);

for(var x=0;x<game.executionPanels.length;x++) {
    game.executionObjects.push(game.executionPanels[x]);
}

for(var x=0;x<game.executionToolButtons.length;x++) {
    game.executionObjects.push(game.executionToolButtons[x]);
}
for(var x=0;x<game.executionUpgradeButtons.length;x++) {
    game.executionObjects.push(game.executionUpgradeButtons[x]);
}
//Create the objects that will go in the stat tab
game.statHeader=new game.Background(0,0,584,126,null,"img/headers/stat.png");
game.statHeader.setVisible(true);
game.backgrounds.push(game.statHeader);

game.statPPText=new game.Text(game.masterBackground,657,300,"Total Coin: ","bold 24pt lucida console ","white",6,"#5f3c0f");
game.statPPNum=new game.TextNumber(game.masterBackground,900,300,"","bold 24pt lucida console ","white",6,"#5f3c0f",game.playerStats,"totalPrayerPoints");

game.statCultistsText=new game.Text(game.masterBackground,657,420,"Max Followers: ","bold 24pt lucida console ","white",6,"#5f3c0f");
game.statCultistsNum=new game.TextNumber(game.masterBackground,960,420,"","bold 24pt lucida console ","white",6,"#5f3c0f", game.playerStats,"totalCultists");

game.statExecutedText=new game.Text(game.masterBackground,657,533,"Total Executed: ","bold 24pt lucida console ","white",6,"#5f3c0f");
game.statExecutedNum=new game.TextNumber(game.masterBackground,990,533,"","bold 24pt lucida console ","white",6,"#5f3c0f", game.playerStats,"totalExecuted");

game.statExecutionRateText=new game.Text(game.masterBackground,657,647,"Execution Rate: ","bold 24pt lucida console ","white",6,"#5f3c0f");
game.statExecutionRateNum=new game.TextNumber(game.masterBackground,990,647,"","bold 24pt lucida console ","white",6,"#5f3c0f", game.playerStats,"prodRateExec");

game.statFollowerRateText=new game.Text(game.masterBackground,657,765,"Conversion Rate: ","bold 24pt lucida console ","white",6,"#5f3c0f");
game.statFollowerRateNum=new game.TextNumber(game.masterBackground,995,765,"","bold 24pt lucida console ","white",6,"#5f3c0f", game.playerStats,"prodRateCult");

game.statPPRateText=new game.Text(game.masterBackground,657,880,"Prisoner Rate: ","bold 24pt lucida console ","white",6,"#5f3c0f");
game.statPPRateNum=new game.TextNumber(game.masterBackground,995,880,"","bold 24pt lucida console ","white",6,"#5f3c0f", game.playerStats,"prodRatePris");

game.statTimeText=new game.Text(game.masterBackground,657,995,"Time Played: ","bold 24pt lucida console ","white",6,"#5f3c0f");
game.statTimeNum=new game.TextNumber(game.masterBackground,995,995,"","bold 24pt lucida console ","white",6,"#5f3c0f", game.playerStats,"time");

game.saveButton=new game.ButtonSave(0,300,50,50,"img/description.png");
game.buttons.push(game.saveButton);

game.statObjects=[];
game.statObjects.push(game.saveButton);
game.statObjects.push(game.statHeader);
game.statObjects.push(game.statPPText);
game.statObjects.push(game.statPPNum);
game.statObjects.push(game.statCultistsText);
game.statObjects.push(game.statCultistsNum);
game.statObjects.push(game.statExecutedText);
game.statObjects.push(game.statExecutedNum);
game.statObjects.push(game.statExecutionRateText);
game.statObjects.push(game.statExecutionRateNum);
game.statObjects.push(game.statFollowerRateText);
game.statObjects.push(game.statFollowerRateNum);
game.statObjects.push(game.statPPRateText);
game.statObjects.push(game.statPPRateNum);
game.statObjects.push(game.statTimeText);
game.statObjects.push(game.statTimeNum);

game.statTab=new game.Tab(1150,137,113,108,null,"img/tab_buttons/stat_button.png",game.statObjects);
game.statTab.setVisible(true);
game.tabs.push(game.statTab);

game.conversionTab.setTabVisible(true);
game.captureTab.setTabVisible(false);
game.executionTab.setTabVisible(false);
game.statTab.setTabVisible(false);

game.angry1=new game.Achievement(800,1000,"img/achievements/angry1.png", "Angry1");
game.angry1.checkCondition=function(){
    if(game.playerStats.prisoners > 10001){
        return true;
    }
}
game.achievements.push(game.angry1);
game.angry2=new game.Achievement(800,1000,"img/achievements/angry2.png", "Angry2");
game.angry2.checkCondition=function(){
    if(game.playerStats.prisoners > 1000001){
        return true;
    }
}
game.achievements.push(game.angry2);
game.happy1=new game.Achievement(800,1000,"img/achievements/happy1.png", "Happy1");
game.happy1.checkCondition=function(){
    if(game.playerStats.cultists > 10001){
        return true;
    }
}
game.achievements.push(game.happy1);
game.happy2=new game.Achievement(800,1000,"img/achievements/happy2.png", "Happy2");
game.happy2.checkCondition=function(){
    if(game.playerStats.cultists > 1000001){
        return true;
    }
}
game.achievements.push(game.happy2);

//game.a3=new game.Achievement(800,1000,"img/achievements/axe1.png", "Axe1");
//game.a3.checkCondition=function(){
//    if(game.toolStats.axeStats.numTools> 1){
//        return true;
//    }
//}
//game.a4=new game.Achievement(800,1000,"img/achievements/axe2.png", "Axe2");
//game.a4.checkCondition=function(){
//    if(game.toolStats.axeStats.numTools > 100){
//        return true;
//    }
//}
//game.a5=new game.Achievement(800,1000,"img/achievements/axe3.png", "Axe3");
//game.a5.checkCondition=function(){
//    if(game.toolStats.axeStats.numTools > 1001){
//        return true;
//    }
//}
//game.a6=new game.Achievement(800,1000,"img/achievements/blade1.png", "Blade1");
//game.a6.checkCondition=function(){
//    if(game.toolStats.bladeStats.numTools > 1){
//        return true;
//    }
//}
//game.a7=new game.Achievement(800,1000,"img/achievements/blade2.png", "Blade2");
//game.a7.checkCondition=function(){
//    if(game.toolStats.bladeStats.numTools > 10){
//        return true;
//    }
//}
//game.a8=new game.Achievement(800,1000,"img/achievements/blade3.png", "Blade3");
//game.a8.checkCondition=function(){
//    if(game.toolStats.bladeStats.numTools > 100){
//        return true;
//    }
//}
//game.a9=new game.Achievement(800,1000,"img/achievements/cleaver1.png", "Cleaver1");
//game.a9.checkCondition=function(){
//    if(game.toolStats.cleaverStats.numTools > 1){
//        return true;
//    }
//}
//game.a10=new game.Achievement(800,1000,"img/achievements/cleaver2.png", "Cleaver2");
//game.a9.checkCondition=function(){
//    if(game.toolStats.cleaverStats.numTools > 10){
//        return true;
//    }
//}
//game.a11=new game.Achievement(800,1000,"img/achievements/cleaver3.png", "Cleaver3");
//game.a11.checkCondition=function(){
//    if(game.toolStats.cleaverStats.numTools > 100){
//        return true;
//    }
//}
//game.a12=new game.Achievement(800,1000,"img/achievements/clone1.png", "Clone1");
//game.a12.checkCondition=function(){
//    if(game.toolStats.cloningStats.numTools > 1){
//        return true;
//    }
//}
//
//
//game.achievements.push(game.a2);
//game.achievements.push(game.a3);
//game.achievements.push(game.a4);
//game.achievements.push(game.a5);
//game.achievements.push(game.a6);

game.aaxe_1=new game.Achievement(800,1000,"img/achievements/axe1.png", "Axe_1"); game.aaxe_1.checkCondition=function(){     if(game.toolStats.axeStats.numTools > 10){         return true;     } } 
game.achievements.push(game.aaxe_1); game.aaxe_2=new game.Achievement(800,1000,"img/achievements/axe2.png", "Axe_2"); game.aaxe_2.checkCondition=function(){     if(game.toolStats.axeStats.numTools > 100){         return true;     } } 
game.achievements.push(game.aaxe_2); game.aaxe_3=new game.Achievement(800,1000,"img/achievements/axe3.png", "Axe_3"); game.aaxe_3.checkCondition=function(){     if(game.toolStats.axeStats.numTools > 1000){         return true;     } } 
game.achievements.push(game.aaxe_3);
game.ablade_1=new game.Achievement(800,1000,"img/achievements/blade1.png", "Blade_1"); game.ablade_1.checkCondition=function(){     if(game.toolStats.bladeStats.numTools > 10){         return true;     } }
game.achievements.push(game.ablade_1); game.ablade_2=new game.Achievement(800,1000,"img/achievements/blade2.png", "Blade_2"); game.ablade_2.checkCondition=function(){     if(game.toolStats.bladeStats.numTools > 100){         return true;     } }
game.achievements.push(game.ablade_2); game.ablade_3=new game.Achievement(800,1000,"img/achievements/blade3.png", "Blade_3"); game.ablade_3.checkCondition=function(){     if(game.toolStats.bladeStats.numTools > 1000){         return true;     } }
game.achievements.push(game.ablade_3);
game.abook_1=new game.Achievement(800,1000,"img/achievements/book1.png", "Book_1");
game.abook_1.checkCondition=function(){     if(game.toolStats.bookStats.numTools > 10){         return true;     } 
                                      }
game.achievements.push(game.abook_1); game.abook_2=new game.Achievement(800,1000,"img/achievements/book2.png", "Book_2"); game.abook_2.checkCondition=function(){     if(game.toolStats.bookStats.numTools > 100){         return true;     } }
game.achievements.push(game.abook_2); game.abook_3=new game.Achievement(800,1000,"img/achievements/book3.png", "Book_3"); game.abook_3.checkCondition=function(){     if(game.toolStats.bookStats.numTools > 1000){         return true;     } }
game.achievements.push(game.abook_3);
game.acamcorder_1=new game.Achievement(800,1000,"img/achievements/camcorder1.png", "Camcorder_1"); game.acamcorder_1.checkCondition=function(){     if(game.toolStats.camcorderStats.numTools > 10){         return true;     } }
game.achievements.push(game.acamcorder_1); game.acamcorder_2=new game.Achievement(800,1000,"img/achievements/camcorder2.png", "Camcorder_2"); game.acamcorder_2.checkCondition=function(){     if(game.toolStats.camcorderStats.numTools > 100){         return true;     } }
game.achievements.push(game.acamcorder_2); game.acamcorder_3=new game.Achievement(800,1000,"img/achievements/camcorder3.png", "Camcorder_3"); game.acamcorder_3.checkCondition=function(){     if(game.toolStats.camcorderStats.numTools > 1000){         return true;     } }
game.achievements.push(game.acamcorder_3);
game.acleaver_1=new game.Achievement(800,1000,"img/achievements/cleaver1.png", "Cleaver_1"); game.acleaver_1.checkCondition=function(){     if(game.toolStats.cleaverStats.numTools > 10){         return true;     } }
game.achievements.push(game.acleaver_1); game.acleaver_2=new game.Achievement(800,1000,"img/achievements/cleaver2.png", "Cleaver_2"); game.acleaver_2.checkCondition=function(){     if(game.toolStats.cleaverStats.numTools > 100){         return true;     } }
game.achievements.push(game.acleaver_2); game.acleaver_3=new game.Achievement(800,1000,"img/achievements/cleaver3.png", "Cleaver_3"); game.acleaver_3.checkCondition=function(){     if(game.toolStats.cleaverStats.numTools > 1000){         return true;     } }
game.achievements.push(game.acleaver_3);
game.aclone_1=new game.Achievement(800,1000,"img/achievements/clone1.png", "Clone_1"); game.aclone_1.checkCondition=function(){     if(game.toolStats.cloningStats.numTools > 10){         return true;     } }
game.achievements.push(game.aclone_1); game.aclone_2=new game.Achievement(800,1000,"img/achievements/clone2.png", "Clone_2"); game.aclone_2.checkCondition=function(){     if(game.toolStats.cloningStats.numTools > 100){         return true;     } }
game.achievements.push(game.aclone_2); game.aclone_3=new game.Achievement(800,1000,"img/achievements/clone3.png", "Clone_3"); game.aclone_3.checkCondition=function(){     if(game.toolStats.cloningStats.numTools > 1000){         return true;     } }

game.achievements.push(game.aclone_3);
game.acomputer_1=new game.Achievement(800,1000,"img/achievements/computer1.png", "Computer_1"); game.acomputer_1.checkCondition=function(){     if(game.toolStats.computerStats.numTools > 10){         return true;     } }
game.achievements.push(game.acomputer_1); game.acomputer_2=new game.Achievement(800,1000,"img/achievements/computer2.png", "Computer_2"); game.acomputer_2.checkCondition=function(){     if(game.toolStats.computerStats.numTools > 100){         return true;     } }
game.achievements.push(game.acomputer_2); game.acomputer_3=new game.Achievement(800,1000,"img/achievements/computer3.png", "Computer_3"); game.acomputer_3.checkCondition=function(){     if(game.toolStats.computerStats.numTools > 1000){         return true;     } }
game.achievements.push(game.acomputer_3);
game.aguillotine_1=new game.Achievement(800,1000,"img/achievements/guillotine1.png", "Guillotine_1"); game.aguillotine_1.checkCondition=function(){     if(game.toolStats.guillotineStats.numTools > 10){         return true;     } }

game.achievements.push(game.aguillotine_1); game.aguillotine_2=new game.Achievement(800,1000,"img/achievements/guillotine2.png", "Guillotine_2"); game.aguillotine_2.checkCondition=function(){     if(game.toolStats.guillotineStats.numTools > 100){         return true;     } }

game.achievements.push(game.aguillotine_2); game.aguillotine_3=new game.Achievement(800,1000,"img/achievements/guillotine3.png", "Guillotine_3"); game.aguillotine_3.checkCondition=function(){     if(game.toolStats.guillotineStats.numTools > 1000){         return true;     } }

game.achievements.push(game.aguillotine_3);
game.ainvasion_1=new game.Achievement(800,1000,"img/achievements/invasion1.png", "Invasion_1"); game.ainvasion_1.checkCondition=function(){     if(game.toolStats.invasionStats.numTools > 10){         return true;     } }
game.achievements.push(game.ainvasion_1); game.ainvasion_2=new game.Achievement(800,1000,"img/achievements/invasion2.png", "Invasion_2"); game.ainvasion_2.checkCondition=function(){     if(game.toolStats.invasionStats.numTools > 100){         return true;     } }
game.achievements.push(game.ainvasion_2); game.ainvasion_3=new game.Achievement(800,1000,"img/achievements/invasion3.png", "Invasion_3"); game.ainvasion_3.checkCondition=function(){     if(game.toolStats.invasionStats.numTools > 1000){         return true;     } }
game.achievements.push(game.ainvasion_3);
game.aknife_1=new game.Achievement(800,1000,"img/achievements/knife1.png", "Knife_1"); game.aknife_1.checkCondition=function(){     if(game.toolStats.knifeStats.numTools > 10){         return true;     } }
game.achievements.push(game.aknife_1); game.aknife_2=new game.Achievement(800,1000,"img/achievements/knife2.png", "Knife_2"); game.aknife_2.checkCondition=function(){     if(game.toolStats.knifeStats.numTools > 100){         return true;     } }
game.achievements.push(game.aknife_2); game.aknife_3=new game.Achievement(800,1000,"img/achievements/knife3.png", "Knife_3"); game.aknife_3.checkCondition=function(){     if(game.toolStats.knifeStats.numTools > 1000){         return true;     } }
game.achievements.push(game.aknife_3);
game.alaptop_1=new game.Achievement(800,1000,"img/achievements/laptop1.png", "Laptop_1"); game.alaptop_1.checkCondition=function(){     if(game.toolStats.laptopStats.numTools > 10){         return true;     } }
game.achievements.push(game.alaptop_1); game.alaptop_2=new game.Achievement(800,1000,"img/achievements/laptop2.png", "Laptop_2"); game.alaptop_2.checkCondition=function(){     if(game.toolStats.laptopStats.numTools > 100){         return true;     } }
game.achievements.push(game.alaptop_2); game.alaptop_3=new game.Achievement(800,1000,"img/achievements/laptop3.png", "Laptop_3"); game.alaptop_3.checkCondition=function(){     if(game.toolStats.laptopStats.numTools > 1000){         return true;     } }
game.achievements.push(game.alaptop_3);
game.alasso_1=new game.Achievement(800,1000,"img/achievements/lasso1.png", "Lasso_1"); game.alasso_1.checkCondition=function(){     if(game.toolStats.lassoStats.numTools > 10){         return true;     } }
game.achievements.push(game.alasso_1); game.alasso_2=new game.Achievement(800,1000,"img/achievements/lasso2.png", "Lasso_2"); game.alasso_2.checkCondition=function(){     if(game.toolStats.lassoStats.numTools > 100){         return true;     } }
game.achievements.push(game.alasso_2); game.alasso_3=new game.Achievement(800,1000,"img/achievements/lasso3.png", "Lasso_3"); game.alasso_3.checkCondition=function(){     if(game.toolStats.lassoStats.numTools > 1000){         return true;     } }
game.achievements.push(game.alasso_3);
game.alightsaber_1=new game.Achievement(800,1000,"img/achievements/lightsaber1.png", "Lightsaber_1"); game.alightsaber_1.checkCondition=function(){     if(game.toolStats.lightsaberStats.numTools > 10){         return true;     } }
game.achievements.push(game.alightsaber_1); game.alightsaber_2=new game.Achievement(800,1000,"img/achievements/lightsaber2.png", "Lightsaber_2"); game.alightsaber_2.checkCondition=function(){     if(game.toolStats.lightsaberStats.numTools > 100){         return true;     } }
game.achievements.push(game.alightsaber_2); game.alightsaber_3=new game.Achievement(800,1000,"img/achievements/lightsaber3.png", "Lightsaber_3"); game.alightsaber_3.checkCondition=function(){     if(game.toolStats.lightsaberStats.numTools > 1000){         return true;     } }
game.achievements.push(game.alightsaber_3);
game.anet_1=new game.Achievement(800,1000,"img/achievements/net1.png", "Net_1"); game.anet_1.checkCondition=function(){     if(game.toolStats.netStats.numTools > 10){         return true;     } } 
game.achievements.push(game.anet_1); game.anet_2=new game.Achievement(800,1000,"img/achievements/net2.png", "Net_2"); game.anet_2.checkCondition=function(){     if(game.toolStats.netStats.numTools > 100){         return true;     } } 
game.achievements.push(game.anet_2); game.anet_3=new game.Achievement(800,1000,"img/achievements/net3.png", "Net_3"); game.anet_3.checkCondition=function(){     if(game.toolStats.netStats.numTools > 1000){         return true;     } } 
game.achievements.push(game.anet_3);
game.aphaser_1=new game.Achievement(800,1000,"img/achievements/phaser1.png", "Phaser_1"); game.aphaser_1.checkCondition=function(){     if(game.toolStats.phaserStats.numTools > 10){         return true;     } }
game.achievements.push(game.aphaser_1); game.aphaser_2=new game.Achievement(800,1000,"img/achievements/phaser2.png", "Phaser_2"); game.aphaser_2.checkCondition=function(){     if(game.toolStats.phaserStats.numTools > 100){         return true;     } }
game.achievements.push(game.aphaser_2); game.aphaser_3=new game.Achievement(800,1000,"img/achievements/phaser3.png", "Phaser_3"); game.aphaser_3.checkCondition=function(){     if(game.toolStats.phaserStats.numTools > 1000){         return true;     } }
game.achievements.push(game.aphaser_3);
game.apodium_1=new game.Achievement(800,1000,"img/achievements/podium1.png", "Podium_1"); game.apodium_1.checkCondition=function(){     if(game.toolStats.podiumStats.numTools > 10){         return true;     } }
game.achievements.push(game.apodium_1); game.apodium_2=new game.Achievement(800,1000,"img/achievements/podium2.png", "Podium_2"); game.apodium_2.checkCondition=function(){     if(game.toolStats.podiumStats.numTools > 100){         return true;     } }
game.achievements.push(game.apodium_2); game.apodium_3=new game.Achievement(800,1000,"img/achievements/podium3.png", "Podium_3"); game.apodium_3.checkCondition=function(){     if(game.toolStats.podiumStats.numTools > 1000){         return true;     } }
game.achievements.push(game.apodium_3);
game.asaw_1=new game.Achievement(800,1000,"img/achievements/saw1.png", "Saw_1"); game.asaw_1.checkCondition=function(){     if(game.toolStats.sawStats.numTools > 10){         return true;     } } 
game.achievements.push(game.asaw_1); game.asaw_2=new game.Achievement(800,1000,"img/achievements/saw2.png", "Saw_2"); game.asaw_2.checkCondition=function(){     if(game.toolStats.sawStats.numTools > 100){         return true;     } } 
game.achievements.push(game.asaw_2); game.asaw_3=new game.Achievement(800,1000,"img/achievements/saw3.png", "Saw_3"); game.asaw_3.checkCondition=function(){     if(game.toolStats.sawStats.numTools > 1000){         return true;     } } 
game.achievements.push(game.asaw_3);
game.asoapbox_1=new game.Achievement(800,1000,"img/achievements/soapbox1.png", "Soapbox_1"); game.asoapbox_1.checkCondition=function(){     if(game.toolStats.soapboxStats.numTools > 10){         return true;     } }
game.achievements.push(game.asoapbox_1); game.asoapbox_2=new game.Achievement(800,1000,"img/achievements/soapbox2.png", "Soapbox_2"); game.asoapbox_2.checkCondition=function(){     if(game.toolStats.soapboxStats.numTools > 100){         return true;     } }
game.achievements.push(game.asoapbox_2); game.asoapbox_3=new game.Achievement(800,1000,"img/achievements/soapbox3.png", "Soapbox_3"); game.asoapbox_3.checkCondition=function(){     if(game.toolStats.soapboxStats.numTools > 1000){         return true;     } }
game.achievements.push(game.asoapbox_3);
game.aspeaker_1=new game.Achievement(800,1000,"img/achievements/speaker1.png", "Speaker_1"); game.aspeaker_1.checkCondition=function(){     if(game.toolStats.speakerStats.numTools > 10){         return true;     } }
game.achievements.push(game.aspeaker_1); game.aspeaker_2=new game.Achievement(800,1000,"img/achievements/speaker2.png", "Speaker_2"); game.aspeaker_2.checkCondition=function(){     if(game.toolStats.speakerStats.numTools > 100){         return true;     } }
game.achievements.push(game.aspeaker_2); game.aspeaker_3=new game.Achievement(800,1000,"img/achievements/speaker3.png", "Speaker_3"); game.aspeaker_3.checkCondition=function(){     if(game.toolStats.speakerStats.numTools > 1000){         return true;     } }
game.achievements.push(game.aspeaker_3);
game.atrapdoor_1=new game.Achievement(800,1000,"img/achievements/trapdoor1.png", "Trapdoor_1"); game.atrapdoor_1.checkCondition=function(){     if(game.toolStats.trapdoorStats.numTools > 10){         return true;     } }
game.achievements.push(game.atrapdoor_1); game.atrapdoor_2=new game.Achievement(800,1000,"img/achievements/trapdoor2.png", "Trapdoor_2"); game.atrapdoor_2.checkCondition=function(){     if(game.toolStats.trapdoorStats.numTools > 100){         return true;     } }
game.achievements.push(game.atrapdoor_2); game.atrapdoor_3=new game.Achievement(800,1000,"img/achievements/trapdoor3.png", "Trapdoor_3"); game.atrapdoor_3.checkCondition=function(){     if(game.toolStats.trapdoorStats.numTools > 1000){         return true;     } }
game.achievements.push(game.atrapdoor_3);
game.avan_1=new game.Achievement(800,1000,"img/achievements/van1.png", "Van_1"); game.avan_1.checkCondition=function(){     if(game.toolStats.vanStats.numTools > 10){         return true;     } }
game.achievements.push(game.avan_1); game.avan_2=new game.Achievement(800,1000,"img/achievements/van2.png", "Van_2"); game.avan_2.checkCondition=function(){     if(game.toolStats.vanStats.numTools > 100){         return true;     } }
game.achievements.push(game.avan_2); game.avan_3=new game.Achievement(800,1000,"img/achievements/van3.png", "Van_3"); game.avan_3.checkCondition=function(){     if(game.toolStats.vanStats.numTools > 1000){         return true;     } }
game.achievements.push(game.avan_3);



game.titleHeader=new game.Background(650,0,644,141,null,"img/logo.png");
game.titleHeader.setVisible(true);
game.backgrounds.push(game.titleHeader);
