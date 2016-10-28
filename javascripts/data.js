"use strict";

var Chatty = (function(oldChatty) {
	var  originalMessages = {};
	oldChatty.getData = function () {
	var loader = new XMLHttpRequest();

      loader.open("GET","javascripts/chatty.JSON");
      loader.send();
      
      loader.addEventListener("load", function () {
      var originalMessages = JSON.parse(this.responseText);
      console.log("original", originalMessages );
      //callbackToInvoke(dinoCarnivores);
      
      
				//callbackToInvoke(originalMessages);
		//pass array to load original
			});
		}
		return oldChatty;

})(Chatty || {});

