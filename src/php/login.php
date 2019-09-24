<?php
    include('../php/conn.php');

    $phone = $_REQUEST['phone'];
    $pwd = $_REQUEST['pwd'];

    $res1 = $mysqli->query("select * from nubia_users where u_phone='$phone'");
    $res2 = $mysqli->query("select * from nubia_users where u_password='$pwd' and u_phone='$phone'");

    if($res1->num_rows){
        if($res2->num_rows){
            echo '{"msg":"登录成功！","has":"1","status":200}';
        }else{
            echo '{"msg":"密码错误","has":"2","status":200}';
        }
    }else{
        echo '{"msg":"邮箱/手机号码/用户名错误","has":"3","status":200}';
    }

    $mysqli->close();
?>