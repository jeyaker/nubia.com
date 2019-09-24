<?php
    include('../php/conn.php');

    $phone = $_REQUEST['phone'];

    $res = $mysqli->query("select * from nubia_users where u_phone='$phone'");

    if($res->num_rows){
        echo '{"msg":"手机号码已经被注册！","has":"true","status":200}';
    }else{
        echo '{"msg":"手机号码可以使用！","has":"false","status":200}';
    }

    $mysqli->close();
?>