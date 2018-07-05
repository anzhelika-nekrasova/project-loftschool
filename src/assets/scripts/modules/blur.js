{
    const DOC = document;
    const WIN = window;

    var blur = (function () {
    
        var wrapper = DOC.querySelector('.blur-form'),
            form = DOC.querySelector('.blur'),
            feedback = DOC.querySelector('.feedback__form');

            return {
                set: function () {
                    var posLeft = -wrapper.offsetLeft,
                        posTop = -feedback.offsetTop + DOC.querySelector('.blur-bg img').offsetTop,
                        blurCSS = form.style;
                        //console.log(posTop);

                    blurCSS.backgroundPosition = posLeft + 'px' + ' ' + posTop + 'px';
                }
            }
    }());

    blur.set();

    WIN.onresize = function () {
        blur.set();
    }
}