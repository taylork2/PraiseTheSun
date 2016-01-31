
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

game.conversionPanels=[];

//These are all the conversion panels
var panelConversionBook=new game.Background(647,267,647,100,"img/conversion_panels/panel_book.png");
panelConversionBook.setVisible(true);
game.backgrounds.push(panelConversionBook);
game.conversionPanels.push(panelConversionBook);

var panelConversionSoapbox=new game.Background(647,384,647,100,"img/conversion_panels/panel_soapbox.png");
panelConversionSoapbox.setVisible(true);
game.backgrounds.push(panelConversionSoapbox);
game.conversionPanels.push(panelConversionSoapbox);

var panelConversionSpeaker=new game.Background(647,500,647,100,"img/conversion_panels/panel_speaker.png");
panelConversionSpeaker.setVisible(true);
game.backgrounds.push(panelConversionSpeaker);
game.conversionPanels.push(panelConversionSpeaker);

var panelConversionPodium=new game.Background(647,617,647,100,"img/conversion_panels/panel_podium.png");
panelConversionPodium.setVisible(true);
game.backgrounds.push(panelConversionPodium);
game.conversionPanels.push(panelConversionPodium);

var panelConversionCamcorder=new game.Background(647,734,647,100,"img/conversion_panels/panel_camcorder.png");
panelConversionCamcorder.setVisible(true);
game.backgrounds.push(panelConversionCamcorder);
game.conversionPanels.push(panelConversionCamcorder);

var panelConversionComputer=new game.Background(647,849,647,100,"img/conversion_panels/panel_computer.png");
panelConversionComputer.setVisible(true);
game.backgrounds.push(panelConversionComputer);
game.conversionPanels.push(panelConversionComputer);

var panelConversionLaptop=new game.Background(647,964,647,100,"img/conversion_panels/panel_laptop.png");
panelConversionLaptop.setVisible(true);
game.backgrounds.push(panelConversionLaptop);
game.conversionPanels.push(panelConversionLaptop);

