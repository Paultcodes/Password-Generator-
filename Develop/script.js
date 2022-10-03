// Assignment Code
var generateBtn = document.querySelector("#generate");
//Functions for generating random numbers//
function randomNumber(x, y) {
  if (!x) {
    x = y;
    y = 0;
  }

  var rand = Math.random();
  return Math.floor(y * (1 - rand) + rand * x);
}

function getRandomNumber(list) {
  return list[randomNumber(0, list.length)];
}

function generatePassword() {
  var userChoice = window.prompt("Please choose a number between 8 and 128");
  //Converting the users number into a integer//
  var passwordNumberLength = parseInt(userChoice);
  //If statement in case user tries to enter something that isn't a number//
  if (isNaN(userChoice)) {
    window.alert("Please choose a number");
    return;
  }

  if (userChoice < 8 || userChoice > 128) {
    window.alert("Password length must be between 8 and 128 characters");
    return;
  }
  //Window confirms for user//
  var doYouWantNumbers = window.confirm(
    "Would you like to include numbers in your password?"
  );
  var doYouWantLower = window.confirm(
    "Would you like to include lower case letters in your password?"
  );
  var doYouWantUpper = window.confirm(
    "Would you like to include upper case letters in your password?"
  );
  var doYouWantSymbols = window.confirm(
    "Would you like to include symbols in your password?"
  );

  var lowerCase = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var upperCase = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  var symbols = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "+",
    "?",
    "/",
    "-",
    ":",
    ";",
    "[",
    "]",
    "{",
    "}",
    ".",
    "<",
    ">",
    "=",
    "_",
    "`",
    "|",
    "~",
  ];
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  //Empty array that we will use to store the users selected criteria's//
  var userSelected = [];

  if (doYouWantLower === true) {
    userSelected.push(lowerCase);
  }

  if (doYouWantNumbers === true) {
    userSelected.push(numbers);
  }

  if (doYouWantSymbols === true) {
    userSelected.push(symbols);
  }

  if (doYouWantUpper === true) {
    userSelected.push(upperCase);
  }

  if (
    doYouWantLower === false &&
    doYouWantNumbers === false &&
    doYouWantUpper === false &&
    doYouWantSymbols === false
  ) {
    window.alert("You must choose at least one option for your password");
  }

  var userPassword = "";
  //for loop that generates a random password with the length that the user chose//
  for (i = 0; i < passwordNumberLength; i++) {
    var randomL = getRandomNumber(userSelected);
    var random = getRandomNumber(randomL);
    console.log(random);
    userPassword += random;
  }

  window.alert(userPassword);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
