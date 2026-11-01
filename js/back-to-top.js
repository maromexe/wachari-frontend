define(["jquery"], function ($) {
    var $button = $(".back-to-top");

    // Show the button only after the page is scrolled down 300px
    $(window).on("scroll", function () {
        $button.toggleClass("back-to-top--visible", $(window).scrollTop() > 300);
    });

    // Smooth scroll instead of an instant jump to the anchor
    $button.on("click", function (event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, 400);
    });
});
