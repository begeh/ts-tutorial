"use strict";
const button = document.querySelector('button');
function clickHandler(message) {
    console.log('Clicked!' + message);
}
button.addEventListener('click', clickHandler.bind(null, `You're welcome`));
let userInput;
let userName;
userInput = 5;
userInput = "Max";
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("An error occurred!", 500);
