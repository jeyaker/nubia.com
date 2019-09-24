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
                    speed: 500,
                    delay: 2000
                } // 默认参数

            defaults = $.extend(defaults, options); // 合并对象

            //  1.初始化
            init = function () {
                elms._index = 1; // 初始为第一张图片
                elms.btn = that.children('span'); // 获取按钮
                elms.img = that.children('div').children('img'); // 获取img

                // 绑定按钮事件
                elms.btn.on('click', function () {
                    if (elms.btn.index(this)) { // 通过索引(0,1)判断 按钮
                        next();
                    } else {
                        prev();
                    }
                });

                // 绑定hover
                that.hover(function () { // 鼠标移到图片时
                    stop();
                }, function () { // 鼠标离开图片时
                    timer = setInterval(start.bind(null, 1), defaults.speed + defaults.delay);
                });

                // 选项卡
                // var btn = that.children('ul').children();
                // // console.log(btn);
                // btn.on('click', function () {
                //     // console.log(this);
                //     var index = btn.index(this);
                //     // console.log(index);
                //     elms._index = index + 1;
                //     elms.sliderDiv.css({
                //         left: elms.sliderDiv.offset().left - elms.sliderDiv.children('img').eq(index).offset().left
                //     });
                // });
            };

            // 2.开始动画
            start = function (fx) { // 传入参数用来设置轮播方向
                if (!fx) { // 判断方向
                    elms.img.each(function (i, elm) {
                        if (elms._index == i + 1) {
                            if (elms._index == 1) {
                                elms.img[3].style.opacity = 1;
                            } else {
                                elms.img[i - 1].style.opacity = 1;
                            }
                            $(elm).fadeTo(defaults.speed, 0, function () {
                                elms._index--;
                                if (elms._index == 0) { // 边界
                                    elms._index = 4;
                                }
                                console.log(elms._index);
                            });
                        }
                    });
                } else {
                    elms.img.each(function (i, elm) {
                        if (elms._index == i + 1) {
                            if (elms._index == 4) {
                                elms.img[0].style.opacity = 1;
                            } else {
                                elms.img[i + 1].style.opacity = 1;
                            }
                            $(elm).fadeTo(defaults.speed, 0, function () {
                                elms._index++;
                                if (elms._index == 5) {
                                    elms._index = 1;
                                }
                                // console.log(elms._index);
                            });
                        }
                    });
                }

            };

            // 3.方向控制
            // 下一个按钮事件
            next = function () {
                stop();
                start(1);
            };
            // 上一个按钮事件
            prev = function () {
                stop();
                start(0);
            };


            // 4.停止动画
            stop = function () {
                elms.img.stop(true, true); // 停止动画 清空动画列表 跳到当前动画结尾
                clearInterval(timer);
            };

            // 主函数
            main = function () {
                init();
                timer = setInterval(start.bind(null, 1), defaults.delay);
            };
            main();

            return this;
        },

    });

})(jQuery);