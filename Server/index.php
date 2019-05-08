<?php

function kirjaHaku($haku){
    $servername = "localhost";
    $username = "ryhma4";
    $password = "passu";
    $dbname = "kirjasto";

    $connection = new mysqli($servername, $username, $password, $dbname);

// Check connection
    if ($connection->connect_error) {
        die("Connection failed: " . $connection->connect_error);
    }

    $kid = $haku['id'];
    $nimi = $haku['nimi'];
    $jvuosi = $haku['vuosi'];
    $kirjailija = $haku['knimi'];
    $ISBN = $haku['isbn'];
    $kieli = $haku['kieli'];


    //Pätkä toimii tarvitsee vielä kimpassa miettii toteutusta haku ei liian sepsifoiva
    $sql = "SELECT * FROM kirjat
    WHERE Kirja_Id=? or Nimi=? or Julkaisuvuosi=? or Kirjailija=? or ISBN=? or Kieli=?";
    $stmt = $connection->prepare($sql);
    $stmt->bind_param("isisss", $kid, $nimi, $jvuosi, $kirjailija, $ISBN, $kieli);

    $boolean = $stmt->execute();
    $result = $stmt->get_result();

    $kirjaArray = array();
    if ($boolean > 0) {
        // output data of each row
        while ($row = $result->fetch_assoc()) {
       /*     echo '<br />' . $row['Kirja_Id'] . ' ';
            echo $row['Nimi'] . ' ';
            echo $row['Julkaisuvuosi'] . ' ';
            echo $row['Kirjailija'] . ' ';
            echo $row['ISBN'] . ' ';
            echo $row['Kieli'] . ' ';
            echo $row['Saatavuus'] . ' ';
       */
            $kirjaArray[] = $row;
            //echo '<br />'.$kirjaArray[] = json_encode($row).'<br />';
        }
    } else {
        echo '<br />' . "0 results";
    }
    $json_lista = json_encode($kirjaArray);
    echo $json_lista;

    $stmt->close();
    $connection->close();
}

   //kirjan lisääminen toimii

function addKirja($data){

    $servername = "localhost";
    $username = "ryhma4";
    $password = "passu";
    $dbname = "kirjasto";

    $connection = new mysqli($servername, $username, $password, $dbname);

// Check connection
    if ($connection->connect_error) {
        die("Connection failed: " . $connection->connect_error);
    }

    $kid = $data['id'];
    $nimi = $data['nimi'];
    $jvuosi = $data['vuosi'];
    $kirjailija = $data['knimi'];
    $ISBN = $data['isbn'];
    $kieli = $data['kieli'];
    $saatavuus = 'Saatavilla';

    $sql = "INSERT INTO kirjat (Kirja_Id, Nimi, Julkaisuvuosi, Kirjailija, ISBN, Kieli, Saatavuus)
    Values (?,?,?,?,?,?,?)";
    $stmt = $connection->prepare($sql);
    $stmt->bind_param("isissss", $kid, $nimi, $jvuosi, $kirjailija, $ISBN, $kieli, $saatavuus);
    $boolean = $stmt->execute();
    if ($boolean > 0) {
        echo '<br />' . "Lisäys fine";
    } else {
        echo '<br />' . "Jokin meni vikaan";
    }
    $stmt->close();
    $connection->close();
}

   //Kirjan poistaminen id:llä toimii
    function poistaKirja($para){
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

        $kid = $para;
        $sql= "DELETE FROM kirjat WHERE Kirja_Id=?";
        $stmt = $connection->prepare($sql);
        $stmt->bind_param("i",$kid);
        $boolean =$stmt->execute();
        if($boolean > 0){
            echo '<br />'."Poisto onnistui";
        }
        else{
            echo '<br />'."Jokin meni vikaan";
        }
        $stmt->close();
        $connection->close();
    }

