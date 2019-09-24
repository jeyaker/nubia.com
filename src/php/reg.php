<?php
    include('../php/conn.php');

    $phone = $_REQUEST['phone'];
    $pwd = $_REQUEST['pwd'];

    $res = $mysqli->query("insert into nubia_users(u_phone,u_password) values('$phone','$pwd')");

    if($res){
        echo '{"msg":"注册成功！","has":"true","status":200}';
    }else{
        echo '{"msg":"注册失败！","has":"false","status":200}';
    }

    $mysqli->close();
?>