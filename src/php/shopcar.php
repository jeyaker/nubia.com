<?php
    include('../php/conn.php');

    $idList = $_REQUEST['idList'];

    $res = $mysqli->query("select * from goods where id in ($idList)");

    $arr = [];

    while($row = $res->fetch_assoc()){
        array_push($arr,$row);
    }

    $json = json_encode($arr);
    echo $json;


    $mysqli->close();
?>