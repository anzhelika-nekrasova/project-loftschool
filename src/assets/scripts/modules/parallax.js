
var parallax = (function () {
    var bg = DOC.querySelector('header');
    var user = DOC.querySelector('header__user');
    var title = DOC.querySelector('header__title');

    return {
        move: function(block, windowScroll, strafeAmount) {
            var strafe = windowScroll / -strafeAmount + '%';

            var style = block.style;

            style.top = strafe
        },

        init: function(wScroll) {
            this.move(bg, wScroll, 45);
        }
    }
}());

WIN.onscroll = function () {
    var wScroll = window.pageYOffset;
    parallax.init(wScroll);
}