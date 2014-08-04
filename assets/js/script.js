(function(){

if(Modernizr.input.required) {
	Modernizr.load([
  {
    load: ['http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js', 'assets/js/lib/jquery.form-validator.min.js'],
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