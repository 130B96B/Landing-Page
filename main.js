$(function () {
    $(".leftside").on("inview", function () {
        $(this).addClass("is-inview");
    });
});
$(function () {
    $(".rightside").on("inview", function () {
        $(this).addClass("is-inview");
    });
});
$(function () {
    $(".left-remark").on("inview", function () {
        $(this).addClass("is-inview");
    });
});
$(function () {
    $(".right-remark").on("inview", function () {
        $(this).addClass("is-inview");
    });
});