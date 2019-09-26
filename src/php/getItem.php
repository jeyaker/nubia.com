<?php
    include('../php/conn.php');

    $id = $_REQUEST['id'];

    $res = $mysqli->query("select * from goods where id = '$id'");

    $row = $res->fetch_assoc();

    $json = json_encode($row);
    echo $json;

    $mysqli->close();
?>