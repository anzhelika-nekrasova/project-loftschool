{
    const DOC = document;
    const WIN = window;
    const flipper = DOC.getElementById('flipper');
    const buttonLogin = DOC.getElementById('flipper-rotate');

    flipper && DOC.addEventListener('DOMContentLoaded', () => {
        DOC.getElementById('flipper-rotate')
            .addEventListener('click', () => { 
                flipper.classList.toggle('rotate');
                buttonLogin.classList.toggle('display-none');
            });
        
        DOC.getElementsByTagName('body')[0]
            .addEventListener('click', (e) => {
                if(!e.target.closest('#flipper') && !e.target.closest('#flipper-rotate')) {
                    if(flipper.classList.contains('rotate')){ 
                        flipper.classList.remove('rotate');
                        buttonLogin.classList.remove('display-none');
                    }
                }
            });
        
        DOC.getElementById('backward')
            .addEventListener('click', () => { 
                flipper.classList.remove('rotate');
                buttonLogin.classList.remove('display-none');
            });
    });
};
