$(function () {
    function lazyload() {
        $('img.lazy').lazyload({
            effect: "fadeIn"
        });
    }

    lazyload();

    $(window).on('scroll', function () {
        // console.log(this);
        // var windowHeight = $(window).height(); // 当前窗口内的高度 innerHeight
        var scrollTop = $(window).scrollTop(); //获得当前滚动条滚动的距离
        // var docHeight = $(document).height(); //获得文档的高度
        // console.log(scrollTop);
        if (scrollTop < 300) {
            $('.toTop').css({
                display: 'none'
            });
        } else if (scrollTop > 300) {
            $('.toTop').css({
                display: 'block'
            });
        }
    });

    var user = cookie.get('user');
    if (user && user != '{}') {
        user = JSON.parse(user);
        if (user.isLogin == 'true') {
            $.ajax({
                type: "get",
                dataType: 'json',
                url: '../php/hasUser.php',
                error: function (err) {
                    console.log(err);
                },
                success: function (res) {
                    // console.log(res);
                    if (res.has == 'true') {
                        $('.personage>.reg-login>ul>li:first-child').html(`<a class="userName">欢迎您，user</a>`);
                        $('.personage>.reg-login>ul>li:last-child').css('display', 'block');
                        $('.personage>.reg-login>ul>li:last-child>.exit').on('click', function () {
                            // console.log(user);
                            if (user.isLogin == 'true') {
                                user.isLogin = 'false';
                            }
                            cookie.set('user', JSON.stringify(user), 1);
                            // console.log(cookie.get('user'));
                            location.reload();
                        });
                    }
                }
            });
        }
    }

    $('#query').on('click', function () {
        location.reload();
    });

    var name = decodeURIComponent(location.search.split('=')[1]);
    console.log(name);

    $('#query').on('click', function () {
        var value = $('#search').val() ? $('#search').val() : $('#search').attr('placeholder');
        console.log(value);
        location.href = `../html/search.html?name=${value}`;
    });
    $('#search').on('keyup', function (e) {
        if (e.keyCode == 13) {
            var value = $(this).val() ? $(this).val() : $(this).attr('placeholder');
            location.href = `../html/search.html?name=${value}`;
        }
    })

    $.ajax({
        type: 'post',
        data: {
            name: name
        },
        url: '../php/fuzzy.php',
        dataType: 'json',
        error: function (err) {
            console.log(err)
        },
        success: function (res) {
            console.log(res);
        }
    });
});