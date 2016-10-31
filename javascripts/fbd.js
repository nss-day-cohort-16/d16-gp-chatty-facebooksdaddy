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
			console.log("counter:", counter);
		};
		Chatty.deleteMessage = function(num) {
			console.log("inputMessages.length:", inputMessages.length);
			console.log("num:", num);
			console.log("inputMessages[0].id:", inputMessages[0].id);
			console.log("inputMessages before splice", inputMessages);
			document.getElementsByClassName("messageContainer")[num-1].innerHTML = ""; //delete from DOM
			for (var i = 0; i <= counter; i++) {
				if (inputMessages[i].id === num) {
					inputMessages.splice(i, 1);
					break;
				}
			}
			console.log("inputMessages after splice", inputMessages);
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
