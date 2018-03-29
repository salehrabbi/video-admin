$(function () {
    $("[data-toggle=popover]")
        .popover({
            html: true
        })
})
$("#play-list-class").click(function () {
    $(".play-list").toggleClass("active");
});

$(".write-comment").click(function () {
    $(this).toggleClass("active");
    $(".your-comment").toggleClass("active");
});

$(".your-comment .cencel").click(function () {
    $(".write-comment").removeClass("active");
    $(".your-comment").removeClass("active");
});

$(function() {

	$('#diagram-id-1').circleDiagram();
	$('#diagram-id-2').circleDiagram();
	$('#diagram-id-3').circleDiagram();
});


$('.owl-carousel-1').owlCarousel({
    nav: true,
    dots: true,
    autoplay: true,
    autoplayHoverPause: true,
    rewind: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    loop: true,
    margin: 10,
    responsiveClass: true,

    responsive: {
        0: {
            items: 2,
            nav: false,
            loop: false
        },
        480: {
            items: 3,
            nav: false,
            loop: false
        },
        576: {
            items: 3,
        }
    }
})