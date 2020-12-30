"use strict";
const button = document.querySelector('button');
button.addEventListener('click', () => {
    console.log('Clicked!');
});
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
