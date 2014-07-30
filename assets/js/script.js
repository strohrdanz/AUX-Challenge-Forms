(function(){

if(!Modernizr.input.required) {

	var script = document.createElement("SCRIPT");
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
    script.type = 'text/javascript';
    document.getElementsByTagName("head")[0].appendChild(script);

    var checkReady = function(callback) {
        if (window.jQuery) {
            callback(jQuery);
        }
        else {
            window.setTimeout(function() { 
            	checkReady(callback); 
            }, 100);
        }
    };

    checkReady(function($) {
        $.getScript( "assets/js/lib/jquery.form-validator.min.js" )
        .done(function() {
			$.validate({
				errorMessagePosition: $("#errors"),
				onSuccess : function() {
					alert('The form is valid!');
				}
			});

			$('input, select').on('validation', function(evt, isValid) {
				var test = ((isValid ? 'VALID' : 'NOT VALID'));
				if (test == "VALID") {      	
					$(this).next(".circle").removeClass("nosuccess");
					$(this).next(".circle").addClass("success");
				} else if (test == "NOT VALID") {
					$(this).next(".circle").removeClass("success");
					$(this).next(".circle").addClass("nosuccess");
				}
			});	
		});
	});
}

var stylesheet = document.styleSheets;
var radios = document.getElementsByName("cardtype");
var card = document.getElementById("card");
var sprite = document.getElementById("sprite");
var sprite2 = document.getElementById("sprite2");

if (stylesheet.length == 1) {
	for( i = 0; i < radios.length; i++ ) {
    	radios[i].style.display = 'none';
    	radios[i].nextSibling.style.display = 'none';
    }
}

function cardcheck() {
	var cardcheck = card.value;
	// visa
	if(cardcheck.match(/^4/)) {
		sprite.removeAttribute("class");
		sprite.setAttribute("class","visa");
		document.getElementById("r_visa").checked=true;
	// mastercard
	} else if(cardcheck.match(/^5[1-5]/)) {
		sprite.removeAttribute("class");
		sprite.setAttribute("class","mc");
		document.getElementById("r_mc").checked=true;
	// discover
	} else if(cardcheck.match(/^6/)) {
		sprite.removeAttribute("class");
		sprite.setAttribute("class","disc");
		document.getElementById("r_disc").checked=true;
	// amex
	} else if(cardcheck.match(/^3[4]|[7]/)) {
		sprite.removeAttribute("class");
		sprite.setAttribute("class","amex");
		sprite2.setAttribute("class","amex2");
		document.getElementById("r_amex").checked=true;
	} else {
	// all cards 
		sprite.removeAttribute("class");
		sprite2.removeAttribute("class");
		sprite2.setAttribute("class","allcards");
		for( i = 0; i < radios.length; i++ ) {
        	if(radios[i].checked) {
            	radios[i].checked=false;
        	}
		}
	}
}

card.addEventListener("keyup", cardcheck, false);

})();