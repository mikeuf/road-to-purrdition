


    var game = new Phaser.Game(1024, 600, Phaser.AUTO, 'phaser-panel', { preload: preload, create: create, update: update });

    function preload() {
	
	game.load.image('mainMenuBackground','assets/title_screen.png');
    game.load.image('ground', 'assets/platform.png');


    game.load.spritesheet('buttonPlayGame', 'assets/buttonPlayGame.png');
    game.load.spritesheet('buttonInstructions', 'assets/buttonInstructions.png');
    game.load.spritesheet('buttonIntroduction', 'assets/buttonIntroduction.png');
    game.load.spritesheet('buttonSettings', 'assets/buttonSettings.png');
    game.load.spritesheet('buttonCredits', 'assets/buttonCredits.png');
        
    
    }


// Global variables

var buttonPlayGame;
var buttonInstructions;
var buttonIntroduction;
var buttonSettings;
var buttonCredits;
var background;
var muteFlag = 0;
var player;
var platforms;
var cursors;
var music;

var NUM_OF_CABBAGES = 12;

var prevDate = new Date();
var prevMs = prevDate.getMilliseconds();

function create()
{


    game.stage.backgroundColor = '#fff';

    background = game.add.sprite(0, 0, 'mainMenuBackground');
  buttonPlayGame = game.add.button(game.world.centerX - 50, 50, 'buttonPlayGame', actionOnClick, this, 2, 1, 0);
  buttonInstructions = game.add.button(game.world.centerX - 50, 110, 'buttonInstructions', actionOnClick, this, 2, 1, 0);
  buttonIntroduction = game.add.button(game.world.centerX - 50, 170, 'buttonIntroduction', actionOnClick, this, 2, 1, 0);
  buttonSettings = game.add.button(game.world.centerX - 50, 230, 'buttonSettings', actionOnClick, this, 2, 1, 0);
    buttonCredits = game.add.button(game.world.centerX - 50, 290, 'buttonCredits', actionOnClick, this, 2, 1, 0);

/*
    button.onInputOver.add(over, this);
    button.onInputOut.add(out, this);
    button.onInputUp.add(up, this);
*/


function up() {
    console.log('button up', arguments);
}

function over() {
    console.log('button over');
}

function out() {
    console.log('button out');
}

function actionOnClick () {

background = game.add.sprite(0, 0, 'springBackground');

  //  background.visible =! background.visible;

}

    } // end create()?
    
    function update()
    {
	    
	    
    }

  
    
