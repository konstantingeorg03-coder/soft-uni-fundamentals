function addAndSubtract(num1, num2, num3){
    function sum(a, b){
        return a + b;
    }

    function subtract(sumNums, c){
        return sumNums - c;
    }

    let sumResult = sum(num1, num2);
    let result = subtract(sumResult, num3);
    
    console.log(result);
}
addAndSubtract(23, 6, 10);

