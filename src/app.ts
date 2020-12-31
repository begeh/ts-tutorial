const button = document.querySelector('button')!;

function clickHandler(message: string) {
  console.log('Clicked!' + message);
}

button.addEventListener('click', clickHandler.bind(null, `You're welcome`));

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";

if (typeof userInput === "string") {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError("An error occurred!", 500);
