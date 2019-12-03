

jQuery(document).ready(function($) {
	// Code using $ as usual goes here.
	$.ajax({
		url: "data.json",
		context: document.body
	}).done(function(e) {
		console.log(e)
		$( this ).addClass( "done" );
	}).fail(function(e){
		alert(e)
	});
});