//hakee lainassa olevat, sekä lainahistorian
 function haeKaikkilainat(){
     $servername = "localhost";
     $username = "ryhma4";
     $password = "passu";
     $dbname = "kirjasto";

     $connection = new mysqli($servername, $username, $password, $dbname);

// Check connection
     if ($connection->connect_error) {
         die("Connection failed: " . $connection->connect_error);
     }

     $sql ="SELECT kirjat.Kirja_Id, kirjat.Nimi, lainaukset.*
      FROM kirjat JOIN lainaukset ON kirjat.Kirja_Id = lainaukset.Kirja_Id";
     $stmt = $connection->prepare($sql);
     $boolean =$stmt->execute();
     $result = $stmt->get_result();

     $lainaArray = array();
     if ($boolean > 0) {
         // output data of each row
         while($row = $result->fetch_assoc()) {
             $lainaArray[] = $row;
             //echo '<br />'.$lainaArray[] = json_encode($row).'<br />';
         }
     } else {
         echo '<br />'."0 results";
     }
     $json_laina = json_encode($lainaArray);
     echo $json_laina;

     $stmt->close();
     $connection->close();
 }

    //hakee vain lainassa olevat lainat;
function haeLainat(){
    $servername = "localhost";
    $username = "ryhma4";
    $password = "passu";
    $dbname = "kirjasto";

    $connection = new mysqli($servername, $username, $password, $dbname);

// Check connection
    if ($connection->connect_error) {
        die("Connection failed: " . $connection->connect_error);
    }

    $maare = "Lainassa";
    $sql ="SELECT kirjat.Kirja_Id, kirjat.Nimi, lainaukset.*
      FROM kirjat JOIN lainaukset ON kirjat.Kirja_Id = lainaukset.Kirja_Id WHERE kirjat.Saatavuus=?";
    $stmt = $connection->prepare($sql);
    $stmt->bind_param("s",$maare);
    $boolean =$stmt->execute();
    $result = $stmt->get_result();

    $lainassaArray = array();
    if ($boolean > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
            $lainassaArray[] = $row;
            //echo '<br />'.$lainassaArray[] = json_encode($row).'<br />';
        }
    } else {
        echo '<br />'."0 results";
    }
    $json_lainassa = json_encode($lainassaArray);
    echo $json_lainassa;

    $stmt->close();
    $connection->close();
}

function palautaKirja(){

}

//
//      Apumetodit
//

// Selvitetään mitä halutaan tehdä
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

// Haetaan hakukriteerit
function getKirjaHakuKriteerit(){
    $nimi = $_GET["nimi"];
    $knimi = $_GET["knimi"];
    $id = $_GET["id"];
    $kieli = $_GET["kieli"];
    $isbn = $_GET["isbn"];
    $vuosi = $_GET["vuosi"];

    $hakukriteerit = array();

        $hakukriteerit['nimi'] = $nimi;
        $hakukriteerit['knimi'] = $knimi;
        $hakukriteerit['id'] = $id;
        $hakukriteerit['kieli'] = $kieli;
        $hakukriteerit['isbn'] = $isbn;
        $hakukriteerit['vuosi'] = $vuosi;

    return $hakukriteerit;
}

// Haetaan kirjan id
function getID(){
    $id = $_GET['id'];
    return $id;
}

// Haetaan mitä metodia ollaan käyttämässä
function getMetodi(){
    $metodi =$_SERVER['REQUEST_METHOD'];
    return $metodi;
}

// Haetaan clientistä lähetetty data
function getData(){
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);
    return $data;
}

//
//      Pää Metodit
//
    $metodi = getMetodi();
    $resurssi = getResurssi();

    if ($metodi=="GET" && $resurssi[0]=="kirja") {
        $hakukriteerit = getKirjaHakuKriteerit();
        kirjaHaku($hakukriteerit);
    } else if ($metodi=="GET" && $resurssi[0]=="lainassa" && $resurssi[1]=="historia"){
        haeKaikkilainat();
    } else if ($metodi=="GET" && $resurssi[0]=="lainassa"){
        haeLainat();
    } else if ($metodi=="POST" && $resurssi[0]=="kirja") {
        $kirja = getData();
        addKirja($kirja);
    } else if ($metodi=="POST" && $resurssi[0]=="laina" && $resurssi[1]=="luo"){
        $laina = getData();

    } else if ($metodi=="PUT" && $resurssi[0]=="laina" && $resurssi[1]=="palauta"){
        $id = getData();
        palautaKirja($id);
    } else if ($metodi=="DELETE" && $resurssi[0]=="kirja") {
        $id = getID();
        poistaKirja($id);
    }


