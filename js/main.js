
// $(document).ready(function () {
//     $("#news-slider").owlCarousel({
//         items: 3,
//         itemsDesktop: [1199, 3],
//         itemsDesktopSmall: [980, 2],
//         itemsMobile: [600, 1],
//         navigation: true,
//         navigationText: ["", ""],
//         pagination: true,
//         autoPlay: true
//     });
// });

$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 3,
        navigation: true,
        pagination: true,
        nav: true,
        navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    });
});