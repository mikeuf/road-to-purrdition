
 $(document).ready (function( ){ 

    var game = new Phaser.Game(1280, 800, Phaser.AUTO, 'phaser-panel', { preload: preload, create: create, update: update });

    function preload() {

    game.load.image('springBackground', 'assets/springBackground.png');
    game.load.image('ground', 'assets/platform.png');
    game.load.image('cabbage', 'assets/cabbage_50.png');
    game.load.spritesheet('manatee', 'assets/manatee_250.png', 250, 140);

    // load song
//    game.load.audio('aveMaria', 'assets/aveMaria.mp3');
    game.load.audio('underwaterMusic', 'assets/underwaterMusic.mp3');
    game.load.audio('crunch', 'assets/crunch.mp3');
    game.load.audio('youWinSound', 'assets/youWinSound.mp3');
    }

    var muteFlag = 0;
    var player;
    var platforms;
    var cursors;
//    var bullets;
   var cabbageSprite = new Array();
    var cabbages;
    var score = 0;
    var scoreText;
    var music;
//var starfieldSprite;
//var backgroundSprite;
    var NUM_OF_CABBAGES = 12;

var prevDate = new Date();
var prevMs = prevDate.getMilliseconds();

    function create() {



    music = game.add.audio('underwaterMusic',1,true);

    music.play('',0,0.5,true);
      crunchSound = game.add.audio('crunch');
      youWinSound = game.add.audio('youWinSound');

      game.physics.startSystem(Phaser.Physics.ARCADE);

game.add.sprite(0, 0, 'springBackground');

      platforms = game.add.group();

      platforms.enableBody = true;


      player = game.add.sprite(128, game.world.height - 150, 'manatee');

      game.physics.arcade.enable(player);

      player.body.bounce.y = 0.2;
      player.body.gravity.y = 20;
      player.body.collideWorldBounds = true;

      player.animations.add('left', [2, 1], 5, true);
      player.animations.add('right', [3, 4], 5, true);

      cabbages = game.add.group();

      cabbages.enableBody = true;

      for (var i = 0; i < NUM_OF_CABBAGES; i++)
      {
        cabbageSprite[i] = cabbages.create(i * 100, 10, 'cabbage');

        cabbageSprite[i].body.gravity.y = Math.random() * 2.5;

        cabbageSprite[i].body.bounce.y = 0.7 + Math.random() * 0.2;

        cabbageSprite[i].body.collideWorldBounds = true;
      }

      scoreText = game.add.text(16, 16, 'Feeding time! Press M to mute sound', { fontSize: '32px', fill: '#FFF' });

      cursors = game.input.keyboard.createCursorKeys();
      fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
      muteButton = game.input.keyboard.addKey(Phaser.Keyboard.M);

/*
      bullets = game.add.group();
      bullets.enableBody = true;
      bullets.physicsBodyType = Phaser.Physics.ARCADE;
      bullets.createMultiple(30, 'bullet');
      bullets.setAll('anchor.x', 0.5);
      bullets.setAll('anchor.y', 1);
      bullets.setAll('outOfBoundsKill', true);
      bullets.setAll('checkWorldBounds', true);
*/



    }

    function update() {

      game.physics.arcade.collide(player, platforms);
      game.physics.arcade.collide(cabbages, platforms);

      game.physics.arcade.overlap(player, cabbages, collectCabbage, null, this);

      player.body.velocity.x = 0;

if (muteButton.isDown)
{

  var currDate = new Date();
  var currMs = currDate.getMilliseconds();
  var datediff = Math.abs(currMs - prevMs);
  prevMs = currMs;

  if (datediff > 100)
{

        if (muteFlag == 0)
        {
          music.volume = 0;
          crunchSound.volume = 0;
          youWinSound.volume = 0;
          muteFlag = 1;
          scoreText.text = "Sound Muted";
        }

        else if (muteFlag != 0)
        {
          music.volume = .5;
          crunchSound.volume = 1;
          youWinSound.volume = 1;
          muteFlag = 0;
          scoreText.text = "Sound Unmuted";
        }
}
}

      if (cursors.left.isDown)
      {
        player.body.velocity.x = -150;

        player.animations.play('left');
      }
      else if (cursors.right.isDown)
      {
        player.body.velocity.x = 150;

        player.animations.play('right');
      }
      else if (fireButton.isDown)
      {
        player.frame = 5;
      }
      else
      {
        player.animations.stop();
      player.body.gravity.y = 80;
        player.frame = 3;
      }


      if (cursors.up.isDown)
      {
        player.body.velocity.y = -200;
      } 

      else if (cursors.down.isDown)
      {
        player.body.velocity.y = 200;
      } 

/*
      for (var i = 0; i < NUM_OF_CABBAGES; i++)
      {
cabbageSprite[i].rotation += 0.0005 * (Math.random() * 20);
}
*/
   }

    function collectCabbage (player, cabbage) {

      cabbage.kill();
      crunchSound.play();

      score += 1;
      remaining = NUM_OF_CABBAGES - score;
      scoreText.text = 'Cabbages remaining: ' + remaining;

if (remaining < 1)
{
      game.add.text(640, 400, 'YOU WIN', { fontSize: '64px', fill: '#FFF' });
  //scoreText.text = "You win!";
      youWinSound.play();
}

    }
}

/*
function changeVolume(pointer) {

    if (pointer.y < 300)
    {
        music.volume += 0.1;
    }
    else
    {
        music.volume -= 0.1;
    }
*/

); 

