<?php
    include('../php/conn.php');

    $name = $_REQUEST['name'];

    $res = $mysqli->query("select * from goods where title like '%$name%'");

    $arr = [];

    while($row = $res->fetch_assoc()){
        array_push($arr, $row);
    }

    $json = json_encode($arr);
    echo $json;

    $mysqli->close();
?>