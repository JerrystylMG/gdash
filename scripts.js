window.addEventListener("DOMContentLoaded", function () {
    ImageLazy();
	//refresh_handler();
    search_complete();
    sliderCategotyMenuSlick1();
    sliderCategotyMenuSlick2();
    sliderSimilarDashSlick();
	sliderGameHotSlick();
    sliderGameTopRateSlick();
    sliderGameRecommendedSlick();
	sliderGameTopPicksSlick();
    $(".carousel-button").click(function (event) {
        event.preventDefault();
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
        var tab = $(this).attr("data-tab");
        var btn = $(this).attr("data-button");

        $(".tab-content").not(tab).css("display", "none");
        $(".button-option").not(btn).css("display", "none");
        $("#" + tab).fadeIn();
        $("#" + tab).addClass("");
        $("#" + btn).fadeIn();

    });
    $('input#search').on('keyup', function () {
        let empty = false;
        $('input#search').each(function () {
            empty = $(this).val().length == 0;
        });

        if (empty) {
            $('#btn-search').attr('disabled', 'disabled');
        } else {
            $('#btn-search').attr('disabled', false);
            $("#search").on('keyup', function (e) {
                if (e.keyCode === 13) {
                    window.location.replace("/search/" + $("#search").val());
                }
                $("#btn-search").on('click', function () {
                    window.location.replace("/search/" + $("#search").val());
                });
            });
        }

    });
	
    var btn = $('.btn-scroll-top');
    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });
    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, '300');
    });
    $('.comment-btn').click(function() {
    $('html,body').animate({
        scrollTop: $("#comment-area").offset().top},
        'slow'); 
});
     // document.getElementById('image_ghost').addEventListener("animationend", function() {
		// $(this).remove(); 
		// setTimeout(function() {
			// $(this).remove(); 
		// }, 1000);
    // }, false );
    
    sliderFeatureSlick();
    $(window).on('load', function () {
        sliderNewSlick();
    });
    $('#slick-prev').click(function () {
        $("#GamesListRow").slick('slickPrev');
    }) 
    $('.arrow-left').click(function () {
        $("#featuredGamesContainer").slick('slickPrev');
    })
    $('.arrow-right').click(function () {
        $("#featuredGamesContainer").slick('slickNext');
    })
    $('.similar-arrow-left').click(function () {
        $("#game_similar_dash").slick('slickPrev');
    })
    $('.similar-arrow-right').click(function () {
        $("#game_similar_dash").slick('slickNext');
    })
hide_show_content();
//onload_iframe();
});

function refresh_handler() { 
    var frames = document.querySelectorAll("*[data-src]");
    for (var i = 0; i < frames.length; i++) {
        var boundingClientRect = frames[i].getBoundingClientRect();
        if (frames[i].hasAttribute("data-src") && boundingClientRect.top < window.innerHeight) {
           // frames[i].setAttribute("style", frames[i].getAttribute("data-src"));
            frames[i].style.backgroundImage = "url("+frames[i].getAttribute("data-src") +")";
            frames[i].removeAttribute("data-src");
        }
    }
};

function onload_iframe(){
	
	let link_iframe = '';
    let html = '';
    let height = '';
    let width = '';
	width = $("#game_iframe").attr('data-width');
        height = $("#game_iframe").attr('data-height');
	link_iframe = $("#game_iframe").attr("data-iframe");
	html += '<iframe class="game-iframe" loading="lazy" id="game-area" src="' + link_iframe + '" width="' + width + '" height="' + height + '" scrolling="none" frameborder="0" allowfullscreen> </iframe>';
	$('#game_iframe').html(html);

}
window.addEventListener('scroll', refresh_handler);
window.addEventListener('load', refresh_handler);
//window.addEventListener('load', onload_iframe);


