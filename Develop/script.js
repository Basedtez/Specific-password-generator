// Assignment code here
//const randomFunc = {
 // lower: getRandomLower
 // upper: getRandomUpper
 // number: getRandomNumber
 // symbol: getRandomSymbol
//}
//function getRandomLower() {
  //return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
//}

//function getRandomUpper() {
 // return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
//}
 
//function getRandomNumber() {
 // return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
//}

//function getRandomSymbol() {
//  const symbols = '!@#^&*(){}[]=<>,.';
 // return symbols[Math.floor(Math.random() * symbols.length)];
//}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  var userInput = window.prompt("Desired password length?")

  var passwordLength = parseInt(userInput)

  if (isNaN(passwordLength)) {
    window.alert("That's not a number!")
    
    return
  } 
  
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password length must be between 8 to 128 characters")
    return
  }

  var userWantsNumbers = window.confirm("Would you like your password to include numbers?")
  var userWantsLowercase = window.confirm("Would you like your password to include lowercase letters?")
  var userWantsUppercase = window.confirm("Would you like your password to include uppercase letters?")
  var userWantsSpecial = window.confirm("Would you like your password to include special characters?")


 
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
