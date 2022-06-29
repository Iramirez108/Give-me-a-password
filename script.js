// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var lowercaseChar = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercaseChar = [  'A', 'B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numberChar = ['0','1','2','3','4','5','6','7','8','9'];
var specialChar = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Prompt the user for the password criteria
  // Password lenght has to be between 8 to 128 characters
  // lowercase,uppercase, numbers, special characters
  // Validate the input 
  // Display generated password on the page or alert)

  function getRandom(arr) {
   
  }


function generatePassword(){
  console.log("Yay! You clicked the button!")
  var password = [];
  var passwordChar = [];
  let passwordLengthUser = prompt("How long do you want your password to be?");
  passwordLengthUser = parseInt(passwordLengthUser);
  if (passwordLengthUser <8){
    alert("Password must have more than 8 characters!!");
    return "";
  }
  if (passwordLengthUser > 128){
    alert("password must not have more than 128 characters!!");
    return "";
  }
  var lowercaseCharactersChoice = confirm ("Do you want to include lowercase in your password?");
  if (lowercaseCharactersChoice){
    password = password.concat(lowercaseChar);
   passwordChar.push(getRandom(lowercaseChar));
    console.log(lowercaseChar)
  }
  var uppercaseCharactersChoice = confirm ("Do you want to include uppercase in your password?");
  if(uppercaseCharactersChoice){
    password = password.concat(uppercaseChar);
    passwordChar.push(getRandom(uppercaseChar));
    console.log(uppercaseChar)
  }
  var numberCharChoice = confirm ("Do you want to add numbers in your password?");
  if (numberCharChoice){
    password = password.concat(numberChar);
    passwordChar.push(getRandom(numberChar));
    console.log(numberChar)
  }
  var specialCharChoice = confirm ("Do you want to add special characters to your password?");
  if (specialCharChoice){
    password = password.concat(specialChar);
    passwordChar.push(getRandom(specialChar));
    console.log(specialChar)
  }
  for (var i=0;i<passwordLengthUser; i++){
    password = passwordChar[Math.floor(Math.random()*passwordChar.length)]
  }
  return password.join();
}


 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  if (passwordText !=null){
    document.querySelector("#password").innerHTML = password;
}
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
