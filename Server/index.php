<?php

//function bookList($kid, $nimi, $kustantaja, $jvuosi, $kirjailija, $ISBN, $painos, $kieli){


function bookList(){

    $servername = "localhost";
    $username = "ryhma4";
    $password = "passu";
    $dbname = "kirjasto";

    $connection = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($connection->connect_error) {
        die("Connection failed: " . $connection->connect_error);
    }
    echo "Connected successfully";


    $sql = "INSERT INTO kirjat (Kirja_Id, Nimi, Kustantaja, Julkaisuvuosi, Kirjailija, ISBN, Painos, Kieli, Saatavuus)
    VALUES (004, 'Testi3', 'OTAVA', 2006, 'Kirjailija_o', '4ANa222', 3, 'Saksa','Kyllä')";

    if ($connection->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $connection->error;
    }
    $connection->close();
}
/* $saatavuus = "Kyllä";
    $kid = 001;
    $nimi = "Testi";
    $kustantaja = null;
    $jvuosi = null;
    $kirjailija = null;
    $ISBN = null;
    $painos = null;
    $kieli = null;



    //Haku toimivuus epäselvä, ei toimi
    $stmt = $connection->prepare("SELECT * FROM kirat
    WHERE Kirja_id=? or Nimi=? or  kustantaja=? or julkaisuvuosi=? or kirjailija=? or ISBN=? or Painos=? or kieli=? and saatavuus=?");
    $stmt->bind_param("issississ", $kid, $nimi, $kustantaja, $jvuosi, $kirjailija, $ISBN, $painos, $kieli, $saatavuus);

    $result = $stmt->execute();

    if ($result > 0) {
        // output data of each row
        $kirjaArray = array();
        while($row = $result->fetch_assoc()) {
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

    $jsonArray = json_encode($tulosArray);
    echo $jsonArray;
    $stmt->close();


$connection->close();
*/
//
//      Apumetodit
//

function getResurssi(){
    $resurssi_string =$_SERVER['REQUEST_URI'];
    if (strstr($resurssi_string, '?')) {
        $resurssi_string = substr($resurssi_string, 0, strpos($resurssi_string, '?'));
    }
    $resurssi = explode('/', $resurssi_string);

    for ($i=0;$i<3;$i++){
        array_shift($resurssi);
    }
    return $resurssi;
}

function getKirjaHakuKriteerit(){
    $nimi = $_GET["nimi"];
    $knimi = $_GET["knimi"];
    $id = $_GET["id"];
    $kieli = $_GET["kieli"];
    $isbn = $_GET["isbn"];
    $vuodesta = $_GET["vuodesta"];
    $vuoteen = $_GET["vuoteen"];

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
    if (!empty($vuodesta)){
        $hakukriteerit['vuodesta'] = $vuodesta;
    }
    if (!empty($vuoteen)){
        $hakukriteerit['vuoteen'] = $vuoteen;
    }
    //$haku = json_encode($hakukriteerit);
    foreach($hakukriteerit as $x => $x_value) {
        echo "Key=" . $x . ", Value=" . $x_value;
    }
    return $hakukriteerit;


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
    $resurssi = getResurssi();
    if ($metodi=="GET" && $resurssi[0]=="kirja") {
        echo $resurssi[0];
        $hakukriteerit = getKirjaHakuKriteerit();//       $bookList($hakukriteerit);
    } else if ($metodi=="GET" && $resurssi[0]=="lainat"){
        echo $resurssi[0];
    } else if ($metodi=="POST" && $resurssi[0]=="kirja") {
        $uusikirja = addKirja();
    } else if ($metodi=="POST" && $resurssi[0]=="laina"){

    } else if ($metodi=="DELETE" && $resurssi[0]=="kirja") {
        $kirja = poistettavaKirja();
    } else if ($metodi=="DELETE" && $resurssi[0]=="laina"){

    }

?>