<?php

function kirjaHaku($haku)
{

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

function addKirja($data)
{

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
        echo "Teos lisätty tietokantaan.";
    } else {
        echo "Teoksen lisääminen epäonnistui.";
    }
    $stmt->close();
    $connection->close();

}

//Kirjan poistaminen id:llä toimii
function poistaKirja($para)
{
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

    $hpoisto = "DELETE FROM lainaukset WHERE Kirja_id=?";
    $stmt = $connection->prepare($hpoisto);
    $stmt->bind_param("i", $kid);
    $stmt->execute();

    $sql = "DELETE FROM kirjat WHERE Kirja_Id=?";
    $stmt = $connection->prepare($sql);
    $stmt->bind_param("i", $kid);
    $boolean = $stmt->execute();
    if ($boolean > 0) {
        echo "Kirjan poisto onnistui.";
    } else {
        echo "Kirjan poisto epäonnistui.";
    }
    $stmt->close();
    $connection->close();
}


//hakee lainassa olevat, sekä lainahistorian
function haeKaikkilainat()
{
    $servername = "localhost";
    $username = "ryhma4";
    $password = "passu";
    $dbname = "kirjasto";

    $connection = new mysqli($servername, $username, $password, $dbname);

// Check connection
    if ($connection->connect_error) {
        die("Connection failed: " . $connection->connect_error);
    }

    $sql = "SELECT kirjat.Kirja_Id, kirjat.Nimi, lainaukset.*
      FROM kirjat JOIN lainaukset ON kirjat.Kirja_Id = lainaukset.Kirja_Id";
    $stmt = $connection->prepare($sql);
    $stmt->execute();
    $result = $stmt->get_result();

    $lainaArray = array();
    // output data of each row
    while ($row = $result->fetch_assoc()) {
        $lainaArray[] = $row;
        //echo '<br />'.$lainaArray[] = json_encode($row).'<br />';
    }
    $json_laina = json_encode($lainaArray);
    echo $json_laina;

    $stmt->close();
    $connection->close();
}


//hakee vain lainassa olevat lainat;
function haeLainat($laina)
{
    $servername = "localhost";
    $username = "ryhma4";
    $password = "passu";
    $dbname = "kirjasto";

    $connection = new mysqli($servername, $username, $password, $dbname);

// Check connection
    if ($connection->connect_error) {
        die("Connection failed: " . $connection->connect_error);
    }

    $saatavuus = "Lainassa";
    $knimi = $laina['nimi'];
    $tekija = $laina['knimi'];
    $kid = $laina['id'];
    $kieli = $laina['kieli'];
    $ISBN = $laina["isbn"];
    $vuosi = $laina["vuosi"];
    $pvm = $laina["erapaiva"];


    $sql = "SELECT kirjat.Kirja_Id, kirjat.Nimi, lainaukset.*
    FROM kirjat JOIN lainaukset ON kirjat.Kirja_Id = lainaukset.Kirja_Id
    WHERE kirjat.Nimi=? or kirjat.Kirjailija=? or kirjat.Kirja_id=? or
    kirjat.Kieli=? or kirjat.ISBN=? or kirjat.Julkaisuvuosi=? or lainaukset.Viimeinen_pvm=?
    and kirjat.Saatavuus=?";

    $stmt = $connection->prepare($sql);
    $stmt->bind_param("ssississ", $knimi, $tekija, $kid, $kieli, $ISBN, $vuosi, $pvm, $saatavuus);
    $stmt->execute();
    $result = $stmt->get_result();
    $kirjaArray = array();
    // output data of each row
    while ($row = $result->fetch_assoc()) {
        /*     echo '<br />' . $row['Kirja_id'] . ' ';
             echo $row['Nimi'] . ' ';
             echo $row['Laina_id'] . ' ';
             echo $row['Lainaajan_etunimi'] . ' ';
             echo $row['Lainaajan_sukunimi'] . ' ';
             echo $row['Lainaus_pvm'] . ' ';
             echo $row['Palautus_pvm'] . ' ';
             echo $row['Viimeinen_pvm'] . ' ';
             echo $row['Kirja_id'] . ' ';
        */
        $kirjaArray[] = $row;
        //echo '<br />'.$kirjaArray[] = json_encode($row).'<br />';
    }

    $json_lista = json_encode($kirjaArray);
    echo $json_lista;

}

//Luodaan laina

