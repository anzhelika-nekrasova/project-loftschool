$(function() {
    $(".header__down-btns").click(function() {
        $('body').animate({ scrollTop: '+=' + window.innerHeight }, 'slow');
        return false;
    });
})