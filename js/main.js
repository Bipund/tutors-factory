
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


// window.addEventListener('scroll', function () {
//     var stickyHeader = document.getElementById('stickyHeader');
//     var section = document.querySelector('.section');
//     var sectionTop = section.offsetTop;
//     var scrollTop = window.scrollY || window.pageYOffset;

//     if (scrollTop >= sectionTop) {
//         stickyHeader.classList.add('stuck');
//     } else {
//         stickyHeader.classList.remove('stuck');
//     }
// });


$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 3,
        navigation: true,
        pagination: true,
        nav: true,
        loop: true,
        margin: 10,
        navText: [`<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M29.7694 11.8897C28.9559 11.0761 27.6369 11.0761 26.8232 11.8897L16.6411 22.0819C15.0152 23.7094 15.0159 26.3465 16.6425 27.9729L26.8307 38.1612C27.6444 38.9748 28.9634 38.9748 29.7771 38.1612C30.5907 37.3477 30.5907 36.0285 29.7771 35.215L21.0569 26.4948C20.2433 25.6812 20.2433 24.3623 21.0569 23.5485L29.7694 14.836C30.5832 14.0224 30.5832 12.7033 29.7694 11.8897Z" fill="#393939"/>
        </svg>
        `, `<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d = "M20.2306 38.1103C21.0441 38.9239 22.3631 38.9239 23.1768 38.1103L33.3589 27.9181C34.9848 26.2906 34.9841 23.6535 33.3575 22.0271L23.1693 11.8388C22.3556 11.0252 21.0366 11.0252 20.2229 11.8388C19.4093 12.6523 19.4093 13.9715 20.2229 14.785L28.9431 23.5052C29.7567 24.3188 29.7567 25.6377 28.9431 26.4515L20.2306 35.164C19.4168 35.9776 19.4168 37.2967 20.2306 38.1103Z" fill = "#393939" />
        </svg >
            `],
        // navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
        // navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
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
    }).on('changed.owl.carousel', syncPosition);
});


// Function to animate the counting from 0 to 1000
function countTo25000() {
    var counterElement = document.getElementById('counter');
    var duration = 3000; // Duration in milliseconds
    var start = 0;
    var end = 25000;
    var range = end - start;
    var increment = Math.ceil(range / (duration / 100)); // Increment per 100 milliseconds

    var timer = setInterval(function () {
        start += increment;
        if (start >= end) {
            clearInterval(timer);
            start = end;
        }
        counterElement.textContent = start + "+";
    }, 100);
}

// Function to animate the counting from 0 to 1000
function countTo10000() {
    var counterElement = document.getElementById('counter2');
    var duration = 4000; // Duration in milliseconds
    var start = 0;
    var end = 10000;
    var range = end - start;
    var increment = Math.ceil(range / (duration / 100)); // Increment per 100 milliseconds

    var timer = setInterval(function () {
        start += increment;
        if (start >= end) {
            clearInterval(timer);
            start = end;
        }
        counterElement.textContent = start + "+";
    }, 100);
}

// Function to animate the counting from 0 to 1000
function countTo100() {
    var counterElement = document.getElementById('counter3');
    var duration = 2000; // Duration in milliseconds
    var start = 0;
    var end = 10;
    var range = end - start;
    var increment = Math.ceil(range / (duration / 100)); // Increment per 100 milliseconds

    var timer = setInterval(function () {
        start += increment;
        if (start >= end) {
            clearInterval(timer);
            start = end;
        }
        counterElement.textContent = start + "+";
    }, 100);
}
window.onload = function () {

    countTo25000();
    countTo10000();
    countTo100();
};

// // Start counting when the window gets focus
// window.addEventListener('focus', countTo25000);
// window.addEventListener('focus', countTo10000);
// window.addEventListener('focus', countTo100);


window.addEventListener('DOMContentLoaded', function () {
    if (window.innerWidth > 768) { // Check if screen width is greater than 768 pixels (adjust as needed for your desktop breakpoint)
        var elements = document.querySelectorAll('[data-appear-animation="fade-in-slide-up"]');

        var observer = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    var element = entry.target;
                    var delay = parseInt(element.getAttribute('data-appear-animation-delay')) || 0;
                    var duration = parseInt(element.getAttribute('data-appear-animation-duration')) || 1000;

                    setTimeout(function () {
                        element.style.opacity = '1';
                        element.style.transform = 'translateY(0)';
                    }, delay);

                    element.style.transitionDuration = duration + 'ms';
                    observer.unobserve(element); // Stop observing the element once animation is triggered
                }
            });
        });

        elements.forEach(function (element) {
            observer.observe(element);
        });
    }
});


// Function to load YouTube video into player
function loadVideo(url) {
    // Extract video ID from YouTube URL
    var videoId = url.split('/').pop();

    // Load video into player
    document.getElementById('player').innerHTML = '<iframe width="640" height="360" src="https://www.youtube.com/embed/' + videoId + '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
}

$('#exampleModalCenter').on('hide.bs.modal', function (event) {
    // Pause the video when modal is closed
    console.log("inside modal close")
    document.getElementById('player').innerHTML = '';


});
