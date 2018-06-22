{
    const DOC = document;
    const WIN = window;

   // WIN.navigator.userAgent
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