"use strict";

var Chatty = ( function(Chatty) {
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
		Chatty.listenSingleMessage = function (id) {
			var string = "deleteButton-" + id;
			var targetElement = document.getElementById(string);
			targetElement.addEventListener("click", function(){
			Chatty.deleteMessage(id);
			});	
		};
		console.log(inputMessages);
		return Chatty;

})(Chatty || {});

console.log("fbd js", Chatty);
// Chatty.addNewMessage( "apfijghaijfgaeirhg");
// Chatty.addNewMessage( "apfijghaijfgaeirhg");
// Chatty.addNewMessage( "apfijghaijfgaeirhg");
// Chatty.listenSingleMessage(7);

