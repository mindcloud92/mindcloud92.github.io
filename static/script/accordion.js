'use strict';

(function ($) {
    $(function() {
        $('.accordion-wrapper .handler').on('click', function () {
            const $this = $(this);

            const activeClass = 'active';
            if ($this.hasClass(activeClass)) {
                $this.removeClass(activeClass);
            } else {
                $this.addClass(activeClass);
            }
        });
    })
})(jQuery);