function hide_show_content() {
    let height_content = $('.content-inner .game-description').outerHeight();

    if (height_content <= 769) {
        $('.show_content').css({'display': 'none'})
        $('.game-content-page').css({'padding-bottom': '20px'})
        $('.content-inner').attr('style', 'height:' + height_content + 'px');
    } else {
        $('.content-inner').attr('style', 'height:770px;overflow:hidden');
        $('.show_content').css({'display': 'flex'});
        $('.game-content-page').css({'padding-bottom': '60px'})
        $('.game-description').css({'padding-bottom': '20px'})
    }

    $('.ShowMore_button').click(function () {
        if ($('.ShowMore_button').hasClass('more')) {
            $('.ShowMore_button').removeClass('more')
            $('.content-inner').animate({
                'height': height_content + 'px',
                'overflow': 'hidden',
                'animation': 'height 1000ms ease 0ms'
            }, {
                easing: 'swing',
                complete: function () {
                    $('.content-inner').attr('style', 'height:auto');
                    $('.ShowMore_button').html('Show less  <span class="svg-icon" aria-hidden="true">\n' +
                        '                        <svg class="svg-icon__link"><use xlink:href="#icon-keyboard_arrow_up"></use></svg>\n' +
                        '                    </span>');
                    $('.ShowMore_button').addClass('less')

                }
            })
        } else {
            $('.ShowMore_button').removeClass('less')
            $('.content-inner').animate({
                'height': '770px',
                'overflow': 'hidden',
                'animation': 'height 1000ms ease 0ms'
            }, {
                easing: 'swing',
                complete: function () {
                    $('.content-inner').attr('style', 'height:770px;overflow:hidden');
                    $('.ShowMore_button').html('Show more  <span class="svg-icon" aria-hidden="true">\n' +
                        '                        <svg class="svg-icon__link"><use xlink:href="#icon-keyboard_arrow_down"></use></svg>\n' +
                        '                    </span>');
                    $('.ShowMore_button').addClass('more')
                }
            })

        }

    })


}

function sliderFeatureSlick() {
    $('#featuredGamesContainer').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 11,
        arrows: false,
        slidesToScroll: 4,
        centerMode: true,
        variableWidth: true,
		autoplay: true,
		autoplaySpeed: 3000,
//        appendArrows: $('#button-group-arrows-control'),
//        prevArrow: "<button aria-label='Go to previous slide' class='arrow-left right-icon'></button>",
//        nextArrow: "<button aria-label='Go to next slide' class='arrow-right left-icon'></button>",

        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 10,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 1196,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 1078,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 916,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 778,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }), $('#featuredGamesContainer').on('setPosition', function (event, slick, currentSlide) {
        ImageLazy();
    }), $('#featuredGamesContainer').on('init', function (event, slick) {
        ImageLazy();
    }), $('#featuredGamesContainer').on('afterChange', function (event, slick) {
        ImageLazy();
    });
}

