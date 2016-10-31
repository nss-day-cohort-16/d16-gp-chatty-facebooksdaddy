"use strict";

var Chatty = (function(oldChatty) {
	var  originalMessages = {};
	oldChatty.getData = function () {
  console.log("getData function loads");
	var loader = new XMLHttpRequest();

      loader.open("GET","javascripts/chatty.JSON");
      loader.send();

      loader.addEventListener("load", function () {
      var originalMessages = JSON.parse(this.responseText);
      console.log("original", originalMessages );

		  //pass data to DOM
      Chatty.loadOriginalMessages(originalMessages);
			});
		};

		return oldChatty;

})(Chatty || {});

