// Assignment Code 
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// create character arrays
var upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',];
var specialcharacters = ['!', '@', '#', '$', '%', '&', '*',]

// create var for password and criteria results
var password = ""
var allowChars = []
console.log(allowChars)

// Runs when generate button is clicked
document.getElementById("generate").addEventListener("click", function(){
// define password criteria
var passwordLength = prompt("Enter the length of password. Must be more than 8 character and less than 128 characters.");

if (passwordLength < 8 || passwordLength >128){
  alert("Your password length needs to be at least 8 characters and less than 128 characters.");
} else {

  var lowercaseChar = confirm("Would you like lower case letters in your password?");

  var uppercaseChar = confirm("Would you like upper case letters in your password?");

  var numberChar = confirm("Would you like numbers in your password?");
  
  var specialChar = confirm("Would you like special characters in your password?");

  // add allowed characters to allowed characters array
  if (lowercaseChar) {
    allowChars = allowChars.concat(lowerCaseLetters);
  }
  
  if (uppercaseChar) {
    allowChars = allowChars.concat(upperCaseLetters);
  }
  
  if (numberChar) {
    allowChars = allowChars.concat(numbers);
  }
  
  if (specialChar) {
    allowChars = allowChars.concat(specialcharacters);
  }
  
  // create for loop to generate password 
  for (var i = 0; i < passwordLength; i++) {
    var randomCharacter = Math.floor(Math.random() * allowChars.length);
    password += allowChars[randomCharacter];
  }

  // show generated password in "password" field
  document.getElementById("password").innerHTML = password;
}
});

  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
