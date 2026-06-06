function passwordValidator(password) {
    let isLengthValid = password.length >= 6 && password.length <= 10;
    let lettersAndDigits = true;
    let digitsCount = 0;

    for (let i = 0; i < password.length; i++) {
        let ascii = password[i].charCodeAt(0);

        let isDigit = ascii >= 48 && ascii <= 57;
        let isUpperCase = ascii >= 65 && ascii <= 90;
        let isLowerCase = ascii >= 97 && ascii <= 122;

        if (!isDigit && !isUpperCase && !isLowerCase) {
            lettersAndDigits = false;
        }

        if (isDigit) {
            digitsCount++;
        }
    }

    if (isLengthValid && lettersAndDigits && digitsCount >= 2) {
        console.log('Password is valid');
    }

    if (!isLengthValid) {
        console.log('Password must be between 6 and 10 characters');
    }

    if (!lettersAndDigits) {
        console.log('Password must consist only of letters and digits');
    }

    if (digitsCount < 2) {
        console.log('Password must have at least 2 digits');
    }
}