function sliderGameRecommendedSlick() {
    $('#game_recommended').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 9,
        slidesToScroll: 4,
        centerMode: false,
        arrows: true,
        // appendArrows: $('#btn-arrow'),
        // prevArrow: "<button aria-label='Go to previous slide' class='arrow-left left-icon'></button>",
        // nextArrow: "<button aria-label='Go to next slide' class='arrow-right right-icon'></button>",
        prevArrow: $('#game-recommended-button-group-arrows-control .similar-arrow-left'),
        nextArrow: $('#game-recommended-button-group-arrows-control .similar-arrow-right'),
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    centerMode: true,
                    arrows: true,
                    centerPadding: '20px',
                    slidesToShow: 6,
                    slidesToScroll: 2,
                    // appendArrows: $('#btn-arrow'),
                    // prevArrow: "<button aria-label='Go to previous slide' class='arrow-left left-icon'></button>",
                    // nextArrow: "<button aria-label='Go to next slide' class='arrow-right right-icon'></button>"
                }
            },
            {
                breakpoint: 1196,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '20px',
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    // appendArrows: $('#btn-arrow'),
                    // prevArrow: "<button aria-label='Go to previous slide' class='arrow-left left-icon'></button>",
                    // nextArrow: "<button aria-label='Go to next slide' class='arrow-right right-icon'></button>"
                }
            },
            {
                breakpoint: 1078,
                settings: {
                    centerMode: true,
                    arrows: true,
                    centerPadding: '20px',
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    // appendArrows: $('#btn-arrow'),
                    // prevArrow: "<button aria-label='Go to previous slide' class='arrow-left left-icon'></button>",
                    // nextArrow: "<button aria-label='Go to next slide' class='arrow-right right-icon'></button>"
                }
            },
            {
                breakpoint: 916,
                settings: {
                    centerMode: false,
                    arrows: true,
                    centerPadding: '10px',
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    // appendArrows: $('#btn-arrow'),
                    // prevArrow: "<button aria-label='Go to previous slide' class='arrow-left left-icon'></button>",
                    // nextArrow: "<button aria-label='Go to next slide' class='arrow-right right-icon'></button>"
                }
            },
            {
                breakpoint: 778,
                settings: {
                    arrows: true,
                    centerMode: false,
                    centerPadding: '10px',
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    // appendArrows: $('#btn-arrow'),
                    // prevArrow: "<button aria-label='Go to previous slide' class='arrow-left left-icon'></button>",
                    // nextArrow: "<button aria-label='Go to next slide' class='arrow-right right-icon'></button>"
                }
            }, {
                breakpoint: 480,
                settings: {
                    arrows: true,
                    centerMode: false,
                    centerPadding: '10px',
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    // appendArrows: $('#btn-arrow'),
                    // prevArrow: "<button aria-label='Go to previous slide' class='arrow-left left-icon'></button>",
                    // nextArrow: "<button aria-label='Go to next slide' class='arrow-right right-icon'></button>"
                }
            }
        ]
    })
}
function sliderGameTopRateSlick() {
    $('#game_top_rate').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 9,
        slidesToScroll: 4,
        centerMode: false,
        arrows: true,
        // appendArrows: $('#btn-arrow'),
        // prevArrow: "<button aria-label='Go to previous slide' class='arrow-left left-icon'></button>",
        // nextArrow: "<button aria-label='Go to next slide' class='arrow-right right-icon'></button>",
        prevArrow: $('#game-top-rate-button-group-arrows-control .similar-arrow-left'),
        nextArrow: $('#game-top-rate-button-group-arrows-control .similar-arrow-right'),
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    centerMode: true,
                    arrows: true,
                    centerPadding: '20px',
                    slidesToShow: 6,
                    slidesToScroll: 2,
                    // appendArrows: $('#btn-arrow'),
                    // prevArrow: "<button aria-label='Go to previous slide' class='arrow-left left-icon'></button>",
                    // nextArrow: "<button aria-label='Go to next slide' class='arrow-right right-icon'></button>"
                }
            },
            {
                breakpoint: 1196,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '20px',
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    // appendArrows: $('#btn-arrow'),
                    // prevArrow: "<button aria-label='Go to previous slide' class='arrow-left left-icon'></button>",
                    // nextArrow: "<button aria-label='Go to next slide' class='arrow-right right-icon'></button>"
                }
            },
            {
                breakpoint: 1078,
                settings: {
                    centerMode: true,
                    arrows: true,
                    centerPadding: '20px',
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    // appendArrows: $('#btn-arrow'),
                    // prevArrow: "<button aria-label='Go to previous slide' class='arrow-left left-icon'></button>",
                    // nextArrow: "<button aria-label='Go to next slide' class='arrow-right right-icon'></button>"
                }
            },
            {
                breakpoint: 916,
                settings: {
                    centerMode: false,
                    arrows: true,
                    centerPadding: '10px',
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    // appendArrows: $('#btn-arrow'),
                    // prevArrow: "<button aria-label='Go to previous slide' class='arrow-left left-icon'></button>",
                    // nextArrow: "<button aria-label='Go to next slide' class='arrow-right right-icon'></button>"
                }
            },
            {
                breakpoint: 778,
                settings: {
                    arrows: true,
                    centerMode: false,
                    centerPadding: '10px',
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    // appendArrows: $('#btn-arrow'),
                    // prevArrow: "<button aria-label='Go to previous slide' class='arrow-left left-icon'></button>",
                    // nextArrow: "<button aria-label='Go to next slide' class='arrow-right right-icon'></button>"
                }
            }, {
                breakpoint: 480,
                settings: {
                    arrows: true,
                    centerMode: false,
                    centerPadding: '10px',
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    // appendArrows: $('#btn-arrow'),
                    // prevArrow: "<button aria-label='Go to previous slide' class='arrow-left left-icon'></button>",
                    // nextArrow: "<button aria-label='Go to next slide' class='arrow-right right-icon'></button>"
                }
            }
        ]
    })
}
function sliderGameTopPicksSlick() {
    $('#game_top_pick').slick({
        dots: false,
        infinite: true,
		loop: true,
        speed: 300,
        slidesToShow: 7,
        slidesToScroll: 4,
        centerMode: false,
        arrows: true,
		autoplay: true,
		autoplaySpeed: 3000,
        variableWidth: true, 
        prevArrow: $('#top-picks-games-button-group-arrows-control .similar-arrow-left'),
        nextArrow: $('#top-picks-games-button-group-arrows-control .similar-arrow-right'), 
    })
}
function sliderGameHotSlick() {
    $('#game_hot').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 9,
        slidesToScroll: 4,
        centerMode: false,
        arrows: true,
		autoplay: true,
		autoplaySpeed: 3000,
        variableWidth: true,
        // appendArrows: $('#btn-arrow'),
        // prevArrow: "<button aria-label='Go to previous slide' class='arrow-left left-icon'></button>",
        // nextArrow: "<button aria-label='Go to next slide' class='arrow-right right-icon'></button>",
        prevArrow: $('#hot-games-button-group-arrows-control .similar-arrow-left'),
        nextArrow: $('#hot-games-button-group-arrows-control .similar-arrow-right'),
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    centerMode: true,
                    arrows: true,
                    centerPadding: '20px',
                    slidesToShow: 6,
                    slidesToScroll: 2,
                    // appendArrows: $('#btn-arrow'),
                    // prevArrow: "<button aria-label='Go to previous slide' class='arrow-left left-icon'></button>",
                    // nextArrow: "<button aria-label='Go to next slide' class='arrow-right right-icon'></button>"
                }
            },
            {
                breakpoint: 1196,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '20px',
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    // appendArrows: $('#btn-arrow'),
                    // prevArrow: "<button aria-label='Go to previous slide' class='arrow-left left-icon'></button>",
                    // nextArrow: "<button aria-label='Go to next slide' class='arrow-right right-icon'></button>"
                }
            },
            {
                breakpoint: 1078,
                settings: {
                    centerMode: true,
                    arrows: true,
                    centerPadding: '20px',
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    // appendArrows: $('#btn-arrow'),
                    // prevArrow: "<button aria-label='Go to previous slide' class='arrow-left left-icon'></button>",
                    // nextArrow: "<button aria-label='Go to next slide' class='arrow-right right-icon'></button>"
                }
            },
            {
                breakpoint: 916,
                settings: {
                    centerMode: false,
                    arrows: true,
                    centerPadding: '10px',
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    // appendArrows: $('#btn-arrow'),
                    // prevArrow: "<button aria-label='Go to previous slide' class='arrow-left left-icon'></button>",
                    // nextArrow: "<button aria-label='Go to next slide' class='arrow-right right-icon'></button>"
                }
            },
            {
                breakpoint: 778,
                settings: {
                    arrows: true,
                    centerMode: false,
                    centerPadding: '10px',
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    // appendArrows: $('#btn-arrow'),
                    // prevArrow: "<button aria-label='Go to previous slide' class='arrow-left left-icon'></button>",
                    // nextArrow: "<button aria-label='Go to next slide' class='arrow-right right-icon'></button>"
                }
            }, {
                breakpoint: 480,
                settings: {
                    arrows: true,
                    centerMode: false,
                    centerPadding: '10px',
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    // appendArrows: $('#btn-arrow'),
                    // prevArrow: "<button aria-label='Go to previous slide' class='arrow-left left-icon'></button>",
                    // nextArrow: "<button aria-label='Go to next slide' class='arrow-right right-icon'></button>"
                }
            }
        ]
    })
}

