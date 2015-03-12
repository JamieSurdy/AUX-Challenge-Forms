/* Your JavaScript goes here */

	$(function work(){

		var amex=$('#cardtype_1');
		var visa=$('#cardtype_2');
		var mc=$('#cardtype_4');
		var discover=$('#cardtype_3')
		var secCode = $('#security_code')

		//if selected, this value shows up
		$.fn.checked = function(value){

			if (value===true || value===false){
				$(this).each(function(){this.checked=value; });
			}
		}
	};
	
		function getCardNumber(){
			$('cardNumber').keyup(function(){
				var card = $(this).val();
				var cardNumber = (card).slice(0,1);

				console.log(cardNumber);

			if (cardNumber === '37'){
				(amex).checked(true);
			} else if (cardNumber === '4'){
				(visa).checked(true);
			} else if (cardNumber === '5'){
				(mc).checked(true);
			} else if (cardNumber === '6'){
				(discover).checked(true);
			}


		});

	};

	(amex).change(function()){
		if ($(this).prop('checked')){
			secCode.addClass('amex');
		} else{
			secCode.removeClass('amex')
		}
	});


	getCardNumber();
	
	Modernizr.load({
			test: Modernizr.input.required,
			yep: console.log('required works here!'),
			nope: ['vendor/jquery.validate.min.js'],

			// call jQuery Validate if required is not supported
			complete: function () {
				if (!Modernizr.input.required) {
				$('form').each(function() {
				$(this).validate();

			});

		}

	}

});

})();

$.work()};




