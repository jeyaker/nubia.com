$(function () {
    // 懒加载函数
    function lazyload() {
        $('img.lazy').lazyload({
            effect: "fadeIn"
        });
    }

    // 侧边栏
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

    // 提取cookie数据
    var shop = cookie.get('shop');
    // console.log(shop);
    if (shop && shop != '[]') {
        $('.noshop').css({
            display: 'none'
        });

        shop = JSON.parse(shop);
        var idList = shop.map(elm => elm.id).join();
        $.ajax({
            url: '../php/shopcar.php',
            type: 'post',
            dataType: 'json',
            data: {
                idList: idList
            },
            error: function (err) {
                console.log(err);
            },
            // dataFilter: function () { },
            success: function (res) {
                console.log(res);
                var str = '',
                    count = 0,
                    sum = 0;
                shop.forEach(elm => {
                    var arr = res.filter((val, i) => val.id == elm.id);
                    // console.log(arr);
                    var pic = JSON.parse(arr[0].pic);
                    // console.log(pic);
                    count += parseInt(elm.num);
                    sum += arr[0].price * elm.num;
                    str += `<tr>
                                <td>
                                    <img class="lazy" data-original="${pic[1].src}">
                                </td>
                                <td class="">
                                    <a href="javascript:;" class="">
                                        ${pic[1].title}
                                    </a>
                                </td>
                                <td> ￥${arr[0].price}</td>
                                <td>
                                    <div class=""><span class="minus">-</span> <input type="text" maxlength="2"
                                            readonly="readonly" class="" value="${elm.num}" id="num"> <span class="add">+</span></div>
                                </td>
                                <td class="subtotal">
                                    ￥${(arr[0].price * elm.num).toFixed(2)}
                                </td>
                                <td>
                                    <a title="删除" class="del">×</a>
                                </td>
                            </tr>`;
                });


                $('.shopcar table>tbody').append(str);
                $('.shopcar table>caption>span').html(count);
                $('.shopcar table>tfoot td:last-child>p').html('￥' + sum.toFixed(2));
                lazyload(); // 图片懒加载

                // 加减按钮
                $('.minus').on('click', function (e) {

                    var n = parseInt($(e.target).siblings('#num').val());
                    $(e.target).siblings('#num').val(n - 1);
                    var index = $('tbody>tr').index($(e.target).parent().parent().parent());

                    if ($(e.target).siblings('#num').val() == '0') {
                        ($(e.target).parent().parent().parent()).remove();
                        shop.splice(index, 1);
                        // console.log(shop);
                        cookie.set('shop', JSON.stringify(shop), 1);
                    } else {
                        n = parseInt($(e.target).siblings('#num').val());

                        // console.log(index);
                        // console.log(shop[index].price);

                        $(e.target).parent().parent().siblings('.subtotal').html('￥' + (shop[index].price * n).toFixed(2));

                        shop[index].num = $(e.target).siblings('#num').val();
                        // console.log(shop);
                        cookie.set('shop', JSON.stringify(shop), 1);
                    }
                    location.reload();
                });

                $('.add').on('click', function (e) {
                    var n = parseInt($(e.target).siblings('#num').val());
                    $(e.target).siblings('#num').val(n + 1);
                    if ($(e.target).siblings('#num').val() >= 10) {
                        $(e.target).siblings('#num').val(10);
                    } else {
                        n = parseInt($(e.target).siblings('#num').val());
                        var index = $('tbody>tr').index($(e.target).parent().parent().parent());
                        $(e.target).parent().parent().siblings('.subtotal').html('￥' + (shop[index].price * n).toFixed(2));

                        shop[index].num = $(e.target).siblings('#num').val();
                        cookie.set('shop', JSON.stringify(shop), 1);
                    }
                    location.reload();
                });
            }
        });
    } else {
        $('.progress,.shopcar').css({
            display: 'none'
        });
        lazyload();
    }

    removeShop(shop); // 删除按钮

    // 删除购物车商品
    function removeShop(shop) {
        $('.shopcar').on('click', function (e) {
            var index = $('tbody>tr').index($(e.target).parent().parent());

            if ($(e.target).hasClass('del')) {
                // console.log($(e.target).parent().parent());
                ($(e.target).parent().parent()).remove();

                shop.splice(index, 1);
                // console.log(index);
                cookie.set('shop', JSON.stringify(shop), 1);

                location.reload();
            }
        });
    }

    // 确认登录状态
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

    // 模糊搜索
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

    // 回到顶部
    $('.toTop').on('click', function () {
        $(window).scrollTop(0);
    });
});