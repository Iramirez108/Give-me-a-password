// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var passwordTxt = document.querySelector("password");
var length = document.querySelector("length");
var incNumbers = document.querySelector("numbers");
var incSymbols = document.querySelector("symbols");

var numbers = "0123456789";
var symbols = "!@#$%^&*()_+-="
var alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
// Prompt the user for the password criteria
  // Password lenght has to be between 8 to 128 characters
  // lowercase,uppercase, numbers, special characters
  // Validate the input 
  // Display generated password on the page or alert


function generatePassword(){
  console.log("Yay! You clicked the button!")

  return "Generated password will go here";
}

function generatePassword(){
  var numbers = generatePassword("0123456789")
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


