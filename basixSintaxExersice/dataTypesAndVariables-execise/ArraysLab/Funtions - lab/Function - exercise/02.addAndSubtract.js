function addAndSubtract(num1, num2, num3){
    let sum = (x, y) => x + y;

    let subtract = (x, y) => x - y;

    let result = sum(num1, num2);

    let finalResult = subtract(result, num3);

    console.log(finalResult);
}

