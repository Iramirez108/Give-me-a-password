// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUZWXYZ";
var numberChar = "0123456789";
var specialChar = "!#$%&'()*+-./:;<=>?@[\^_`{|}~";

// Prompt the user for the password criteria
  // Password lenght has to be between 8 to 128 characters
  // lowercase,uppercase, numbers, special characters
  // Validate the input 
  // Display generated password on the page or alert)
function generatePassword(){
  console.log("Yay! You clicked the button!")
  var password = "";
  var passwordChar = ""
  let passwordLengthUser = prompt("How long do you want your password to be?");
  passwordLengthUser = parseInt(passwordLengthUser);
  if (passwordLengthUser <8){
    alert("Password must have more than 8 characters!!");
    return"";
  }
  if (passwordLengthUser > 128){
    alert("password must not have more than 128 characters!!");
    return "";
  }
  var lowercaseCharactersChoice = confirm ("Do you want to include lowercase in your password?");
  if (lowercaseCharactersChoice){
    passwordChar += lowercaseChar
  }
  var uppercaseCharactersChoice = confirm ("Do you want to include uppercase in your password?");
  if(uppercaseCharactersChoice){
    passwordChar += uppercaseChar;
  }
  var numberCharChoice = confirm ("Do you want to add numbers in your password?");
  if (numberCharChoice){
    passwordChar += numberChar;
  }
  var specialCharChoice = confirm ("Do you want to add special characters to your password?");
  if (specialCharChoice){
    passwordChar += specialChar;
  }
  for (var i=0;i<passwordLengthUser; i++){
    password = passwordChar[Math.floor(Math.random()*passwordChar.length)]
  }
}


  //let text = ("Do you want to include numbers in your password?");
  //let symbols = "Do you want to include symbols in you password?";
  //let lower = "Do you want to include lower case in your password?";
  //let upper = "do you want to include upper case in you password?";
  //if (passwordLength !=null){
    //document.querySelector("#password").innerHTML = "Password"
  //}
 
  //if (confirm(text)==true); {
//}
//if (confirm(symbols)== true);{

//}
//if (confirm(lower)== true);{

//}
//if (confirm(upper)== true);{

//}
  //return "Generated password will go here";
//}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password").value;
  passwordText.value = password;

  if (passwordText !=null){
    document.querySelector("#password").innerHTML = password;
 // document.querySelector("password").innerHTML = password;
}
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
