$(function() {
    $(".header__down-btns").click(function (e) {
        var heightScroll = window.innerHeight - 30;
        $('body,html').animate({ scrollTop: heightScroll }, 1500);
        e.preventDefault();
    });

    $(".up-button").click(function (e) {
        $('body,html').animate({ scrollTop: 0 }, 1500);
        e.preventDefault();
    });
})