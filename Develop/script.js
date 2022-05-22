// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// functions used to generate random list
function randomInt(min, max) {
  if (!max) {
    max= min
    min = 0
  }
  var rand = Math.random()
  return Math.floor(min*(1 - rand) + rand*max)
}

function getRandomSelect(list) {
  return list[randomInt(list.length)]
}

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
//window prompts for user to pick password criteria
  var userIncludesNumbers = window.confirm("Would you like your password to include numbers?")
  var userIncludesLowercase = window.confirm("Would you like your password to include lowercase letters?")
  var userIncludesUppercase = window.confirm("Would you like your password to include uppercase letters?")
  var userIncludesSpecial = window.confirm("Would you like your password to include special characters?")
// password lists
  var numberList = ["0","1","2","3","4","5","6","7","8","9","10"]
  var lowercaseList = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","y","x","z"]
  var uppercaseList = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","Y","X","Z"]
  var specialList = ["!","@","#","^","&","*","(",")","{","}","[", "]","=","<",">",",","."]

  var optionsSelect = []

  

  if (userIncludesNumbers) {
    optionsSelect.push(numberList)
  }
  if (userIncludesLowercase) {
    optionsSelect.push(lowercaseList)
  }
  if (userIncludesUppercase) {
    optionsSelect.push(uppercaseList)
  }
  if (userIncludesSpecial) {
    optionsSelect.push(specialList)
  }

  if (optionsSelect.length === 0) {
    optionsSelect.push(numberList)
  }
 

  var generatedPassword = ""

  for (var i = 0; i < passwordLength; i++) {
    var randomList = getRandomSelect(optionsSelect)
    var randomChar = getRandomSelect(randomList)
    generatedPassword += randomChar
  }
 
  return generatedPassword
 

 
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
