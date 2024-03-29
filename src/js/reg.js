$(function () {
    var data = {
        pwd: 0,
        phone: 0,
        checkbox: 0
    };

    // phone验证
    $('#phone').on('blur', function () {
        if ($(this).val() == '' || /^\s*$/.test($(this).val())) {
            $('.phone').html('请填写信息！');
            data.phone = 0;
        } else if (/^\d{11}$/.test($(this).val())) {
            $.ajax({
                type: 'post',
                url: '../php/has.php',
                dataType: 'json',
                data: {
                    phone: $(this).val()
                },
                success: function (res) {
                    if (res.has == 'true') {
                        $('.phone').html(res.msg);
                        data.phone = 0;
                    } else {
                        $('.phone').html('');
                        data.phone = 1;
                    }
                },
                error: function (err) {
                    console.log(err);
                }
            });
        } else {
            $('.phone').html('手机号码格式错误');
            data.phone = 0;
        }
    });

    // 密码验证
    $('#pwd').on('blur', function () {
        var reg = /(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{6,16}$/;
        if ($(this).val() == '' || /^\s*$/.test($(this).val())) {
            $('.pwd').html('请填写信息！');
            data.pwd = 0;
        } else if (reg.test($(this).val())) {
            $('.pwd').html('');
            data.pwd = 1;
        } else {
            $('.pwd').html('密码为6-16个（数字、字母、符号至少包含两种）');
            data.pwd = 0;
        }
    });

    // submit
    $('.submit').on('click', function () {
        if ($('#checkbox').prop('checked') == false) {
            alert('未同意相关协议，将无法进行注册');
            data.checkbox = 0;
        } else if ($('#phone').val() == '' || /^\s*$/.test($('#phone').val())) {
            $('.phone').html('请填写信息！');
            data.phone = 0;
        } else if ($('#pwd').val() == '' || /^\s*$/.test($('#pwd').val())) {
            $('.pwd').html('请填写信息！');
            data.pwd = 0;

        }
        // 勾选复选框
        if ($('#checkbox').prop('checked') == true) {
            data.checkbox = 1;
        }
        // 满足条件
        if (data.checkbox + data.phone + data.pwd == 3) {
            $.ajax({
                type: 'post',
                data: {
                    phone: $('#phone').val(),
                    pwd: $.md5($('#pwd').val())
                },
                dataType: 'json',
                url: '../php/reg.php',
                success: function (res) {
                    // console.log(res);
                    if (res.has == 'true') {
                        alert(res.msg);
                        location.href = '../html/index.html';
                    } else {
                        alert(res.msg);
                        location.reload();
                    }
                },
                error: function (err) {
                    console.log(err);
                },
                // complete: function () {},
                beforeSend: function (d) {
                    $('.submit').val('提交中...');
                    return d;
                },
                // dataFilter: function () {}
            });
        }
    });

    // 倒计时 发送验证码
    $('#codebtn').on('click', function () {
        if (data.phone + data.pwd == 2) {
            $(this).val('发送成功');
            var that = this;
            var timer = null;
            var time = 60;

            $(this).attr({
                'disabled': 'true'
            });
            timer = setInterval(function () {
                var str = `重新发送(${time})`;
                time--;

                $(that).val(str);
                $(that).css({
                    'background-color': 'rgb(192, 192, 192)'
                });
                if (time == 0) {
                    clearInterval(timer);
                    $(that).css({
                        'background-color': '#fff'
                    });
                    $(that).val('重新发送');
                    $(that).removeAttr('disabled');
                }
            }, 1000);
        }
    });

});