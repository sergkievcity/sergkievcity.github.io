
$(document).ready(function(){

	(function () {
    var alternate = true;
    $('a.hov').click(function (e) {
        if (alternate) {
           
			$('#myhide').show(200);
		$('body,html').animate({scrollTop:8000},2000);
		$('#more').text('Less');
		$('div.round3').addClass('round4');
		
        } else {
			$('#myhide').hide(400);
			 $('#more').text('More');
			$('div.round3') .removeClass('round4');
        }
        alternate = !alternate;
		e.preventDefault();
    });
})();

});//End ready function