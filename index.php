<?php
$title = "Road to Purrdition - Home";
include_once('includes/header.php');
?>
		<div class="jumbotron">
			<div class="container">
				<h1>Road To Purrdition - Landing Page</h1>
				<p class="lead">This is the main landing page for Road To Purrdition. This page will host the current build of the <code>web-landing-page</code> branch.</p>
			</div>
		</div><!-- /.jumbotron -->
		<div class="container">
			<script type="text/javascript">

			    window.onload = function() {

			        var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create });
							//  The Google WebFont Loader will look for this object, so create it before loading the script.
							WebFontConfig = {

							    //  'active' means all requested fonts have finished loading
							    //  We set a 1 second delay before calling 'createText'.
							    //  For some reason if we don't the browser cannot render the text the first time it's created.
							    active: function() { game.time.events.add(Phaser.Timer.SECOND, createText, this); },

							    //  The Google Fonts we want to load (specify as many as you like in the array)
							    google: {
							      families: ['Revalia']
							    }

							};
							var text = null;
							var grd;

			        function preload () {
			            game.load.image('logo', '../resources/img/phaser.png');
			            game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
			        }
			        function create () {
			            var logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
			            logo.anchor.setTo(0.5, 0.5);
			        }
			        function createText() {

							    text = game.add.text(game.world.centerX, game.world.centerY, "- phaser -\nrocking with\ngoogle web fonts");
							    text.anchor.setTo(0.5);

							    text.font = 'Revalia';
							    text.fontSize = 60;

							    //  x0, y0 - x1, y1
							    grd = text.context.createLinearGradient(0, 0, 0, text.canvas.height);
							    grd.addColorStop(0, '#8ED6FF');   
							    grd.addColorStop(1, '#004CB3');
							    text.fill = grd;

							    text.align = 'center';
							    text.stroke = '#000000';
							    text.strokeThickness = 2;
							    text.setShadow(5, 5, 'rgba(0,0,0,0.5)', 5);

							    text.inputEnabled = true;
							    text.input.enableDrag();

							    text.events.onInputOver.add(over, this);
							    text.events.onInputOut.add(out, this);

							}

							function out() {

							    text.fill = grd;

							}

							function over() {

							    text.fill = '#ff00ff';

							}
			    </script>
		</div>

<?php
include_once('includes/footer.php');
?>