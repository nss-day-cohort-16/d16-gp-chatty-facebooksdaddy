"use strict";

var Chatty = (function(Chatty) {

  var targetElement = document.getElementById("container");
  var dataLength = {
    number: 0
  };

  Chatty.loadNewMessage = function (message, id) {
    var newMessage =
     `<div class="messageContainer">
        <div class="messageText">
          <p>${message}</p>
        </div>
        <div class="deleteButton deleteButton-${id}">
          <button>Delete</button>
        </div>
      </div>`;
    targetElement.innerHTML = targetElement.innerHTML + newMessage;
  };

  // - push html out. add ids message-1 through message-5 and delete-1 etc
  Chatty.loadOriginalMessages = function (object) {
    var arrayObject = object.messages;
    dataLength.number = object.messages.length;
    console.log("dataLength in loadOriginalMessages:", dataLength.number);
    var formattedArray = [];

    for (var i = 0; i < arrayObject.length; i++) {
      formattedArray.push(arrayObject[i].message);
    }

    var string = "";
    var counter = 1;
      for (let i = 0; i < formattedArray.length; i++) {
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

    targetElement.innerHTML += string;
    Chatty.addListeners();

  };

  Chatty.addListeners = function () {
    console.log("dataLength in addListeners:", dataLength.number);
    var textInput = document.getElementById("input");
    var clear = document.getElementById("clear-button");

    // Clear button
    clear.addEventListener("click", Chatty.clearMessages);
    // Font size Toggle
    document.getElementById("textSize").addEventListener("click", function() {
      targetElement.classList.toggle("large");});
    // Dark theme Toggle
    document.getElementById("theme").addEventListener("click", function () {
      targetElement.classList.toggle("change-color");});
    // Save new message
    textInput.addEventListener("keypress", function(event) {
      if (event.keyCode === 13) {
        Chatty.addNewMessage(textInput.value);
      }
    });
    // First 6 original message delete buttons
    for (let i = 0; i <= dataLength.number; i++) {
      var deleteString = "deleteButton-" + (i + 1);
      document.getElementsByClassName(deleteString)[0].addEventListener("click", function () {
        document.getElementsByClassName("messageContainer")[i].innerHTML = ""; //delete from DOM
      });

    }

  };

  return Chatty;

})(Chatty || {});

console.log("DOM js", Chatty);
