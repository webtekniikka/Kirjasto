<?php
$nimi = $_GET["nimi"];
$knimi = $_GET["knimi"];
$id = $_GET["id"];
$kieli = $_GET["kieli"];
$isbn = $_GET["isbn"];
$vuodesta = $_GET["vuodesta"];
$vuoteen = $_GET["vuoteen"];

$hakukriteerit;

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

$palaute = json_encode($hakukriteerit);
if (empty($hakukriteerit)){
    echo "tyhja";
} else {
// echo $hakukriteerit['nimi'];
    echo $palaute;
}