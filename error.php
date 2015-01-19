<?php
$title = "Road to Purrdition - Error";
include_once('includes/header.php');
if ($_GET['type'] == "404") {
	include_once('errors/404.php');
} elseif ($_GET['type'] == "403") {
	include_once('errors/403.php');
}
?>
		
<?php
include_once('includes/footer.php');
?>