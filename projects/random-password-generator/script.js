
function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols){
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz"; // One long string containing all lower case characters
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // """""" upper case characters
    const numberChars = "1234567890";
    const symbolChars = "!@#$%^&*()~`_+-={}[];':,./<>?"; 

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if(length <= 0){
        return `(password length must be atleast 1)`;
    }
    if(allowedChars.length === 0){
        return '(atleast one set of character needs to be selected)';
    }

    // iteration go for the number of length asked
    // at each iteration, we will choose one random character from allowedChars
    for(let i=0; i<length; i++){
        const randomIndex = Math.floor(Math.random()*(allowedChars.length)); // random number between 0 to allowedChars.length - 1, index hence starting from 0
        password += allowedChars[randomIndex];
    }
    return password;
}

const passwordLength = Number(window.prompt(`Enter length of password: `));
const includeLowercase = Number(window.prompt(`Include lowercase?(1 -> yes, 0-> no): `));
const includeUppercase = Number(window.prompt(`Include uppercase?(1 -> yes, 0-> no): `));
const includeNumbers = Number(window.prompt(`Include numbers?(1 -> yes, 0-> no): `));
const includeSymbols = Number(window.prompt(`Include symbols?(1 -> yes, 0-> no): `));

const password = generatePassword(passwordLength, 
                                  includeLowercase, 
                                  includeUppercase, 
                                  includeNumbers, 
                                  includeSymbols);

console.log(`Generated Password: ${password}`);