{  
 alert("ffgg");

    var parallax = (function () {
        var bg = document.querySelector('.header__bg');
        var user = document.querySelector('.header__user');
        var title = document.querySelector('.header__title');

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

    window.onscroll = function () {
        var wScroll = window.pageYOffset;
        parallax.init(wScroll);
    }
}