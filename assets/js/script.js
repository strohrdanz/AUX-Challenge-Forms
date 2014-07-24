$(document).ready(function(){

if(!Modernizr.canvas) {
	$.getScript( "assets/js/lib/jquery.form-validator.min.js" ).done(function() {
		$.validate({
			onError : function() {
			// alert('Validation failed');
			$(".error:first").focus();
			},
			onSuccess : function() {
				alert('The form is valid!');
			return false; // Will stop the submission of the form
			}
		});
	});
}

$('input, select').on('validation', function(evt, isValid) {
	var test = ((isValid ? 'VALID' : 'NOT VALID'));
	if (test == "VALID") {      	
		$(this).next(".circle").removeClass("nosuccess");
		$(this).next(".circle").addClass("success");
		$(this).attr({"aria-invalid" : false});
	} else if (test == "NOT VALID") {
		$(this).next(".circle").removeClass("success");
		$(this).next(".circle").addClass("nosuccess");
		$(this).attr({"aria-invalid" : true});
	}
});

$("#card").keyup(function(){
	var cardcheck = $(this).val();
	// visa
	if(cardcheck.match(/^4/)) {
		$("#sprite").removeAttr("class");
		$("#sprite").addClass("visa");
	// mastercard
	} else if(cardcheck.match(/^5[1-5]/)) {
		$("#sprite").removeAttr("class");
		$("#sprite").addClass("mc");
	// discover
	} else if(cardcheck.match(/^6/)) {
		$("#sprite").removeAttr("class");
		$("#sprite").addClass("disc");
	// amex
	} else if(cardcheck.match(/^3[4]|[7]/)) {
		$("#sprite").removeAttr("class");
		$("#sprite").addClass("amex");
		$("#sprite2").addClass("amex2");
	} else {
	// all cards 
		$("#sprite").removeAttr("class");
		$("#sprite").addClass("allcards");
		$("#sprite2").removeClass("amex2");
	}
});

});