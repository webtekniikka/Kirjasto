<?php



//function bookList($kid, $nimi, $kustantaja, $jvuosi, $kirjailija, $ISBN, $painos, $kieli){
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

/*  ei käytössä
    $sql = "INSERT INTO kirjat (Kirja_Id, Nimi, Kustantaja, Julkaisuvuosi, Kirjailija, ISBN, Painos, Kieli, Saatavuus)
    VALUES (004, 'Testi3', 'OTAVA', 2006, 'Kirjailija_o', '4ANa222', 3, 'Saksa','Kyllä')";

    if ($connection->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $connection->error;
}
$connection->close();
*/

    //Tämä toimii
    $saatavuus = "Kyllä";
    $kid = 004;
    $nimi = "Testi";
    $kustantaja = "Oma kustanne";
    $jvuosi = 2002;
    $kirjailija = "kirjailija";
    $ISBN = "ABC123ABC";
    $painos = 1;
    $kieli = "Ranska";


/*
    //Pätkä toimii tarvitsee vielä kimpassa miettii toteutusta haku ei liian sepsifoiva
    $sql ="SELECT * FROM kirjat
    WHERE Kirja_Id=? or Nimi=? or  Kustantaja=? or Julkaisuvuosi=? or Kirjailija=? or ISBN=? or Painos=? or Kieli=? and Saatavuus=?";
   $stmt = $connection->prepare($sql);
   $stmt->bind_param("issississ", $kid, $nimi, $kustantaja, $jvuosi, $kirjailija, $ISBN, $painos, $kieli, $saatavuus);

   $boolean =$stmt->execute();
   $result = $stmt->get_result();

    if ($boolean > 0) {
        // output data of each row
        $kirjaArray = array();
        while($row = $result->fetch_assoc()) {
            echo '<br />'.$row['Kirja_Id'] . '<br />';
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
        echo '<br />'."0 results";
    }
    $tulosArray = array('numOfRows'=>strval($result->num_rows),'rows'=>$kirjaArray);

    $jsonArray = json_encode($tulosArray);
    echo $jsonArray;
    $stmt->close();
    $connection->close();
*/

/*
   //kirjan lisääminen toimii
    $sql = "INSERT INTO kirjat (Kirja_Id, Nimi, Kustantaja, Julkaisuvuosi, Kirjailija, ISBN, Painos, Kieli, Saatavuus)
    Values (?,?,?,?,?,?,?,?,?)";
    $stmt = $connection->prepare($sql);
    $stmt->bind_param("issississ", $kid, $nimi, $kustantaja, $jvuosi, $kirjailija, $ISBN, $painos, $kieli, $saatavuus);
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


 /*   //Kirjan poistaminen id:llä toimii
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
*/
//
//      Apumetodit
//

/*function getKirjaHakuKriteerit(){
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
*/
?>