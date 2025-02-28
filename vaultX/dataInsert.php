<?php
$name = $_POST["name"];
$email = $_POST["email"];


$con = mysqli_connect("localhost","root","") or die("Error: Can't Connect to Server");
$db = mysqli_select_db($con,"testdb") or die("Error: Can't Connect to Database");
$insertInfo = "INSERT INTO clientInfo (name,email) value('$name','$email')";
$result = mysqli_query($con,$insertInfo);
if($result){
	echo "<h1>Info Added Successfully</h1>";
	echo "<a href=\"viewInfo.php\">Click here to view all info</a>";
}
else {
	die("Error: ".mysqli_errno($con));
}
?>