var game = new Phaser.Game(1024, 600, Phaser.CANVAS, 'phaser-panel', { preload: preload, create: create });
function create() {
    var logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
    logo.anchor.setTo(0.5 , 0.5);
	var style = { font: "65px Arial", fill: "#ffffff", align: "center" };
	var txtHelloWorld = game.add.text(game.world.centerX, game.world.centerY, "Hello World!", style);
	txtHelloWorld.anchor.set(0.5, 3);
	var txtComingSoon = game.add.text(game.world.centerX, game.world.centerY, "Coming Soon!", style);
	txtComingSoon.anchor.set(0.5, -2.5);
	}
function preload () {
    game.load.image('logo', 'resources/img/phaser.png');
    game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
}

