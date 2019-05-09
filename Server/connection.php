<?php
$servername = "localhost";
$username = "ryhma4";
$password = "passu";
$dbname = "kirjasto";


$connection = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($connection->connect_error) {
    die("Connection failed: " . $connection->connect_error);
}