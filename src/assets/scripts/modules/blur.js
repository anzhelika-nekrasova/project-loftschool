{
    const DOC = document;
    const WIN = window;

    var blur = (function () {
    
        var wrapper = DOC.querySelector('.blur-form'),
            form = DOC.querySelector('.blur'),
            feedback = DOC.querySelector('.feedback__form');

            return {
                set: function () {
                    var posLeft = -wrapper.offsetLeft - 10,
                        posTop = -feedback.offsetTop,
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