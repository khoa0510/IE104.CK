// JavaScript Document
$(document).ready(function(e) {
    $('#eye').click(function(e) {
		$(this).toggleClass('open'); 
        $(this).children('i').toggleClass('fa-eye-slash fa-eye');
		if($(this).hasClass('open')){
            $(this).prev().attr('type','text');
		}
		else{
			$(this).prev().attr('type','password');
		}
    });
	
});
$(document).ready(function(e) {
    $('#email').focus();
});
