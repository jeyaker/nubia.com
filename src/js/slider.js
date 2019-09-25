(function ($) {
    $.fn.extend({
        slider: function (options) {
            var main = null, // 主函数
                that = this, // 保存执行上下文对象
                init = null, // 初始化
                stop = null, // 停止
                start = null, //开始
                next = null, // 下一个
                prev = null, // 上一个
                timer = null, // 计时器
                tabs = null,
                elms = {},
                defaults = {
                    speed: 800,
                    delay: 4000
                } // 默认参数

            defaults = $.extend(defaults, options); // 合并对象

            //  1.初始化
            init = function () {
                elms._index = 0; // 初始为第一张图片
                elms.btn = that.children('span'); // 获取按钮
                elms.img = that.children('div').children('img'); // 获取img
                elms.tabs = that.children('ul').children();
                elms.imgsrc = ['../img/brand_2.jpg', '../img/brand_3.jpg', '../img/brand_4.jpg', '../img/brand_5.jpg'];

                // 绑定按钮事件
                elms.btn.on('click', function () {
                    if (elms.btn.index(this)) { // 通过索引(0,1)判断 按钮
                        next();
                    } else {
                        prev();
                    }
                });

                // 绑定hover
                // that.hover(function () { // 鼠标移到图片时
                //     stop();
                // }, function () { // 鼠标离开图片时
                //     timer = setInterval(start.bind(null, 1), defaults.speed + defaults.delay);
                // });

                // 选项卡

                elms.tabs.on('click', function () {
                    // console.log(this);
                    var index = elms.tabs.index(this);
                    elms._index = index;
                    $(this).addClass('active').siblings().removeClass('active');
                    elms.img.attr('src', elms.imgsrc[elms._index]);
                });
            };

            // 2.开始动画
            start = function (fx) { // 传入参数用来设置轮播方向
                elms.img.animate({
                    opacity: 0.6
                }, defaults.speed / 2, function () {
                    if (fx) {
                        ++elms._index;
                        if (elms._index == 4) {
                            elms._index = 0;
                        }
                        elms.img.attr('src', elms.imgsrc[elms._index]);
                        $(elms.tabs[elms._index]).addClass('active').siblings().removeClass('active');
                    } else {
                        --elms._index;
                        if (elms._index == -1) {
                            elms._index = 3;
                        }
                        elms.img.attr('src', elms.imgsrc[elms._index]);
                        $(elms.tabs[elms._index]).addClass('active').siblings().removeClass('active');
                    }
                }).animate({
                    opacity: 1
                }, defaults.speed / 2);
            };

            // 3.方向控制
            // 下一个按钮事件
            next = function () {
                stop();
                start(1);
                timer = setInterval(start.bind(null, 1), defaults.speed + defaults.delay);
            };
            // 上一个按钮事件
            prev = function () {
                stop();
                start(0);
                timer = setInterval(start.bind(null, 1), defaults.speed + defaults.delay);
            };


            // 4.停止动画
            stop = function () {
                elms.img.stop(true, true); // 停止动画 清空动画列表 跳到当前动画结尾
                clearInterval(timer);
            };

            // 主函数
            main = function () {
                init();
                timer = setInterval(start.bind(null, 1), defaults.speed + defaults.delay);
            };
            main();

            return this;
        },

    });

})(jQuery);