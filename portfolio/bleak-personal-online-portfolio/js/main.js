$(function() {

    'use strict';

    $('.fakeLoader').fakeLoader({


        zIndex: "999",

        spinner: "spinner3",

        bgColor: "#212121" 

    });
       

    $("a").on("click", function(event) {

        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $("html, body").animate({

                scrollTop: $(hash).offset().top - 50

            }, 850);

        }

    });

    $('.navbar-nav a').on('click', function() {
        $('.navbar-collapse').collapse('hide');
    });

    $('.owl-carousel').owlCarousel({
        items: 1,
        margin: 10
    });

    $('.collapse-show').collapse();

    $('.filtr-container').imagesLoaded( function() {
        var filterizr = $('.filtr-container').filterizr();
    });

    $('.portfolio-filter-menu li').on('click', function() {
        $('.portfolio-filter-menu li').removeClass('active');
        $(this).addClass('active');
    });

    $('.portfolio').each(function() {
        $(this).magnificPopup({
            delegate: '.portfolio-popup',
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    });

    $(window).on("scroll", function() {

        var vScroll = $(this).scrollTop();

        if( vScroll > 100) {
            $(".navbar").addClass("fix");
        }
        else {
            $(".navbar").removeClass("fix");
        }

    });


});