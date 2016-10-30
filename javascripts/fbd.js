"use strict";

var Chatty = ( function(Chatty) {
	var inputMessages = [];
	var counter = 7;

		Chatty.addNewMessage = function(input) {
			var Messages = {
				message: input,
				id: counter
				};
			inputMessages.push(Messages);
			Chatty.loadNewMessage(input, counter);
			Chatty.listenSingleMessage(counter);
			counter++;
			document.getElementById("clear-button").disabled = false;
		};
		Chatty.listenSingleMessage = function (id) {
			var string = "deleteButton-" + id;
			var targetElement = document.getElementById(string);
			targetElement.addEventListener("click", function(){
			Chatty.deleteMessage(id);
			});
		};
		Chatty.clearMessages = function () {
			document.getElementById("clear-button").disabled = true;
			inputMessages = [];
			document.getElementById("container").innerHTML = "";
		};
		console.log(inputMessages);
		return Chatty;

})(Chatty || {});

console.log("fbd js", Chatty);
// Chatty.addNewMessage( "apfijghaijfgaeirhg");
// Chatty.addNewMessage( "apfijghaijfgaeirhg");
// Chatty.addNewMessage( "apfijghaijfgaeirhg");
// Chatty.listenSingleMessage(7);

