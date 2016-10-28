"use strict";

var Chatty = (function(Chatty) {
	var inputMessages = [];
	var counter = 6;
	
		Chatty.addNewMessage = function( input) {
			var Messages = {
				message: input,
				id: counter
				};
			inputMessages.push(Messages);
			Chatty.loadNewMessage(input, counter);
			Chatty.listenSingleMessage(counter);
			counter++;

	};
		// console.log(inputMessages);
		return Chatty;

})(Chatty || {});

console.log("fbd js", Chatty);
// Chatty.addNewMessage( "apfijghaijfgaeirhg");
