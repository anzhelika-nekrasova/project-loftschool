{
    const DOC = document;
    const WIN = window;

    if( navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)
        ){
            DOC.getElementsByClassName('parallax-front').classList.add('front-page-bg__phone');
            DOC.getElementsByClassName('parallax-front').classList.add('parallax-front__disable');
        }
    else {

        const parallaxFrontContainer = DOC.getElementById('parallax-front');
        const layers = parallaxFrontContainer.children;

        const moveLayers = e => {
            const initialX = WIN.innerWidth / 2 - e.pageX;
            const initialY = WIN.innerHeight / 2 - e.pageY;

            Array.from(layers).forEach((layer, i) => {
                const divider = i / 100;
                const posX = initialX * divider;
                const posY = initialY * divider;

                layer.style.transform = `translate(${posX}px, ${posY}px)`;
            });
        };

        WIN.addEventListener('mousemove', moveLayers);
        }
}