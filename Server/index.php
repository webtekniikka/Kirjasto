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
echo "Connected successfully";


/*
    $sql = "INSERT INTO kirjat (Kirja_Id, Nimi, Kustantaja, Julkaisuvuosi, Kirjailija, ISBN, Painos, Kieli, Saatavuus)
    VALUES (004, 'Testi3', 'OTAVA', 2006, 'Kirjailija_o', '4ANa222', 3, 'Saksa','Kyllä')";

    if ($connection->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $connection->error;
    }
    $connection->close();
}

*/

    //Tämä toimii
    $saatavuus = "Saatavilla";
    $kid = 005;
    $nimi = "Testi";
    $jvuosi = 2008;
    $kirjailija = "kirjailija";
    $ISBN = "ABC123ABC";
    $kieli = "Ranska";


/*
    //Pätkä toimii tarvitsee vielä kimpassa miettii toteutusta haku ei liian sepsifoiva
    $sql ="SELECT * FROM kirjat
    WHERE Kirja_Id=? or Nimi=? or Julkaisuvuosi=? or Kirjailija=? or ISBN=? or Kieli=?";
   $stmt = $connection->prepare($sql);
   $stmt->bind_param("isisss", $kid, $nimi, $jvuosi, $kirjailija, $ISBN, $kieli);

   $boolean =$stmt->execute();
   $result = $stmt->get_result();

    $kirjaArray = array();
    if ($boolean > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
            echo'<br />'.$row['Kirja_Id'] . ' ';
            echo $row['Nimi'] . ' ';
            echo $row['Julkaisuvuosi'].' ';
            echo $row['Kirjailija'].' ';
            echo $row['ISBN'].' ';
            echo $row['Kieli'].' ';
            echo $row['Saatavuus'].' ';
            $kirjaArray[] = $row;
            //echo '<br />'.$kirjaArray[] = json_encode($row).'<br />';
        }
    } else {
        echo '<br />'."0 results";
    }
    $json_lista = json_encode($kirjaArray);
    echo '<br />'.$json_lista;
    //echo json_encode($kirjaArray);

    $stmt->close();
    $connection->close();
*/
/*
   //kirjan lisääminen toimii
    $sql = "INSERT INTO kirjat (Kirja_Id, Nimi, Julkaisuvuosi, Kirjailija, ISBN, Kieli, Saatavuus)
    Values (?,?,?,?,?,?,?)";
    $stmt = $connection->prepare($sql);
    $stmt->bind_param("isissss", $kid, $nimi, $jvuosi, $kirjailija, $ISBN, $kieli, $saatavuus);
    $boolean =$stmt->execute();
    if($boolean > 0){
        echo '<br />'."Lisäys fine";
    }
    else{
        echo '<br />'."Jokin meni vikaan";
    }
    $stmt->close();
    $connection->close();

*/


/*
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
    poistaKirja($kid);
*/

/*
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
     echo "Connected successfully";

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

haeKaikkilainat();

*/

/*
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
    echo "Connected successfully";

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
haeLainat();

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
    $vuosi = $_GET["vuosi"];
    $hakukriteerit = array();

        $hakukriteerit['nimi'] = $nimi;
        $hakukriteerit['knimi'] = $knimi;
        $hakukriteerit['id'] = $id;
        $hakukriteerit['kieli'] = $kieli;
        $hakukriteerit['isbn'] = $isbn;
        $hakukriteerit['vuosi'] = $vuosi;

    $testi = json_encode($hakukriteerit);
    echo $testi;
    foreach($hakukriteerit as $x => $x_value) {
        echo "Key=" . $x . ", Value=" . $x_value;
    }
    return $hakukriteerit;
}

function getID(){
    $id = $_GET['id'];
    return $id;
}

function getMetodi(){
    $metodi =$_SERVER['REQUEST_METHOD'];
    return $metodi;
}

function getData(){
    $json = file_get_contents('php://input');
    $data = json_decode($json);
    return $data;
}


//
//      Pää Metodit
//
    $metodi = getMetodi();
    $resurssi = getResurssi();
    if ($metodi=="GET" && $resurssi[0]=="kirja") {
        $hakukriteerit = getKirjaHakuKriteerit();//
        //       $bookList($hakukriteerit);
    } else if ($metodi=="GET" && $resurssi[0]=="lainat"){
        echo $resurssi[0];
    } else if ($metodi=="POST" && $resurssi[0]=="kirja") {
        $kirja = getData();
        $kirjaecho = json_encode($kirja);
        echo $kirjaecho;
    } else if ($metodi=="POST" && $resurssi[0]=="laina" && $resurssi[1]=="luo"){
        $laina = getData();
        $lainaecho = json_encode($laina);
        echo $lainaecho;
    } else if ($metodi=="PUT" && $resurssi[0]=="laina" && $resurssi[1]=="palauta"){
        $id = getData();
        echo $id;
    } else if ($metodi=="DELETE" && $resurssi[0]=="kirja") {
        echo "testi";
    }


