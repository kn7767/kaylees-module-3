var generateBtn = document.querySelector("#generate");

var passIncludes = "";
// [ ] for arrays 
var number = ["0","1","2","3","4","5","6","7","8","9"]; 
var symbol = ["!","@","#","$","%","^","&","*","?"];
var uppercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var lowercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

function generatePassword() {
    var passLength = window.prompt("How many characters do you need in your password? Enter a number between 8-128.");
    if (isNaN(passLength)) {
      window.alert("Pick a number between 8-128.");
      return;
    } 
    else if (passLength < 8 || passLength > 128) {
      window.alert("Pick a value between 8-128.")
      return;
    } 
    
    window.alert("Your password will have " + passLength + " characters.");

    var passIncludes = '';

      console.log(passIncludes)
    if(confirm("Click OK to include numbers in your password.")) {
      passIncludes = passIncludes.concat(number);
    }
    if(confirm("Click OK to include symbols in your password.")) {
        passIncludes = passIncludes.concat(symbol);
    }    
    if(confirm("Click OK to include lowercase letters in your password.")) {
        passIncludes = passIncludes.concat(lowercase);
    }    
    if(confirm("Click OK to include uppercase letters in your password.")) {
        passIncludes = passIncludes.concat(uppercase);
    }

    var randomPass = "";
    for (var i = 0; i <passLength; i++) { 
        randomPass = randomPass + passIncludes[Math.floor(Math.random() * passIncludes.length)];
    }
    return randomPass;
}


//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (!password) {
    return;
  }

  if (password) {
  passwordText.value = password;
  }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);