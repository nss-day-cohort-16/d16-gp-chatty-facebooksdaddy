"use strict";
console.log("delete js loads");

var Chatty = (function(Chatty) {

  Chatty.deleteMessage = function (id) {
    console.log("deleteMessage function ran");

    // Take id (number) and create string equal to message-6, message-7, etc
    var idName = "message-" + id;
    // Target and remove that message from DOM
    var targetElement = document.getElementById(idName);
    targetElement.innerHTML = "";
    // Call a function that deletes message from private array if not JSON messages 1-5
    if (id > 5) {
        deleteFromArray(id);
    }

    };

  return Chatty;

})(Chatty || {});