<?php
/*
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
//$connection->close();
//
//      Apumetodit
//
function getKirjaHakuKriteerit(){
    $nimi = $_GET["nimi"];
    $knimi = $_GET["knimi"];
    $id = $_GET["id"];
    $kieli = $_GET["kieli"];
    $isbn = $_GET["isbn"];
    $vuosi = $_GET["vuosi"];
    $hakukriteerit = array();
    if (!empty($nimi)){
        $hakukriteerit['nimi'] = $nimi;
    }
    if (!empty($knimi)) {
        $hakukriteerit['knimi'] = $knimi;
    }
    if (!empty($id)){
        $hakukriteerit['id'] = $id;
    }
    if (!empty($kieli)){
        $hakukriteerit['kieli'] = $kieli;
    }
    if (!empty($isbn)){
        $hakukriteerit['isbn'] = $isbn;
    }
    if (!empty($vuosi)){
        $hakukriteerit['vuosi'] = $vuosi;
    }
    $haku = json_encode($hakukriteerit);
    return $haku;
}
function getMetodi(){
    $metodi =$_SERVER['REQUEST_METHOD'];
    return $metodi;
}
function addKirja(){
    $json = file_get_contents('php://input');
    $kirja = json_decode($json);
    return $kirja;
}
function poistettavaKirja(){
    return $_GET['id'];
}
//
//      Pää Metodit
//
$metodi = getMetodi();
if ($metodi=="GET"){
    $hakukriteerit = getKirjaHakuKriteerit();
    echo $hakukriteerit;
    //      $bookList($hakukriteerit);
} else if ($metodi=="POST"){
    $uusikirja = addKirja();
} else if ($metodi=="DELETE") {
    $kirja = poistettavaKirja();
}
?>