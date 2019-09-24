(function ($) {
    $.fn.extend({
        tabs: function (options) {
            // console.log(this);
            var defaults = {
                'event': 'click',
                'ulClass': 'active',
                'divClass': 'show'
            };

            defaults = $.extend(defaults, options);

            var btn = this.children('ul').children();
            var content = this.children('div');

            btn.on(defaults.event, function () {
                var index = btn.index(this);
                $(this).addClass(defaults.ulClass).siblings().removeClass(defaults.ulClass);
                content.eq(index).addClass(defaults.divClass).siblings().removeClass(defaults.divClass);
            });

        }
    });
})(jQuery);