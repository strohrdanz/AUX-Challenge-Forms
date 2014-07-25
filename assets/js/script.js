$(document).ready(function(){

if(!Modernizr.canvas) {
	$.getScript( "assets/js/lib/jquery.form-validator.min.js" ).done(function() {
		$.validate({
			errorMessagePosition: $("#errors"),
			onError : function() {
			// $(".error:first").focus();
			},
			onSuccess : function() {
				alert('The form is valid!');
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

var stylesheet = $("link[rel='stylesheet']").attr("href");

console.log(stylesheet);

if (stylesheet == "assets/css/styles.css") {
	$("input[type='radio']").hide();
	$("input[type='radio']").next('label').hide();
}

$("#card").keyup(function(){
	var cardcheck = $(this).val();
	// visa
	if(cardcheck.match(/^4/)) {
		$("#sprite").removeAttr("class");
		$("#sprite").addClass("visa");
		$("#r_visa").prop("checked", true);
	// mastercard
	} else if(cardcheck.match(/^5[1-5]/)) {
		$("#sprite").removeAttr("class");
		$("#sprite").addClass("mc");
		$("#r_mc").prop("checked", true);
	// discover
	} else if(cardcheck.match(/^6/)) {
		$("#sprite").removeAttr("class");
		$("#sprite").addClass("disc");
		$("#r_disc").prop("checked", true);
	// amex
	} else if(cardcheck.match(/^3[4]|[7]/)) {
		$("#sprite").removeAttr("class");
		$("#sprite").addClass("amex");
		$("#sprite2").addClass("amex2");
		$("#r_amex").prop("checked", true);
	} else {
	// all cards 
		$("#sprite").removeAttr("class");
		$("#sprite").addClass("allcards");
		$("#sprite2").removeClass("amex2");
		$("input[type='radio']").prop("checked", false);
	}
});

$("form").on("submit", function(){
	alert('success!');
	return false;

});

});