function sliderNewSlick() {
    $('#GamesListRow').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 9,
        slidesToScroll: 4,
        centerMode: false,
        // appendArrows: $('#btn-arrow'),
        // prevArrow: "<button aria-label='Go to previous slide' class='arrow-left left-icon'></button>",
        // nextArrow: "<button aria-label='Go to next slide' class='arrow-right right-icon'></button>",
        prevArrow: $('.arrow-left'),
        nextArrow: $('.arrow-right'),
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '20px',
                    slidesToShow: 6,
                    slidesToScroll: 2,
                    // appendArrows: $('#btn-arrow'),
                    // prevArrow: "<button aria-label='Go to previous slide' class='arrow-left left-icon'></button>",
                    // nextArrow: "<button aria-label='Go to next slide' class='arrow-right right-icon'></button>"
                }
            },
            {
                breakpoint: 1196,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '20px',
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    // appendArrows: $('#btn-arrow'),
                    // prevArrow: "<button aria-label='Go to previous slide' class='arrow-left left-icon'></button>",
                    // nextArrow: "<button aria-label='Go to next slide' class='arrow-right right-icon'></button>"
                }
            },
            {
                breakpoint: 1078,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '20px',
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    // appendArrows: $('#btn-arrow'),
                    // prevArrow: "<button aria-label='Go to previous slide' class='arrow-left left-icon'></button>",
                    // nextArrow: "<button aria-label='Go to next slide' class='arrow-right right-icon'></button>"
                }
            },
            {
                breakpoint: 916,
                settings: {
                    arrows: false,
                    centerMode: false,
                    centerPadding: '10px',
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    // appendArrows: $('#btn-arrow'),
                    // prevArrow: "<button aria-label='Go to previous slide' class='arrow-left left-icon'></button>",
                    // nextArrow: "<button aria-label='Go to next slide' class='arrow-right right-icon'></button>"
                }
            },
            {
                breakpoint: 778,
                settings: {
                    arrows: false,
                    centerMode: false,
                    centerPadding: '10px',
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    // appendArrows: $('#btn-arrow'),
                    // prevArrow: "<button aria-label='Go to previous slide' class='arrow-left left-icon'></button>",
                    // nextArrow: "<button aria-label='Go to next slide' class='arrow-right right-icon'></button>"
                }
            }, {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: false,
                    centerPadding: '10px',
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    // appendArrows: $('#btn-arrow'),
                    // prevArrow: "<button aria-label='Go to previous slide' class='arrow-left left-icon'></button>",
                    // nextArrow: "<button aria-label='Go to next slide' class='arrow-right right-icon'></button>"
                }
            }
        ]
    })
}
function sliderSimilarDashSlick() {
    $('#game_similar_dash').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 9,
        slidesToScroll: 4,
        centerMode: false,
        arrows: true,
		autoplay: true,
		autoplaySpeed: 4000,
        // appendArrows: $('#btn-arrow'),
        // prevArrow: "<button aria-label='Go to previous slide' class='arrow-left left-icon'></button>",
        // nextArrow: "<button aria-label='Go to next slide' class='arrow-right right-icon'></button>",
        prevArrow: $('.similar-arrow-left'),
        nextArrow: $('.similar-arrow-right'),
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    centerMode: true,
                    arrows: true,
                    centerPadding: '20px',
                    slidesToShow: 6,
                    slidesToScroll: 4,
                    // appendArrows: $('#btn-arrow'),
                    // prevArrow: "<button aria-label='Go to previous slide' class='arrow-left left-icon'></button>",
                    // nextArrow: "<button aria-label='Go to next slide' class='arrow-right right-icon'></button>"
                }
            },
            {
                breakpoint: 1196,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '20px',
                    slidesToShow: 5,
                    slidesToScroll: 3,
                    // appendArrows: $('#btn-arrow'),
                    // prevArrow: "<button aria-label='Go to previous slide' class='arrow-left left-icon'></button>",
                    // nextArrow: "<button aria-label='Go to next slide' class='arrow-right right-icon'></button>"
                }
            },
            {
                breakpoint: 1078,
                settings: {
                    centerMode: true,
                    arrows: true,
                    centerPadding: '20px',
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    // appendArrows: $('#btn-arrow'),
                    // prevArrow: "<button aria-label='Go to previous slide' class='arrow-left left-icon'></button>",
                    // nextArrow: "<button aria-label='Go to next slide' class='arrow-right right-icon'></button>"
                }
            },
            {
                breakpoint: 916,
                settings: {
                    centerMode: false,
                    arrows: true,
                    centerPadding: '10px',
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    // appendArrows: $('#btn-arrow'),
                    // prevArrow: "<button aria-label='Go to previous slide' class='arrow-left left-icon'></button>",
                    // nextArrow: "<button aria-label='Go to next slide' class='arrow-right right-icon'></button>"
                }
            },
            {
                breakpoint: 778,
                settings: {
                    arrows: true,
                    centerMode: false,
                    centerPadding: '10px',
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    // appendArrows: $('#btn-arrow'),
                    // prevArrow: "<button aria-label='Go to previous slide' class='arrow-left left-icon'></button>",
                    // nextArrow: "<button aria-label='Go to next slide' class='arrow-right right-icon'></button>"
                }
            }, {
                breakpoint: 480,
                settings: {
                    arrows: true,
                    centerMode: false,
                    centerPadding: '10px',
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    // appendArrows: $('#btn-arrow'),
                    // prevArrow: "<button aria-label='Go to previous slide' class='arrow-left left-icon'></button>",
                    // nextArrow: "<button aria-label='Go to next slide' class='arrow-right right-icon'></button>"
                }
            }
        ]
    })
}

