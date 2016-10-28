"use strict";

var Chatty = (function(Chatty) {

  // var testArray = ["I'm the first message.", "I'm the second message.", "I'm the third message.", "I'm the fourth message.", "I'm the fifth message."];

  // - push html out. add ids message-1 through message-5 and delete-1 etc
  Chatty.loadOriginalMessages = function (array) {
    var targetElement = document.getElementById("container");
    var string = "";
    var counter = 1;
      for (var i = 0; i < array.length; i++) {
          string +=
          `<div class="messageContainer">
              <div class="messageText">
                <p>${array[i]}</p>
              </div>
              <div class="deleteButton deleteButton-${counter}">
                <button>Delete</button>
              </div>
            </div>
          </div>`
        ;
        counter++;
      }
    targetElement.innerHTML = string;

  };
// Chatty.loadOriginalMessages(testArray);
  return Chatty;

})(Chatty || {});

console.log("DOM js", Chatty);
