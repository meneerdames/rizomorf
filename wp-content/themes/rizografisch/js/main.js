jQuery( document ).ready(function($) {
	console.log( "ready!" );

	$('#home-menu li a').hover( function(){

		var t = $(this).data('thumb');

		$(this).css('background-image','url('+ t +')');
	},
	function(){
		$(this).css('background-image','none');
	});
});