function ImageLazy() {
    $("img.lazy").show().lazyload({effect: "fadeIn", failure_limit: 10000});
}

function open_fullscreen() {
    let game = document.getElementById("iframe_area") || document.documentElement;
    if (!document.fullscreenElement && !document.mozFullScreenElement &&
            !document.webkitFullscreenElement && !document.msFullscreenElement) {

        if (game.requestFullscreen) {
            game.requestFullscreen();
        } else if (game.msRequestFullscreen) {
            game.msRequestFullscreen();
        } else if (game.mozRequestFullScreen) {
            game.mozRequestFullScreen();
        } else if (game.webkitRequestFullscreen) {
            game.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
    }
}
function sliderCategotyMenuSlick1() {
    $('.menu_header.row1').slick({
        dots: false,
        infinite: true,
        speed: 200,
        slidesToShow: 7,
        slidesToScroll: 7,
        centerMode: false,
		touchThreshold:100,
        variableWidth: true,  
		autoplay: false,
		autoplaySpeed: 2000,

        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 1196,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5
                }
            },
            {
                breakpoint: 1078,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 916,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 778,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    })
}
function sliderCategotyMenuSlick2() {
    $('.menu_header.row2').slick({
        dots: false,
        infinite: true,
        speed: 200,
        slidesToShow: 7,
        slidesToScroll: 7,
        centerMode: false,
        variableWidth: true, 

        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 1196,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5
                }
            },
            {
                breakpoint: 1078,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 916,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 778,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    })
}
function search_complete() {

    $("#search").on('keyup', function (e) {
        if ($("#search").val().length > 0) {
            $('.input-group-text').html('<i class="icon-Close"></i>');
            $('body').css('overflow', 'hidden');


            $('.icon-Close').click(function () {
                $("#search").val('');
                $("#SearchResults").html('');
                $("#SearchResults").hide();
                $('.input-group-text').html('<i class="no-icon"></i>');
                $('.NavbarSearchInputItem').removeClass('no-label');
                $('body').css('overflow', '');
            })

        } else {
            $('.input-group-text').html('<i class="no-icon"></i>');
        }

    })

    $("#search").keyup(delay(function (e) {
        var keyword = $("#search").val();
        if (keyword.length >= 1) {
            search_complete(keyword);
            $('.NavbarSearchInputItem').addClass('no-label');
        } else {
            $('.NavbarSearchInputItem').removeClass('no-label');
        }
    }, 700));
    function search_complete(s) {
        var metadataload = {};
        metadataload.keywords = s;
        jQuery.ajax({
            url: "game-results-search.ajax",
            data: metadataload,
            type: 'GET',
            success: function (data) {
                if (data) {
                    $("#SearchResults").show();
                    $("#SearchResults").html(data);
                    $('#arrow_back').click(function () {
                        $("#search").val('');
                        $("#SearchResults").html('');
                        $("#SearchResults").hide();
                        $('.input-group-text').html('<i class="no-icon"></i>');
                        $('.NavbarSearchInputItem').removeClass('no-label');
                        $('body').css('overflow', '');
                    })


                } else {
                    //showNoSearchResults()
                }
            }
        });
        if ($("#search").val != '') {
            $("#search").on('keyup', function (e) {
                if (e.keyCode === 13) {
                    window.location.replace("/search/" + $("#search").val());
                }
            });
        }

    }


}

function delay(callback, ms) {
    var timer = 0;
    return function () {
        var context = this, args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
            callback.apply(context, args);
        }, ms || 0);
    };
}