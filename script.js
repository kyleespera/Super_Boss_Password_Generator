var generateButton = document.querySelector("#generate");

//Variable Declarations

var customPasswordLength;
var includeLowerCase;
var includeUpperCase;
var includeNumbers;
var includeSpecialChars;
var userSelections;

var lowercaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Variable to hold array of uppercase characters
var uppercaseChars = lowercaseChars.map(function (char) {
  return char.toUpperCase();
});

var numberChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var specialChars = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

// write password function
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
//include event listener in order to generate button
generateButton.addEventListener("click", writePassword);

//generate password function
function generatePassword() {
  customPasswordLength = prompt("How many characters would you like your password to be? Choose between 8 and 128");
  console.log("Password length: " + customPasswordLength);

//ask user for password length
  if (!customPasswordLength) {
    alert("A value is required");
  } else if (customPasswordLength < 8 || customPasswordLength > 128) {
    customPasswordLength = prompt("Password must be between 8 and 128");
    console.log("Password length: " + customPasswordLength);
  } else {
    includeLowerCase = confirm("Should the password contain lowercase letters?");
    console.log("Include lowercase: " + includeLowerCase);

    includeUpperCase = confirm("Should the password contain uppercase letters?");
    console.log("Include uppercase: " + includeUpperCase);

    includeNumbers = confirm("Should the password contain numbers?");
    console.log("Include numbers: " + includeNumbers);

    includeSpecialChars = confirm("Should the password contain special characters?");
    console.log("Include special characters: " + includeSpecialChars);
  }
// no criteria selected
  if (!includeLowerCase && !includeUpperCase && !includeNumbers && !includeSpecialChars) {
    userSelections = alert("You must choose at least one criteria");
  } else {
    userSelections = [];
//concatenate selected character sets
    if (includeLowerCase) {
      userSelections = userSelections.concat(lowercaseChars);
    }

    if (includeUpperCase) {
      userSelections = userSelections.concat(uppercaseChars);
    }

    if (includeNumbers) {
      userSelections = userSelections.concat(numberChars);
    }

    if (includeSpecialChars) {
      userSelections = userSelections.concat(specialChars);
    }

    console.log(userSelections);
  }

  var generatedPassword = [];
// generate the password
  for (var i = 0; i < customPasswordLength; i++) {
    var randomChar = userSelections[Math.floor(Math.random() * userSelections.length)];
    generatedPassword.push(randomChar);
    console.log(randomChar);
  }

  var password = generatedPassword.join("");
  console.log("Your password is: " + password);
  return password;
}
