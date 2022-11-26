let number = ['0','1','2','3','4','5','6','7','8','9']
let lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
let upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
let specialChar = ['~','!','@','#','$','%','^','&','*','(',')','-','+','=','_']


// Assignment Code
var generateBtn = document.querySelector("#generate");

//var for all lowercase
//var for all uppercase
//var for all specialchar
//var for all numbers

//var with empty string/array for container

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  let randomString = ''

  //PROMPT password length
  //if - length is not between 8 and 128, or if it's not a number
  //alert() - incorrect length
  //prompt them again - hint: call the function again

  //else {
    //confirm lowercase
    //confirm uppercase
    //confirm specialchar
    //confirm numbers

    //if(lowercase) - add lowercaseChars to empty container var 
    //if(uppercase) - add uppcaseChrs to empty container var 
    //if(specialchar) - add specialchars to empty container var 
    //if(numbers) - add numberchars to empty container var 

//for loop, loop through the container var with the lenth user chose
//each time, select a random character and add to randomString

  //}


  return randomString;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
