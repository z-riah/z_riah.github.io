// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var prompts = {
      upper: confirm("Include uppercase Letters?"),
      lower: confirm("Include lowercase letters?"),
      number: confirm("Include numbers?"),
      special: confirm("Include special characters?"),
      length: function () {
        var input = prompt('Desired Password Length:')
        if (isNaN(input)) {
          alert('Numerical Values Only');
          this.length();
          console.log('b ' + input)
        } else if (input < 7 || input > 122) {
          console.log('a' + input)
          alert('Minimum Length: 8 \nMaximum Length: 122 \nPlease Try Again');
          this.length();
        }
        return input
      }

  }
  var charTypes = {
    upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lower: 'abcdefghijklmnopqrstuvwxyz',
    number: '0123456789',
    special:'!#$%&',
  }
    console.log(prompts.length)
    //var passwordLength = prompts.length();
    var charset = ""
    var length = prompt('Password Length:');
    if (isNaN(length)) {
      alert('Numerical Values Only');
    } else if (length < 7 || length > 122) {
      alert('Minimum Length: 8 \nMaximum Length: 122 \nPlease Try Again');
    } else {
      if (prompts.upper) {
          charset = charset.concat(charTypes.upper)
      }
      if (prompts.lower) {
        charset = charset.concat(charTypes.lower)
      }
      if (prompts.number) {
        charset = charset.concat(charTypes.number)
      }
      if (prompts.special) {
        charset = charset.concat(charTypes.special)
      }
      if (prompts.upper == false &&
          prompts.lower == false &&
          prompts.number == false &&
          prompts.special == false) {
            alert('No Password Criteria Selected');
          }
    retVal = "";
    if (length < 123 && length > 7) {
      for (var i = 0, n = charset.length; i < length; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        return retVal;
      } else {
        return
      }

    }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