function addLaina($laina)
{

    $servername = "localhost";
    $username = "ryhma4";
    $password = "passu";
    $dbname = "kirjasto";

    $connection = new mysqli($servername, $username, $password, $dbname);

// Check connection
    if ($connection->connect_error) {
        die("Connection failed: " . $connection->connect_error);
    }

    $kid = $laina['id'];
    $enimi = $laina['etunimi'];
    $snimi = $laina['sukunimi'];
    $lpvm = $laina['paivamaara'];
    $ppvm = "Lainassa";
    $epvm = $laina['erapaiva'];
    $saatavuus = "Lainassa";


    $tarkastus = "SELECT Saatavuus FROM Kirjat WHERE Kirja_Id=? AND Saatavuus=?";
    $stmt = $connection->prepare($tarkastus);
    $stmt->bind_param("is", $kid, $saatavuus);
    $stmt->execute();
    $result = $stmt->get_result();
    if ($result->num_rows > 0) {

        //while ($row = $result->fetch_assoc()) {
        //$tulos = $row['Saatavuus'];
        //echo $tulos;
        //}
        echo "Kirja on jo lainassa.";
    } else {

        $nextid = "SELECT MAX(Laina_Id) FROM lainaukset";
        $stmt = $connection->prepare($nextid);
        $stmt->execute();
        $result = $stmt->get_result();
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $lid = $row['MAX(Laina_Id)'];
            }
        }
        $lid += 1;

        $sql = "INSERT INTO lainaukset (Laina_Id, Lainaaja_etunimi, Lainaajan_sukunimi, Lainaus_pvm, Palautus_pvm, Viimeinen_pvm, Kirja_Id)
         Values (?,?,?,?,?,?,?)";
        $stmt = $connection->prepare($sql);
        $stmt->bind_param("isssssi", $lid, $enimi, $snimi, $lpvm, $ppvm, $epvm, $kid);
        $boolean = $stmt->execute();
        if ($boolean > 0) {
            echo "Lainatapahtuma luotu.";
        } else {
            echo "Lainan luominen epäonnistui.";
        }

        $update = "UPDATE kirjat SET Saatavuus=? WHERE Kirja_id=?;";
        $stmt = $connection->prepare($update);
        $stmt->bind_param("si", $saatavuus, $kid);
        $stmt->execute();

    }

    $stmt->close();
    $connection->close();

}

//Palautus tietokantaan
function palautaKirja($id)
{

    $servername = "localhost";
    $username = "ryhma4";
    $password = "passu";
    $dbname = "kirjasto";

    $connection = new mysqli($servername, $username, $password, $dbname);

// Check connection
    if ($connection->connect_error) {
        die("Connection failed: " . $connection->connect_error);
    }

    $kid = $id['id'];
    $pvm = date("Y-m-d");
    $saatavuus = "Saatavilla";
    $palautus = "Lainassa";

    //Päivitetään kirja jälleen saatavksi kirjatauluun
    $update = "UPDATE kirjat SET Saatavuus=? WHERE Kirja_id=?;";
    $stmt = $connection->prepare($update);
    $stmt->bind_param("si", $saatavuus, $kid);
    $stmt->execute();

    //Päivitetään kirja palautetuksi lainaustaulukkoon
    $sql = "UPDATE lainaukset SET Palautus_pvm=? WHERE Kirja_id=? AND Palautus_pvm=?";
    $stmt = $connection->prepare($sql);
    $stmt->bind_param("sis", $pvm, $kid, $palautus);
    $boolean = $stmt->execute();
    if ($boolean > 0) {
        echo "Teos palautettu.";
    } else {
        echo "Teoksen palautus epäonnistui.";
    }

    $stmt->close();
    $connection->close();

}


//
//      Apumetodit
//

// Selvitetään toiminnan kohde
function getResurssi()
{
    $resurssi_string = $_SERVER['REQUEST_URI'];
    if (strstr($resurssi_string, '?')) {
        $resurssi_string = substr($resurssi_string, 0, strpos($resurssi_string, '?'));
    }
    $resurssi = explode('/', $resurssi_string);

    for ($i = 0; $i < 3; $i++) {
        array_shift($resurssi);
    }
    return $resurssi;
}

// Haetaan kirjojen hakukriteerit
function getKirjaHakuKriteerit()
{
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

// Haetaan lainojen hakukriteerit
function getLainaHakuKriteerit()
{
    $nimi = $_GET["nimi"];
    $knimi = $_GET["knimi"];
    $id = $_GET["id"];
    $kieli = $_GET["kieli"];
    $isbn = $_GET["isbn"];
    $vuosi = $_GET["vuosi"];
    $erapaiva = $_GET["erapaiva"];

    $hakukriteerit = array();

    $hakukriteerit['nimi'] = $nimi;
    $hakukriteerit['knimi'] = $knimi;
    $hakukriteerit['id'] = $id;
    $hakukriteerit['kieli'] = $kieli;
    $hakukriteerit['isbn'] = $isbn;
    $hakukriteerit['vuosi'] = $vuosi;
    $hakukriteerit['erapaiva'] = $erapaiva;

    return $hakukriteerit;
}

// Haetaan kirjan id
function getID()
{
    $id = $_GET['id'];
    return $id;
}

// Haetaan mitä metodia ollaan käyttämässä
function getMetodi()
{
    $metodi = $_SERVER['REQUEST_METHOD'];
    return $metodi;
}

// Haetaan clientistä lähetetty data
function getData()
{
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);
    return $data;
}

//
//      Main
//
$metodi = getMetodi();
$resurssi = getResurssi();

if ($metodi == "GET" && $resurssi[0] == "kirja") {
    $hakukriteerit = getKirjaHakuKriteerit();
    kirjaHaku($hakukriteerit);
} else if ($metodi == "GET" && $resurssi[0] == "lainassa" && $resurssi[1] == "historia") {
    haeKaikkilainat();
} else if ($metodi == "GET" && $resurssi[0] == "lainassa") {
    $hakukriteerit = getLainaHakuKriteerit();
    // tähän lainahakumetodi
    haeLainat($hakukriteerit);
} else if ($metodi == "POST" && $resurssi[0] == "kirja") {
    $kirja = getData();
    addKirja($kirja);
} else if ($metodi == "POST" && $resurssi[0] == "laina" && $resurssi[1] == "luo") {
    $laina = getData();
    addLaina($laina);
} else if ($metodi == "PUT" && $resurssi[0] == "laina" && $resurssi[1] == "palauta") {
    $id = getData();
    palautaKirja($id);
} else if ($metodi == "DELETE" && $resurssi[0] == "kirja") {
    $id = getID();
    poistaKirja($id);
}


