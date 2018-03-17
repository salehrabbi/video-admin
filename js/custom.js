$(function () {
    $("[data-toggle=popover]")
        .popover({
            html: true
        })
})
$("#play-list-class").click(function () {
    $(".play-list").toggleClass("active");
});

$(function() {

	$('#diagram-id-1').circleDiagram();
	$('#diagram-id-2').circleDiagram();
	$('#diagram-id-3').circleDiagram();
});
