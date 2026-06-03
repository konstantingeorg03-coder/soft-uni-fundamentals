function calculator(first, second, operator){
    let operation;

    if(operator === 'multiply'){
        operation = (x, y) => x * y;
    }

    if(operator === 'divide'){
        operation = (x, y) => x / y;
    }

    if(operator === 'add'){
        operation = (x, y) => x + y;
    }

    if(operator === 'subtract'){
        operation = (x, y) => x - y;
    }

    return operation(first, second);
}

console.log(calculator(5, 5, 'multiply'));
