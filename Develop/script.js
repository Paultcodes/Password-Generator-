// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {
var userChoice = window.prompt("hello")

console.log(userChoice)

var passwordNumberLength = parseInt(userChoice)

if (isNaN(passwordNumberLength)) {
  window.alert("Please choose a number")
  return
}

if (passwordNumberLength < 8 || passwordNumberLength > 128) {
  window.alert("Password length must be between 8 and 128 characters")
  return
}

var doYouWantNumbers = window.confirm("Would you like to include numbers in your password?")
var doYouWantLower = window.confirm("Would you like to include lower case letters in your password?")
var doYouWantUpper = window.confirm("Would you like to include upper case letters in your password?")
var doYouWantSymbols = window.confirm("Would you like to include symbols in your password?")


  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
