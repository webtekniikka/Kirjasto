<?php
$json = file_get_contents('php://input');
$testi = json_decode($json);
echo $json;
