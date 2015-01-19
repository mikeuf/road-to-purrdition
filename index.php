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
		<div class = "container">
			<script type="text/javascript">

			    window.onload = function() {

			        var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create });

			        function preload () {
			            game.load.image('logo', '../resources/img/phaser.png');
			        }
			        function create () {
			            var logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
			            logo.anchor.setTo(0.5, 0.5);
			        }
			    };
			    </script>
		</div>

<?php
include_once('includes/footer.php');
?>