$(function () {
    $('#tabs').tabs(); // 选项卡

    var data = {
        phone: 0,
        pwd: 0
    };
    $('#phone').on('blur', function () {
        if ($(this).val() == '' || /^\s*$/.test($(this).val())) {
            $('.phone').html('请填写信息！');
            data.phone = 0;
        } else {
            $('.phone').html('');
            data.phone = 1;
        }
    });
    $('#pwd').on('blur', function () {
        if ($(this).val() == '') {
            $('.pwd').html('请输入密码');
            data.pwd = 0;
        } else {
            $('.pwd').html('');
            data.pwd = 1;
        }
    });
    $('#btn').on('click', function () {
        if ($('#phone').val() == '') {
            $('.phone').html('请填写信息！');
            data.phone = 0;
        } else if ($('#pwd').val() == '') {
            $('.pwd').html('请输入密码');
            data.pwd = 0;

        }
        if (data.pwd + data.phone == 2) {
            $.ajax({
                type: 'post',
                data: {
                    phone: $('#phone').val(),
                    pwd: $.md5($('#pwd').val())
                },
                dataType: 'json',
                url: '../php/login.php',
                success: function (res) {
                    // console.log(res.msg);
                    if (res.has == '1') {
                        alert(res.msg);
                        location.href = '../html/index.html';
                    } else if (res.has == '2') {
                        $('.pwd').html(res.msg);
                    } else if (res.has == '3') {
                        $('.phone').html(res.msg);
                    }
                },
                error: function (err) {
                    console.log(err);
                },
                // complete: function () {},
                // beforeSend: function () {},
                dataFilter: function (d) {
                    $('#btn').val('登录中');
                    return d;
                }
            });
        }
    });
});