<?php
include_once('include.php');
if (!(isset($title))) {
	$title = "Road To Purrdition";
}
?>
<!DOCTYPE html>
<html lang="en">
	<head>
		<!--Meta content-->
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="description" content="">
		<meta name="author" content="Daniel McNaughton">

		<!--Stylesheets-->
		<link href='http://fonts.googleapis.com/css?family=Droid+Sans' rel='stylesheet' type='text/css'>
		<link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css" rel="stylesheet" type='text/css'>
		<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet" type='text/css'>
		<link href='../resources/css/phaser-styles.css' rel='stylesheet' type='text/css'>
		<link href='../resources/css/sticky-footer.css' rel='stylesheet' type='text/css'>

		<!--Javascript-->
		<script src="../phaser/phaser.min.js"></script>
		
		<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
		<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
		<!--[if lt IE 9]>
			<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
			<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
		<![endif]-->
		<title><?php echo $title ?></title>
	</head>
	<body>
		<nav class="navbar navbar-inverse navbar-fixed-top">
			<div class="container">
				<div class="navbar-header">
					<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
						<span class="sr-only">Toggle navigation</span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
					<a class="navbar-brand" href="#">Road To Purrdition</a>
				</div>
				<div id="navbar" class="collapse navbar-collapse">
					<ul class="nav navbar-nav">
						<li class="active"><a href="http://roadtopurrdition.com">Home</a></li>
						<li><a href="http://development.roadtopurrdition.com">Development</a></li>
						<li><a href="http://caroline.roadtopurrdition.com">Caroline</a></li>
						<li><a href="http://daniel.roadtopurrdition.com">Daniel</a></li>
						<li><a href="http://jackie.roadtopurrdition.com">Jacqueline</a></li>
						<li><a href="http://mike.roadtopurrdition.com">Mike</a></li>
					</ul>
				</div><!--/.nav-collapse -->
			</div>
		</nav>
