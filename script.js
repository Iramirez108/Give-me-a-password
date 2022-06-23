// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
//var passwordText = document.querySelector("password");
//var length = document.querySelector("length");
//var incNumbers = document.querySelector("numbers");
//var incSymbols = document.querySelector("symbols");

//var numbers = "0123456789";
//var symbols = "!@#$%^&*()_+-="
//var alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
// Prompt the user for the password criteria
  // Password lenght has to be between 8 to 128 characters
  // lowercase,uppercase, numbers, special characters
  // Validate the input 
  // Display generated password on the page or alert


function generatePassword(){
  console.log("Yay! You clicked the button!")
  let passwordLength = prompt("How long do you want your password to be?")
  let text =  confirm("Do you want to include numbers in your password?");
  let symbols = "Do you want to include symbols in you password?";
  let lower = "Do you want to include lower case in your password?";
  let upper = "do you want to include upper case in you password?";
  if (passwordLength !=null){
    document.querySelector("#password").innerHTML = "Password"
  }
 
  if (alert(text)); {
}
if (confirm(symbols)== true);{

}
if (confirm(lower)== true);{

}
if (confirm(upper)== true);{

}
  return "Generated password will go here";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


