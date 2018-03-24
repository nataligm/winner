$(document).ready(function () {
    var menuVisible = false;

    $('.burger').click(function () {
        var menu = $('.menu');
        if (menuVisible) {
            menu.css('visibility', 'hidden');
            menuVisible = false;
        } else {
            menu.css('visibility', 'visible');
            menuVisible = true;
        }
    })
});

