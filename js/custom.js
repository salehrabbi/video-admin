$(function () {
    $("[data-toggle=popover]")
        .popover({
            html: true
        })
})
$("#play-list-class").click(function(){
    $(".play-list").toggleClass("active");
});