"use strict";

var Chatty = ( function(Chatty) {
	var inputMessages = [];
	var counter = 6;

	var clearButton = document.getElementById("clear-button");

		Chatty.addNewMessage = function(input) {
			counter++;
			clearButton.disabled = false;
			var Messages = {
				message: input,
				id: counter
				};
			inputMessages.push(Messages);
			console.log("inputMessages:", inputMessages);
			Chatty.loadNewMessage(input, counter);
			Chatty.listenSingleMessage(counter);
		};
		Chatty.deleteMessage = function(id) {
			document.getElementsByClassName("messageContainer")[id-1].innerHTML = ""; //delete from DOM
			alert(`deleted ${id}`);
		};
		Chatty.listenSingleMessage = function (id) {
			let string = "deleteButton-" + id;
			document.getElementsByClassName(string)[0].addEventListener("click", function() {
				Chatty.deleteMessage(id);
			});
		};
		Chatty.clearMessages = function () {
			inputMessages = [];
			document.getElementById("container").innerHTML = "";
			clearButton.disabled = true;
		};
		return Chatty;

})(Chatty || {});

console.log("fbd js", Chatty);
