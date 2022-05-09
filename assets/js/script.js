// Assignment code herefunction 

// function generates rrandom password
var generatePassword = function () {

    // prompt ask the length of the password
    var number = window.prompt("Choose a length of at least 8 characters and no more than 128 characters for your password.");
    // if number is under 8 or over 128 it is invalid
    if (number < 8 || number > 128) {
        window.alert("You did not pick a valid option. Try again.");
        number();
    }

    // prompt ask the character type to use
    var passwordPrompt = window.prompt(
        "What character types would you like to use? Enter as many as you want LOWERCASE, UPPERCASE, NUMBER, OR SPECIAL. HINT TYPE IN ORDER FROM LOWERCASE TO SPECIAL WITH SPACE IN BETWEEN AND NO COMMAS. FOR EXAMPLE: LOWERCASE UPPERCASE NUMBER"
    );


    passwordPrompt = passwordPrompt.toLowerCase();

    //uses switch case to choose what character types to use
    switch (passwordPrompt) {
        case 'lowercase':
        case 'LOWERCASE':
            // parseFloat turns the numbers from a string to a a integer
            var length = parseFloat(number);
            charset = "abcdefghijklmnopqrstuvwxyz",
                retVal = "";
            // for loop chooses random letters and hoewever many letters as the length says 
            for (var i = 0, n = charset.length; i < length; ++i) {
                retVal += charset.charAt(Math.floor(Math.random() * n));
            }
            return retVal;
            break;
        case 'uppercase':
        case 'UPPERCASE':
            var length = parseFloat(number);
            charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
                retVal = "";
            for (var i = 0, n = charset.length; i < length; ++i) {
                retVal += charset.charAt(Math.floor(Math.random() * n));
            }
            return retVal;
            break;
        case 'number':
        case 'NUMBER':
            var length = parseFloat(number);
            charset = "0123456789",
                retVal = "";
            for (var i = 0, n = charset.length; i < length; ++i) {
                retVal += charset.charAt(Math.floor(Math.random() * n));
            }
            return retVal;
            break;
        case 'special':
        case 'SPECIAL':
            var length = parseFloat(number);
            charset = "!@#$%^&*(){}|;':<>?,./",
                retVal = "";
            for (var i = 0, n = charset.length; i < length; ++i) {
                retVal += charset.charAt(Math.floor(Math.random() * n));
            }
            return retVal;
            break;
        case 'lowercase uppercase number special':
        case 'LOWERCASE UPPERCASE NUMBER SPECIAL':
            var length = parseFloat(number);
            charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ01234567891234567890!@#$%^&*(){}|;':<>?,./",
                retVal = "";
            for (var i = 0, n = charset.length; i < length; ++i) {
                retVal += charset.charAt(Math.floor(Math.random() * n));
            }
            return retVal;
            break;
        case 'lowercase uppercase':
        case 'LOWERCASE UPPERCASE':
            var length = parseFloat(number);
            charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
                retVal = "";
            for (var i = 0, n = charset.length; i < length; ++i) {
                retVal += charset.charAt(Math.floor(Math.random() * n));
            }
            return retVal;
            break;
        case 'lowercase number':
        case 'LOWERCASE NUMBER':
            var length = parseFloat(number);
            charset = "abcdefghijklmnopqrstuvwxyz01234567891234567890",
                retVal = "";
            for (var i = 0, n = charset.length; i < length; ++i) {
                retVal += charset.charAt(Math.floor(Math.random() * n));
            }
            return retVal;
            break;
        case 'lowercase special':
        case 'LOWERCASE SPECIAL':
            var length = parseFloat(number);
            charset = "abcdefghijklmnopqrstuvwxyz!@#$%^&*(){}|;':<>?,./",
                retVal = "";
            for (var i = 0, n = charset.length; i < length; ++i) {
                retVal += charset.charAt(Math.floor(Math.random() * n));
            }
            return retVal;
            break;
        case 'uppercase number':
        case 'UPPERCASE NUMBER':
            var length = parseFloat(number);
            charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ12345678901234567890",
                retVal = "";
            for (var i = 0, n = charset.length; i < length; ++i) {
                retVal += charset.charAt(Math.floor(Math.random() * n));
            }
            return retVal;
            break;
        case 'uppercase special':
        case 'UPPERCASE SPECIAL':
            var length = parseFloat(number);
            charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*(){}|;':<>?,./",
                retVal = "";
            for (var i = 0, n = charset.length; i < length; ++i) {
                retVal += charset.charAt(Math.floor(Math.random() * n));
            }
            return retVal;
            break;
        case 'number special':
        case 'NUMBER SPECIAL':
            var length = parseFloat(number);
            charset = "12345678901234567890!@#$%^&*(){}|;':<>?,./",
                retVal = "";
            for (var i = 0, n = charset.length; i < length; ++i) {
                retVal += charset.charAt(Math.floor(Math.random() * n));
            }
            return retVal;
            break;
        case 'lowercase uppercase number':
        case 'LOWERCASE UPPERCASE NUMBER':
            var length = parseFloat(number);
            charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ12345678901234567890",
                retVal = "";
            for (var i = 0, n = charset.length; i < length; ++i) {
                retVal += charset.charAt(Math.floor(Math.random() * n));
            }
            return retVal;
            break;
        case 'lowercase uppercase special':
        case 'LOWERCASE UPPERCASE SPECIAL':
            var length = parseFloat(number);
            charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*(){}|;':<>?,./",
                retVal = "";
            for (var i = 0, n = charset.length; i < length; ++i) {
                retVal += charset.charAt(Math.floor(Math.random() * n));
            }
            return retVal;
            break;
        case 'lowercase number special':
        case 'LOWERCASE NUMBER SPECIAL':
            var length = parseFloat(number);
            charset = "abcdefghijklmnopqrstuvwxyz12345678901234567890!@#$%^&*(){}|;':<>?,./!@#$%^&",
                retVal = "";
            for (var i = 0, n = charset.length; i < length; ++i) {
                retVal += charset.charAt(Math.floor(Math.random() * n));
            }
            return retVal;
            break;
        case 'uppercase number special':
        case 'UPPERCASE NUMBER SPECIAL':
            var length = parseFloat(number);
            charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ12345678901234567890!@#$%^&*(){}|;':<>?,./",
                retVal = "";
            for (var i = 0, n = charset.length; i < length; ++i) {
                retVal += charset.charAt(Math.floor(Math.random() * n));
            }
            return retVal;
            break;
        default:
            window.alert('You did not pick a valid option. Try again.');

            passwordPrompt();
            break;
    }// end of switch statement
}// end of generatePassword function

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);