<?php
    include('../php/conn.php');

    $user = $_COOKIE['user'];

    $user = json_decode($user);

    $res = $mysqli->query("select * from nubia_users where u_phone = '$user->name' and u_password = '$user->pwd'");

    if($res->num_rows){
        echo '{"msg":"用户存在","has":"true","status":"200"}';
    }else{
        echo '{"msg":"用户不存在","has":"false","status":"200"}';
    }

    $mysqli->close();
?>