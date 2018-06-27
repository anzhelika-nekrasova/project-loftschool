$(function() {
    const WIN = window;
    const DOC = document;
    const $articles = $('.blog__article'); // статьи справа
    const articles = $articles.toArray(); // []
    const $articlesList = $('#blog__article-list'); // ul со списком статей слева
    const $articleTitles = $('#blog__article-titles'); // aside
    let activeArticleId = null;

    function getCoords(elem) {
        const box = elem.getBoundingClientRect(); // {top: 123, left: 123}

        return {
            top: box.top + WIN.pageYOffset,
            left: box.left + WIN.pageXOffset
        };
    }

    function setArticleActive() {
        function setActive(artcl) {
            if (artcl.dataset.idtitle !== activeArticleId) {
                $('.blog__article-title').removeClass('active');
                $(`#${artcl.dataset.idtitle}`).addClass('active');
                activeArticleId = artcl.dataset.idtitle;
            }
        }

        if (WIN.pageYOffset < getCoords(articles[0]).top) {
            setActive(articles[0]);
        }
        else if (WIN.pageYOffset + WIN.innerHeight === DOC.body.offsetHeight) {
            setActive(articles[articles.length - 1]);
        }
        else {
            articles.forEach((article) => {
                const elemTop = getCoords(article).top;
                if (WIN.pageYOffset > elemTop - 200) {
                    setActive(article);
                }
            });
        }
    }

    function setArticleChords() {
        // в elemChords получаем объект с координатами aside
        const elemChords = getCoords($articleTitles[0]);

        if (WIN.pageYOffset >= elemChords.top - 30) {
            $articlesList.addClass('blog__article-list--fixed');
        }
        else {
            $articlesList.removeClass('blog__article-list--fixed');
        }
    }

    if ($articlesList.length && $articles.length) {
        $articlesList.css({
            'width': $articlesList.outerWidth()
        });

        $(WIN).scroll(() => {
            setArticleChords();
            setArticleActive();
        });

        setArticleChords();
        setArticleActive();

        $(WIN).resize(() => {
            $articlesList.css({
                'width': $articlesList.outerWidth()
            });
        });

    }

    //плавный переход по ссылке
    /*
    $('.blog__article-list').on('click','a', function (event) {
        event.preventDefault();
        var id  = $(this).attr('href');
        var topScroll = $(id).offset().top;
        $('body,html').animate({scrollTop: topScroll}, 1500);
    }); */

    //Левое меню статей на мобилках и планшетах. Свайп
    let isOn = false;
    const slidebar = $('.blog-content__left');
    const contentArticle = $('.blog-content__right');

    const hide = () => {
        slidebar.removeClass("on");
        contentArticle.removeClass("on");
        isOn = false;
    };

    $('body').on('click', function(e) {

        if ($(e.target).closest('#blog__article-adaptive-btn').length) {
            if (!isOn) {
                slidebar.addClass("on");
                contentArticle.addClass("on");
                isOn = true;
            }
            else {
                if (isOn) {
                    hide();
                }
            }
        }
        else {
            if (isOn) {
                hide();
            }
        }

    });






});