$(document).ready(function() {

    // technology owl carousel
    $('.demo .owl-carousel').owlCarousel({
        nav: true,
        dots: false,
        margin: 10,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 1
            }
        }
    });

});