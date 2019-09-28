$(function () {
    var id = location.search.split('=')[1];
    // console.log(id);

    $.ajax({
        type: 'post',
        url: '../php/getItem.php',
        data: {
            id: id
        },
        dataType: 'json',
        success: function (res) {
            console.log(res);
            var pic = JSON.parse(res.pic);
            console.log(pic);
            $('title').html(res.title);
            var str = ` <div class="wrapper">
                <h5><a href="javascript:;">首页</a> / <a href="javascript:;">手机</a> / <span>${res.title}</span></h5>
                <div id="tabs">
                    <ul>
                    </ul>
                </div>
                <div class="content">
                    <h5>${pic[1].title}</h5>
                    <p class="">${pic[1].details}</p>
                    <div>
                        <p>
                            <span>价 格</span> <i>￥</i><em>${res.price}</em>
                        </p>
                        <div>
                            <p>
                                <span>活 动</span> <i>
                                    <span>赠品</span> <em>送Z20水晶触控保护壳</em>
                                </i>
                            </p>
                            <p>
                                <span>分期</span> <em>享受花呗3期,6期,12期分期</em>
                            </p>
                            <p>
                                <span>积分</span> <em>购买即赠积分，积分可抵现</em>
                            </p>
                            <p>
                                <span>包邮</span> <em>青铜及以下满59、白银满39、黄金及以上包邮</em>
                            </p>
                        </div>
                    </div>
                    <p>
                        <span>地 址</span><img class="lazy" data-original="../img/position.png" alt="..."><em>浙江省 杭州市 上城区</em>
                    </p>
                    <p id="color">
                        选择颜色
                    </p>
                    <p id="version">
                        选择版本
                    </p>
                    <p>
                        <em>数量</em>
                        <span>
                            <img class="lazy minus" data-original="../img/minus.png" alt=""><input type="text" value="1" id="num"><img class="lazy add" data-original="../img/add.png"
                                alt="">
                        </span>
                    </p>
                    <input type="button" value="加入购物车" id="car">
                    <input type="button" value="立即购买">
                </div>
            </div>`;
            $('.details').append(str).find('#car').on('click', function () {
                saveData(id, $('#num').val(), res.price);
                location.href = '../html/shopcar.html';
            });

            changeNum(res.num);

            var type = JSON.parse(res.type);
            if (type) {
                str = '';
                for (let i = 0; i < type.length; i++) {
                    str += `<span>${type[i]}</span>`;
                }
                $('#color').append(str);
            }

            var version = JSON.parse(res.version);
            if (version) {
                str = '';
                for (let i = 0; i < version.length; i++) {
                    str += `<span>${version[i]}</span>`;
                }
                $('#version').append(str);
            } else {
                $('#version').css({
                    display: 'none'
                });
            }

            str = '';
            var str1 = '';
            for (let i = 1; i < pic.length; i++) {
                str += `<div>
                            <img src="${pic[i].src}" alt="...">
                        </div>`;
                str1 += `<li>
                            <img class="lazy" data-original="${pic[i].src}" alt="...">
                        </li>`;
            }
            $('#tabs>ul').append(str1).before(str);
            $('#tabs>div')[0].classList.add('show');
            $('#tabs>ul>li')[0].classList.add('active');




            $('img.lazy').lazyload({
                effect: "fadeIn"
            });

            $('#tabs').tabs();

            $(window).on('scroll', function () {
                var scrollTop = $(window).scrollTop(); //获得当前滚动条滚动的距离
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
        },
        error: function (err) {
            console.log(err);
        },
        // dataFilter: function () {}
    });

    // 存储cookie
    function saveData(id, num, price) {
        var data = {
            id: id,
            num: num,
            price: price
        }
        var shop = cookie.get('shop');
        if (shop) {
            shop = JSON.parse(shop);
            if (shop.some(elm => elm.id == id)) {
                shop.forEach(elm => elm.id == id ? elm.num = num : null);
            } else {
                shop.push(data);
            }
        } else {
            shop = [];
            shop.push(data);
        }
        cookie.set('shop', JSON.stringify(shop), 1);
    }

    // 改变数量
    function changeNum(num) {
        num = parseInt(num);
        $('.details').on('click', function (e) {
            var n = parseInt($('#num').val());
            if ($(e.target).hasClass('minus')) {
                if (n > 1) {
                    $('#num').val(n - 1);
                }
            } else if ($(e.target).hasClass('add')) {
                if (n + 1 <= num) {
                    $('#num').val(n + 1);
                }
            }
        });
    }

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
        var value = $('#search').val() ? $('#search').val() : $('#search').attr('placeholder');
        console.log(value);
        location.href = `../html/search.html?name=${value}`;
    });
    $('#search').on('keyup', function (e) {
        if (e.keyCode == 13) {
            var value = $(this).val() ? $(this).val() : $(this).attr('placeholder');
            location.href = `../html/search.html?name=${value}`;
        }
    });


    $('.toTop').on('click', function () {
        $(window).scrollTop(0);
    });
});