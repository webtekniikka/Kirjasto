<?php
$servername = "localhost";
$username = "";
$password = "";
$dbname = "kirjasto";

$connection = new mysqli($servername, $username, $password, $dbname);


// Check connection
if ($connection->connect_error) {
    die("Connection failed: " . $connection->connect_error);
}
echo "Connected successfully";


/*
//Haku toimivuus epäselvä
$stmt = connection->prepare("SELECT * FROM kirat
WHERE Kirja_id=? or Nimi=? or  kustantaja=? or julkaisuvuosi=? or kirjailija=? or ISBN=? or Painos=? or kieli=? and saatavuus='Kyllä'");
$stmt->bind_param("ississis", $kid, $nimi, $kustantaja, $jvuosi, $kirjailija, $ISBN, $painos, $kieli);

$result = $stmt->execute();

if ($result > 0) {
    // output data of each row
    $kirjaArray = array();
    while($row = $reuslt->fetch_assoc()) {
        echo '<br />'.$row['Kirja_id'] . '<br />';
        echo $row['Nimi'] . '<br />';
        echo $row['Kustantaja'].'<br />';
        echo $row['Julkaisuvuosi'].'<br />';
        echo $row['Kirjailija'].'<br />';
        echo $row['ISBN'].'<br />';
        echo $row['Painos'].'<br />';
        echo $row['Kieli'].'<br />';
        echo $row['Saatavuus'].'<br />';
        $kirjaArray[] = $row;
    }
} else {
    echo "0 results";
}
$tulosArray = array('numOfRows'=>strval($result->num_rows),'rows'=>$kirjaArray);


echo json_encode($tulosArray);
stsmt->close()*/

$connection->close();

?>