<?php
    include('../php/conn.php');

    $name = $_REQUEST['name'];

    $res = $mysqli->query("select * from goods where (title like '%$name%') and ((id between 46 and 51) or (id between 53 and 58))" );

    $arr = [];

    while($row = $res->fetch_assoc()){
        array_push($arr, $row);
    }

    $json = json_encode($arr);
    echo $json;

    $mysqli->close();
?>