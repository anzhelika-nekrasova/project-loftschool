{  
    const DOC = document;
    const WIN = window;

    var parallax = (function () {
        var bg = DOC.querySelector('.header__bg');
        var user = DOC.querySelector('.header__user');
        var title = DOC.querySelector('.header__title');

        return {
            move: function(block, windowScroll, strafeAmount) {
                var strafe = windowScroll / -strafeAmount + '%';
                var transformString = 'translate3d(0,' + strafe + ', 0)';

                var style = block.style;

                //style.top = strafe;

                style.transform = transformString;
                style.webkitTransform = transformString;
            },

            init: function(wScroll) {
                this.move(bg, wScroll, 45);
                this.move(title, wScroll, 20);
                this.move(user, wScroll, 7);
            }
        }
    }());

    WIN.onscroll = function () {
        var wScroll = WIN.pageYOffset;
        parallax.init(wScroll);
    }
}