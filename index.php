<?php  ?>

<!DOCTYPE html>
<html>
<head>

	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<meta main="apple-mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/> 
	<meta main="mobile-webapp-capable" content="yes">

	<title>Wetterapplikation</title>

	
	<link rel="stylesheet" href="style/style.css">
	<link rel="favicon" href="pics/favicon.ico">
	<link rel="stylesheet" href="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css" />
	<script src="http://code.jquery.com/jquery-1.11.1.min.js"></script>
	<script src="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"></script>

	<script src="scripts/skycons.js"></script>
	<script src="http://maps.googleaois.com/"></script>
	<script src="scripts/script.js"></script>
</head>
<body>


<div data-role="page" id="main">

	<div data-role="header" data-add-back-btn="true"><h1 id="standort"></h1></div>
	<div role="main" class="ui-content">

		<canvas class="js-icon" height="128"></canvas>
		<p></p>

		<h1 id="temperatur"></h1>
		<p id="summary"></p>
		<p>.</p>
		<p>.</p>

		<div class="vorhersage">
		<?php

			for ($counter = 0; $counter < 5; $counter++) {
				echo '<div class="wetterspalte">';
				echo 	'<p class="day_name day_name'. $counter .'"></p>';
				echo	'<canvas class="day day'. $counter .'"></canvas>';
				echo	'<p class="temp_day temp_day'. $counter .'"></p>';
				echo '</div>';
			}

		?>
		</div>

		<div style="clear: both"><a href="#sub" data-transition="flip" class="ui-btn">Impressum</a></div>

	</div>
	<!-- <div data-role="footer"><h1></h1></div> -->
</div>


<div data-role="page" id="sub">
	<div data-role="header" data-add-back-btn="true"><h1>Impressum</h1></div>
	<div role="main" class="ui-content">

		<p>René Moser</p>
		<p>MMP 13-16</p>
		
	</div>
	<!-- <div data-role="footer"><h1></h1></div> -->
</div>


</body>
</html>
<?php  ?>