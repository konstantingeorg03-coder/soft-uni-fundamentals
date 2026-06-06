function palindromeIntegers(arr){
    for(let num of arr){
        let isPalindrame = checkIsPalindrome(num);
        console.log(isPalindrame); 
    }

    function checkIsPalindrome(num){
        let numAsString = String(num);
        let reverseNumAsString = numAsString.split('').reverse().join('');

        return numAsString === reverseNumAsString;
    }
}

palindromeIntegers([123, 323, 421, 121]);