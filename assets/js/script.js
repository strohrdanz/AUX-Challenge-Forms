	(function(){

if(!Modernizr.input.required) {
	Modernizr.load([
  {
    load: ['http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js', 'assets/js/lib/jquery.form-validator.min.js'],
        complete: function () {
    	if (!window.jQuery) {
            Modernizr.load('assets/js/lib/jquery-2.1.1.min.js');
    	} else {
		   	$.validate({
				errorMessagePosition: $("#errors"),
				onSuccess : function() {
					alert('The form is valid!');
					return false;
				}
			});

			$('input').not('input[type="radio"]').not(".month").after('<span></span>');

			$('input, select').on('validation', function(evt, isValid) {
				var test = ((isValid ? 'VALID' : 'NOT VALID'));
				if (test === "VALID") {
					$(this).next('span').removeClass('nosuccess');
					$(this).next('span').addClass('success');
				} else if (test === "NOT VALID") {
					$(this).next('span').removeClass('success');
					$(this).next('span').addClass('nosuccess');
					if ($(this).hasClass("month year")){
						$(this).css("border","1px solid red");
					}
				}
			});
	    }
    }
  }
]);
}

var stylesheet = document.styleSheets,
	radios = document.getElementsByName("cardtype"),
	card = document.getElementById("card");

function cardcheck() {
	var cardval = card.value;
	// visa
	if(cardval.match(/^4/)) {
		document.getElementById("r_visa").checked=true;
	// mastercard
	} else if(cardval.match(/^5[1-5]/)) {
		document.getElementById("r_mc").checked=true;
	// discover
	} else if(cardval.match(/^6/)) {
		document.getElementById("r_disc").checked=true;
	// amex
	} else if(cardval.match(/^3[4]|[7]/)) {
		document.getElementById("r_amex").checked=true;
	} else {
	// all cards 
		document.getElementsByName("cardtype").checked=false;
		for( i = 0; i < radios.length; i++ ) {
        	if(radios[i].checked) {
            	radios[i].checked=false;
        	}
		}
	}
}

card.addEventListener("keyup", cardcheck, false);

})();