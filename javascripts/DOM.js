"use strict";

var Chatty = (function(Chatty) {

  // var testArray = ["I'm the first message.", "I'm the second message.", "I'm the third message.", "I'm the fourth message.", "I'm the fifth message."];

  // - push html out. add ids message-1 through message-5 and delete-1 etc
  Chatty.loadOriginalMessages = function (object) {
    var arrayObject = object.messages;
    var formattedArray = [];

    for (var i = 0; i < arrayObject.length; i++) {
      formattedArray.push(arrayObject[i].message);
    }

    var targetElement = document.getElementById("container");
    var string = "";
    var counter = 1;
      for (var i = 0; i < formattedArray.length; i++) {
          string +=
          `<div class="messageContainer">
              <div class="messageText">
                <p>${formattedArray[i]}</p>
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

  return Chatty;

})(Chatty || {});

console.log("DOM js", Chatty);

 document.getElementById("input").addEventListener("keypess", function(event) {
 // console.log("event",event );
var textInput = document.getElementById("input").value;
var outputEl = document.getElementById("container");
    var string = "";
    var counter = 1;
  if (event.keyCode === 13) {
    outputEl.innerHTML = event.target.value;
      for (var i = 0; i < 100; i++) {
          string +=

             `<div class="messageContainer">
              <div class="messageText">
                <p>${textInput}</p>
              </div>
              <div class="deleteButton deleteButton-${counter}">
                <button>Delete</button>
              </div>
            </div>
          </div>`

      counter++;

};

}
});
 


var clear = document.getElementById("clear-button");
var textInput = document.getElementById("input");
var messageText = document.getElementById("container");

document.getElementById("textSize").addEventListener("click", function() {
  messageText.classList.toggle("large");
});


document.getElementById("theme").addEventListener("click", function () {
  messageText.classList.toggle("change-color");
})


function resetForm() {
  textInput.value = " ";
  messageText.innerHTML = " ";

}

clear.addEventListener("click", resetForm);


















