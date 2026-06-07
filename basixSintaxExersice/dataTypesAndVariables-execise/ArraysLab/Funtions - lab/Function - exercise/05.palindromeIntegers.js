function palindromeIntegers(arr){
    for(let num of arr){

        let isPalindrome = checkIsPalindrome(num);

        console.log(isPalindrome);
    }   

    function checkIsPalindrome(num){
        let numAsString = String(num);

        let reverseString = numAsString.split('').reverse().join('');

        return numAsString === reverseString;
    }
}
palindromeIntegers([123, 323, 421, 121]);