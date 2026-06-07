function factorialDivision(num1, num2){
    let factoriel1 = 1;
    let factoriel2 = 1;

    for(let i = 1; i <= num1; i++){
        factoriel1 *= i;
    }

    for(let j = 1; j <= num2; j++){
        factoriel2 *= j;
    }

    let result = factoriel1 / factoriel2;
    console.log(result.toFixed(2));
}
factorialDivision(5, 2)
