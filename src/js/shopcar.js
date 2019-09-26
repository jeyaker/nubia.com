$(function () {
    $('img.lazy').lazyload({
        effect: "fadeIn"
    });
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
    var shop = cookie.get('shop');
    shop = JSON.parse(shop);
    if (shop) {
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
                res.forEach(elm => {
                    var arr = shop.filter((val, i) => val.id == elm.id);
                    for (let i = 0; i < arr.length; i++) {
                        var pic = JSON.parse(elm.pic);
                        console.log(pic);
                        count += parseInt(arr[i].num);
                        sum += arr[i].num * elm.price;
                        str += `<tr>
                            <td>
                                <img src="${pic[0].src}">
                            </td>
                            <td class="">
                                <a href="javascript:;" class="">
                                    ${pic[1].title}
                                </a>
                            </td>
                            <td> ￥${elm.price}</td>
                            <td>
                                <div class=""><span class="minus">-</span> <input type="text" maxlength="2"
                                        readonly="readonly" class="" value="${arr[i].num}" id="num"> <span class="add">+</span></div>
                            </td>
                            <td class="">
                                ￥${(arr[i].num*elm.price).toFixed(2)}
                            </td>
                            <td>
                                <a title="删除" class="del">×</a>
                            </td>
                        </tr>`;
                    }
                });

                $('.shopcar table>tbody').append(str);
                $('.shopcar table>caption>span').html(count);
                $('.shopcar table>tfoot td:last-child>p').html('￥' + sum.toFixed(2));
            }
        });
    }
});