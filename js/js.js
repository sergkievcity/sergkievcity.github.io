$(function(){

	$('#toggle').on('click', function(){
		$('.mainmenu').slideToggle(300, function(){
			if($(this).css('display') === 'none'){
				$(this).removeAttr('style');
			}
		});

	});
	$('#toggle-2').on('click', function(){
		$('.mainmenu').slideToggle(300, function(){
			if($(this).css('display') === 'none'){
				$(this).removeAttr('style');
			}
		});

	});

});