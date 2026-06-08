function passwordValidator(password) {
    let isLengtValid = password.length >= 6 && password.length <= 10;
    let isLettersAndDigits = true;
    let digitsCount = 0;

    for(let i = 0; i < password.length; i++){
        let ascii = password[i].charCodeAt(0);

        let isDigit = ascii >= 48 && ascii <= 57;
        let isUpperCase = ascii >= 65 && ascii <= 90;
        let isLowerCase = ascii >= 97 && ascii <= 122;

        if(!isDigit && !isUpperCase && !isLowerCase){
            isLettersAndDigits = false;
        }

        if(isDigit){
            digitsCount++;
        }
    }

    if(isLengtValid && isLettersAndDigits && digitsCount){
        console.log('Password is valid');
    }

    if(!isLengtValid){
        console.log('Password must be between 6 and 10 characters');
    }

    if(!isLettersAndDigits){
        console.log('Password must be consist only of letters and digits')
    }

    if(!digitsCount){
        console.log('Password must have at least 2 digits');
    }
}
passwordValidator('logIn');