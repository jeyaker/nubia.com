<?php
    include('../php/conn.php');

    $res = $mysqli->query("select * from goods");

    $arr = [];

    while($row = $res->fetch_assoc()){
        array_push($arr,$row);
    }

    $json = json_encode($arr);
    echo $json;

    $mysqli->close();
?>