$(function () {
    $('#slider').slider();
    $.ajax({
        url: '../php/getall.php',
        type: 'get',
        dataType: 'json',
        // dataFilter: function () {},
        success: function (res) {
            console.log(res);
            // console.log(res[0].id);
            var str1 = '',
                str2 = '';
            for (var i = 0; i < 6; i++) {
                var pic = JSON.parse(res[i + 45].pic);
                console.log(res[i + 45].original_price);
                if (res[i + 45].original_price == 0.00) {
                    str1 += `<li>
                            <a href = "../html/shopdet.html?id=${res[i + 45].id}">
                                <img class="lazy" data-original="${pic[0].src}" alt = "..." title = "">
                                <div>
                                    <span>${res[i + 45].title}</span>
                                    <em>${res[i + 45].details}</em>
                                    <p><sup> ￥ </sup> <strong>${res[i + 45].price}</strong></p>
                                </div>
                            </a>
                            <div class="btn">
                                <a href="javascript:;">查看详情</a>
                                <a href="../html/shopdet.html?id=${res[i + 45].id}">立即购买</a>
                            </div>
                         </li>`;
                } else {
                    str1 += `<li>
                            <a href = "../html/shopdet.html?id=${res[i+45].id}">
                                <img class="lazy" data-original="${pic[0].src}" alt = "..." title = "">
                                <div>
                                    <span>${res[i+45].title}</span>
                                    <em>${res[i+45].details}</em>
                                    <p><sup> ￥ </sup> <strong>${res[i+45].price}</strong> <span>|</span> <del>${res[i + 45].original_price}</del></p>
                                </div>
                            </a>
                            <div class="btn">
                                <a href="javascript:;">查看详情</a>
                                <a href="../html/shopdet.html?id=${res[i+45].id}">立即购买</a>
                            </div>
                         </li>`;
                }

            }
            $('#rx-content').append(str1);
            for (var i = 0; i < 6; i++) {
                var pic = JSON.parse(res[i + 52].pic);
                if (res[i + 52].original_price == 0.00) {
                    str2 += `<li>
                            <a href = "../html/shopdet.html?id=${res[i + 52].id}">
                                <img class="lazy" data-original="${pic[0].src}" alt = "..." title = "">
                                <div>
                                    <span>${res[i + 52].title}</span>
                                    <p><sup> ￥ </sup> <strong>${res[i + 52].price}</strong></p>
                                </div>
                            </a>
                            <div class="btn">
                                <a href="../html/shopdet.html?id=${res[i + 52].id}">立即购买</a>
                            </div>
                         </li>`;
                } else {
                    str2 += `<li>
                            <a href = "../html/shopdet.html?id=${res[i + 52].id}">
                                <img class="lazy" data-original="${pic[0].src}" alt = "..." title = "">
                                <div>
                                    <span>${res[i + 52].title}</span>
                                    <p><sup> ￥ </sup> <strong>${res[i + 52].price}</strong> <span>|</span> <del>${res[i + 52].original_price}</del></p>
                                </div>
                            </a>
                            <div class="btn">
                                <a href="../html/shopdet.html?id=${res[i + 52].id}">立即购买</a>
                            </div>
                         </li>`;
                }
            }
            $('#jx-content').append(str2);
            $("img.lazy").lazyload({
                // placeholder: "../img/grey.gif",
                effect: "fadeIn"
            });
        },
        error: function (err) {
            console.log(err);
        }
    });

});