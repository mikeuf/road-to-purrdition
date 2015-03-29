
/*
This is the main menu for the game. You click on one of several buttons to load the relevant item. The actions temporarily implemented for now as just text, but will eventually load actual parts of the game.
	
Date Created March 28
Author Mike Black
*/

// Loads the main game engine
    var game = new Phaser.Game(1024, 600, Phaser.AUTO, 'phaser-panel', { preload: preload, create: create, update: update });


// loads the sprites and images

    function preload() 
{

// background was drawn by Jackie	
	game.load.image('mainMenuBackground','assets/title_screen.png');

// buttons are actually spritesheets
    game.load.spritesheet('buttonPlayGame', 'assets/buttonPlayGame_72.png',161,58);
    game.load.spritesheet('buttonInstructions', 'assets/buttonInstructions_72.png',167,58);
    game.load.spritesheet('buttonIntroduction', 'assets/buttonIntroduction_72.png', 172,56);
    game.load.spritesheet('buttonSettings', 'assets/buttonSettings_72.png',128,58);
    game.load.spritesheet('buttonCredits', 'assets/buttonCredits_72.png',112,55);    
    
}


// Global variables -- some not yet used

	var buttonPlayGame;
	var buttonInstructions;
	var buttonIntroduction;
	var buttonSettings;
	var buttonCredits;
	var background;
	var buttonText;
	var muteFlag = 0;
	var player;
	var platforms;
	var cursors;
	var music;


// this function loads the various objects
function create()
{

// set background color
    game.stage.backgroundColor = '#fff';
    
// loads text field that will be uploaded by button clicks (temporary)
    buttonText = game.add.text(50, 50, 'Click a button', { fontSize: '64px', fill: '#000' });

// load background
    background = game.add.sprite(0, 0, 'mainMenuBackground');
    
// load buttons 
	buttonPlayGame = game.add.button(game.world.centerX - 50, 50, 'buttonPlayGame', actionButtonPlayGame, this, 1, 0);
	buttonInstructions = game.add.button(game.world.centerX - 50, 110, 'buttonInstructions', actionButtonInstructions, this, 1, 0);
	buttonIntroduction = game.add.button(game.world.centerX - 50, 170, 'buttonIntroduction', actionButtonIntroduction, this, 1, 0);
	buttonSettings = game.add.button(game.world.centerX - 50, 230, 'buttonSettings', actionButtonSettings, this, 1, 0);
    buttonCredits = game.add.button(game.world.centerX - 50, 290, 'buttonCredits', actionButtonCredits, this, 1, 0);

// button actions

function actionButtonPlayGame() 
{
  buttonText.text = "Play Game clicked"
}

function actionButtonInstructions() 
{
  buttonText.text = "Instructions clicked"
}

function actionButtonIntroduction() 
{
  buttonText.text = "Introduction clicked"
}

function actionButtonSettings() 
{
  buttonText.text = "Settings clicked"
}

function actionButtonCredits() 
{
  buttonText.text = "Credits clicked"
}

} // end create()
    
function update()
{
// not yet used, but I am leaving this here because the game engine is expecting this function    	    
} // end update()

  
    