for(var x=0;x<game.conversionPanels.length;x++) {
    game.conversionObjects.push(game.conversionPanels[x]);
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
var buttonConversionUpgradeBook=new game.UpgradeButton(-1,150,85,98,"book",game.playerStats.bookUpgradeCosts,game.playerStats.booksStats, "conversion", 1, game.conversionTab, "Increases the conversion rate from books by 1.5");
buttonConversionUpgradeBook.setVisible(true);
game.buttons.push(buttonConversionUpgradeBook);
game.conversionUpgradeButtons.push(buttonConversionUpgradeBook);

var buttonConversionUpgradeSoapbox=new game.UpgradeButton(82,150,85,98, "soapbox",game.playerStats.soapboxUpgradeCosts,game.playerStats.soapboxStats, "conversion", 1, game.conversionTab, "Increases the conversion rate of soapbox by 1.5");
buttonConversionUpgradeSoapbox.setVisible(true);
game.buttons.push(buttonConversionUpgradeSoapbox);
game.conversionUpgradeButtons.push(buttonConversionUpgradeSoapbox);

var buttonConversionUpgradeSpeaker=new game.UpgradeButton(165,150,85,98,"speaker",game.playerStats.speakerUpgradeCosts,game.playerStats.speakerStats, "conversion", 1, game.conversionTab,"upgrade");
buttonConversionUpgradeSpeaker.setVisible(true);
game.buttons.push(buttonConversionUpgradeSpeaker);
game.conversionUpgradeButtons.push(buttonConversionUpgradeSpeaker);

var buttonConversionUpgradePodium=new game.UpgradeButton(247,150,85,98,"podium",game.playerStats.podiumUpgradeCosts,game.playerStats.podiumStats, "conversion", 1, game.conversionTab, "Increases the conversion rate of podium by 1.5");
buttonConversionUpgradePodium.setVisible(true);
game.buttons.push(buttonConversionUpgradePodium);
game.conversionUpgradeButtons.push(buttonConversionUpgradePodium);

var buttonConversionUpgradeCamcorder=new game.UpgradeButton(329,150,85,98, "camcorder",game.playerStats.camcorderUpgradeCosts,game.playerStats.camcorderStats, "conversion", 1, game.conversionTab, "Increases the conversion rate of camcorder by 1.5");
buttonConversionUpgradeCamcorder.setVisible(true);
game.buttons.push(buttonConversionUpgradeCamcorder);
game.conversionUpgradeButtons.push(buttonConversionUpgradeCamcorder);

var buttonConversionUpgradeComputer=new game.UpgradeButton(410,150,85,98, "computer",game.playerStats.computerUpgradeCosts,game.playerStats.computerStats, "conversion", 1, game.conversionTab, "Increases the conversion rate of computer by 1.5");
buttonConversionUpgradeComputer.setVisible(true);
game.buttons.push(buttonConversionUpgradeComputer);
game.conversionUpgradeButtons.push(buttonConversionUpgradeComputer);

var buttonConversionUpgradeLaptop=new game.UpgradeButton(494,150,85,98, "laptop",game.playerStats.laptopUpgradeCosts,game.playerStats.laptopStats, "conversion", 1, game.conversionTab, "Increases the conversion rate of laptop by 1.5");
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
var buttonCaptureNet=new game.ToolButton(0,267,580,98,"net","",game.playerStats.netStats, "capture", game.captureTab,"Bag them and tag them (and decapitate them)");
buttonCaptureNet.setVisible(true);
game.buttons.push(buttonCaptureNet);
game.captureToolButtons.push(buttonCaptureNet);

var buttonCaptureLasso=new game.ToolButton(0,384,580,98,"lasso","",game.playerStats.lassoStats,"capture",game.captureTab,"Yeehaw!");
buttonCaptureLasso.setVisible(true);
game.buttons.push(buttonCaptureLasso);
game.captureToolButtons.push(buttonCaptureLasso);

var buttonCaptureTrapdoor=new game.ToolButton(0,500,580,98,"trapdoor","",game.playerStats.trapdoorStats,"capture",game.captureTab,"Also can be used for flowerpots, and that weird stand thing in front of bars.");
buttonCaptureTrapdoor.setVisible(true);
game.buttons.push(buttonCaptureTrapdoor);
game.captureToolButtons.push(buttonCaptureTrapdoor);

var buttonCaptureVan=new game.ToolButton(0,617,580,98,"van","",game.playerStats.vanStats,"capture",game.captureTab,"No, we're not the FBI. Yes, we're still listening.");
buttonCaptureVan.setVisible(true);
game.buttons.push(buttonCaptureVan);
game.captureToolButtons.push(buttonCaptureVan);

var buttonCaptureInvasion=new game.ToolButton(0,734,580,98,"invasion","",game.playerStats.invasionStats,"capture",game.captureTab,"Walls are simply a compact way of storing future prisoners.");
buttonCaptureInvasion.setVisible(true);
game.buttons.push(buttonCaptureInvasion);
game.captureToolButtons.push(buttonCaptureInvasion);

var buttonCapturePhaser=new game.ToolButton(0,849,580,98,"phaser","",game.playerStats.phaserStats,"capture",game.captureTab,"Tried to use this as an execution weapon, but someone keeps leaving it locked to stun.");
buttonCapturePhaser.setVisible(true);
game.buttons.push(buttonCapturePhaser);
game.captureToolButtons.push(buttonCapturePhaser);

var buttonCaptureCloning=new game.ToolButton(0,964,580,98,"cloning","",game.playerStats.cloningStats,"capture",game.captureTab,"We breed them to have thin necks.");
buttonCaptureCloning.setVisible(true);
game.buttons.push(buttonCaptureCloning);
game.captureToolButtons.push(buttonCaptureCloning);

for(var x=0;x<game.captureToolButtons.length;x++) {
    game.captureObjects.push(game.captureToolButtons[x]);
}


game.capturePanels=[];
//These will be all the capture panels
var panelCaptureNet=new game.Background(647,267,647,100,"img/capture_panels/panel_capture_net.png");
panelCaptureNet.setVisible(true);
game.backgrounds.push(panelCaptureNet);
game.capturePanels.push(panelCaptureNet);

var panelCaptureLasso=new game.Background(647,384,647,100,"img/capture_panels/panel_capture_lasso.png");
panelCaptureLasso.setVisible(true);
game.backgrounds.push(panelCaptureLasso);
game.capturePanels.push(panelCaptureLasso);

var panelCaptureTrapdoor=new game.Background(647,500,647,100,"img/capture_panels/panel_capture_trapdoor.png");
panelCaptureTrapdoor.setVisible(true);
game.backgrounds.push(panelCaptureTrapdoor);
game.capturePanels.push(panelCaptureTrapdoor);

var panelCaptureVan=new game.Background(647,617,647,100,"img/capture_panels/panel_capture_van.png");
panelCaptureVan.setVisible(true);
game.backgrounds.push(panelCaptureVan);
game.capturePanels.push(panelCaptureVan);

var panelCaptureInvasion=new game.Background(647,734,647,100,"img/capture_panels/panel_capture_invasion.png");
panelCaptureInvasion.setVisible(true);
game.backgrounds.push(panelCaptureInvasion);
game.capturePanels.push(panelCaptureInvasion);

var panelCapturePhaser=new game.Background(647,849,647,100,"img/capture_panels/panel_capture_phaser.png");
panelCapturePhaser.setVisible(true);
game.backgrounds.push(panelCapturePhaser);
game.capturePanels.push(panelCapturePhaser);

var panelCaptureCloning=new game.Background(647,964,647,100,"img/capture_panels/panel_capture_cloning.png");
panelCaptureCloning.setVisible(true);
game.backgrounds.push(panelCaptureCloning);
game.capturePanels.push(panelCaptureCloning);

for(var x=0;x<game.capturePanels.length;x++) {
    game.captureObjects.push(game.capturePanels[x]);
}

//These are all the capture upgrade buttons
var buttonCaptureUpgradeNet=new game.UpgradeButton(-1,150,85,98, "net",game.playerStats.bookUpgradeCosts,game.playerStats.booksStats, "capture", 1, game.captureTab, "Increases the capture rate of  net by 1.5");
buttonCaptureUpgradeNet.setVisible(true);
game.buttons.push(buttonCaptureUpgradeNet);
game.captureUpgradeButtons.push(buttonCaptureUpgradeNet);

var buttonCaptureUpgradeLasso=new game.UpgradeButton(82,150,85,98, "lasso",game.playerStats.soapboxUpgradeCosts,game.playerStats.soapboxStats, "capture", 1, game.captureTab, "Increases the capture rate of  lasso by 1.5");
buttonCaptureUpgradeLasso.setVisible(true);
game.buttons.push(buttonCaptureUpgradeLasso);
game.captureUpgradeButtons.push(buttonCaptureUpgradeLasso);

var buttonCaptureUpgradeTrapdoor=new game.UpgradeButton(165,150,85,98, "trapdoor",game.playerStats.speakerUpgradeCosts,game.playerStats.speakerStats, "capture", 1, game.captureTab, "Increases the capture rate of trapdoor by 1.5");
buttonCaptureUpgradeTrapdoor.setVisible(true);
game.buttons.push(buttonCaptureUpgradeTrapdoor);
game.captureUpgradeButtons.push(buttonCaptureUpgradeTrapdoor);

var buttonCaptureUpgradeVan=new game.UpgradeButton(247,150,85,98, "van",game.playerStats.podiumUpgradeCosts,game.playerStats.podiumStats, "capture", 1, game.captureTab, "Increases the capture rate of van by 1.5");
buttonCaptureUpgradeVan.setVisible(true);
game.buttons.push(buttonCaptureUpgradeVan);
game.captureUpgradeButtons.push(buttonCaptureUpgradeVan);

var buttonCaptureUpgradeInvasion=new game.UpgradeButton(329,150,85,98, "invasion",game.playerStats.camcorderUpgradeCosts,game.playerStats.camcorderStats, "capture", 1, game.captureTab, "Increases the capture rate of invasion by 1.5");
buttonCaptureUpgradeInvasion.setVisible(true);
game.buttons.push(buttonCaptureUpgradeInvasion);
game.captureUpgradeButtons.push(buttonCaptureUpgradeInvasion);

var buttonCaptureUpgradePhaser=new game.UpgradeButton(410,150,85,98, "phaser",game.playerStats.computerUpgradeCosts,game.playerStats.computerStats, "capture", 1, game.captureTab, "Increases the capture rate of phaser by 1.5");
buttonCaptureUpgradePhaser.setVisible(true);
game.buttons.push(buttonCaptureUpgradePhaser);
game.captureUpgradeButtons.push(buttonCaptureUpgradePhaser);

var buttonCaptureUpgradeCloning=new game.UpgradeButton(494,150,85,98, "cloning",game.playerStats.laptopUpgradeCosts,game.playerStats.laptopStats, "capture", 1, game.captureTab, "Increases the capture rate of cloning by 1.5");
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
var buttonExecutionUpgradeKnife=new game.UpgradeButton(-1,150,85,98, "knife",game.playerStats.bookUpgradeCosts,game.playerStats.booksStats, "execution", 1, game.executionTab, "Increases the execution rate of knife by 1.5");
buttonExecutionUpgradeKnife.setVisible(true);
game.buttons.push(buttonExecutionUpgradeKnife);
game.executionUpgradeButtons.push(buttonExecutionUpgradeKnife);

var buttonExecutionUpgradeCleaver=new game.UpgradeButton(82,150,85,98, "cleaver",game.playerStats.soapboxUpgradeCosts,game.playerStats.soapboxStats, "execution", 1, game.executionTab, "Increases the execution rate of cleaver by 1.5");
buttonExecutionUpgradeCleaver.setVisible(true);
game.buttons.push(buttonExecutionUpgradeCleaver);
game.executionUpgradeButtons.push(buttonExecutionUpgradeCleaver);

var buttonExecutionUpgradeAxe=new game.UpgradeButton(165,150,85,98, "axe",game.playerStats.speakerUpgradeCosts,game.playerStats.speakerStats, "execution", 1, game.executionTab, "Increases the execution rate of axe by 1.5");
buttonExecutionUpgradeAxe.setVisible(true);
game.buttons.push(buttonExecutionUpgradeAxe);
game.executionUpgradeButtons.push(buttonExecutionUpgradeAxe);

var buttonExecutionUpgradeBlade=new game.UpgradeButton(247,150,85,98, "blade",game.playerStats.podiumUpgradeCosts,game.playerStats.podiumStats, "execution", 1, game.executionTab, "Increases the execution rate of blade by 1.5");
buttonExecutionUpgradeBlade.setVisible(true);
game.buttons.push(buttonExecutionUpgradeBlade);
game.executionUpgradeButtons.push(buttonExecutionUpgradeBlade);

var buttonExecutionUpgradeGuillotine=new game.UpgradeButton(329,150,85,98, "guillotine",game.playerStats.camcorderUpgradeCosts,game.playerStats.camcorderStats, "execution", 1, game.executionTab, "Increases the execution rate of guillotine by 1.5");
buttonExecutionUpgradeGuillotine.setVisible(true);
game.buttons.push(buttonExecutionUpgradeGuillotine);
game.executionUpgradeButtons.push(buttonExecutionUpgradeGuillotine);

var buttonExecutionUpgradeSaw=new game.UpgradeButton(410,150,85,98, "saw",game.playerStats.computerUpgradeCosts,game.playerStats.computerStats, "execution", 1, game.executionTab, "Increases the execution rate of saw by 1.5");
buttonExecutionUpgradeSaw.setVisible(true);
game.buttons.push(buttonExecutionUpgradeSaw);
game.executionUpgradeButtons.push(buttonExecutionUpgradeSaw);

var buttonExecutionUpgradeLightsaber=new game.UpgradeButton(494,150,85,98, "lightsaber",game.playerStats.laptopUpgradeCosts,game.playerStats.laptopStats, "execution", 1, game.executionTab, "Increases the execution rate of lightsaber by 1.5");
buttonExecutionUpgradeLightsaber.setVisible(true);
game.buttons.push(buttonExecutionUpgradeLightsaber);
game.executionUpgradeButtons.push(buttonExecutionUpgradeLightsaber);

//These will be all the execution buttons
//knife, cleavr, ax, blade, gui, saw, light
var buttonExecutionKnife=new game.ToolButton(0,267,580,98,"knife","",game.playerStats.knifeStats, "execution", game.executionTab,"stab stab stabby stab");
buttonExecutionKnife.setVisible(true);
game.buttons.push(buttonExecutionKnife);
game.executionToolButtons.push(buttonExecutionKnife);

var buttonExecutionCleaver=new game.ToolButton(0,384,580,98,"cleaver","",game.playerStats.cleaversStats,"execution",game.executionTab,"I 'ardly knew her!");
buttonExecutionCleaver.setVisible(true);
game.buttons.push(buttonExecutionCleaver);
game.executionToolButtons.push(buttonExecutionCleaver);

var buttonExecutionAxe=new game.ToolButton(0,500,580,98,"axe","",game.playerStats.axeStats,"execution",game.executionTab,"The favorite weapon of past presidents and crazed writers");
buttonExecutionAxe.setVisible(true);
game.buttons.push(buttonExecutionAxe);
game.executionToolButtons.push(buttonExecutionAxe);

var buttonExecutionBlade=new game.ToolButton(0,617,580,98,"blade","",game.playerStats.bladeStats,"execution",game.executionTab,"Do NOT try to use this blade as a top");
buttonExecutionBlade.setVisible(true);
game.buttons.push(buttonExecutionBlade);
game.executionToolButtons.push(buttonExecutionBlade);

var buttonExecutionGuillotine=new game.ToolButton(0,734,580,98,"guillotine","",game.playerStats.guillotineStats,"execution",game.executionTab,"Literally made for the job");
buttonExecutionGuillotine.setVisible(true);
game.buttons.push(buttonExecutionGuillotine);
game.executionToolButtons.push(buttonExecutionGuillotine);

var buttonExecutionSaw=new game.ToolButton(0,849,580,98,"saw","",game.playerStats.sawStats,"execution",game.executionTab,"Zombie slaying classic");
buttonExecutionSaw.setVisible(true);
game.buttons.push(buttonExecutionSaw);
game.executionToolButtons.push(buttonExecutionSaw);

var buttonExecutionLightsaber=new game.ToolButton(0,964,580,98,"lightsaber","",game.playerStats.lightsaberStats,"execution",game.executionTab,"An elegant weapon for a less civilized age");
buttonExecutionLightsaber.setVisible(true);
game.buttons.push(buttonExecutionLightsaber);
game.executionToolButtons.push(buttonExecutionLightsaber);

game.executionPanels=[];

//These will be all the execution panels
var panelExecutionKnife=new game.Background(647,267,647,100,"img/execution_panels/panel_execution_knife.png");
panelExecutionKnife.setVisible(true);
game.buttons.push(panelExecutionKnife);
game.executionPanels.push(panelExecutionKnife);

var panelExecutionCleaver=new game.Background(647,384,647,100,"img/execution_panels/panel_execution_cleaver.png");
panelExecutionCleaver.setVisible(true);
game.buttons.push(panelExecutionCleaver);
game.executionPanels.push(panelExecutionCleaver);

var panelExecutionAxe=new game.Background(647,500,647,100,"img/execution_panels/panel_execution_axe.png");
panelExecutionAxe.setVisible(true);
game.buttons.push(panelExecutionAxe);
game.executionPanels.push(panelExecutionAxe);

var panelExecutionBlade=new game.Background(647,617,647,100,"img/execution_panels/panel_execution_blade.png");
panelExecutionBlade.setVisible(true);
game.buttons.push(panelExecutionBlade);
game.executionPanels.push(panelExecutionBlade);

var panelExecutionGuillotine=new game.Background(647,734,647,100,"img/execution_panels/panel_execution_guillotine.png");
panelExecutionGuillotine.setVisible(true);
game.buttons.push(panelExecutionGuillotine);
game.executionPanels.push(panelExecutionGuillotine);

var panelExecutionSaw=new game.Background(647,849,647,100,"img/execution_panels/panel_execution_saw.png");
panelExecutionSaw.setVisible(true);
game.buttons.push(panelExecutionSaw);
game.executionPanels.push(panelExecutionSaw);

var panelExecutionLightsaber=new game.Background(647,964,647,100,"img/execution_panels/panel_execution_lightsaber.png");
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
game.statHeader=new game.Background(0,0,584,126,"img/headers/stat.png");
game.statHeader.setVisible(true);
game.backgrounds.push(game.statHeader);

game.statPPText=new game.Text(game.masterBackground,657,300,"Total Coin: ","bold 24pt lucida console ","white",6,"#5f3c0f");
game.statPPNum=new game.TextNumber(game.masterBackground,900,300,"0","bold 24pt lucida console ","white",6,"#5f3c0f",game.playerStats.totalPrayerPoints);

game.statCultistsText=new game.Text(game.masterBackground,657,420,"Max Followers: ","bold 24pt lucida console ","white",6,"#5f3c0f");
game.statCultistsNum=new game.TextNumber(game.masterBackground,960,420,"0","bold 24pt lucida console ","white",6,"#5f3c0f", game.playerStats.totalCultists);

game.statExecutedText=new game.Text(game.masterBackground,657,533,"Total Executed: ","bold 24pt lucida console ","white",6,"#5f3c0f");
game.statExecutedNum=new game.TextNumber(game.masterBackground,990,533,"0","bold 24pt lucida console ","white",6,"#5f3c0f", game.playerStats.totalExecuted);

game.statExecutionRateText=new game.Text(game.masterBackground,657,647,"Execution Rate: ","bold 24pt lucida console ","white",6,"#5f3c0f");
game.statExecutionRateNum=new game.TextNumber(game.masterBackground,990,647,"0","bold 24pt lucida console ","white",6,"#5f3c0f", game.playerStats.prodRateExec);

game.statFollowerRateText=new game.Text(game.masterBackground,657,755,"Conversion Rate: ","bold 24pt lucida console ","white",6,"#5f3c0f");
game.statFollowerRateNum=new game.TextNumber(game.masterBackground,995,755,"0","bold 24pt lucida console ","white",6,"#5f3c0f", game.playerStats.prodRateCult);

game.statPPRateText=new game.Text(game.masterBackground,657,875,"Coin Rate: ","bold 24pt lucida console ","white",6,"#5f3c0f");
game.statPPRateNum=new game.TextNumber(game.masterBackground,995,875,"0","bold 24pt lucida console ","white",6,"#5f3c0f", game.playerStats.prodRateCult);

game.statTimeText=new game.Text(game.masterBackground,657,995,"Time Played: ","bold 24pt lucida console ","white",6,"#5f3c0f");
game.statTimeNum=new game.TextNumber(game.masterBackground,995,995,"0","bold 24pt lucida console ","white",6,"#5f3c0f", game.playerStats.time);


game.statObjects=[];
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

game.statTab=new game.Tab(1150,137,113,108,"img/tab_buttons/stat_button.png",game.statObjects);
game.statTab.setVisible(true);
game.tabs.push(game.statTab);

game.conversionTab.setTabVisible(true);
game.captureTab.setTabVisible(false);
game.executionTab.setTabVisible(false);
game.statTab.setTabVisible(false);

game.a1=new game.Achievement(800,1000,"img/achievements/angry1.png", "Angry1");
game.a1.checkCondition=function(){
    if(game.playerStats.prisoners.number > 10001){
        return true;
    }
}
game.a2=new game.Achievement(800,1000,"img/achievements/angry2.png", "Angry2");
game.a2.checkCondition=function(){
    if(game.playerStats.prisoners.number > 100001){
        return true;
    }
}
game.a3=new game.Achievement(800,1000,"img/achievements/axe1.png", "Axe1");
game.a3.checkCondition=function(){
    if(game.playerStats.axeStats.numTools.number> 1){
        return true;
    }
}
game.a4=new game.Achievement(800,1000,"img/achievements/axe2.png", "Axe2");
game.a4.checkCondition=function(){
    if(game.playerStats.axeStats.numTools.number > 10){
        return true;
    }
}
game.a5=new game.Achievement(800,1000,"img/achievements/axe3.png", "Axe3");
game.a5.checkCondition=function(){
    if(game.playerStats.axeStats.numTools.number > 100){
        return true;
    }
}
game.a6=new game.Achievement(800,1000,"img/achievements/blade1.png", "Blade1");
game.a6.checkCondition=function(){
    if(game.playerStats.bladeStats.numTools.number > 1){
        return true;
    }
}
game.a7=new game.Achievement(800,1000,"img/achievements/blade2.png", "Blade2");
game.a7.checkCondition=function(){
    if(game.playerStats.bladeStats.numTools.number > 10){
        return true;
    }
}
game.a8=new game.Achievement(800,1000,"img/achievements/blade3.png", "Blade3");
game.a8.checkCondition=function(){
    if(game.playerStats.bladeStats.numTools.number > 100){
        return true;
    }
}
game.a9=new game.Achievement(800,1000,"img/achievements/book1.png", "Book1");
game.a9.checkCondition=function(){
    if(game.playerStats.booksStats.numTools.number > 1){
        return true;
    }
}
game.a10=new game.Achievement(800,1000,"img/achievements/book2.png", "Book2");
game.a10.checkCondition=function(){
    if(game.playerStats.booksStats.numTools.number > 10){
        return true;
    }
}
game.a11=new game.Achievement(800,1000,"img/achievements/book3.png", "Book3");
game.a11.checkCondition=function(){
    if(game.playerStats.booksStats.numTools.number > 100){
        return true;
    }
}
game.a12=new game.Achievement(800,1000,"img/achievements/camcorder1.png", "Camcorder1");
game.a12.checkCondition=function(){
    if(game.playerStats.camcorderStats.numTools.number > 1){
        return true;
    }
}
game.a13=new game.Achievement(800,1000,"img/achievements/camcorder2.png", "Camcorder2");
game.a13.checkCondition=function(){
    if(game.playerStats.camcorderStats.numTools.number > 10){
        return true;
    }
}
game.a14=new game.Achievement(800,1000,"img/achievements/camcorder3.png", "Camcorder3");
game.a14.checkCondition=function(){
    if(game.playerStats.camcorderStats.numTools.number > 100){
        return true;
    }
}
game.a15=new game.Achievement(800,1000,"img/achievements/cleaver1.png", "Cleaver1");
game.a15.checkCondition=function(){
    if(game.playerStats.cleaversStats.numTools.number > 1){
        return true;
    }
}
game.a16=new game.Achievement(800,1000,"img/achievements/cleaver2.png", "Cleaver2");
game.a16.checkCondition=function(){
    if(game.playerStats.cleaversStats.numTools.number > 10){
        return true;
    }
}
game.a17=new game.Achievement(800,1000,"img/achievements/cleaver3.png", "Cleaver3");
game.a17.checkCondition=function(){
    if(game.playerStats.cleaversStats.numTools.number > 100){
        return true;
    }
}
game.a18=new game.Achievement(800,1000,"img/achievements/clone1.png", "Clone1");
game.a18.checkCondition=function(){
    if(game.playerStats.cloningStats.numTools.number > 1){
        return true;
    }
}
game.a19=new game.Achievement(800,1000,"img/achievements/clone2.png", "Clone2");
game.a19.checkCondition=function(){
    if(game.playerStats.cloningStats.numTools.number > 10){
        return true;
    }
}
game.a20=new game.Achievement(800,1000,"img/achievements/clone3.png", "Clone3");
game.a20.checkCondition=function(){
    if(game.playerStats.cloningStats.numTools.number > 100){
        return true;
    }
}
game.a21=new game.Achievement(800,1000,"img/achievements/computer1.png", "Computer1");
game.a21.checkCondition=function(){
    if(game.playerStats.computerStats.numTools.number > 1){
        return true;
    }
}
game.a22=new game.Achievement(800,1000,"img/achievements/computer2.png", "Computer2");
game.a22.checkCondition=function(){
    if(game.playerStats.computerStats.numTools.number > 10){
        return true;
    }
}
game.a23=new game.Achievement(800,1000,"img/achievements/computer3.png", "Computer3");
game.a23.checkCondition=function(){
    if(game.playerStats.computerStats.numTools.number > 100){
        return true;
    }
}

game.a24=new game.Achievement(800,1000,"img/achievements/guillotine1.png", "Guillotine1");
game.a24.checkCondition=function(){
    if(game.playerStats.guillotineStats.numTools.number > 1){
        return true;
    }
}
game.a25=new game.Achievement(800,1000,"img/achievements/guillotine2.png", "Guillotine2");
game.a25.checkCondition=function(){
    if(game.playerStats.guillotineStats.numTools.number > 10){
        return true;
    }
}
game.a26=new game.Achievement(800,1000,"img/achievements/guillotine3.png", "Guillotine3");
game.a26.checkCondition=function(){
    if(game.playerStats.guillotineStats.numTools.number > 100){
        return true;
    }
}

game.achievements.push(game.a1);
game.achievements.push(game.a2);
game.achievements.push(game.a3);
game.achievements.push(game.a4);
game.achievements.push(game.a5);
game.achievements.push(game.a6);
game.achievements.push(game.a7);
game.achievements.push(game.a8);
game.achievements.push(game.a9);
game.achievements.push(game.a10);
game.achievements.push(game.a11);
game.achievements.push(game.a12);
game.achievements.push(game.a13);
game.achievements.push(game.a14);
game.achievements.push(game.a15);
game.achievements.push(game.a16);
game.achievements.push(game.a17);
game.achievements.push(game.a18);
game.achievements.push(game.a19);
game.achievements.push(game.a20);
game.achievements.push(game.a21);
game.achievements.push(game.a22);
game.achievements.push(game.a23);
game.achievements.push(game.a24);
game.achievements.push(game.a25);
game.achievements.push(game.a26);
game.titleHeader=new game.Background(650,0,644,141,"img/logo.png");
game.titleHeader.setVisible(true);
game.backgrounds.push(game.titleHeader);
