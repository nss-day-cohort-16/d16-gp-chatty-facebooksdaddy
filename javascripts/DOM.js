"use strict";

var Chatty = (function(Chatty) {

  var targetElement = document.getElementById("container");

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
  };

  Chatty.addListeners = function () {
    var clear = document.getElementById("clear-button");
    clear.addEventListener("click", Chatty.clearMessages);
  };

//

// var textInput = document.getElementById("input");
// var messageText = document.getElementById("container");

// document.getElementById("textSize").addEventListener("click", function() {
//   messageText.classList.toggle("large");
// });


// document.getElementById("theme").addEventListener("click", function () {
//   messageText.classList.toggle("change-color");
// })


// function resetForm() {
//   textInput.value = " ";
//   messageText.innerHTML = " ";

// }




// textInput.addEventListener("keypress", function(event) {
//  messageText.innerHTML =  event.target.value + ' <div class="deleteButton deleteButton-${counter}"><button>Delete</button></div>'
// })



  return Chatty;

})(Chatty || {});

console.log("DOM js", Chatty);
