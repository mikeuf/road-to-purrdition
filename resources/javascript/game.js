


    var game = new Phaser.Game(1024, 600, Phaser.AUTO, 'phaser-panel', { preload: preload, create: create, update: update });

    function preload() {
	
	game.load.image('mainMenuBackground','assets/title_screen.png');
    game.load.image('ground', 'assets/platform.png');

        game.load.spritesheet('button', 'assets/button_sprite_sheet.png', 193, 71);
    
    }


// Global variables

var button;
var background;
    var muteFlag = 0;
    var player;
    var platforms;
    var cursors;
    var music;
//var starfieldSprite;
//var backgroundSprite;
    var NUM_OF_CABBAGES = 12;

var prevDate = new Date();
var prevMs = prevDate.getMilliseconds();

function create()
{


    game.stage.backgroundColor = '#fff';

    background = game.add.sprite(0, 0, 'mainMenuBackground');

    button = game.add.button(game.world.centerX - 95, 400, 'button', actionOnClick, this, 2, 1, 0);

    button.onInputOver.add(over, this);
    button.onInputOut.add(out, this);
    button.onInputUp.add(up, this);



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

  
    
