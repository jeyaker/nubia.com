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

    $('.content .name').html(name);
    $.ajax({
        type: 'post',
        data: {
            name: name
        },
        url: '../php/fuzzy.php',
        dataType: 'json',
        error: function (err) {
            console.log(err);
        },
        success: function (res) {
            console.log(res);
            if (res.length) {
                var str = '';

                for (let i = 0; i < res.length; i++) {
                    var pic = JSON.parse(res[i].pic);
                    console.log(pic);
                    str += `<li>
                        <a href="../html/shopdet.html?id=${res[i].id}">
                            <img draggable="false" class="lazy" data-original="${pic[0].src}" alt="..." title="">
                            <div>
                                <span>${res[i].title}</span>
                                <em>${res[i].details}</em>
                                <p><sup>￥</sup> <strong>${res[i].price}</strong></p>
                            </div>
                        </a>
                        <div class="btn">
                            <a href="javascript:;">查看详情</a>
                            <a href="../html/shopdet.html?id=${res[i].id}">立即购买</a>
                        </div>
                    </li>`;
                }

                $('#searchBlock .nothing').before(str);
            } else {
                $('#searchBlock .nothing').css({
                    display: 'flex'
                });
            }

            lazyload();

        }
    });
});