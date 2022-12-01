//var for all lowercase
//var for all uppercase
//var for all specialchar
//var for all numbers
let number = ['0','1','2','3','4','5','6','7','8','9'];
let lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let specialChar = ['~','!','@','#','$','%','^','&','*','(',')','-','+','=','_'];
let password = [];


// Assignment Code
let generateBtn = document.querySelector("#generate");



//var with empty string/array for container
function generatePassword() {
  let randomString = [];
  //PROMPT password length
  let passwordLength = prompt("Choose a number between 8 and 124 for your password length.");
  if (passwordLength < 8 || passwordLength > 128) {
  alert ("incorrect password length. choose a number between 8 and 124.")
  }
  let numChoice = window.confirm("Would you like to include numbers in your password?");
  let lowerChoice = window.confirm("Would you like to include lower case letters?");
  let upperChoice = window.confirm("Would you like to include upper case letters?");
  let specialChoice = window.confirm("Would you like to include special characters?");
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
    if (numChoice === true)  {
      randomString = randomString.concat(number);
      let maximum = number.length;
      let rnd = Math.floor(Math.random() * maximum);
      password.push(number[rnd]);
      passwordLength--;
    }
    if (lowerChoice === true)  {
      randomString = randomString.concat(lowerCase);
      let maximum = lowerCase.length;
      let rnd = Math.floor(Math.random() * maximum);
      password.push(lowerCase[rnd]);
      passwordLength--;
    }
    if (upperChoice === true)  {
      randomString = randomString.concat(upperCase);
      let maximum = upperCase.length;
      let rnd = Math.floor(Math.random() * maximum);
      password.push(upperCase[rnd]);
      passwordLength--;
    }
    if (specialChoice === true)  {
      randomString = randomString.concat(specialChar);
      let maximum = specialChar.length;
      let rnd = Math.floor(Math.random() * maximum);
      password.push(specialChar[rnd]);
      passwordLength--;
    }
  

//for loop, loop through the container var with the lenth user chose
//each time, select a random character and add to randomString

  //}
for (let i = 0; i < passwordLength; i++) {
  let maximum = randomString.length;
  let rnd = Math.floor(Math.random() * maximum)
  password.push(randomString[rnd]);
}
return password
}

// Write password to the #password input
function writePassword() {
  generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password.join("");

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
