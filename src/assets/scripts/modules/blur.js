{
    const DOC = document;
    const WIN = window;

    var blur = (function () {
    
        var wrapper = DOC.querySelector('.blur-form'),
            form = DOC.querySelector('.blur'),
            feedback = DOC.querySelector('.feedback__form');

            return {
                set: function () {
                    var imgWidth = DOC.querySelector('.blur-bg').offsetWidth,
                        posLeft = -wrapper.offsetLeft - 10,
                        posTop = -feedback.offsetTop + 68,
                        blurCSS = form.style;
                        console.log(posTop);

                    //blurCSS.backgroundSize = imgWidth + 'px' + ' ' + 'auto';
                    blurCSS.backgroundPosition = posLeft + 'px' + ' ' + posTop + 'px';
                }
            }
    }());

    blur.set();

    WIN.onresize = function () {
        blur.set();
    }
}